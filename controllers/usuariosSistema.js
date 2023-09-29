const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarUsuariosSistema(request, response) {
        try {
            return response.status(200).json({confirma: 'Listar UsuariosSistema'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
  
    async cadatrarUsuariosSistema(request, response) {
        try {
            return response.status(200).json({confirma: 'Cadastrar UsuariosSistema'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 


    async editarUsuariosSistema(request, response) {
        try {
            return response.status(200).json({confirma: 'EditarUsuariosSistema'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
  
    async apagarUsuariosSistema(request, response) {
        try {
            return response.status(200).json({confirma: 'Apagar UsuariosSistema'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
};  