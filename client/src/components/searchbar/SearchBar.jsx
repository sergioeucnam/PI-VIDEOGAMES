import { React, useState } from 'react';
import { searchGame } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './SearchBar.css';
import SearchByName from './searchByName';
export default function SearchBar() {
    const [search, setSearch] = useState({ name: '' });

    const searched = useSelector(state => state.searchGames);

    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setSearch({ ...search, [e.target.name]: e.target.value });
        // return dispatch(searchGame(e.target.value)); //sssss

    }
    return (
        <div className='search-bar-container'>
            <input required className='search-input' name='name' placeholder='Search for a game' onChange={(e) => handleInputChange(e)} value={search.name}></input>
            <Link to={`/videogame/${search.name}`}>
                <button className='button-generic' > Buscar</button>
            </Link>
            {/* <Link to={`/videogame/${search.name}`}>
                <button className='button-generic' > Buscar</button>
            </Link> */}

            {/* <SearchByName /> */}
            {/* //esto no estaba */}


        </div>
    )
}
