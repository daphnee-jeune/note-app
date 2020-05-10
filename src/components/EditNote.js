import React, { useState, useContext, useRef, useEffect } from 'react'
import NotesContext from '../Context'

const EditNote = () => {
    const { state, dispatch } = useContext(NotesContext)
  const [value, setValue] = useState(state.currentNote.text)

  let ref = useRef()

  useEffect(() => {
    ref.current.focus()
  })

  const handleChange = event => {
    setValue(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (value.trim() === '') {
      alert('Cannot add a blank note')
    } else {
      dispatch({ type: 'UPDATE_NOTE', payload: value })
      setValue('')
    }
  }

  return (
    <div className='note-form'>
      <form onSubmit={handleSubmit} action=''>
        <textarea
          ref={ref}
          onChange={handleChange}
          value={value}
          name=''
          id=''
          cols='30'
          rows='10'
          className="updateBox"
        />
        <div style={{ textAlign: 'center' }}>
          <button className="updateBtn">Update note</button>
        </div>
      </form>
    </div>
    )
}

export default EditNote
