import React, { Component } from 'react';
import Anime from 'react-anime';
import anime from 'animejs'
import './StarsBackground.css'
import Star from './Star';
import Radium, { Style } from 'radium';
import {StyleRoot} from 'radium';

class StarsBackground extends Component {
  generateStars() {

  }
  render () {
    const stars = [];
    for (let i = 0; i < this.props.starCount; i++) {
      stars.push(i);
    };

    return (
    <StyleRoot>

      <div className="background-root">
        {
          stars.map((star, i) => {
            return <Star key={i} />
          })
        }
      </div>
    </StyleRoot>

    );
  }
}

export default Radium(StarsBackground);
