const { Router } = require('express')
const gamesRoute = Router()
// const renderGames = require('../factories/videogames');
const searchGame = require('../services/searchVideogames');
// const gameDetails = require('../services/fetchGameDetail');


// gamesRoute.get('/', renderGames)
gamesRoute.get('/', searchGame)                     //por query
// gamesRoute.get('/:idVideogame', gameDetails)        // por params


module.exports = gamesRoute;