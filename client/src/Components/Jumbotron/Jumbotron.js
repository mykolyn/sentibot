import React, { Component } from "react";
//import { Link, Redirect } from "./node_modules/react-router-dom";
// import "./style.css";
//import API from "../utils/Api";
import "./jumbotron.css"
import video from '../../assets/talk.mp4'
class Jumbotron extends Component {



  // state = {
  //     user: null,
  //     redirect: ""
  // };

  // componentDidMount() {
  //     this.checkUser()
  // }


  // checkUser = () => {
  //     // console.log(event.target.value)
  //     API.checkUser()
  //         // .then(res => this.setState({ user: res.data.user.username }))
  //         .then(res => {

  //             console.log(res)
  //             if (res.data === "NoUser") {

  //                 console.log("in redirect")
  //                 // return <Redirect to="/login" />
  //                 this.setState({ redirect: "Yes" })
  //             }
  //             else {
  //                 console.log("in setstate")
  //                 this.setState({ user: res.data.user.username })
  //             }
  //         }

  //         )
  //         // .then(res=>console.log(res.data))
  //         // .then(BrowserRouter.push('/login'))
  //         .catch(err => console.log(err));
  // }
  // //logout 
  // logout = () => {

  //     API.logout()
  //         .then(() => this.setState({ user: null, redirect: "Yes" }))
  //     //  .then(()=>console.log("logged out"))
  // }
//style={{backgroundColor: "red"}}



/* <video className="video-container video-container-overlay" autoPlay="true" loop="true" muted="true" data-reactid=".0.1.0.0"/>
<source type="video/mp4" data-reactid=".0.1.0.0.0" src={video}/> */
  render() {
    return (
      <div>
        {/* <div className="jumbotron" style={{ marginTop: "75px",backgroundColor: "white", borderRadius:15}}>
          <h1 className="displsm">Sentibot</h1>
          <p className="lead">Having trouble resolving a conflict? We're here to help :)</p>
          <hr className="sm" />
          <p>We use machine learning to guide you through assertive conflict resolution methods. Powered by IBM watson applied theories.</p>
           <p className="lead">
              <a className="btn btn-primary btn-sm" href="#" role="button">Learn more</a>
     
<video src={video} width="100%" height="60%" autoPlay="true" loop="true" muted="true" > </video>

          
            </p>
          </div> */}


<div className="jumbotron">
    <div className="container">
       <div className="overlay" style={{marginTop:"2%", marginBottom:"2%"}}>
       <h1>Say what you want to say</h1>
       <br/>
       <p className="lead">Having trouble resolving a personal or professional conflict? We're here to help you effectively get your point across</p>
          <hr className="sm" />
          <p>We use machine learning to guide you through assertive conflict resolution methods. Powered by IBM watson and applied theories. Our mission is to teach you effective communication skills.</p>
                 {/* <p>
        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p> */}
      </div>
       <video src={video} width="100%" height="5%" autoPlay="true" loop="true" muted="true" ></video>

    </div>
  </div>

  <div className="container jumbotron-cards">
    <div className="row">
      <div className="col-sm">
        <h2>Machine Learning</h2>
        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
        {/* <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p> */}
      </div>
      <div className="col-sm">
        <h2>Express your feelings</h2>
        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
        {/* <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p> */}
      </div>
      <div className="col-sm">
        <h2>Resolve Conflicts</h2>
        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        {/* <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p> */}
      </div>
    </div>


          
            
          </div>

        </div>
        )
    }

}


export default Jumbotron;