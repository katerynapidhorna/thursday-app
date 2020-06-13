import React, { useState, useEffect } from "react";
import Axios from "axios";
import MovieCard from '../../components/MovieCard/MovieCard'
import './DiscoverMoviesPage.css'

export default function DiscoverMoviesPage(props) {
  const [searchState, set_searchState] = useState({status: 'Idle'})
  const [searchText, set_searchText] = useState("");
  const [movieInfo, set_movieInfo] = useState([]);
  const queryParam = encodeURIComponent(searchText);
  const apiKey ='&apikey=4b9ca906'
  const search = async () => {
    set_searchState({status: 'Searching'})
    const data = await Axios.get(`${props.url}${queryParam}${apiKey}`);
    console.log("data.data.Search", data);
    //find movie
      const movieData = data.data.Search;
     // console.log('movie data', movieData)
      if (movieData) {
        set_searchState({status: 'Search results fetched'})
        set_movieInfo(movieData)
      }
  };
console.log('movie info', movieInfo)
  return (
    <div>
      <p>I am Discover page</p>
      <input
        value={searchText}
        onChange={(event) => {
          set_searchText(event.target.value);
        }}
      />
      <button
        onClick={() => {
          search();
        }}
       >
        Search the movie
      </button>
      <div className="moviesContainer">
      {movieInfo.map((m)=>{
          return <MovieCard  title={m.Title} year={m.Year}/>
       })}
      </div>
    </div>
  );
}
