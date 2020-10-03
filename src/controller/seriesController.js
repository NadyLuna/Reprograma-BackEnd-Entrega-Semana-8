//passo-a-passo

//1: importar o Json (series.json);
//2: criar o método para buscar o Json (series.json);
//3: exportar o método.

const series = require("../model/series.json");

const getAllSeries = (req, res) => {
    console.log(req.url); // verifica se a resposta tem status 200 (sucesso) e envia o JSON
    res.status(200).send(series);
}

const getSeriesById = (req, res) => {
    const id = req.params.id
    const serieFiltrada = series.find((serie) => serie.id == id)

    res.status(200).send(serieFiltrada)
}

const getSeriesByGenero = (req, res) => {
    const genero = req.params.genero
    const serieFiltradaGenero = series.filter((serie) => serie.genero == genero)
    res.status(200).send(serieFiltradaGenero);
}

const getAllNomeSeries = (req, res) => {
    const nomeSerie = series.map((serie) => serie.nomeDaSerie)
    res.status(200).send(nomeSerie)
}

module.exports = {
    getAllSeries,
    getSeriesById,
    getSeriesByGenero,
    getAllNomeSeries
}