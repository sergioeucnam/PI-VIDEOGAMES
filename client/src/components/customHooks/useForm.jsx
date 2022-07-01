//custom hook to validate a form
import { useState } from "react"
import { createGame } from "../../actions/actions"
import axios from "axios"
import { useHistory } from "react-router-dom"

export function useForm(initialForm, callback) {
    const [form, setForm] = useState(initialForm)
    const [error, setError] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [response, setResponse] = useState(null)
    const history = useHistory()

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
        else if (e.target.name === 'image') {
            setForm({
                ...form,
                image: e.target.value
            })
        }
        // return form
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setError(callback(form))
        if (!form.name) {
            setError({ ...error, name: 'Name is required' })
        }
        else if (Object.keys(error).length === 0) {
            alert("Game added")
            history.push('/home')
            setIsSubmitting(true)
            axios.post('http://localhost:3001/videogames',
                form
            )
                .then(res => console.log(form))
                .catch(err => console.log(err.data))
        } else {
            return alert('Fill all required fields')
        }

    }
    const handleBlur = (e) => {
        // handleChange(e)
        setError(callback(form))
    }

    return { form, error, isSubmitting, response, handleChange, handleSubmit, handleBlur }
}

