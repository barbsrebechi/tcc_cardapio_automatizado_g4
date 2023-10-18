const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarPedidos(request, response) {
        try {
            const sql = 'SELECT ped_id, usu_id, ped_dt_hr_pedido, ped_status, ped_observacoes FROM PEDIDOS;';
            const pedidos = await db.query(sql);

            return response.status(200).json({confirma: pedidos[0]});
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