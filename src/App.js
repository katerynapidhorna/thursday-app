import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import AboutPage from "./pages/AboutPage";
import Navigation from "./components/Navigation"

function App() {
  return (
    <div className="App">
      <h1>The Header Which Stay Put</h1>
      <Navigation />
      <Switch>
        <Route path="/discover" component={DiscoverMoviesPage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
      <h2>The Footer Which Stay Put Too</h2>
    </div>
  );
}

export default App;
