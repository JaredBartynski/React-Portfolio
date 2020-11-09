import React from "react";
import info from "./components/info";
import navbar from "./components/navbar";
import contact from "./components/contact";
import portfolio from "./components/portfolio";

function App() {
  return (
    <>
      <Router>
        <navbar />
        <Switch>
          <Route path="/" exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
