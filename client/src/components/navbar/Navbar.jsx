import './navbar.css'
import { NavLink } from 'react-router-dom'
import SearchBar from '../searchbar/SearchBar'
//regex from 0.1 to 1000 (1.0 to 1000.0)
const regex = /^[0-9]{1,3}(\.?[0-9]{1})?$/

export default function Navbar() {

    return (
        <nav className='navbar-container'>
            <div className='navbar-content'>
                <NavLink to='/home'>
                    <li className='navbar-links'>HOME</li>
                </NavLink>
                <NavLink to='/createGame'>
                    <li className='navbar-links'>CREAR JUEGO</li>
                </NavLink>
                <NavLink to='/about'>
                    <li className='navbar-links'>ABOUT ME</li>
                </NavLink>
            </div>
            <SearchBar />
        </nav>
    )
}
