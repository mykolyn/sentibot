import React, { Component } from 'react';
import "./chatcards.css"

class Chatcards extends Component {



render(){
    return(
        <div>
           
           <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            
                <div className="card card-cascade narrower">
                    <div className="view view-cascade overlay">
                        <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg"
                            alt="Card image cap" />
                        <a>
                            <div className="mask rgba-white-slight"></div>
                        </a>
                    </div>

                    <div className="card-body card-body-cascade">

                        <h5 className="pink-text pb-2 pt-1"><i className="fas fa-utensils"></i> Chatbot</h5>
                        <h4 className="font-weight-bold card-title">Talk about it</h4>
                        <p className="card-text">Describe what happened, it can be about anything. Our goal is to help you process your emotions, and be able to get everything off your chest.</p>

                    </div>

                </div>
    </div>
                        <div className="col-sm">
                            
                <div className="card card-cascade narrower">
                    <div className="view view-cascade overlay">
                        <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg"
                            alt="Card image cap" />
                        <a>
                            <div className="mask rgba-white-slight"></div>
                        </a>
                    </div>

                    <div className="card-body card-body-cascade">

                        <h5 className="pink-text pb-2 pt-1"><i className="fas fa-utensils"></i> Machine Learning</h5>
                        <h4 className="font-weight-bold card-title">Reflect on it</h4>
                        <p className="card-text">Our chatbot will help get your thoughts together. Your messages are processed with machine learning to determine how you are feeling</p>

                    </div>

                </div>
    </div>
                        <div className="col-sm">
                            
                <div className="card card-cascade narrower">
                    <div className="view view-cascade overlay">
                        <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg"
                            alt="Card image cap" />
                        <a>
                            <div className="mask rgba-white-slight"></div>
                        </a>
                    </div>

                    <div className="card-body card-body-cascade">

                        <h5 className="pink-text pb-2 pt-1"><i className="fas fa-utensils"></i>Communication</h5>
                        <h4 className="font-weight-bold card-title">Respond to it</h4>
                        <p className="card-text">Resolve the conflict or issue using effective communication methods. Our chatbot will guide you through creating I-statements</p>

                    </div>

                </div>
    </div>
                    </div>
                </div>

        </div>
    )
}


}

export default Chatcards






