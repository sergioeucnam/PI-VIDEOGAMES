const axios = require('axios')
const { Videogame, Genre } = require('../db')
const API_KEY = '050bf79b16c847dba27fd3e0a3d6b535'

const gameDetails = async (req, res, next) => {
    const { idVideogame } = req.params
    let gameID;
    if (idVideogame.length > 10) {
        console.log('se busco en la database por id: ', idVideogame);
        const gamesDB = await Videogame.findByPk(idVideogame, { include: Genre })
        gameID = {
            id: gamesDB.id,
            name: gamesDB.name,
            description: gamesDB.description,
            platforms: gamesDB.platforms,
            releaseDate: gamesDB.releaseDate,
            rating: gamesDB.rating,
            image: gamesDB.image,
            genre: gamesDB.genre
        }
        res.json(gameID)
    } else {
        try {
            console.log('se ha buscado por ID en la api: ', idVideogame);
            const details = await axios(`https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`)
            // console.log(details);
            const data = details.data
            // return data
            res.status(201).json({ data })
            // console.log(data);
        } catch (error) {
            console.log('estamos en el catch mi rey');
            res.status(500).send(' no se encontro tu jueguito bobi')
            next(error)
        }
    }
}
module.exports = gameDetails;