const { Router } = require('express')
const videoGame = Router()
// const renderGames = require('../factories/videogames');
// const searchGame = require('../services/searchVideogames');
const gameDetails = require('../services/fetchGameDetail');

videoGame.get('/:idVideogame', gameDetails)        // por params

module.exports = videoGame;
