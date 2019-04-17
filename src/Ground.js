import React, { PureComponent } from 'react';
import anime from 'animejs'
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

import './Ground.css'

export default class Ground extends PureComponent {

  constructor() {
    super();
    this.handleHover = this.handleHover.bind(this);
  }

  componentDidMount() {
    this.handleHover()
  }

  handleHover = () => {
    anime({
      targets: '.el',
      translateY: [{ value: -100, duration: 1000 }, { value: 0, duration: 1000 }],
      delay(target, index) {
        return (index * 30);
      },
      loop: true,
      easing: 'easeInOutQuad',
    });
  }

  render() {
    const { props } = this;
    const blocks = [];
    for (let i = 0; i < 25; i += 1) {
      blocks.push(i);
    }
    return (
      <div className="groundWrapper">
        <div id="waves">
          <div className="line">
            {
              blocks.map((block, i) => <div key={i} className="el" />)
            }
          </div>
        </div>
        <div className="waterBackground">
          <Projects projectRef={props.projectRef} />
          <Skills />

        </div>
      </div>

    )
  }
}
