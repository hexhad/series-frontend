import React from 'react'
import { useParams } from 'react-router-dom'

export default function Cast() {
   const{id}= useParams();
  return (
    <div>Cast {id}</div>
  )
}
