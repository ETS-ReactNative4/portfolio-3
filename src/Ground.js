import React, { Component } from 'react';
import Anime from 'react-anime';
import anime from 'animejs'
import './Ground.css'
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

export class Ground extends Component {

  constructor() {
    super();
    this.handleHover = this.handleHover.bind(this);
  }

  componentDidMount() {
    this.handleHover()
  }

  handleHover() {
    anime({
      targets: '.el',
      translateY: [{value: -100, duration: 1000}, {value: 0, duration: 1000}],
      delay: function(target, index) {
          return (index* 30);
      },
      loop: true,
      easing: 'easeInOutQuad',
    });
  }



  render () {
    const blocks = [];
    for (let i = 0; i < 50; i++) {
      blocks.push(i);
    }
    return (
      <div className="groundWrapper">
        <div id="waves">
          <div className="line">
            {
              blocks.map((block, i ) => {
                return <div key={i} className="el"></div>
              })
            }
          </div>
        </div>
        <div className="waterBackground">
          <Projects />
          <Skills />
        </div>
      </div>

    )
  }
}
