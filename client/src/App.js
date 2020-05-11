import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import AppNavBar from "./Components/AppNavbar"


// Importing pages
import Login from "./pages/login.js";
import History from "./pages/history.js";
import Home from "./pages/home.js";
import SignUp from "./pages/signup.js";
import Landing from "./pages/landing.js";

function App() {
  return (
    <Router>  
      {/* <AppNavBar /> */}
      <div className="App">
    
      <Switch>
      <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/history" component={History} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;

