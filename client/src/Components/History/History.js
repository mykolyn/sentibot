import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Exercise = props => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.sentiScore}</td>
    {/* <td>{props.exercise.date.substring(0,10)}</td> */}
    <td>{"12/2/1999"}</td>
    <td>
      {/* <Link to={"/edit/"+props.exercise._id}>edit</Link> | */}
       <a href="#" style={{color:"red"}} onClick={() => { props.deleteExercise(props.exercise._id) }}>Delete</a>
    </td>
  </tr>
)

export default class ChatList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this)

    this.state = {exercises: []};
  }

  componentDidMount() {
    axios.get('/exercises/')
      .then(response => {
        this.setState({ exercises: response.data })
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteExercise(id) {
    axios.delete('/exercises/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }

  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
    })
  }

  render() {
    return (
      <div style={{marginTop:"10%"}}>
        <h3>Chat History</h3>
        <br/>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Sentiment Score</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }
          </tbody>
        </table>
      </div>
    )
  }
}