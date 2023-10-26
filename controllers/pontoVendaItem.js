const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarPontosVendaItem(request, response) {
        try {
            const sql = 'SELECT pvd_id, itn_id FROM PONTO_VENDA_ITENS ;';
            const PontoVendaItem = await db.query(sql);
            const nReg = PontoVendaItem [0].length;
            return response.status(200).json(
                {
                    confirma: 'Sucesso',
                    message: 'Usuários cadastrados',
                    nItens: nReg, 
                    itens: PontoVendaItem[0]
                }
                );
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
  
    async cadatrarPontosVendaItem(request, response) {
        try {
            const {pvd_id, itn_id } = request.body;
            const sql = 'INSERT INTO PONTO_VENDA_ITENS (pvd_id, itn_id, pvd_preco_item) VALUES (?, ?, ?);';
            const values= [pvd_id, itn_id ];
            const confirmacao =  await db.query (sql,values);
            const pvi_id= confirmacao [0].insertId;
            return response.status(200).json(
                {
                    confirma: 'Sucesso',
                    message: 'Cadastrar PontosVendaItem',
                    pvi_id
                }
                );
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 


    async editarPontosVendaItem(request, response) {
        try {
            return response.status(200).json({confirma: 'Editar PontosVendaItem'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
  
    async apagarPontosVendaItem(request, response) {
        try {
            return response.status(200).json({confirma: 'Apagar PontosVendaItem'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
};  