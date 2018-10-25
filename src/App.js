import React, { Component } from 'react';
import './App.css';
import  AnimatedText  from './AnimatedText';
import StarsBackground from './StarsBackground';
import { Ground } from './Ground';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StarsBackground starCount={150}/>
        <div className='introText'>
          <span className="nameTitle"><AnimatedText text={"Jonathan Stein"} fontSize="2" id="a"/></span>
          <br></br>
          <span className="subtitle"><AnimatedText text={"Web developer"} fontSize="1.3" delay={2000} id="b"/></span>
          <div className="links">
            <span><AnimatedText text={"Projects"} fontSize=".7" delay={3000} id="c"/></span>
            <span><AnimatedText text={"About"} fontSize=".7" delay={3000} id="d"/></span>
            <span><AnimatedText text={"Contact"} fontSize=".7" delay={3000} id="e"/></span>
          </div>
        </div>
        <Ground />
      </div>
    );
  }
}

export default App;

//
// <div className="svgContainer">
//   <svg width="100%" height="100%" display="block" margin="auto">
//     <path id="fishingLine" d="M 350 0 Q 300 50 350 50 Q 400 100 350 150 Q 300 200 350 250 C 400 300 300 300 350 400 C 400 450 350 450 350 600 A 50 50 0 1 1 350 600" stroke="white" opacity=".5" strokeWidth="5" fill="none" />
//   </svg>
// </div>
