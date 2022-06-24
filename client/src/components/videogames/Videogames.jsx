import { useState, useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import Videogame from '../videogame/Videogame'
import { getAllGames, getGenres, resetDetail } from '../../actions/actions'
import { connect } from 'react-redux'
import './Videogames.css'

const Videogames = ({ allGames, getAllGames, getGenres }) => {
    useEffect(() => {
        getAllGames()
        getGenres()
        // resetDetail()
    }, [])
    return (
        <div>
            <Navbar />
            <div className='games-container'>
                {
                    allGames.map((game) => (
                        <Videogame
                            key={game.id}
                            name={game.name}
                            image={game.image}
                            genres={game.genres}
                            rating={game.rating}
                            id={game.id}
                        />
                    ))
                }
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        allGames: state.allGames
    }
}
export default connect(mapStateToProps, { getAllGames, getGenres })(Videogames)
