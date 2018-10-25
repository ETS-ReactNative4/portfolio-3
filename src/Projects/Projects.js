import React, { Component } from 'react';
import ProjectSelector from '../ProjectSelector/ProjectSelector';
import './Projects.css';
import {StyleRoot} from 'radium';
import Radium, { Style } from 'radium';
import anime from 'animejs'
import ProjectDisplay from '../ProjectSelector/ProjectDisplay';
import githublogo from '../img/githublogo.png'
const projects = [
  {
    name: 'Crunch',
    tech: 'Angular2+ - Python - REST',
    description: 'An internally developed business intellegence web app built in Angular2+. Lets sales people and managers at Bargreen Ellingson build and share custom reports. Connected to a Python backend. I helped develop and ship Crunch with a small team at Bargreen Ellignson.',
    repository: null,
    video: 'https://youtu.be/ybwuEXrVoZk?t=1m2s',
    link: 'https://crunch.bargreen.com'
  },
  {
    name: 'Magento 2 PWA',
    tech: 'React - GraphQL - Apollo',
    description: 'The Magento PWA Studio project is a set of developer tools that allow for the development, deployment, and maintenance of a PWA storefront on top of Magento 2. I am currently involved in the community development and design of this project.',
    repository: 'https://github.com/magento-research/pwa-studio',
    video: null,
    link: 'https://upward.bargreen.io/'
  },
  {
    name: 'Thank You Ma\'am',
    tech: 'Angular6 - AWS - Serverless',
    description: 'A charity platform built in Angular6 that hosts donation-based non profit group hubs powered by The Giving Group. Includes full Stripe integration and Uses DynamoDB and a Serverless AWS backend. I built the front-end and contributed to the API.',
    repository: null,
    video: null,
    link: 'https://dev.giving.group/groups/thankyoumaam'
  },
  {
    name: 'Wellness',
    tech: 'Vue - Firebase - Firestore',
    description: 'Bargreen Ellingson\'s internal wellness program web app. Employees can earn points through healthy activities, and redeem those points for prizes. The events and prizes redeemed are managed by coordinators and admins. I inhereted this project while it was still half-made from an outgoing developer and worked with Bargreen\'s wellness coordinators to get it shipped.',
    repository: null,
    video: null,
    link: 'https://dev.giving.group/groups/thankyoumaam'
  },
  {
    name: 'Overwatch Stats',
    tech: 'Angular2 - OWAPI',
    description: 'Bargreen Ellingson\'s internal wellness program web app. Employees can earn points through healthy activities, and redeem those points for prizes. The events and prizes redeemed are managed by coordinators and admins. I inhereted this project while it was still half-made from an outgoing developer and worked with Bargreen\'s wellness coordinators to get it shipped.',
    repository: null,
    video: null,
    link: 'https://dev.giving.group/groups/thankyoumaam'
  },
]

class Projects extends Component {

  constructor(){
    super();
    this.state = ({selectedProject: projects[0]});
  }

  selectProject(id) {
    if (this.state.selectedProject !== projects[id]) {
      let that = this;
      anime({
        targets: `.projectDisplay`,
        duration: 800,
        right: ['-50%', '0em', '-1%', '0'],
        easing: 'easeInOutQuad',
        begin: function() {
          const delay = ms => new Promise(_ => setTimeout(_, ms));
          delay(50).then(() => that.setState({selectedProject: projects[id]}))
        }
      });
    }
  }


  render() {
    let handleHover = id => {
      anime({
        targets: `.projectRoot${id} div`,
        duration: 200,
        letterSpacing: '2px',
        easing: 'easeInOutQuad'
      });
    }

    let handleHoverLeave = id => {
      anime({
        targets: `.projectRoot${id} div`,
        duration: 200,
        letterSpacing: '1px',
        easing: 'easeInOutQuad'
      });
    }

    let circleWidth = 50;
    let circleStyle = {
        width: `${circleWidth}em`,
        height: `${circleWidth}em`,
        borderRadius: `50%`,
        border: `1em solid white`,
        position: `absolute`,
        left: `-40em`,
        zIndex: `0`,
        boxShadow: '2px 2px 3px #0006'
    }

    let marginTop = circleWidth/(projects.length) + 5;
    let paddingLeft = circleWidth/(projects.length+1);
    let rotation = -45;
    return (
      <div className="projectsRoot">
        <img className="githubLogo" src={githublogo}></img>
        <div className="projectSelectors">
          <div className="projectDisplay">
            <ProjectDisplay project={this.state.selectedProject} />
          </div>
          <div style={circleStyle}>
          </div>
          { projects.map((project, i) => {
              marginTop += (circleWidth/projects.length*.4);
              rotation += (circleWidth/projects.length*1.5);
              if (i > projects.length/2) {
                paddingLeft -= (circleWidth/projects.length*.4 - (projects.length - i));
              } else {
                paddingLeft += (circleWidth/projects.length*.4 - (i + 1));
              }
              let style = {
                position: 'absolute',
                marginTop: `${marginTop}em`,
                paddingLeft: `${paddingLeft}em`,
                transform: `rotate(${rotation}deg)`,
                transformOrigin: `-5em ${50/projects.length - i}%`
              }
              return (
                <StyleRoot className={`projectRoot${i} projectRoot`} key={i} onClick={() => this.selectProject(i)} style={style}
                  onMouseEnter={() => handleHover(i)} onMouseLeave={() => handleHoverLeave(i)} >
                  <ProjectSelector  key={i} id={i} currentlySelected={projects.indexOf(this.state.selectedProject) === i} name={project.name}  />
                </StyleRoot>
              )
            })
          }
        </div>
      </div>
    )

  }
}

export default Radium(Projects)
