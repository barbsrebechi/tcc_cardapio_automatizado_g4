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
    },

    async cadatrarRecargas(request, response) {
        try {
             const  {usu_id, rec_descricao, rec_valor, rec_data, ped_id } = resquest.body;
             const sql = 'INSERT INTO RECARGAS  (usu_id, rec_descricao, rec_valor, rec_data, ped_id) VALUES (?, ?, ?, ?, ?);';
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
    },


    async editarRecargas(request, response) {
        try {
            return response.status(200).json({ confirma: 'EditarRecargas' });
        } catch (error) {
            return response.status(500).json({ confirma: 'Erro', message: error });
        }
    },

    async apagarRecargas(request, response) {
        try {
            return response.status(200).json({ confirma: 'Apagar Recargas' });
        } catch (error) {
            return response.status(500).json({ confirma: 'Erro', message: error });
        }
    },
};  