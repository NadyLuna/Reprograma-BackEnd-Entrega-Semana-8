const { Router } = require('express');
// passo-a-passo

// 1. Importar o Express;
// 2. Criar o route atribuindo o express.Router();
// 3. Importar o arquivo controller (seriesController);
// 4. Criar a rota que traz todos os itens;
// 5. Adicionar as rotas de acordo com o contrato;
// 6. Exportar o route.

const express = require('express');
const route = express.Router();
const controller = require('../controller/seriesController');

route.get('/series', controller.getAllSeries);
route.get('/:id', controller.getSeriesById); 

module.exports = route; // chamada da função linha 12