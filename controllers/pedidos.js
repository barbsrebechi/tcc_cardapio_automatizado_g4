const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarPedidos(request, response) {
        try {
            return response.status(200).json({confirma: 'Listar Pedidos'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
  
    async cadatrarPedidos(request, response) {
        try {
            return response.status(200).json({confirma: 'Cadastrar Pedidos'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 


    async editarPedidos(request, response) {
        try {
            return response.status(200).json({confirma: 'Editar Pedidos'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
  
    async apagarPedidos(request, response) {
        try {
            return response.status(200).json({confirma: 'Apagar Pedidos'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
};  