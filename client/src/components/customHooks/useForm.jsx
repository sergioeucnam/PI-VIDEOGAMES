//custom hook to validate a form
import { useState } from "react"
import { createGame } from "../../actions/actions"
import axios from "axios"

export function useForm(initialForm, callback) {
    const [form, setForm] = useState(initialForm)
    const [error, setError] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [response, setResponse] = useState(null)

    const handleChange = (e) => {
        if (e.target.name === 'platforms') {
            if (e.target.checked) {
                setForm({
                    ...form,
                    platforms: [...form.platforms, e.target.value]
                })
            } else {
                setForm({
                    ...form,
                    platforms: form.platforms.filter(platform => platform !== e.target.value)
                })
            }
        }
        else if (e.target.name === 'name') {
            setForm({
                ...form,
                name: e.target.value
            })
        }
        else if (e.target.name === 'description') {
            setForm({
                ...form,
                description: e.target.value
            })
        }
        else if (e.target.name === 'rating') {
            setForm({
                ...form,
                rating: e.target.value
            })
        }
        else if (e.target.name === 'genre') {
            if (e.target.checked) {
                setForm({
                    ...form,
                    genre: [...form.genre, e.target.value]
                })
            } else {
                setForm({
                    ...form,
                    genre: form.genre.filter(genre => genre !== e.target.value)
                })
            }
        }
        else if (e.target.name === 'releaseDate') {
            setForm({
                ...form,
                releaseDate: e.target.value
            })
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setError(callback(form))
        console.log('esto seria el form', form);
        if (Object.keys(error).length === 0) {
            axios.post('http://localhost:3001/videogames', {
                // form

                "name": "petro 207770",
                "description": "bbbbbbbbbbbbbb",
                "platforms": ["PC", "Xbox"],
                "releaseDate": "30/04/1999",
                "rating": 2,
                "genre": ["59", "14"]

            }).then(res => console.log('soy la res data', res.data))
            alert("Game added")
            console.log('form', form);
        } else {
            return
        }
        // setIsSubmitting(true)
        // setError({})
        // setResponse(null)
        // console.table(form);
        // axios.post('http://localhost:3001/videogames', {
        //     // form
        //     "name": "Metro 20330",
        //     "description": "tttttttttttttt",
        //     "platforms": ["PC", "Xbox"],
        //     "releaseDate": "30/04/1999",
        //     "rating": 5,
        //     "genre": 1
        // })
        //     .then(res => {
        //         setResponse(res)
        //         // setIsSubmitting(false)
        //         console.log('enviado pibe');
        //     }).catch(err => {
        //         setError(err.response.data)
        //         // setIsSubmitting(false)
        //     }
        //     )

    }
    const handleBlur = (e) => {
        handleChange(e)
        setError(callback(form))
    }

    return { form, error, isSubmitting, response, handleChange, handleSubmit, handleBlur }
}

