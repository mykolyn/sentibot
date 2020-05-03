import React, { Component } from 'react';
import AppNavBar from './Components/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

// Importing pages
import Login from "./pages/login.js";
import History from "./pages/history.js";
import Home from "./pages/home.js";
import SignUp from "./pages/signup.js";
class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavBar />

      </div>
    )
  }
}

export default App;
