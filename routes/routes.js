const db = require('../database/connection');
const express = require('express');
const router = express.Router();

//referencia a controllers que serão utilizados nas rotas
const ItensController = require('../controllers/itens');
const PedidosController = require('../controllers/pedidos');
const PedidosItensController = require('../controllers/pedidosItens');
const PontosVendaController = require('../controllers/pontosVenda');
const PontosVendaItenController = require('../controllers/pontoVendaIten');