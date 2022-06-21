const { Videogame, Genre } = require('../db.js')
const createGame = async (req, res, next) => {
    try {
        const { name, description, platforms, releaseDate, rating, image, genre } = req.body
        // console.log(platforms);
        let createGame = await Videogame.create({
            name: name,
            description: description,
            platforms: platforms,
            releaseDate: releaseDate,
            rating: rating,
            image: image,
            genre: genre
        })
        await createGame.setGenres(genre)
        // res.send(createGame)
        res.status(201).json({ msg: 'Created successfully', createGame })
        // res.send('Created successfully')
    } catch (error) {
        next(error)
    }
    // console.log(createGame);
}

module.exports = createGame;