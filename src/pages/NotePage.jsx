import React from 'react'
import { useParams } from 'react-router-dom'

import { Link,useNavigate } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'
import { useState,useEffect } from 'react'


const NotePage = (props) => {
  let navigate=useNavigate()
  const {id}=useParams()
  const [note,setNote]=useState(null)
  useEffect(()=>{
    getNote(id)
  },[id]
  )

  const getNote= async ()=>{

    if(id==='new'){return}
    const response= await fetch(`http://localhost:8000/notes/${id}`)
    
    const note= await response.json()
    setNote(note)

  }
const updateNote= async ()=>{
  await fetch(`http://localhost:8000/notes/${id}`,{method:'PUT'
  ,headers:{
    'Content-Type':'application/json'
  },body:JSON.stringify({...note,'updated':new Date()})})
}
const createNote= async ()=>{
  await fetch(`http://localhost:8000/notes`,{method:'POST'
  ,headers:{
    'Content-Type':'application/json'
  },body:JSON.stringify({...note,'updated':new Date()})})
}
const deleteNote = async ()=>{
  await fetch(`http://localhost:8000/notes/${id}`,{method:'DELETE'
  ,headers:{
    'Content-Type':'application/json'
  }}
 
  )
 navigate('/')}
  const handleSubmit=()=>{

    if(id!=='new' && !note.body){
      deleteNote()
    }
    else if(id!=='new' ){
      updateNote()
    }
    else if (id==='new'&&note.body!==null){
createNote()
    }


    updateNote()
    
    // eslint-disable-next-line no-restricted-globals
   
  }
  

  return (
    <div className='note'><div className='note-header'><Link to='/'><ArrowLeft  onClick={handleSubmit} /></Link> <button onClick={deleteNote}>Delete</button></div><textarea name="" id="" cols="30" rows="10" value={note?.body} onChange={(e)=>{setNote({...note,'body':e.target.value})}}></textarea></div>
  )
}

export default NotePage