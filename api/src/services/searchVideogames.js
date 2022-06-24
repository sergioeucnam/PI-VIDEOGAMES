const { default: axios } = require("axios");
const joinAllGames = require('../services/fetchAllVideogames');
const { Videogame, Genre } = require('../db')
const API_KEY = '050bf79b16c847dba27fd3e0a3d6b535'

const searchGame = async (req, res, next) => {
    const { name } = req.query
    if (name) {
        try {
            const dbInfo = await Videogame.findAll({
                where: {
                    name: name,
                },
                include: {
                    model: Genre,
                }
            })
            if (dbInfo != 0) {
                let resDb = dbInfo.map(ge => {
                    return {
                        id: ge.id,
                        name: ge.name,
                        description: ge.description,
                        platforms: ge.platforms,
                        releaseDate: ge.releaseDate,
                        rating: ge.rating,
                        image: ge.image,
                        genre: ge.genre
                    }
                })
                res.json(resDb)
            } else {
                console.log('Se a buscado por query', name);
                const games = await axios(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`)
                const data = games.data.results
                const mapeo = data.map((game) => {
                    return {
                        id: game.id,
                        name: game.name,
                        description: game.description_raw,
                        image: game.background_image,
                        platforms: game.platforms.map(platform => platform.platform.name),
                        releaseDate: game.released,
                        rating: game.rating,
                    }
                })
                res.status(201).json({ mapeo })
            }
        } catch (error) {
            console.log(error);
        }
    } else {
        try {
            const allGames = await joinAllGames()
            res.json(allGames)
        } catch (error) {
            next(error)
            console.log('se rompio mi rey');
        }
        // return await fetchAllVideogames()
        // console.log(await fetchAllVideogames());
    }
}
module.exports = searchGame;

