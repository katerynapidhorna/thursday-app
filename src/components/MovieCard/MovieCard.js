import React from 'react'
import './MovieCard.css'
import { BrowserRouter as Switch, Route,Link } from "react-router-dom";

export default function MovieCard(props) {
  

  return (
    <div className="movieBox">
        <Link to={`/movie/:${props.imdbID}`}>{props.title}</Link>      
          <img src={props.poster} alt="" />
    </div>
  )
}
