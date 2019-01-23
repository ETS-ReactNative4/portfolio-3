import React, { PureComponent } from 'react';
import Radium, {StyleRoot} from 'radium';
import Anime from 'react-anime';
import anime from 'animejs'
import './AnimatedText.css';

class AnimatedText extends PureComponent {

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



  componentWillMount() {
    const { props } = this;

    setTimeout( () => {
      this.setState({
        showText: true
      })
    }, props.delay);
  }

  addToAnimating = i => {
    const { state } = this;
    const { animations } = state;
    animations.push(i);
  }

  removeFromAnimating = i => {
    const { state } = this;
    const { animations } = state;

    const index = animations.indexOf(i);
    animations.splice(index, 1);
  }

  isAnimating = i => {
    const { state } = this;
    const { animations } = state;
    if (animations.includes(i)) {
      return true;
    }
      return false;

  }


  handleHover(i) {
    const { props } = this;

    const isThisAnimating = this.isAnimating(i);
    if (!isThisAnimating) {
      anime({
        targets: `.text-root${props.id}${i}`,
        scale: [props.fontSize * 1.5],
        easing: "easeInOutSine",
        duration: 400,
        rotate: ['-.1turn'],
        direction: 'alternate',
        width: props.fontSize*20,
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
    const { props, state } = this;
    const styles = {
      textStyle: {
        fontSize: `${props.fontSize}em`,
        lineHeight: `${props.fontSize}em`,
        letterSpacing: `${props.fontSize/1.3}em`,
      }
    }
    const letters = props.text.split('').map(letter => {
      if (letter === ' ') {
        return <div>&nbsp;</div>
      }
        return <span>{letter}</span>

    });

    if (state.showText ) {
      return (
        <div>
          <div className="text-root">
            <StyleRoot>
            { letters.map((letter, i) =>
              <Anime key={i} delay={i * 100}
                scale={[0, props.fontSize]}>
                <span key={`${props.id}${i}`} className={`text-root${props.id}${i}`} style={styles.textStyle} onMouseEnter={evt => this.handleHover(i)}>{letter}</span>
              </Anime>
            )}
            </StyleRoot>
          </div>
          <div className="text-root-mobile">
            <StyleRoot>
            { letters.map((letter, i) =>
              <Anime key={i} delay={i * 100}
                scale={[0, props.fontSize]}>
                <span key={`${props.id}${i}`} className={`${props.id}${i}`}>{letter}</span>
              </Anime>
            )}
            </StyleRoot>
          </div>
      </div>
    )
  }
    return null;
}
}

export default Radium(AnimatedText);
