import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Videogame.css'

const Videogame = ({ name, image, genres, rating, id }) => {
    return (
        <div className='game-container'>
            <div className='game-title'>{name}</div>
            <div className='game-image'>
                {image ?
                    <img src={image} alt={name} className='game-image' />
                    : <img src='https://picsum.photos/200' alt='name' className='game-image' />
                }
            </div>
            <div className='rating'>
                <h2>
                    Rating: {rating}
                </h2>
            </div>
            <div className='genres-info'>
                {genres.map((genre, index) => (
                    <p className='card-Type' key={index}>{genre}</p>
                ))}
            </div>
            <div className='toDetails'>
                <Link to={`/videogame/${id}`}>
                    <button className='button-generic-cards' >Ver detalles</button>
                </Link>
            </div>
        </div>
    )
}
export default Videogame;