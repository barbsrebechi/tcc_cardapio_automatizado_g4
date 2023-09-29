const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarRecargas(request, response) {
        try {
            return response.status(200).json({confirma: 'Listar Recargas'});
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