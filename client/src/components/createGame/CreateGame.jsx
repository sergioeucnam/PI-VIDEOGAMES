import { useForm } from '../customHooks/useForm';
import React from 'react'
import NavBar from '../navbar/Navbar'
import '../createGame/CreateGame.css'
const initialForm = {
    name: "",
    description: "",
    rating: "",
    releaseDate: "",
    platforms: [],
    genre: [],
}
const validate = (form) => {
    // REGEX FOR DATE WITHIN 1952 AND 2022 IN FORMAT DD-MM-YYYY
    // const dateRegex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[012])-\d{4}$/;
    // const dateRegex = /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/; **
    const dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/; // 04/04/2020
    // const dateRegex = /^(((0[1 - 9] | [12][0 - 9] | 30)[-/]?(0[13-9]|1[012])|31[-/]?(0[13578]|1[02])|(0[1-9]|1[0-9]|2[0-8])[-/]?02)[-/]?[0-9]{4}|29[-/]?02[-/]?([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00))$/;
    const nameRegEx = /^[a-zA-Z0-9 ]{5,20}$/;
    const descriptionRegEx = /^[a-zA-Z0-9]{10,100}$/;
    const ratingRegExFloat = /^[1-5]{1,2}.[1-5]{1,2}$/;
    const ratingRegEx = /^[1-5]{1,2}$/;
    const errors = {};
    if (!form.name.trim()) {
        errors.name = 'Name is required';
    } else if (!nameRegEx.test(form.name)) { errors.name = 'Name must be between 5 and 20 characters, only letters and numbers are allowed'; }
    if (!form.description) {
        errors.description = 'Description is required';
    } else if (!descriptionRegEx.test(form.description)) { errors.description = 'Description must be between 10 and 100 characters, only letters and numbers are allowed'; } else { delete errors.releaseDate }
    if (!form.rating) {
        errors.rating = 'Rating is required';
    } else if (!ratingRegEx.test(form.rating) && !ratingRegExFloat.test(form.rating)) { errors.rating = 'Rating must be between 1 and 5'; }

    if (!form.releaseDate.trim()) {
        errors.releaseDate = 'Release date is required';
    } else if (!dateRegex.test(form.releaseDate)) { errors.releaseDate = 'Release date must be in format DD-MM-YYYY'; }
    else { delete errors.releaseDate }

    if (form.platforms.length < 1) {
        errors.platforms = 'At least one platform is required';
    } else { delete errors.platforms }
    if (!form.genre.length) {
        errors.genre = 'At least one genre is required';
    } else { delete errors.genre }
    return errors;
}


const CreateGame = () => {
    const { form, error, isSubmitting, response, handleChange, handleSubmit, handleBlur } = useForm(initialForm, validate)

    return (
        <>
            <NavBar />
            <div className='lazyCSS'>
                <h1>Create Game</h1>
                <form onSubmit={handleSubmit} onChange={handleChange} autoComplete='off' >
                    <div>
                        <label htmlFor="name">Name</label>
                        <br />
                        <input type="text" name="name" id="name" defaultValue={form.name} onBlur={handleBlur} placeholder='Give your game a name!' />
                        {error.name && <p>{error.name}</p>}
                    </div>
                    <br />
                    <div>
                        <label htmlFor='releadeDate'>Release Date (DD/MM/AAAA) </label>
                        <br />
                        <input type="text" name="releaseDate" id="releaseDate" defaultValue={form.releaseDate} onBlur={handleBlur} placeholder='30/04/1999' />
                        {error.releaseDate && <p>{error.releaseDate}</p>}
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <br />
                        <textarea cols='50' rows='5' name="description" id="description" defaultValue={form.description} onBlur={handleBlur} placeholder='Describe your game ' />
                        {error.description && <p>{error.description}</p>}
                    </div>
                    <div>
                        <label htmlFor="rating">Rating</label>
                        <br />
                        <input type="text" name="rating" id="rating" defaultValue={form.rating} onBlur={handleBlur} />
                        {error.rating && <p>{error.rating}</p>}
                        <br />
                        <br />

                    </div>
                    <div>
                        <label htmlFor="platforms">Platforms</label> <br />
                        {error.platforms && <p>111{error.platforms}</p>}
                        <br />
                        <label htmlFor='platforms'> PC </label>
                        <input type='checkbox' id='platforms' name='platforms' defaultValue='PC' value={form.value} />
                        <label htmlFor='platforms'> Xbox </label>
                        <input type='checkbox' id='platforms' name='platforms' defaultValue='Xbox' value={form.value} />
                        <label htmlFor='platforms'> PS4 </label>
                        <input type='checkbox' id='platforms' name='platforms' defaultValue='PS4' value={form.value} />
                        <label htmlFor='platforms'> Switch </label>
                        <input type='checkbox' id='platforms' name='platforms' defaultValue='Switch' value={form.value} />
                        <label htmlFor='platforms'> Nintendo </label>
                        <input type='checkbox' id='platforms' name='platforms' defaultValue='Nintendo' value={form.value}
                        // onBlur={handleBlur}
                        />
                    </div>
                    <br />
                    <div>
                        <label htmlFor='genre' >Genres</label>
                        {error.genre && <p>{error.genre}</p>}

                        <br />
                        <label htmlFor='genre'> Action </label>
                        <input type='checkbox' id='genre' name='genre' defaultValue='4' value={form.value} />
                        <label htmlFor='adventure'> Adventure </label>
                        <input type='checkbox' id='genre' name='genre' defaultValue='3' value={form.value} />
                        <label htmlFor='casual'> Casual </label>
                        <input type='checkbox' id='genre' name='genre' defaultValue='40' value={form.value} />
                        <label htmlFor='strategy'> Strategy </label>
                        <input type='checkbox' id='genre' name='genre' defaultValue='10' value={form.value} />
                        <label htmlFor='rpg'> RPG </label>
                        <input type='checkbox' id='genre' name='genre' defaultValue='5' value={form.value} />
                        <label htmlFor='simulation'> Simulation </label>
                        <input type='checkbox' id='genre' name='genre' defaultValue='14' value={form.value} />
                        <label htmlFor='sports'> Sports </label>
                        <input type='checkbox' id='genre' name='genre' defaultValue='15' value={form.value} />
                        <label htmlFor='horror'> Family </label>
                        <input type='checkbox' id='genre' name='genre' defaultValue='19' value={form.value} />
                        <label htmlFor='puzzle'> Puzzle </label>
                        <input type='checkbox' id='genre' name='genre' defaultValue='7' value={form.value} />
                        <label htmlFor='board'> Board </label>
                        <input type='checkbox' id='genre' name='genre' defaultValue='28' value={form.value} />
                        <label htmlFor='card'> Card </label>
                        <input type='checkbox' id='genre' name='genre' defaultValue='17' value={form.value} />
                        <label htmlFor='indie'> Indie </label>
                        <input type='checkbox' id='genre' name='genre' defaultValue='51' value={form.value} />
                        <laber htmlFor='shooter'> Shooter</laber>
                        <input type='checkbox' id='genre' name='genre' defaultValue='2' value={form.value} />
                        <label htmlFor='arcade' > Arcade</label>
                        <input type='checkbox' id='genre' name='genre' defaultValue='11' value={form.value} />
                        <laber htmlFor='platformer' > Platformer</laber>
                        <input type='checkbox' id='genre' name='genre' defaultValue='83' value={form.value} />
                        <label htmlFor='racing' > Racing</label>
                        <input type='checkbox' id='genre' name='genre' defaultValue='1' value={form.value} />
                        <label htmlFor='massively-multiplayer' > Massively Multiplayer</label>
                        <input type='checkbox' id='genre' name='genre' defaultValue='59' value={form.value} />
                        <label htmlFor='fighting' > Fighting</label>
                        <input type='checkbox' id='genre' name='genre' defaultValue='6' value={form.value} />
                        <label htmlFor='educational' > Educational</label>
                        <input type='checkbox' id='genre' name='genre' defaultValue='34' value={form.value} />
                    </div>
                    <input type='submit' value='Crear jueguito'></input>
                </form>
            </div>
        </>
    )
}

export default CreateGame