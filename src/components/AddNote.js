import React, { useState, useContext, useRef, useEffect } from 'react'
import NotesContext from '../Context'

const AddNote = () => {
    const {dispatch} = useContext(NotesContext)
    const [value, setValue] = useState("")
    
    const ref = useRef()

    useEffect(() => {
        ref.current.focus()
    }, [])

    const handleChange = e => {
        setValue(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (value.trim() === '') {
            alert('Type a valid entry')
        } else {
            dispatch({ type: 'ADD_NOTE', payload: value })
            setValue('')
        }
    }

    return (
        <div className="form">
            <form action="" onSubmit={handleSubmit}>
                <input type="text" ref={ref} onChange={handleChange} value={value} />
                <button type="submit">Add Note</button>
            </form>
        </div>
    )
}

export default AddNote
