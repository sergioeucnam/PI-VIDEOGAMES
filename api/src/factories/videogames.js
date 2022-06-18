const fetchAllVideogames = require("../services/fetchAllVideogames")

const renderGames = async (req, res, next) => {
    try {
        let results = await fetchAllVideogames()
        results.forEach((game) => {
            return {
                title: game.name,
            }
        })
        console.log('Mostrando videojuegos');
        res.status(201).json(results)
    } catch (error) {
        next(error)
    }
}
module.exports = renderGames;