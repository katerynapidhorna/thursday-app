import React, { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage/DiscoverMoviesPage";
import AboutPage from "./pages/AboutPage";
import Navigation from "./pages/Navigation";
import Axios from "axios";

function App() {
  const URL = "https://www.omdbapi.com/?";//http://www.omdbapi.com/?apikey=4b9ca906&
  const [MoviesList, setMoviesList] = useState([]);

  const getMoviesList = async () => {
    let moviesList = [];
    try {
      const response = await Axios.get(URL);
      console.log(response.data.Search);
      moviesList = response.data.Search;
      console.log('MOOOOOOVIES LIST,', moviesList)
      //console.log('data recieved', moviesList)
    } catch (error) {
      console.log(error.message);
    }
    setMoviesList(moviesList);
  };
  useEffect(() => {
    getMoviesList();  
  }, []);
  //console.log("MoviesList", MoviesList);

  return (
    <div className="App">
      <h1>The Header Which Stay Put</h1>
      <Navigation  />
      <Switch>
        <Route path="/discover" component={DiscoverMoviesPage}>
          <DiscoverMoviesPage url={URL}/>
        </Route>
        <Route path="/about" component={AboutPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
      <h2>The Footer Which Stay Put Too</h2>
    </div>
  );
}

export default App;
