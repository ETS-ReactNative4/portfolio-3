import React, { Component } from 'react';
import Anime from 'react-anime';
import anime from 'animejs'
import './Star.css';
import Radium, { Style } from 'radium';
import {StyleRoot} from 'radium';

class Star extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const randY = Math.floor(Math.random()*90)
    const randX = Math.floor(Math.random()*100)

    const intensity = Math.floor(Math.random()*5 + 2)

    const pulseKeyframes = Radium.keyframes({
      '0%': {height: `${intensity}px`, width: `${intensity}px`},
      '100%': {height: `${Math.floor(intensity*.5)}px`, width: `${Math.floor(intensity*.5)}px`},
    }, 'pulse');


    const styles = {
      star: {
        animation: `x ${intensity/2}s ease infinite alternate`,
        animationName: pulseKeyframes,
        color: 'white',
        position: 'absolute',
        top: `${randY}%`,
        left: `${randX}%`,
        borderRadius: '0%',
        boxShadow:
          `inset 0px 0px ${intensity*5}px ${intensity*2}px rgba(255,255,255,0.6),
          0 0 ${intensity*5}px ${intensity*1.5}px rgba(255,255,255,0.3)`
      }
    };

    return (
        <p style={[styles.star]} />
    )
  }
}
export default Radium(Star);
