const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarPontosVendaItem(request, response) {
        try {
            const sql = 'SELECT pvd_id, itn_id FROM PONTO_VENDA_ITENS ;';
            const PontoVendaItem = await db.query(sql);
            return response.status(200).json({confirma: PontoVendaItem[0]});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
  
    async cadatrarPontosVendaItem(request, response) {
        try {
            return response.status(200).json({confirma: 'Cadastrar PontosVendaItem'});
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