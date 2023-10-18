const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarRecargas(request, response) {
        try {
            const sql ='SELECT rec_id, usu_id, rec_descricao, rec_valor, rec_data, ped_id FROM RECARGAS;';
            const recargas = await db.query(sql);
            return response.status(200).json({confirma: recargas[0]});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
  
    async cadatrarRecargas(request, response) {
        try {
            return response.status(200).json({confirma: 'Cadastrar Recargas'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 


    async editarRecargas(request, response) {
        try {
            return response.status(200).json({confirma: 'EditarRecargas'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
  
    async apagarRecargas(request, response) {
        try {
            return response.status(200).json({confirma: 'Apagar Recargas'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
};  