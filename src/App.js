import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import About from "./Pages/about";
import Education from "./Pages/education";
import Hobbies from "./Pages/hobbies";
import Experience from "./Pages/experience";
import Home from "./Pages/home";
import Error from "./Pages/error";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about/" component={About} />
        <Route exact path="/Education/" component={Education} />
        <Route exact path="/Experience/" component={Experience} />
        <Route exact path="/Hobbies/" component={Hobbies} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
