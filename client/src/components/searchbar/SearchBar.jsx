import { React, useState } from 'react';
import { searchGame } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function SearchBar() {
    const [search, setSearch] = useState({ name: '' });

    const searched = useSelector(state => state.searchGames);

    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setSearch({ ...search, [e.target.name]: e.target.value });
        // return dispatch(searchGame(e.target.value));

    }

    // const handleOnClick = (e) => {
    //     console.log('handle click', search.name);
    //     // e.preventDefault();
    //     // dispatch(searchGame(search.name))
    //     let datito = dispatch(searchGame(search.name))
    //     console.log('soy datito', datito);
    // }

    return (
        <div className="search-bar">
            <div>
                <input required className='search-button' name='name' placeholder='search for a game' onChange={(e) => handleInputChange(e)} value={search.name}></input>
            </div>
            <div>
                <Link to={`/videogame/${search.name}`}>
                    {/* onClick={(e) => { handleOnClick(e) }} */}
                    <button className='button-generic' > Buscar</button>
                </Link>
            </div>
            <h1>se a buscado {searchGame.name} </h1>
        </div>
    )
}
