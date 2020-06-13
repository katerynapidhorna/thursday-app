import React, { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage/DiscoverMoviesPage";
import AboutPage from "./pages/AboutPage";
import Navigation from "./pages/Navigation";
import MovieDetails from './components/MovieDetails'

function App() {
  return (
    <div className="App">
      <Navigation  />
      <Switch>
        <Route exact path="/discover" component={DiscoverMoviesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/discover/:imdbRef" component={MovieDetails} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
