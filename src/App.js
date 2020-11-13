import React from "react";
import info from "./components/About";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import About from "./components/About";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/contact" exact component={Contact} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/" component={About} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
