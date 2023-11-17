const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarPontosVendaItem(request, response) {
        try {
            const sql = 'SELECT pvd_id, itn_id, pvd_preco_item FROM PONTO_VENDA_ITENS;';
            const PontoVendaItem = await db.query(sql);
            const nReg = PontoVendaItem.length;
            return response.status(200).json
            (
                {
                confirma: 'Sucesso',
                message: 'Usuários cadastrados',
                nItens: nReg, 
                itens: PontoVendaItem[0]
                }
            );
        } catch (error) {
            return response.status(500).json({ confirma: 'Erro', message: error });
        }
    }, 
  
    async cadatrarPontosVendaItem(request, response) {
        try {
            const { pvd_id, itn_id, pvd_preco_item } = request.body;
            const sql = 'INSERT INTO PONTO_VENDA_ITENS (pvd_id, itn_id, pvd_preco_item) VALUES (?,?,?);';
            const values = [pvd_id, itn_id, pvd_preco_item];
            const confirmacao = await db.query(sql, values);
            const pvi_id = confirmacao[0].insertId;
            return response.status(200).json
            (
                {
                confirma: 'Sucesso',
                message: 'Cadastrao do ponto de venda item efetuado.',
                pvi_id
                }
            );
        } catch (error) {
            return response.status(500).json({ confirma: 'Erro', message: error });
        }
    }, 

    async editarPontosVendaItem(request, response) {
        try {
            const { pvd_id, itn_id, pvd_preco_item } = request.body;
            const { pvi_id } = request.params;
            const sql = 'UPDATE PONTO_VENDA_ITENS SET pvd_id = ?, itn_id = ?, pvd_preco_item = ? WHERE pvd_id = ? and int_id = ?;';
            const values = [pvd_id, itn_id, pvd_preco_item, pvi_id];
            const atualizacao = await db.query(sql, values);
            return response.status(200).json({
                confirma: 'Sucesso',
                message: 'Usuário ' + pvi_id + ' atualizado com sucesso!',
                registrosAtualizados: atualizacao[0].affectedRows
            });
        } catch (error) {
            return response.status(500).json({ confirma: 'Erro', message: error });
        }
    }, 
  
    async apagarPontosVendaItem(request, response) {
        try {
            const { pvi_id } = request.params;
            const sql = 'DELETE FROM PONTO_VENDA_ITENS WHERE pvi_id = ?;';
            const values = [pvi_id];
            await db.query(sql,values);
            return response.status(200).json(

                { 
                    confirma: 'Sucesso', 
                    message: 'Ponto venda item' + pvi_id + 'excluido com sucesso'
                }
            );
            
        } catch (error) {
            return response.status(500).json({ confirma: 'Erro', message: error });
        }
    }, 
};
