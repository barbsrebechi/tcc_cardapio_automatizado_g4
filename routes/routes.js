const db = require('../database/connection');
const express = require('express');
const router = express.Router();

//referencia a controllers que serão utilizados nas rotas
const ItensController = require('../controllers/itens');
const PedidosController = require('../controllers/pedidos');
const PedidosItensController = require('../controllers/pedidosItens');
const PontosVendaController = require('../controllers/pontosVenda');
const PontosVendaItemController = require('../controllers/pontoVendaItem');
const RecargasController = require('../controllers/recargas');
const UsuariosController = require('../controllers/usuarios');
const UsuariosSistemaController = require('../controllers/usuariosSistema');

//definição das rotas 
router.get('/itens', ItensController.listarItens);
router.post('/itens', ItensController.cadatrarItens);
router.patch('/itens/:itn_id', ItensController.editarItens);
router.delete('/itens/:itn_id', ItensController.apagarItens);

//definição das rotas 
router.get('/pedidos',PedidosController.listarPedidos);
router.post('/pedidos',PedidosController.cadatrarPedidos);
router.patch('/pedidos/:ped_id',PedidosController.editarPedidos);
router.delete('/pedidos/:ped_id',PedidosController.apagarPedidos);

//definição das rotas 
router.get('/pedidosItens', PedidosItensController.listarPedidosItens);
router.post('/pedidosItens', PedidosItensController.cadatrarPedidosItens);
router.patch('/pedidosItens', PedidosItensController.editarPedidosItens);
router.delete('/pedidosItens', PedidosItensController.apagarPedidosItens);

//definição das rotas 
router.get('/pontosVenda', PontosVendaController.listarPontosVenda);
router.post('/pontosVenda', PontosVendaController.cadatrarPontosVenda);
router.patch('/pontosVenda', PontosVendaController.editarPontosVenda);
router.delete('/pontosVenda', PontosVendaController.apagarPontosVenda);


//definição das rotas 
router.get('/pontoVendaItem', PontosVendaItemController.listarPontoVendaItem);
router.post('/pontoVendaItem', PontosVendaItemController.cadastrarPontosVendaItem);
router.patch('/pontoVendaItem/:pvi_id', PontosVendaItemController.editarPontosVendaItem);
router.delete('/pontoVendaItem/:pvi_id', PontosVendaItemController.apagarPontosVendaItem);

//definição das rotas 
router.get('/recargas', RecargasController.listarRecargas);
router.post('/recargas', RecargasController.cadatrarRecargas);
router.patch('/recargas', RecargasController.editarRecargas);
router.delete('/recargas', RecargasController.apagarRecargas);

//definição das rotas 
router.get('/usuarios', UsuariosController.listarUsuarios);
router.post('/usuarios', UsuariosController.cadatrarUsuarios);
router.patch('/usuarios', UsuariosController.editarUsuarios);
router.delete('/usuarios', UsuariosController.apagarUsuarios);

//definição das rotas 
router.get('/usuariosSistema', UsuariosSistemaController.listarUsuariosSistema);
router.post('/usuariosSistema', UsuariosSistemaController.cadatrarUsuariosSistema);
router.patch('/usuariosSistema', UsuariosSistemaController.editarUsuariosSistema);
router.delete('/usuariosSistema', UsuariosSistemaController.apagarUsuariosSistema);

module.exports = router;



