import React, { useContext, useReducer } from 'react'
import './App.css'
import NotesContext from './Context'
import notesReducer from "./reducer"
import Nav from './components/Nav'
import AddNote from './components/AddNote'
import EditNote from './components/EditNote'
import NoteList from './components/NoteList'

const App = () => {
  const initialState = useContext(NotesContext)
  const [state, dispatch] = useReducer(notesReducer, initialState)
  return (
    <NotesContext.Provider value={{ state, dispatch }}>
      <Nav />
      {state.currentNote === null ? (
        <div>
          <AddNote />
          <NoteList />
        </div>
      ) : (
        <EditNote />
      )}
    </NotesContext.Provider>
  )
}

export default App
