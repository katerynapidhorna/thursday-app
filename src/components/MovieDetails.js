import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios'

export default function MovieDetails() {
  const[movie, set_movie] = useState({})
  const params = useParams()
  const url = `https://www.omdbapi.com/?i=${params.imdbRef.replace(/:/g, '')}&apikey=4b9ca906`
 
  console.log(params.imdbRef.replace(/:/g, ''))

  async function getMovie() {
    const response = await Axios.get(url)
    console.log(response)
    set_movie(response.data)
  }
  useEffect(()=>{
    getMovie()
  },[])
  console.log('moovieee', movie)
  return (
    <div>
      <p className='detailTitle'>{movie.Title}</p>
      <p>Year:{movie.Year}</p>
        <p>Rated:{movie.Rated}</p>
    </div>
  )
}
