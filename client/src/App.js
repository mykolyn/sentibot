import React, { Component } from 'react';
import AppNavBar from './Components/AppNavbar'
import MessageList from './Components/MessageList'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
              <AppNavBar></AppNavBar>
              <h1>State your Argument</h1>
              <MessageList></MessageList>

        
      </div>
    )
  }
}

export default App;
