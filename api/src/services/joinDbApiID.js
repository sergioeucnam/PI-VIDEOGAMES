const genreID = async (req, res, next) => {
    try {
        const { gameID, genreID } = req.params;
        const game = await Videogame.findByPk(gameID);
        await game.addGenre(genreID);
        res.status(201).send(game)
    } catch (error) {
        next(error)
    }
}
module.exports = genreID;