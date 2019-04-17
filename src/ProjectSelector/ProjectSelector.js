import React, { PureComponent } from 'react';
import Radium, { StyleRoot } from 'radium';
import './ProjectSelector.css';

class ProjectSelector extends PureComponent {

  render() {
    const { props } = this;
    const initialSize = 2;
    const selectedSize = 3;

    const selectedAnim = Radium.keyframes({
      '0%': { fontSize: `${initialSize}em` },
      '30%': { fontSize: `${initialSize * .97}em` },
      '80%': { fontSize: `${selectedSize * 1.05}em` },
      '100%': { fontSize: `${selectedSize}em` },
    });

    const deselectedAnim = Radium.keyframes({
      '0%': { fontSize: `${selectedSize}em` },
      '30%': { fontSize: `${selectedSize * 1.05}em` },
      '80%': { fontSize: `${initialSize * .97}em` },
      '100%': { fontSize: `${initialSize}em` },
    });

    let styles = {};

    if (!props.currentlySelected) {
      styles = {
        selector: {
          animation: `.5s ease`,
          animationName: deselectedAnim,
          color: `white`,
          fontSize: `${initialSize}em`,
          textShadow: `-1px 2px 1px #0006`,
          opacity: .8
        }
      };
    } else {
      styles = {
        selector: {
          animation: `.5s ease`,
          animationName: selectedAnim,
          color: 'white',
          opacity: 1,
          transition: '.2s',
          fontSize: `${selectedSize}em`,
          textShadow: `-1px 2px 1px #0000004d`
        }
      };
    }
    return (
      <div>
        <StyleRoot>
          <div className="selector" style={styles.selector}>{props.name}</div>
        </StyleRoot>
      </div>
    )
  }
}

export default Radium(ProjectSelector)
