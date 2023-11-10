const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
   async listarPedidosItens(request, response) {
        try {

            const sql = 'SELECT pdit_id, ped_id, itn_id pdit_qtd, pdit_vlr_unit FROM PEDIDO_ITENS;'; 
            const PedidosItens = await db.query(sql);
            const nReg = PedidosItens[0].length;

            return response.status(200).json(
                {
                    confirma: 'Sucesso', 
                    message: 'Usúarios cadastrados',
                    nItens: nReg,
                    itens: PedidosItens[0]
                }
                );
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
  
    async cadatrarPedidosItens(request, response) {
        try {
            const {pdit_id, ped_id, itn_id, pdit_qtd, pdit_vlr_unit} = request.body;
            const sql = 'INSERT INTO PEDIDO_ITENS (pdit_id, ped_id, itn_id, pdit_qtd, pdit_vlr_unit) VALUES (?, ?, ?, ?, ? );';
            const values = [pdit_id, ped_id, itn_id, pdit_qtd, pdit_vlr_unit];
            const confirmacao = await db.query(sql, values);
            const pd_id = confirmacao[0].insertId;
            return response.status(200).json(
                {
                    confirma:'Sucesso',
                    message:'Cadastrar PedidosItens',
                    pd_id
                });
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