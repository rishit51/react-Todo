import React from 'react'
import { useState,useEffect } from 'react'
import ListItem from '../components/ListItem'
import AddButton from '../components/AddButton'
const NotesListPage = (props) => {
  let [notes,setNotes]=useState([])


  useEffect(()=>{

   getNotes()

  },[])


  let getNotes = async ()=>{

    let notes= await fetch('http://localhost:8000/notes')

    notes= await notes.json()

    setNotes([...notes])


  }
  



  return (
    <div className='notes'>
      <div className='notes-header'>
        <h2 className='notes-title'>&#9782;Notes</h2>
        <p className='notes-count'>{notes.length} </p>
      </div>
    <div className='notes-list'>
        {
            notes.map(note=><ListItem note={note} name={note.body} id={note.id}/>)
        }
       
    </div>
    <AddButton />
    </div>
  )
}

export default NotesListPage