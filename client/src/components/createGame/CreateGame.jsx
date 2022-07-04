import { useForm } from '../customHooks/useForm';
import React, { useEffect } from 'react'
import NavBar from '../navbar/Navbar'
import '../createGame/CreateGame.css'
const initialForm = {
    "name": "",
    "description": "",
    "rating": "",
    "releaseDate": "",
    "platforms": [],
    "genre": [],
    "image": ""
}
const validate = (form) => {
    const dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/; // 04/04/2020
    const nameRegEx = /^[a-zA-Z0-9 ]{5,20}$/;
    const descriptionRegEx = /^[a-zA-Z0-9 .!?"-]+$/;
    const ratingRegEx = /^(?:5(?:\.0)?|[1-4](?:\.[0-9])?|0?\.[1-9])$/;
    const urlRegEx = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    const errors = {};
    if (!form.name.trim()) {
        errors.name = 'Name is required';
    } else if (!nameRegEx.test(form.name)) { errors.name = 'Name must be between 5 and 20 characters, only letters and numbers are allowed'; }

    if (form.image) {
        if (!urlRegEx.test(form.image)) {
            errors.image = 'Image must be a valid URL';
        }
    }
    if (!form.description) {
        errors.description = 'Description is required';
    } else if (!descriptionRegEx.test(form.description)) { errors.description = 'Description must be between 10 and 100 characters, only letters and numbers are allowed'; } else { delete errors.releaseDate }

    if (!form.rating) {
        errors.rating = 'Rating is required';
    } else if (!ratingRegEx.test(form.rating)) { errors.rating = 'Rating must be between 1 and 5'; }
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
    //     if (errors.length === 0) {
    //         setIsSubmitting(true)
    //     }
}
const CreateGame = () => {


    const { form, error, isSubmitting, response, handleChange, handleSubmit, handleBlur } = useForm(initialForm, validate)

    useEffect(() => {
        validate(form)
    }, [])
    return (
        <div className='form-container'>
            <NavBar />
            <div className='komtainer-fader'>
                <h1>Create Game</h1>
                <form onSubmit={handleSubmit} onChange={handleChange} autoComplete='off' >
                    <div className='container-de-a-de-veras'>
                        <div className='the-last-of-the-conteiners1'>
                            <div className="cajatitulo">
                                <div className='form-titles'>
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" id="name" defaultValue={form.name} onBlur={handleBlur} placeholder='Give your game a name!' />
                                    {error.name && <p>{error.name}</p>}
                                </div>
                                <div className='form-titles'>
                                    <label htmlFor='image'>Image</label>
                                    <input type="text" name="image" id="image" defaultValue={form.image} onBlur={handleBlur} placeholder='Paste the image url here!' />
                                    {error.image && <p>{error.image}</p>}
                                </div>
                                <div className='form-titles'>
                                    <label htmlFor='releadeDate'>Release Date (DD/MM/AAAA) </label>
                                    <input type="text" name="releaseDate" id="releaseDate" defaultValue={form.releaseDate} onBlur={handleBlur} placeholder='30/04/1999' />
                                    {error.releaseDate && <p>{error.releaseDate}</p>}
                                </div>
                                <div className='form-titles'>
                                    <label htmlFor="description">Description</label>
                                    <textarea cols='50' rows='5' name="description" id="description" defaultValue={form.description} onBlur={handleBlur} placeholder='Describe your game ' />
                                    {error.description && <p>{error.description}</p>}
                                </div>
                                <div className='form-titles'>
                                    <label htmlFor="rating">Rating (1 to 5)</label>
                                    <input type="text" name="rating" id="rating" defaultValue={form.rating} onBlur={handleBlur} />
                                    {error.rating && <p>{error.rating}</p>}
                                </div>
                            </div>
                        </div>
                        <div className='the-last-of-the-conteiners2'>
                            <div className="cajaTitles2">
                                <div className='form-titles' onBlur={handleBlur}>
                                    <label htmlFor="platforms">Platforms</label>
                                    {error.platforms && <p>{error.platforms}</p>}
                                    <div className='komtainer-platforms'>
                                        <label htmlFor='platforms'> PC </label>
                                        <input type='checkbox' id='platforms' name='platforms' defaultValue='PC' value={form.value} />
                                        <label htmlFor='platforms'> Xbox </label>
                                        <input type='checkbox' id='platforms' name='platforms' defaultValue='Xbox' value={form.value} />
                                        <label htmlFor='platforms'> PS4 </label>
                                        <input type='checkbox' id='platforms' name='platforms' defaultValue='PS4' value={form.value} />
                                        <label htmlFor='platforms'> Switch </label>
                                        <input type='checkbox' id='platforms' name='platforms' defaultValue='Switch' value={form.value} />
                                        <label htmlFor='platforms'> Nintendo </label>
                                        <input type='checkbox' id='platforms' name='platforms' defaultValue='Nintendo' value={form.value} />
                                    </div>
                                </div>
                                <div onBlur={handleBlur} className='form-titles'>
                                    <label htmlFor='genre' >Genres</label>
                                    {error.genre && <p>{error.genre}</p>}
                                    <div className='komtainer-genres'>
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
                                        <label htmlFor='shooter'> Shooter</label>
                                        <input type='checkbox' id='genre' name='genre' defaultValue='2' value={form.value} />
                                        <label htmlFor='arcade' > Arcade</label>
                                        <input type='checkbox' id='genre' name='genre' defaultValue='11' value={form.value} />
                                        <label htmlFor='platformer' > Platformer</label>
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
                                </div>
                            </div>
                            <input type='submit' value='Crear jueguito' className='submit-btn'></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateGame