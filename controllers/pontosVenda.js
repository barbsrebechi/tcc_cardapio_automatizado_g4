const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarPontosVenda(request, response) {
        try {
            const sql = 'SELECT pvd_id, pvd_nome, pvd_descricao, pvd_foto FROM  PONTOS_VENDA;';
            const pontosVenda = await db.query(sql);
            const nReg = pontosVenda[0].length;
            return response.status(200).json(
                {
                    confirma: 'Sucesso',
                    message: 'Usuarios cadastrados',
                    nItens : nReg, 
                    itens: pontosVenda[0]
                }
                );
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
  
    async cadatrarPontosVenda(request, response) {
        try {
            const {pvd_nome, pvd_descricao, pvd_foto } = request.body;
            const sql = 'INSERT INTO PONTOS_VENDA (pvd_nome, pvd_descricao, pvd_foto ) VALUES (?, ?,?);';
            const values= [pvd_id, pvd_nome, pvd_descricao, pvd_foto];
            const confirmacao =  await db.query (sql,values);
            const pontoVenda_id= confirmacao [0].insertId;
            return response.status(200).json(
                {
                    confirma:'Sucesso', 
                    message: 'Cadastrar PontosVenda'
                    pontoVenda_id
                }
                );
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