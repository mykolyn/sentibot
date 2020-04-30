import React, { Component } from 'react';
import axios from'axios';

class App extends Component {
state= {
  MessagesList:[],
  // {title:'cats'},{title:'dog'}
  newMessage:""
}



componentDidMount(){
axios.get('/api/convo')
.then((result) => {
  console.log(result.data)
  this.setState({MessagesList: result.data})
})
.catch(err=> console.log(err))
}

handleChange = (event)=>{
this.setState({ newMessage: event.target.value})
};

handleClick = (event) => {
  event.preventDefault();
  axios.post('/api/convo', {content: this.state.newMessage})
  .then((result) =>{
    console.log("result from app.js", result.data)
   
      window.location.reload();
    
  })
  .catch(err=> console.log(err))
}
  render(){
    return(
      <div className='App'>
        <form> 
          <input val={this.state.newMessage} onChange={this.handleChange}/>
          <button onClick={this.handleClick}>submit</button>
        </form>
        <div>
          {this.state.MessagesList.map(event =>
            <p key={event._id}>{event.content}</p>
            )}
        </div>
      </div>
    )
  }

};

export default App;
