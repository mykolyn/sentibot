import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';


// Importing pages
import Login from "./pages/login.js";
import History from "./pages/history.js";
import Home from "./pages/home.js";
import SignUp from "./pages/signup.js";

function App() {
  return (
    <Router>
      <div className="App">
      
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/history" component={History} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;

