import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Challenges from "./components/challenges/Challenges";
import Navbar from './components/Navbar'
import Results from "./components/results/Results";
import SpeedCheck from "./components/speedcheck/SpeedCheck";

function App() {
  return (
    <div className="container pt-5" >
      <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={SpeedCheck} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/challenges" component={Challenges} />
        
        <Redirect to="" />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
