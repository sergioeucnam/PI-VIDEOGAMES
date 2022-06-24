import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Videogames from '../videogames/Videogames'
import Videogame from '../videogame/Videogame'
import Navbar from '../navbar/Navbar.jsx'

/**
 * 
 *Imagen
Nombre
Géneros
 */
function home() {
    return (
        <>
            <Videogames />
        </>
    )
}

export default home