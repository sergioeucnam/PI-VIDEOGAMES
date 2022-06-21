const { Router } = require('express');
const createGame = require('../factories/createGame');
const getGenresDB = require('../services/fetchGenresDB');
const genreID = require('../services/joinDbApiID');
// const showSearched = require('../factories/showSearched');
// const renderGames = require('../factories/videogames');
// const gameDetails = require('../services/fetchGameDetail');
// const searchGame = require('../services/searchVideogames');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

router.get('/', (req, res, next) => {
    try {
        res.status(201).json({
            status: 'success',
        })
    } catch (error) {
        next(error)
    }
})
router.get('/genres', getGenresDB)
router.post('/videogames', createGame)
router.post('/:gameID/genres/:genreID', genreID)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
