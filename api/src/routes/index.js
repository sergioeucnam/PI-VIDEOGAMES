const { Router } = require('express');
// const fetchAllGenres = require('../services/fethAllGenres.api');
// const populateDatabase = require('../controllers/populateDatabase');
// const populateGenreDataBase = require('../factories/genres');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

router.get('/', (req, res) => {
    res.json({
        status: 'success',
    })
})
// router.get('/genres', fetchAllGenres)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
