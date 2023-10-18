const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarPontosVenda(request, response) {
        try {
            const sql = 'SELECT pvd_id, pvd_nome, pvd_descricao, pvd_foto FROM  PONTOS_VENDA;';
            const pontosVenda = await db.query(sql);
            return response.status(200).json({confirma: pontosVenda[0]});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
  
    async cadatrarPontosVenda(request, response) {
        try {
            return response.status(200).json({confirma: 'Cadastrar PontosVenda'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 


    async editarPontosVenda(request, response) {
        try {
            return response.status(200).json({confirma: 'Editar PontosVenda'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
  
    async apagarPontosVenda(request, response) {
        try {
            return response.status(200).json({confirma: 'Apagar PontosVenda'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
};  