const { json } = require('express'); 
const db = require('../database/connection'); 
const usuarios = require('./usuarios');
const pedidos = require('./pedidos');
module.exports = {
    async listarPedidosItens(request, response) {
        try {

            const sql = 'SELECT pdit_id, ped_id, itn_id, pdit_qtd, pdit_vlr_unit FROM PEDIDO_ITENS;'; 

            const PedidosItens = await db.query(sql);

            const nReg = PedidosItens [0].length;

            return response.status(200).json 
            (
            {
                confirma: 'Sucesso',
                message: 'Usuários cadastrados',
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
            const {pdit_id, ped_id, itn_id, pdit_qtd, pdit_vlr_unit} =request.body;
            const sql= 'INSERT INTO PEDIDO_ITENS (pdit_id, ped_id, itn_id, pdit_qtd, pdit_vlr_unit) VALUES (?, ?, ?, ?, ? );';
            const values= [pdit_id, ped_id, itn_id, pdit_qtd, pdit_vlr_unit];
            const confirmacao = await db.query(sql, values);
            const pi_id= confirmacao[0].insertId;
            return response.status(200).json(
                {
                    confirma: 'Sucesso',
                    message: 'Cadastro de pedido item efetuado',
                    pi_id 
                }
                );
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 


    async editarPedidosItens(request, response) {
        try {
            const {pdit_id, ped_id, itn_id, pdit_qtd, pdit_vlr_unit} =request.body;
            const {pi_id } = request.params;
            const sql= 'UPDATE pdit_id = ?, ped_id = ?, itn_id = ?, pdit_qtd = ?, pdit_vlr_unit = ?  WHERE pi_id = ?;';
            const values= [pdit_id, ped_id, itn_id, pdit_qtd, pdit_vlr_unit];
            const atualizacao = await db.query (sql, values);
            return response.status(200).json(
                {confirma: 'Editar PedidosItens',
                message: 'Pedido Item' + pi_id + "Cadastrado com Sucesso!",
              registrosAtualizados: atualizacao[0].affectedRows 
            }
              );
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
  
    async apagarPedidosItens(request, response) {
        try {
            const { pi_id } = request.params;

            const sql = 'DELETE FROM pedidosItens WHERE pi_id= ?';
             const values = [ pi_id ];
             await db.query(sql, values);
            return response.status(200).json(
                {
                    confirma: 'Sucesso',
                    message: 'Pedido Item' + pi_id + "excluído com sucesso!"
                }
                );
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
};  