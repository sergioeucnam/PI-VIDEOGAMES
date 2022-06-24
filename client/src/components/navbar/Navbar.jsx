import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'
import SearchBar from '../searchbar/SearchBar'

export default function Navbar() {
    return (
        <div>
            <nav>
                <div className='navbar-container'>
                    <div className='soy-la-navbar'>soi la navbar</div>
                    <SearchBar />
                    <nav className='navbar-content'>
                        <NavLink to='/home'>
                            <p className='navbar-links'>HOME</p>
                        </NavLink>
                        <NavLink to='/createGame'>
                            <p className='navbar-links'>CREAR JUEGO</p>
                        </NavLink>
                        <NavLink to='/about'>
                            <p className='navbar-links'>ABOUT ME</p>
                        </NavLink>
                    </nav>
                </div>
            </nav>
        </div>
    )
}

// export default Navbar