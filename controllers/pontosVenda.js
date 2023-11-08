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
            const sql = 'INSERT INTO PONTOS_VENDA (pvd_nome, pvd_descricao, pvd_foto ) VALUES (?,?,?);';
            const values= [ pvd_nome, pvd_descricao, pvd_foto];
            const confirmacao =  await db.query (sql,values);
            const pvd_id= confirmacao [0].insertId;
            return response.status(200).json(
                {
                    confirma:'Sucesso', 
                    message: 'Cadastro de Pontos de Venda efetuado',
                    pvd_id
                    
                }
                );
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 


    async editarPontosVenda(request, response) {
        try {
            const {pvd_nome, pvd_descricao, pvd_foto} = request.body;
            const{pvd_id} = request.params;
            const sql= 'UPDATE PONTOS_VENDA SET pvd_nome = ?, pvd_descricao = ?, pvd_foto = ? WHERE pvd_id = ?;';
            const values= [pvd_nome, pvd_descricao, pvd_foto, pvd_id];
            const atualizacao = await db.query (sql, values);
            return response.status(200).json(
                {
                    confirma: 'Sucesso',
                    message: 'Usuários ' + pvd_id + " atualizado com sucesso!",
                    registrosAtualizados: atualizacao[0].affectedRows
                }
                );
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
  
    async apagarPontosVenda(request, response) {
        try {
            const {pvd_id} = request.params;
            const sql = 'DELETE FROM PONTOS_VENDA WHERE pvd_id = ?;';
            const values = [pvd_id];
            await db.query (sql, values);
            return response.status(200).json(
                {
                    confirma: 'Sucesso',
                    message: 'Usuário com id ' + pvd_id + ' excluído com sucesso'
                }
            );
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
};  