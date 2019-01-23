import "animate.css/animate.min.css";
import React, { PureComponent } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import ReactSVG from 'react-svg'
import jonathan from '../img/jonathan.svg';
import './Skills.css';

function circularText(txt, radius, classIndex, className) {
  const splitTxt = txt.split("");
  const classIndexGotten = document.getElementsByClassName(className)[classIndex];

  const deg = 360 / splitTxt.length;


let origin = 0;

  splitTxt.forEach((ea) => {
    const letter = `<p style='position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${ea}</p>`;
    classIndexGotten.innerHTML += letter;
    origin += deg;
  });
}

class Skills extends PureComponent {

  componentDidMount() {
    circularText("NodeJS  AngularJs  Angular2+  React  Redux  VueJs  CSS  Typescript  ", 300, 0, 'circTxt');
    circularText("Firebase  Firestore  SQL  GraphQL  Apollo  Magento  RXJS  ", 100, 0, 'circTxt2');
  }

  render() {
    return (
      <div className="container">
        <ScrollAnimation animateIn="fadeIn" animateOnce initiallyVisible={false}>
          <ReactSVG className="jonathan" src={jonathan} />
          <div className="circTxt" id="circ1" />
          <div className="circTxt2" id="circ2" />
        </ScrollAnimation>
      </div>
    )
  }
}


export default Skills
