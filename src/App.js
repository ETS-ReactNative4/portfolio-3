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
            <span><AnimatedText text={"Skills"} fontSize=".7" delay={3000} id="d"/></span>
            <span><AnimatedText text={"Contact"} fontSize=".7" delay={3000} id="e"/></span>
          </div>
        </div>
        <Ground />
      </div>
    );
  }
}

export default App;
