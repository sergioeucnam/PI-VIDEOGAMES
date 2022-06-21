const { Genre } = require('../db');
const fetchAllGenres = require('../services/fetchAllGenres.api');

const populateGenreDataBase = async () => {
    try {
        let results = await fetchAllGenres()
        results.forEach(genre => {
            Genre.create({
                id: genre.id,
                name: genre.name
            })
        });
        console.log('Todos los generos han sido cargados');
        return results;
    } catch (error) {
        next(error)
    }
}

module.exports = populateGenreDataBase;