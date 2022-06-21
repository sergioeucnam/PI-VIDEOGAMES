const axios = require('axios');
const API_KEY = '050bf79b16c847dba27fd3e0a3d6b535';
const { Videogame, Genre } = require('../db')
//&page_size=100
const fetchAllVideogames = async (req, res, next) => {
    try {
        const getGame = await axios(`https://api.rawg.io/api/games?key=${API_KEY}&page=100`)
        let game = getGame.data.results;
        game = game.map((result) => {
            return {
                name: result.name,
                image: result.background_image,
                genres: result.genres.map((genre) => genre.name)
            }
        })
        // res.status(201).json(game)
        // console.log(game);
        return game;
    } catch (error) {
        next(error)
    }
}
const getDbInfo = async () => {
    let dbData = await Videogame.findAll({
        include: {
            model: Genre,
            attributes: ['id', 'name'],
            through: {
                attributes: []
            }
        }
    })
    // console.log('db data asdfafafa', dbData);
    return dbData;
}
const joinAllGames = async () => {
    let dbData = await getDbInfo();
    console.log(dbData);
    let apiData = await fetchAllVideogames();
    console.log(fetchAllVideogames);
    let joined = dbData.concat(apiData)
    console.log(joined);
    return joined;
}
module.exports = joinAllGames;