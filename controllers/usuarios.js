const { json } = require('express'); 
const db = require('../database/connection'); 


module.exports = {
    async listarUsuarios(request, response) {
        try {
            const sql = 'SELECT usu_id, usu_nome, usu_cpf, usu_cod_cartao FROM USUARIOS;';
           const  usuarios = await db.query(sql);
            return response.status(200).json({confirma: usuarios[0]});

        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
  
    async cadatrarUsuarios(request, response) {
        try {
            return response.status(200).json({confirma: 'Cadastrar Usuarios'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 


    async editarUsuarios(request, response) {
        try {
            return response.status(200).json({confirma: 'EditarUsuarios'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
  
    async apagarUsuarios(request, response) {
        try {
            return response.status(200).json({confirma: 'Apagar Usuarios'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
};  