const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarPedidosItens(request, response) {
        try {
const sql= 'SELECT pdit_id, ped_id, itn_id pdit_qtd, pdit_vlr_unit FROM PEDIDO_ITENS;';

const PedidosItens = await db.query(sql);
 
const nReg = usuarios [0].length;

            return response.status(200).json(
                {
                    confirma: 'Sucesso',
                    message: 'Usuários cadastrados',
                    nItens: nReg,
                    itens: PedidosItens [0]
                }
                );
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
  
    async cadatrarPedidosItens(request, response) {
        try {
            return response.status(200).json({confirma: 'Cadastrar PedidosItens'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 


    async editarPedidosItens(request, response) {
        try {
            return response.status(200).json({confirma: 'Editar PedidosItens'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
  
    async apagarPedidosItens(request, response) {
        try {
            return response.status(200).json({confirma: 'Apagar PedidosItens'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
};  