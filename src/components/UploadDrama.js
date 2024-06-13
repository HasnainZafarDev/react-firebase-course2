import { addDoc, collection, getDocs } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from '../config/firebase'
import DramasList from './DramasList'

const UploadDrama = () => {
    const [dramaName,setDramaName] = useState("")
    const [actorName,setActorName] = useState("")
    const [rating,setRating] = useState(0)

    const dramaCollectionRef = collection(db,"Dramas")

    const submitDrama = async() => {
        try {
            await addDoc(dramaCollectionRef,{
                Name: dramaName,
                Actor: actorName,
                Rating: rating
            })
    
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
      <h1>Firebase Upload Data</h1>
    <div className='inputContainer'>
      <input placeholder='Enter Drama Name..' onChange={(e)=> setDramaName(e.target.value)}/>
      <input placeholder='Enter Actor Name..' onChange={(e)=> setActorName(e.target.value)}/>
      <input placeholder='Enter Rating..' onChange={(e)=> setRating(e.target.value)}/>
      <button onClick={submitDrama}>Upload Drama</button>
      <DramasList />
    </div>
    </div>
  )
}

export default UploadDrama
