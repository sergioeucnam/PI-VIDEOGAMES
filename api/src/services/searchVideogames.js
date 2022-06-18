const { default: axios } = require("axios");
const API_KEY = '050bf79b16c847dba27fd3e0a3d6b535'

const searchGame = async (req, res) => {
    try {
        const { name } = req.params
        console.log('Se a buscado ', name);
        const games = await axios(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`)
        const data = games.data.results
        // return data
        res.status(201).json({ data })
    } catch (error) {
        next(error)
    }
}
module.exports = searchGame;