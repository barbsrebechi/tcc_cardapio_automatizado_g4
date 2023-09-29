const { json } = require('express'); 
const db = require('../database/connection'); 


module.exports = {
    async listarPedidosItens(request, response) {
        try {
            return response.status(200).json({confirma: 'Listar PedidosItens'});
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