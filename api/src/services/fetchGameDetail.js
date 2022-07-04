const axios = require('axios')
const { Videogame, Genre } = require('../db')
const API_KEY = '050bf79b16c847dba27fd3e0a3d6b535'

const gameDetails = async (req, res, next) => {
    const { idVideogame } = req.params
    let gameID;
    if (idVideogame.length > 10) {
        try {
            // console.log('se busco en la database por id: ', idVideogame);
            const gamesDB = await Videogame.findByPk(idVideogame, { include: Genre })
            gameID = {
                id: gamesDB.id,
                name: gamesDB.name,
                description: gamesDB.description,
                platforms: gamesDB.platforms,
                releaseDate: gamesDB.releaseDate,
                rating: gamesDB.rating,
                image: gamesDB.image,
                genres: gamesDB.genres.map((genre) => genre.name)
            }
            res.json(gameID)
        } catch (error) {
            next(error)
        }
    } else {
        try {
            // console.log('se ha buscado por ID en la api: ', idVideogame);
            const details = await axios(`https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`)
            gameID = {
                id: details.data.id,
                name: details.data.name,
                description: details.data.description_raw,
                image: details.data.background_image,
                platforms: details.data.platforms.map(platform => platform.platform.name),
                releaseDate: details.data.released,
                rating: details.data.rating,
            }

            // return data
            res.status(201).json(gameID)
            // console.log(gameID);
        } catch (error) {
            // console.log('estamos en el catch mi rey');
            res.status(500).send(' no se encontro tu jueguito bobi')
            next(error)
        }
    }
}
module.exports = gameDetails;