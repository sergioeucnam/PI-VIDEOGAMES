const axios = require('axios');
const API_KEY = '050bf79b16c847dba27fd3e0a3d6b535'

const fetchAllGenres = async (req, res) => {
    try {
        const genres = await axios(`https://api.rawg.io/api/genres?key=${API_KEY}`)
        let data = genres.data.results
        data = data.map(genre => {
            return {
                id: genre.id,
                name: genre.name
            }
        })
        return data
    } catch (error) {
        console.log(error);
    }
}
module.exports = fetchAllGenres;