import React, { Component } from 'react';
import Anime from 'react-anime';
import anime from 'animejs'
import './AnimatedText.css';
import Radium, { Style } from 'radium';
import {StyleRoot} from 'radium';

class AnimatedText extends Component {

  constructor(props) {
    super(props);
    this.state = {
      animations: [],
      showText: false
    }
    this.handleHover = this.handleHover.bind(this);
    this.addToAnimating = this.addToAnimating.bind(this);
    this.removeFromAnimating = this.removeFromAnimating.bind(this);
    this.isAnimating = this.isAnimating.bind(this);
    // this.show = this.show.bind(this);
  }

  addToAnimating(i) {
    this.state.animations.push(i);
  }

  removeFromAnimating(i) {
    var index = this.state.animations.indexOf(i);
    this.state.animations.splice(index, 1);
  }

  isAnimating(i) {
    if (this.state.animations.includes(i)) {
      return true;
    } else {
      return false;
    }
  }

  componentWillMount() {
    setTimeout( () => {
      this.setState({
        showText: true
      })
    }, this.props.delay);
  }



  handleHover(i) {
    let isThisAnimating = this.isAnimating(i);
    if (!isThisAnimating) {
      anime({
        targets: `.text-root${this.props.id}${i}`,
        scale: [this.props.fontSize * 1.5],
        easing: "easeInOutSine",
        duration: 400,
        rotate: ['-.1turn'],
        direction: 'alternate',
        width: this.props.fontSize*20,
        color: "rgb(255,0,0)",
        begin: () => {
          this.addToAnimating(i);
        },
        complete: () => {
          this.removeFromAnimating(i);
        }
      })
    }
  }

  render () {
    const styles = {
      textStyle: {
        fontSize: `${this.props.fontSize}em`,
        lineHeight: `${this.props.fontSize}em`,
        letterSpacing: `${this.props.fontSize/1.3}em`,
      }
    }
    const letters = this.props.text.split('').map(letter => {
      if (letter === ' ') {
        return <div>&nbsp;</div>
      } else {
        return <span>{letter}</span>
      }
    });

    if (this.state.showText ) {
      return (
        <div>
          <div className="text-root">
            <StyleRoot>
            { letters.map((letter, i) =>
              <Anime key={i} delay={i * 100}
                scale={[0, this.props.fontSize]}>
                <span key={`${this.props.id}${i}`} className={`text-root${this.props.id}${i}`} style={styles.textStyle} onMouseEnter={evt => this.handleHover(i)}>{letter}</span>
              </Anime>
            )}
            </StyleRoot>
          </div>
          <div className="text-root-mobile">
            <StyleRoot>
            { letters.map((letter, i) =>
              <Anime key={i} delay={i * 100}
                scale={[0, this.props.fontSize]}>
                <span key={`${this.props.id}${i}`} className={`${this.props.id}${i}`}>{letter}</span>
              </Anime>
            )}
            </StyleRoot>
          </div>
      </div>
    )
  } else {
    return null;
  }
}
}

export default Radium(AnimatedText);
