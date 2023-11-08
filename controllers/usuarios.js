const { json } = require('express');
const db = require('../database/connection');


module.exports = {
    async listarUsuarios(request, response) {
        try {
            const sql = 'SELECT usu_id, usu_nome, usu_cpf, usu_cod_cartao FROM USUARIOS;';
           
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
            const sql = 'INSERT INTO USUARIOS ( usu_nome, usu_cpf, usu_cod_cartao, usu_dt_cadastro, usu_dt_cartao, usu_vip) VALUES (?,?,?,?,?);';
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
            const {usu_id} = request.params;
            const sql = 'UPDATE  USUARIOS SET usu_nome = ?, usu_cpf= ?, usu_cod_cartao = ?, usu_dt_cadastro = ?, usu_dt_cartao = ?, usu_vip = ? WHERE usu_id = ?;';
            const values = [ usu_nome, usu_cpf, usu_cod_cartao, usu_dt_cadastro, usu_dt_cartao, usu_vip];
           
            return response.status(200).json({ confirma: 'EditarUsuarios' });

        } catch (error) {
            return response.status(500).json({ confirma: 'Erro', message: error });
        }
    },

    async apagarUsuarios(request, response) {
        try {
            return response.status(200).json({ confirma: 'Apagar Usuarios' });
        } catch (error) {
            return response.status(500).json({ confirma: 'Erro', message: error });
        }
    },
};  