const { Genre } = require('../db.js')
const populateGenreDataBase = require('../factories/genres.js')
const fetchAllGenres = require('./fetchAllGenres.api.js')

const getGenresDB = async (req, res, next) => {
    const genreCount = await Genre.count()
    if (!genreCount) {
        // await populateGenreDataBase()
        const genres = await populateGenreDataBase()
        // await fetchAllGenres()
        return res.status(200).json(genres)
    }
    else {
        const genreDB = await Genre.findAll()
        const genres = genreDB.map(t => {
            return {
                id: t.id,
                name: t.name,
            }
        })
        res.send(genres)
    }
}
module.exports = getGenresDB;
