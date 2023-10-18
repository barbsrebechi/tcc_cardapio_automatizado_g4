const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarItens(request, response) {
        try {
            const sql = 'SELECT itn_id, itn_nome_item, itn_descricao, itn_imagem  FROM ITENS;';
            const itens = await db.query(sql);
            return response.status(200).json({confirma: itens[0]});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
  
    async cadatrarItens(request, response) {
        try {
            return response.status(200).json({confirma: 'Cadastrar Itens'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 


    async editarItens(request, response) {
        try {
            return response.status(200).json({confirma: 'Editar Itens'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
  
    async apagarItens(request, response) {
        try {
            return response.status(200).json({confirma: 'Apagar Itens'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
};  