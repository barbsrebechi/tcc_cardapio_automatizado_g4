const { json } = require('express');
const db = require('../database/connection');


module.exports = {
    async listarUsuarios(request, response) {
        try {
            const sql = 'SELECT usu_id, usu_nome, usu_cpf, usu_cod_cartao, usu_dt_cadastro, usu_dt_cartao, usu_vip = 1 as usu_vip FROM USUARIOS;';
           
            const usuarios = await db.query(sql);
            
            const nReg = usuarios[0].length;
          
            return response.status(200).json({ 
                confirma: 'Sucesso', 
                menssage: 'Usuario cadastrado',
                nItens: nReg, 
                 itens: usuarios[0] 
            });

        } catch (error) {
            return response.status(500).json({ confirma: 'Erro', message: error });
        }
    },

    async cadatrarUsuarios(request, response) {
        try {
            const {usu_nome, usu_cpf, usu_cod_cartao, usu_dt_cadastro, usu_dt_cartao, usu_vip} = request.body;
            const sql = 'INSERT INTO USUARIOS ( usu_nome, usu_cpf, usu_cod_cartao, usu_dt_cadastro, usu_dt_cartao, usu_vip) VALUES (?,?,?,?,?,?);';
            const values = [usu_nome, usu_cpf, usu_cod_cartao, usu_dt_cadastro, usu_dt_cartao, usu_vip];
            const confirmacao = await db.query(sql, values);
            const usu_id = confirmacao[0].insertld;

            return response.status(200).json({ 
                confirma: 'Sucesso',
                menssage: 'Cadastro de Usuário efetuado.',
                usu_id 
           }
           
        );

        } catch (error) {
            return response.status(500).json({ confirma: 'Erro e', message: error });
        }
    },


    async editarUsuarios(request, response) {
        try {
            const {usu_nome, usu_cpf, usu_cod_cartao, usu_dt_cadastro, usu_dt_cartao, usu_vip} = request.body;
            const { usu_id } = request.params;
            const sql = 'UPDATE  USUARIOS SET usu_nome = ?, usu_cpf= ?, usu_cod_cartao = ?, usu_dt_cadastro = ?, usu_dt_cartao = ?, usu_vip = ? WHERE usu_id = ?;';
            const values = [ usu_nome, usu_cpf, usu_cod_cartao, usu_dt_cadastro, usu_dt_cartao, usu_vip, usu_id];
           const atualizacao = await db.query(sql, values);
            return response.status(200).json({ 
                confirma: 'sucesso',
                message:'Usuario' + "atualizado com sucesso!",
                registroAtualizzados: atualizacao[0].affectedRows 
            });

        } catch (error) {
            return response.status(500).json({ confirma: 'Erro', message: error });
        }
    },

    async apagarUsuarios(request, response) {
        try {
            const {usu_id} = request.params;
            const sql = 'DELETE FROM usuarios WHERE usu_id = ?';
            const values = [usu_id];
            await db.query(sql, values);
            return response.status(200).json({ 
                confirma: 'Sucesso',
                message: 'Usuário com id' + usu_id + 'excluído com sucesso'
             });
        } catch (error) {
            return response.status(500).json({ confirma: 'Erro', message: error });
        }
    },
};  