const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarPontosVendaItem(request, response) {
        try {
            return response.status(200).json({confirma: 'Listar PontosVendaItem'});
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