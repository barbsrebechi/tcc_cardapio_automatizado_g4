const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarPedidos(request, response) {
        try {
            const sql = 'SELECT ped_id, usu_id, ped_dt_hr_pedido, ped_status, ped_observacoesFROM PEDIDOS;';
            const pedidos = await db.query(sql);
            const nReg = pedidos[0].lenght;

            return response.status(200).json({
                confirma: 'Sucesso',
                message: 'Pedido Cadastrado',
                nItens:nReg,
                itens:pedidos[0]});

        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
  
    async cadatrarPedidos(request, response) {
        try {
            //parâmetros recebidos pelo corpo da requisição
            const { usu_id, ped_dt_hr_pedido, ped_status, ped_observacoes} = request.body;
            //instrução SQL pra inserção do registro
            const sql = 'INSERT INTO pedidos (usu_id, ped_dt_hr_pedido, ped_status, ped_observacoes) VALUES (?,?,?)';
            //preparo do array com dados que serão utilizdos
            const values  = [usu_id, ped_dt_hr_pedido, ped_status, ped_observacoes];
            //execução e obtenção de confirmação da atualização realizada
            const confirmacao = await db.query(sql, values );
            //identificação do id do registro inserido
            const ped_id = confirmacao[0].insertId;
            //responde a requisição com a mensagem confirmando o ID do registro inserido

            return response.status(200).json(
                { confirma: 'Sucesso',
                  message:'Cadastro de pedidos efetuado',
                  ped_id
                }
                );
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 



    async editarPedidos(request, response) {
        try {
            //parâmetros recebidos pelo corpo da requisição
            const { usu_id, ped_dt_hr_pedido, ped_status, ped_observacoes} = request.body;
            //parâmetro recebido pela URL via params ( valor direto na url ex: /itens/1)
            const {ped_id} = request.params;
            //instrução SQL para a atualização dos valores
            const sql = 'UPDATE pedidos SET usu_id = ?, ped_dt_hr_pedido = ?, ped_status = ?, ped_status = ? WHERE ped_id = ?';
            //preparo do array com dados que serão atualizados
            const values = [usu_id, ped_dt_hr_pedido, ped_status, ped_observacoes ];
            //execução e obtenção de confirmação da atualização realizada
            const atualizacao = await db.query(sql, values);
            // responde a requisição com a mensagem confirmando o numero de registros atualizados

           return response.status(200).json(
               {confirma: 'Sucesso',
                message:'Pedido' + ped_id + " atualizado com sucesso!",
                registrosAtualizados: atualizacao[0].affectdRows
           
           }
               );
       } catch (error) {
           return response.status(500).json({confirma: 'Erro', message: error});
       }
   }, 
  
    async apagarPedidos(request, response) {
        try {
            //parâmetro passado via url na chamada da api pelo front-end
            const { ped_id} = request.params;
            //comando de exclisão
            const sql= 'DELETE FROM itens WHERE itn_id = ?';
            //definição de array com os parâmetros que receberam os valores do front-end
            const values = [ ped_id];
            //executa a instrução de exclusão no banco de dados
            await db.query(sql, values);
            //mensagem de retorno no formato JSON

            return response.status(200).json(
                {confirma: 'Sucesso',
            message:'Pedido com id' + ped_id + 'excluido com sucesso'            }
            );
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }
};  