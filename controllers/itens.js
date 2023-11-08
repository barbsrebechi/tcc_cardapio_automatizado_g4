const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarItens(request, response) {
        try {
            //Armazena instruções SQL na constante
            const sql = 'SELECT itn_id, itn_nome_item, itn_descricao, itn_imagem = 1 as itn_id  FROM ITENS;';
            // executa instruções SQL e armazena o resultado na variavél itens
            const itens = await db.query(sql);
            //armazena na constante o número de registro que a instrução SELECT retornou
            const nReg = itens[0].length; 
            return response.status(200).json(
                {confirma: 'Sucesso',
                 message:'Itens Cadastrados',
                 nItens:nReg,
                 itens: itens[0]});
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