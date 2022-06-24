import React from 'react';
import { Link } from 'react-router-dom';
import './FirstScreen.css';

function firstScreen() {
    return (
        <div className='caja-padre' >
            <div className='caja-contenedor'>
                <p >Welcome to Videogames</p>
                <p >Powered by RAWG</p>
                <Link to='/home'>
                    <button type='submit' className='soyElButton'>I N G R E S A R</button>
                </Link>
            </div>
        </div>
    );
}

export default firstScreen;