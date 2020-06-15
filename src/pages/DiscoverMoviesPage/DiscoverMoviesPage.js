import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./DiscoverMoviesPage.css";
import { useHistory } from "react-router-dom";

export default function DiscoverMoviesPage(props) {
  const params = useParams();
  const [searchState, set_searchState] = useState({ status: "Idle" });
  const [searchText, set_searchText] = useState(params.searchtext || "");
  const [movieInfo, set_movieInfo] = useState([]);
  const history = useHistory();
  const apiKey = "&apikey=4b9ca906";
  const url = "https://www.omdbapi.com/?";

  const search = async () => {
    const encodedSearchQuery = encodeURIComponent(params.searchtext);

    // const resp = await fetch(`${url}s=${encodedSearchQuery}${apiKey}`);
    // const json = await resp.json();
    // set_movieInfo(json.Search);

    // fetch(`${url}s=${encodedSearchQuery}${apiKey}`).then((resp) => {
    //   console.log("resp", resp);
    //   resp.json().then((j) => {
    //     console.log("json", j);
    //     set_movieInfo(j.Search);
    //   });
    // });

    const data = await fetch(
      `${url}s=${encodedSearchQuery}${apiKey}`
    ).then((r) => r.json());
    
    set_movieInfo(data.Search);
  };

  const navigateToSearch = () => {
    const routeParam = encodeURIComponent(searchText);
    history.push(`/discover/${routeParam}`);
  };

  useEffect(() => {
    if (!params.searchtext) {
      set_movieInfo([]);
    } else {
      search();
    }
  }, [params.searchtext]);
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
          navigateToSearch();
        }}
      >
        Search the movie
      </button>
      <div className="moviesContainer">
        {movieInfo.map((m, i) => {
          return (
            <MovieCard
              key={i}
              title={m.Title}
              year={m.Year}
              poster={m.Poster}
              imdbID={m.imdbID}
              details={m}
            />
          );
        })}
      </div>
    </div>
  );
}
