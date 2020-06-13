import React from 'react'
import './MovieCard.css'
export default function MovieCard(props) {
  return (
    <div className="movieBox">
        <h3 >{props.title}</h3 >
        <p>Year: {props.year}</p>
    </div>
  )
}
