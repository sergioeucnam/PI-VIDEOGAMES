const axios = require('axios');
const API_KEY = '050bf79b16c847dba27fd3e0a3d6b535';
const { Videogame, Genre } = require('../db')
//&page_size=100
const fetchAllVideogames = async (req, res, next) => {
    try {
        let page = 80;
        let game = []
        while (page <= 84) {
            const getGame = await axios(`https://api.rawg.io/api/games?key=${API_KEY}&page=${page}`);
            const games = getGame.data.results.map(jueguito => {
                return {
                    id: jueguito.id,
                    name: jueguito.name,
                    image: jueguito.background_image,
                    genres: jueguito.genres.map((genre) => genre.name),
                    rating: jueguito.rating
                }
            })
            game = [...game, ...games]
            page++
        }
        return game;
    } catch (error) {
        next(error)
    }

    // try {
    //     const getGame = await axios(`https://api.rawg.io/api/games?key=${API_KEY}&page=${80}`);
    //     let game = getGame.data.results;
    //     game = game.map((result) => {
    //         return {
    //             id: result.id,
    //             name: result.name,
    //             image: result.background_image,
    //             genres: result.genres.map((genre) => genre.name),
    //             rating: result.rating
    //         }
    //     })
    //     return game;
    // } catch (error) {
    //     next(error)
    // }
}

const getDbInfo = async () => {
    let dbData = await Videogame.findAll({ include: Genre })
    dbData = dbData.map((result) => {
        return {
            id: result.id,
            name: result.name,
            description: result.description,
            platforms: result.platforms,
            releaseDate: result.releaseDate,
            rating: result.rating,
            image: result.image,
            genres: result.genres.map((genre) => genre.name)
        }
    }
    )
    return dbData;
}
const joinAllGames = async () => {
    let dbData = await getDbInfo();
    let apiData = await fetchAllVideogames();
    let joined = dbData.concat(apiData)
    return joined;
}
module.exports = joinAllGames;