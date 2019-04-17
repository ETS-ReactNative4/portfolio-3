import React, { PureComponent } from 'react';
import './App.css';
import "animate.css/animate.min.css";
import { ArrowDownCircle } from 'react-feather';
import ScrollAnimation from 'react-animate-on-scroll';
import PageProgress from 'react-page-progress';
import  AnimatedText  from './AnimatedText';
import StarsBackground from './StarsBackground';
import Ground from './Ground';
import LoaderSplash from './Loader';

class App extends PureComponent {

  componentDidMount() {
    const elmnt = document.getElementById("app");
    elmnt.scrollIntoView({ block: 'start',  behavior: 'smooth' });
  }

  scrollToProject = () => {
    const elmnt = document.getElementById("projects");
    elmnt.scrollIntoView({ block: 'start',  behavior: 'smooth' });
  }

  render() {
    return (
      <div>
        <LoaderSplash />
        <div className="App" id="app">
          <StarsBackground/>
          <div className='introText'>
            <span className="nameTitle"><AnimatedText text="Jonathan Stein" fontSize="2" delay={3000} id="a"/></span>
            <br />
            <span className="subtitle"><AnimatedText text="Web developer" fontSize="1.3" delay={5000} id="b"/></span>
              <div className="seeMore">
                <div>
                  <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false}>
                  Explore Below
                  <p className="arrow">
                    <ArrowDownCircle />
                  </p>
                </ScrollAnimation>
                </div>
              </div>
          </div>
        <Ground />
      </div>
    </div>
    );
  }

}

export default App;
