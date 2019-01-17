import React, { Component } from 'react';
import './Skills.css';
import ReactSVG from 'react-svg'
import ScrollAnimation from 'react-animate-on-scroll';
import jonathan from '../img/jonathan.svg';
import "animate.css/animate.min.css";

function circularText(txt, radius, classIndex, className) {
  txt = txt.split("");
  classIndex = document.getElementsByClassName(className)[classIndex];

  const deg = 360 / txt.length;


let origin = 0;

  txt.forEach((ea) => {
    ea = `<p style='position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${ea}</p>`;
    classIndex.innerHTML += ea;
    origin += deg;
  });
}

class Skills extends Component {

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
