//custom hook to validate a form
import { useState } from "react"

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
        else if (e.target.name === 'genres') {
            if (e.target.checked) {
                setForm({
                    ...form,
                    genres: [...form.genres, e.target.value]
                })
            } else {
                setForm({
                    ...form,
                    genres: form.genres.filter(genre => genre !== e.target.value)
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
    const handleSubmit = (e) => { }
    const handleBlur = (e) => {
        handleChange(e)
        setError(callback(form))
    }

    return { form, error, isSubmitting, response, handleChange, handleSubmit, handleBlur }
}

