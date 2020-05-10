import React from 'react'

const NotesContext = React.createContext({
    currentNote: null,
    notes: [
        {id: 1, text: "Study"},
        {id: 2, text: "Exercise"}
    ]
})

export default NotesContext