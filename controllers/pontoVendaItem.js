const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarPontoVendaItem(request, response) {
        try {
            const sql = 'SELECT pvi_id, pvd_id, itn_id, pvd_preco_item FROM PONTO_VENDA_ITENS;';
            const pontoVendaItem = await db.query(sql);
            const nReg = pontoVendaItem[0].lenght;

            return response.status(200).json({
                confirma: 'Sucesso',
                message: 'Ponto Venda Item Cadastrado',
                nItens:nReg,
                itens:pontoVendaItem[0]});

        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
  
    async cadastrarPontosVendaItem(request, response) {
        try {
            //parâmetros recebidos pelo corpo da requisição
            const { pvd_id, itn_id, pvd_preco_item } = request.body;
            //instrução SQL pra inserção do registro
            const sql = 'INSERT INTO PONTO_VENDA_ITENS (pvd_id, itn_id, pvd_preco_item ) VALUES (?,?,?)';
            //preparo do array com dados que serão utilizdos
            const values  = [pvd_id, itn_id, pvd_preco_item ];
            //execução e obtenção de confirmação da atualização realizada
            const confirmacao = await db.query(sql, values );
            //identificação do id do registro inserido
            const pvi_id = confirmacao[0].insertId;
            //responde a requisição com a mensagem confirmando o ID do registro inserido

            return response.status(200).json(
                { confirma: 'Sucesso',
                  message:'Cadastro de pedidos efetuado',
                  pvi_id
                }
                );
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
 


    async editarPontosVendaItem(request, response) {
        try {
            //parâmetros recebidos pelo corpo da requisição
            const {pvd_id, itn_id, pvd_preco_item} = request.body;
            //parâmetro recebido pela URL via params ( valor direto na url ex: /itens/1)
            const { pvi_id } = request.params;
            //instrução SQL para a atualização dos valores
            const sql = 'UPDATE PONTO_VENDA_ITENS SET pvd_id = ?, itn_id = ?, pvd_preco_item = ? WHERE  pvi_id = ?';
            //preparo do array com dados que serão atualizados
            const values = [pvd_id, itn_id, pvd_preco_item, pvi_id  ];
            //execução e obtenção de confirmação da atualização realizada
            const atualizacao = await db.query(sql, values);
            // responde a requisição com a mensagem confirmando o numero de registros atualizados

           return response.status(200).json(
               {confirma: 'Sucesso',
                message:'Pedido ' + pvi_id  + " atualizado com sucesso!",
                registrosAtualizados: atualizacao[0].affectdRows
           
           }
               );
       } catch (error) {
           return response.status(500).json({confirma: 'Erro', message: error});
       }
   },
  
    async apagarPontosVendaItem(request, response) {
        try {
            //parâmetro passado via url na chamada da api pelo front-end
            const { pvi_id} = request.params;
            //comando de exclisão
            const sql= 'DELETE FROM PONTO_VENDA_ITENS WHERE pvi_id = ?';
            //definição de array com os parâmetros que receberam os valores do front-end
            const values = [ pvi_id];
            //executa a instrução de exclusão no banco de dados
            await db.query(sql, values);
            //mensagem de retorno no formato JSON

            return response.status(200).json(
                {confirma: 'Sucesso',
            message:'Pedido com id ' + pvi_id + ' excluido com sucesso'            }
            );
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }
};  