const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarUsuariosSistema(request, response) {
        try {
            const sql = 'SELECT us_id, us_tipo, us_nome, us_login, us_senha  FROM USUARIOS_SISTEMA;'; 
           const usuariosSistema = await db.query(sql);
           const nReg = usuariosSistema[0].length;
            return response.status(200).json({
            confirma: 'Sucesso',
            menssage: ' Usuário Sistema cadastrados ',
             'nItens': nReg,
              'itens': usuariosSistema[0]
            });
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
  
    async cadatrarUsuariosSistema(request, response) {
        try {
            const {us_tipo, us_nome, us_login, us_senha} = request.body;
            const sql= 'INSERT INTO USUARIOS_SISTEMA (us_tipo, us_nome, us_login, us_senha) VALUES (?,?,?,?);';
            const values = [us_tipo, us_nome, us_login, us_senha];
            const confirmacao = await db.query(sql, values);
            const us_id = confirmacao[0].insertId;

            return response.status(200).json({
                confirma: 'sucesso',
                menssage: 'Cadastrar de Usuarios efetuado',
                us_id
            }
            );
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 


    async editarUsuariosSistema(request, response) {
        try {
            const {us_tipo, us_nome, us_login, us_senha} = request.body;
            const {us_id} = request.params;
            const sql = 'UPDATE USUARIOS_SISTEMA SET us_tipo = ?, us_nome = ?, us_login = ?, us_senha + ?  WHERE us_id = ?;';
            const values = [us_tipo, us_nome, us_login, us_senha, us_id];
            const atualizacao = await db.query(sql, values);
        
      return response.status(200).json(
        {
        confirma: 'Sucesso',
        message: 'Usuarios Sistema' + us_id + " atualizando com sucesso!",
        regsitrosAtualizados : atualizacao[0].affectedRows
    });
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
  
    async apagarUsuariosSistema(request, response) {
        try {
            const {us_id} = request.params;
            const sql = 'DELETE FROM USUARIOS_SISTEMA WHERE us_id = ?';
            const values = [us_id];
            await db.query(sql, values);
            return response.status(200).json({
                confirma: 'usuarios' + us_id + 'excluido  com sucesso'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
};  