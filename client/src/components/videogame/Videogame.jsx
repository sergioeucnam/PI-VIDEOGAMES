import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Videogame.css'

const Videogame = (props) => {
    return (
        <div className='game-container'>
            {/* <div className='cajaContenedor'> */}
            <div className='game-title'>{props.name}</div>
            <div className='game-image'>
                <img src={props.image} alt={props.name} className='game-image' />
            </div>
            <div className='rating'>
                <h2>
                    {props.rating}
                </h2>
            </div>
            <div className='genres-info'>
                <h2> {props.genres[0]} {props.genres[1]} {props.genres[2]}</h2>
            </div>
            <div className='toDetails'>
                <Link to={`/videogame/${props.id}`}>
                    <button className='button-generic-cards' >Ver detalles</button>
                </Link>
            </div>
            {/* </div> */}
        </div>
    )
}
export default Videogame;