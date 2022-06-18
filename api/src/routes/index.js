const { Router } = require('express');
// const showSearched = require('../factories/showSearched');
// const showSearched = require('../factories/showSearched');
const renderGames = require('../factories/videogames');
const searchGame = require('../services/searchVideogames');

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
router.get('/videogames', renderGames)
router.get('/videogames/:name', searchGame)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
