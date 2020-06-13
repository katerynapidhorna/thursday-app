import React from 'react'
import './MovieCard.css'
import { BrowserRouter as Switch, Route,Link } from "react-router-dom";
import {NavLink} from 'react-bootstrap'
import MovieDetails from '../MovieDetails'

export default function MovieCard(props) {
  

  return (
    <div className="movieBox">
        <Link to={`/discover/:${props.imdbID}`}>{props.title}</Link>      
          <img src={props.poster} alt="" />
    </div>
  )
}
