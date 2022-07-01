import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Videogames from '../videogames/Videogames'
import Videogame from '../videogame/Videogame'
import Navbar from '../navbar/Navbar.jsx'
import Pagination from '../pagination/Pagination'
import './Home.css'

function home() {
    return (
        <div className='nosepa'>

            <Videogames />
        </div>
    )
}

export default home