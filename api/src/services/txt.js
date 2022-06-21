const getAllPokemon = async (req, res, next) => {
    const { name } = req.query;
    try {
        if (name) {
            const dbInfo = await Pokemon.findAll({
                where: {
                    name: name,
                },
                include: {
                    model: Type
                }
            })
            if (dbInfo != 0) {
                let resDb = dbInfo.map(p => {
                    return {
                        id: p.id,
                        name: p.name,
                        types: p.types,
                        image: p.image,
                        hp: p.hp,
                        attack: p.attack,
                        defense: p.defense,
                        speed: p.speed,
                        height: p.height,
                        weight: p.weight
                    }
                })
                res.status(200).send(resDb)
            } else {
                const pokeApi = (await axios(`https://pokeapi.co/api/v2/pokemon/${name}`))
                let resApi = [{
                    id: pokeApi.data.id,
                    name: pokeApi.data.name,
                    types: pokeApi.data.types.map(t => t.type.name),
                    image: pokeApi.data.sprites.other.dream_world.front_default,
                    hp: pokeApi.data.stats[0].base_stat,
                    attack: pokeApi.data.stats[1].base_stat,
                    defense: pokeApi.data.stats[2].base_stat,
                    speed: pokeApi.data.stats[5].base_stat,
                    height: pokeApi.data.height,
                    weight: pokeApi.data.weight
                }]
                res.status(200).send(resApi)
            }

        } else {
            try {
                const allPokemon = await joinAllPokemon();
                res.json(allPokemon)
            } catch (error) {
                next(error)
            }
        }
    }
    catch (error) {
        res.status(404).send({ msg: "Pokemon's name not found" })
    }
}