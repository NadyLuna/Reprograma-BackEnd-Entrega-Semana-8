// passo-a-passo

// 1. Importar o express;
// 2. Declarar a variável app atribuindo o método do express;
// 3. Importar a rota;
// 4. Usar a rota '/' passando o arquivo de musicas como segundo parâmetro;
// 5. Exportar o app.

const express = require('express');
const app = express();
const series = require('./routes/seriesRoutes');


app.use(express.static('public')) // para fazer a imagem o erro aparecer no Browser 


app.get('/series', (req, res) => {
    res.status(200).sendFile('./views/index.html', { root: __dirname })
})
//fazer um get para retornar um erro

app.get('*', (req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname })
})


module.exports = app;
