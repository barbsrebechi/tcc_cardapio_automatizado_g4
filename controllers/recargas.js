const { json } = require('express');
const db = require('../database/connection');

module.exports = {
    async listarRecargas(request, response) {
        try {
            const sql = 'SELECT rec_id, usu_id, rec_descricao, rec_valor, rec_data, ped_id FROM RECARGAS;';
            const recargas = await db.query(sql);
            const nReg = recargas[0].length;
            return response.status(200).json(
                {
                    confirma: 'Sucesso',
                    message: 'Recargas cadastradas',
                    nItens: nReg,
                    itens: recargas[0]
                }
            );
        } catch (error) {
            return response.status(500).json({ confirma: 'Erro', message: error });
        }
        //FUNCIONANDO 
    },

    async cadastrarRecargas(request, response) {
        try {
             const  {usu_id, rec_descricao, rec_valor, rec_data, ped_id} = request.body;
             const sql = 'INSERT INTO RECARGAS (usu_id, rec_descricao, rec_valor, rec_data, ped_id) VALUES (?, ?, ?, ?, ?);';
             const values = [usu_id, rec_descricao, rec_valor, rec_data, ped_id];
             const confirmacao = await db.query(sql, values);
             const rec_id = confirmacao[0].insertId;
             
            return response.status(200).json(
                { confirma: 'Sucesso',
                message:'Cadastro de recargas efeituado',
                rec_id
                
            });
        } catch (error) {
            return response.status(500).json({ confirma: 'Erro', message: error });
        }
        //FUNCIONANDO
    },


    async editarRecargas(request, response) {
        try {
            const {usu_id, rec_descricao, rec_valor, rec_data, ped_id } = request.body;
            const { req_id } = request.params;
            const sql = 'UPDATE RECARGAS SET usu_id = ?, rec_descricao = ?, rec_valor = ?, rec_data = ?, ped_id = ? WHERE rec_id = ?;';
            const values = [ usu_id, rec_descricao, rec_valor, rec_data, ped_id, req_id];
            const atualizacao = await db.query(sql, values);
            return response.status(200).json(
                { 
                    confirma: 'Sucesso',
                    message: 'Recarga' + req_id + "atualizado com sucesso",
                    registrosAtualizados: atualizacao[0].affectedRows

            }
            );
            } catch (error) {
            return response.status(500).json({ confirma: 'Erro', message: error });
        }
    },

    async apagarRecargas(request, response) {
        try {
            const { rec_id } = request.params;
            const sql = 'DELETE FROM RECARGAS WHERE rec_id = ?';
            const values = [rec_id];
            await db.query(sql, values);
            return response.status(200).json(
                { 
                    confirma: 'Sucesso',
                    message: 'Recarga com id' + rec_id + 'excluído com sucesso'
                  }
            );
        } catch (error) {
            return response.status(500).json({ confirma: 'Erro', message: error });
        }
        //testar 26,27,28
    },
};  