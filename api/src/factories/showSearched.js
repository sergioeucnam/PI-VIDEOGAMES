const searchGame = require("../services/searchVideogames")

const showSearched = async (req, res, next) => {
    try {
        let show = await searchGame()
        console.log(show);
        show.data.forEach((game) => {
            return {
                title: game.title,
                image: game.image,
            }
        })
        res.send(200).json(results)
        // console.log(results);
    } catch (error) {
        // next(error)
    }
}

module.exports = showSearched;