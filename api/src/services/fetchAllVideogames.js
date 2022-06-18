const axios = require('axios');
const API_KEY = '050bf79b16c847dba27fd3e0a3d6b535';

const fetchAllVideogames = async (req, res, next) => {
    try {
        const games = await axios(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=20`)
        let data = games.data.results;
        data = data.map((game) => {
            return {
                name: game.name,
                image: game.background_image,
                genres: game.genres.map((genre) => genre.name)
            }
        })
        // res.status(201).json(data)
        return data;
    } catch (error) {
        next(error)
    }
}

module.exports = fetchAllVideogames;