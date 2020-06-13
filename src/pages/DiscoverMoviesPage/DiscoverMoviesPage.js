import React, { useState } from "react";
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
  const url = "https://www.omdbapi.com/?";

    set_searchState({status: 'Searching'})
    const data = await Axios.get(`${url}s=${queryParam}${apiKey}`);
      const movieData = data.data.Search;
      if (movieData) {
        set_searchState({status: 'Search results fetched'})
        set_movieInfo(movieData)
      }
  };

  return (
    <div>
      <p>I am Discover page</p>
      <input value={searchText} onChange={(event) => {
          set_searchText(event.target.value);
        }}
      />
      <button onClick={() => { search() }} >
        Search the movie
      </button>
      <div className="moviesContainer">
      {movieInfo.map((m,i)=>{
          return <MovieCard key={i}  title={m.Title} year={m.Year} poster={m.Poster} imdbID={m.imdbID} details={m}/>
       })}
      </div>
    </div>
  );
}
