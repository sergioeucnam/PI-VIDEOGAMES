// const { router } = require('../app');
// const { Router } = require('express');
// const router = Router();
const { Genre } = require('../db');
const fetchAllGenres = require('../services/fethAllGenres.api');

const populateGenreDataBase = async () => {
    try {
        let results = await fetchAllGenres()
        results.forEach(genre => {
            Genre.create({
                name: genre.name
            })
        });
        console.log('Todos los generos han sido cargados');
        return results;
    } catch (error) {
        console.log(error);
    }
}

module.exports = populateGenreDataBase;