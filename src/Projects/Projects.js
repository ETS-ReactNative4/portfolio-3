import React, { Component } from 'react';
import ProjectSelector from '../ProjectSelector/ProjectSelector';
import './Projects.css';
import {StyleRoot} from 'radium';
import Radium, { Style } from 'radium';
import anime from 'animejs'
import ProjectDisplay from '../ProjectSelector/ProjectDisplay';
import ReactSVG from 'react-svg'
import compass from '../img/compass.svg';

const projects = [
  {
    name: 'Crunch',
    tech: 'Angular2+ - Python - REST',
    description: 'An internally developed business intellegence web app built in Angular2+. Lets sales people and managers at Bargreen Ellingson build and share custom reports. Connected to a Python backend. I helped develop and ship Crunch with a small team at Bargreen Ellignson.',
    repository: null,
    video: 'crunch',
    link: 'https://crunch.bargreen.com'
  },
  {
    name: 'Thank You Ma\'am',
    tech: 'Angular6 - AWS - Serverless',
    description: 'A charity platform built in Angular6 that hosts donation-based non profit group hubs powered by The Giving Group. Includes full Stripe integration and Uses DynamoDB and a Serverless AWS backend. I built the front-end and contributed to the API.',
    repository: null,
    video: 'thankyoumaam',
    link: 'https://dev.giving.group/groups/thankyoumaam'
  },
  {
    name: 'Wellness',
    tech: 'Vue - Firebase - Firestore - Axios',
    description: 'Bargreen Ellingson\'s internal wellness program web app. Employees can earn points through healthy activities, and redeem those points for prizes. The events and prizes redeemed are managed by coordinators and admins. I inhereted this project while it was still half-made from an outgoing developer and worked with Bargreen\'s wellness coordinators to get it shipped.',
    repository: null,
    video: 'wellness',
    link: 'https://dev.giving.group/groups/thankyoumaam'
  },
  {
    name: 'Magento 2 PWA',
    tech: 'React - GraphQL - Apollo',
    description: 'The Magento PWA Studio project is a set of developer tools that allow for the development, deployment, and maintenance of a PWA storefront on top of Magento 2. I am currently involved in the community development and design of this project.',
    repository: 'https://github.com/magento-research/pwa-studio',
    video: 'magento2pwa',
    link: 'https://upward.bargreen.io/'
  },
  {
    name: 'Overwatch Stats',
    tech: 'Angular2 - OWAPI',
    description: 'Capstone project for my programming bootcamp. Reads the Overwatch API for player statistics and displays them in a friendly format. The API is no longer maintained so the site is depricated, but I have a video from development.',
    repository: 'https://github.com/JStein92/overwatch-stats',
    video: 'overwatchstats',
    link: null
  },
]

  document.onmousemove = handleMouseMove;
  function handleMouseMove(event) {
    // console.log(event)
  }

class Projects extends Component {

  constructor(){
    super();
    this.state = ({selectedProject: projects[0], animating: false});
  }

  anim(id) {
    let that = this;
    const anim = anime({
      targets: `.projectDisplay`,
      duration: 500,
      right: ['-50%', '0em', '-1%', '0'],
      easing: 'easeInOutQuad',
      begin() {
        that.setState({animating: true})
      },
      complete() {
        that.setState({animating: false})
      }
    })

    if (!this.state.animating) {
      anim.play();
    } else {
      anim.pause();
    }

  }

  selectProject(id, useAnim) {
    if (this.state.selectedProject !== projects[id]) {
        useAnim ? this.anim(id) : null;
        this.setState({selectedProject: projects[id]})
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
        <ReactSVG className="githubLogo" src={compass} />
        <div className="projectSelectors desktop">
          <div className="projectDisplay">
            <ProjectDisplay project={this.state.selectedProject} />
          </div>
          <div style={circleStyle} className="circle">
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
                <StyleRoot className={`projectRoot${i} projectRoot`} key={i} onClick={() => this.selectProject(i, true)} style={style}
                  onMouseEnter={() => handleHover(i)} onMouseLeave={() => handleHoverLeave(i)} >
                  <ProjectSelector  key={i} id={i} currentlySelected={projects.indexOf(this.state.selectedProject) === i} name={project.name}  />
                </StyleRoot>
              )
            })
          }
        </div>

        <div className="mobile">
            { projects.map((project, i) => {
                return (
                  <StyleRoot className={`projectRoot${i} projectRoot`} key={i} onClick={() => this.selectProject(i, false)}
                    onMouseEnter={() => handleHover(i)} onMouseLeave={() => handleHoverLeave(i)} >
                    <ProjectSelector  key={i} id={i} currentlySelected={projects.indexOf(this.state.selectedProject) === i} name={project.name}  />
                  </StyleRoot>
                )
              })
            }
            <div className="projectDisplay">
              <ProjectDisplay project={this.state.selectedProject} />
            </div>
        </div>
      </div>
    )

  }
}

export default Radium(Projects)
