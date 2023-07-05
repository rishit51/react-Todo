import React from 'react'
import notes from "../assets/data"
import ListItem from '../components/ListItem'
const NotesListPage = () => {
  return (
    <div className='notes-list'>
        {
            notes.map(note=><ListItem name={note.body}/>)
        }
       
    </div>
  )
}

export default NotesListPage