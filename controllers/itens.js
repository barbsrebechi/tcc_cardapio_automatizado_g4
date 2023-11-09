const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarItens(request, response) {
        try {
            //Armazena instruções SQL na constante
            const sql = 'SELECT itn_id, itn_nome_item, itn_descricao, itn_imagem FROM ITENS WHERE itn_ativo = 1;';
            // executa instruções SQL e armazena o resultado na variavél itens
            const itens = await db.query(sql);
            //armazena na constante o número de registro que a instrução SELECT retornou
            const nReg = itens[0].length; 
            return response.status(200).json(
                {confirma: 'Sucesso',
                 message:'Itens Cadastrados',
                 nItens:nReg,
                 itens: itens[0]});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
  
    async cadatrarItens(request, response) {
        try {
            //parâmetros recebidos pelo corpo da requisição
            const { itn_nome_item, itn_descricao, itn_imagem } = request.body;
            //instrução SQL pra inserção do registro
            const sql = 'INSERT INTO itens (itn_nome_item, itn_descricao, itn_imagem) VALUES (?,?,?)';
            //preparo do array com dados que serão utilizdos
            const values  = [itn_nome_item, itn_descricao, itn_imagem];
            //execução e obtenção de confirmação da atualização realizada
            const confirmacao = await db.query(sql, values );
            //identificação do id do registro inserido
            const itn_id = confirmacao[0].insertId;
            //responde a requisição com a mensagem confirmando o ID do registro inserido

            return response.status(200).json(
                { confirma: 'Sucesso',
                  message:'Cadastro de itens efetuado',
                  itn_id
                }
                );
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 


    async editarItens(request, response) {
        try {
             //parâmetros recebidos pelo corpo da requisição
             const { itn_nome_item, itn_descricao, itn_imagem } = request.body;
             //parâmetro recebido pela URL via params ( valor direto na url ex: /itens/1)
             const {itn_id} = request.params;
             //instrução SQL para a atualização dos valores
             const sql = 'UPDATE itens SET itn_nome_item = ?, itn_descricao = ?, itn_imagem = ? WHERE itn_id = ?';
             //preparo do array com dados que serão atualizados
             const values = [itn_nome_item, itn_descricao, itn_imagem, itn_id ];
             //execução e obtenção de confirmação da atualização realizada
             const atualizacao = await db.query(sql, values);
             // responde a requisição com a mensagem confirmando o numero de registros atualizados

            return response.status(200).json(
                {confirma: 'Sucesso',
                 message:'Item' + itn_id + " atualizado com sucesso!",
                 registrosAtualizados: atualizacao[0].affectdRows
            
            }
                );
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
  
    async apagarItens(request, response) {
        try {
            //parâmetro passado via url na chamada da api pelo front-end
            const { itn_id} = request.params;
            //comando de exclisão
            const sql= 'DELETE FROM itens WHERE itn_id = ?';
            //definição de array com os parâmetros que receberam os valores do front-end
            const values = [ itn_id];
            //executa a instrução de exclusão no banco de dados
            await db.query(sql, values);
            //mensagem de retorno no formato JSON

            return response.status(200).json(
                {confirma: 'Sucesso',
            message:'Usuário com id' + itn_id + 'excluido com sucesso'            }
            );
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
    async ocultarItens (request, response) {
        try {
            //parâmetros recebidos pelo corpo da requisição
            const itn_ativo = false;
            const {itn_id} = request.parms;
            const sql = 'UPDATE itens WHERE itn_id = ? ;';
            const values = [itn_ativo,itn_id];
            const atualizacao = await db.query(sql, values);
            return response.status(200).json (
                {
                    confirma:'Sucesso',
                    message:'Item' + itn_id + "Excluido com sucesso!",
                    registrosAtualizados: atualizacao[0].affectedRows
                }
            );
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }
};  