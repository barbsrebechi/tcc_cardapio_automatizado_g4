const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarPedidoItens(request, response) {
        try {
            const sql = 'SELECT pdit_id, ped_id, itn_id, pdit_qtd, pdit_vlr_unit FROM PEDIDO_ITENS;';
            const pedidoItens = await db.query(sql);
            const nReg = pedidoItens[0].lenght;

            return response.status(200).json({
                confirma: 'Sucesso',
                message: 'Pedido Cadastrado',
                nItens:nReg,
                itens:pedidoItens[0]});

        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
  
    async cadastrarPedidoItens(request, response) {
        try {
            //parâmetros recebidos pelo corpo da requisição
            const { ped_id, itn_id, pdit_qtd, pdit_vlr_unit} = request.body;
            //instrução SQL pra inserção do registro
            const sql = 'INSERT INTO PEDIDO_ITENS (ped_id, itn_id, pdit_qtd, pdit_vlr_unit) VALUES (?,?,?,?)';
            //preparo do array com dados que serão utilizdos
            const values  = [ped_id, itn_id, pdit_qtd, pdit_vlr_unit];
            //execução e obtenção de confirmação da atualização realizada
            const confirmacao = await db.query(sql, values );
            //identificação do id do registro inserido
            const pdit_id= confirmacao[0].insertId;
            //responde a requisição com a mensagem confirmando o ID do registro inserido

            return response.status(200).json(
                { confirma: 'Sucesso',
                  message:'Cadastro de pedidos efetuado',
                  pdit_id
                }
                );
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 



    async editarPedidoItens(request, response) {
        try {
            //parâmetros recebidos pelo corpo da requisição
            const {ped_id, itn_id, pdit_qtd, pdit_vlr_unit} = request.body;
            //parâmetro recebido pela URL via params ( valor direto na url ex: /itens/1)
            const {pdit_id} = request.params;
            //instrução SQL para a atualização dos valores
            const sql = 'UPDATE PEDIDO_ITENS SET ped_id = ?, itn_id = ?, pdit_qtd = ?, pdit_vlr_unit = ? WHERE pdit_id = ?;';
            //preparo do array com dados que serão atualizados
            const values = [ped_id, itn_id, pdit_qtd, pdit_vlr_unit, pdit_id];
            //execução e obtenção de confirmação da atualização realizada
            const atualizacao = await db.query(sql, values);
            // responde a requisição com a mensagem confirmando o numero de registros atualizados

           return response.status(200).json(
               {confirma: 'Sucesso',
                message:'Pedido' + pdit_id + " atualizado com sucesso!",
                registrosAtualizados: atualizacao[0].affectdRows
           
           }
               );
       } catch (error) {
           return response.status(500).json({confirma: 'Erro', message: error});
       }
   }, 
  
    async apagarPedidoItens(request, response) {
        try {
            //parâmetro passado via url na chamada da api pelo front-end
            const { pdit_id} = request.params;
            //comando de exclisão
            const sql= 'DELETE FROM PEDIDO_ITENS WHERE pdit_id = ?';
            //definição de array com os parâmetros que receberam os valores do front-end
            const values = [ pdit_id];
            //executa a instrução de exclusão no banco de dados
            await db.query(sql, values);
            //mensagem de retorno no formato JSON

            return response.status(200).json(
                {confirma: 'Sucesso',
            message:'Pedido com id' + pdit_id + 'excluido com sucesso'            }
            );
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }
};  