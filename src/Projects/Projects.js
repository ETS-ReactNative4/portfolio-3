import React, { PureComponent } from 'react';
import './Projects.css';
import Radium, { StyleRoot } from 'radium';
import anime from 'animejs'
import ReactSVG from 'react-svg'
import ScrollAnimation from 'react-animate-on-scroll';
import ProjectDisplay from '../ProjectSelector/ProjectDisplay';
import compass from '../img/compass.svg';
import ProjectSelector from '../ProjectSelector/ProjectSelector';
import "animate.css/animate.min.css";
import Carousel from 'nuka-carousel';

const projects = [
  {
    name: 'Crunch',
    tech: 'Angular2+ - Python - REST',
    description: 'An internally developed business intellegence web app built in Angular2+. Lets sales people and managers at Bargreen Ellingson build and share custom reports. Connected to a Python backend. I helped develop and ship Crunch with a small team at Bargreen Ellingson.',
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
    link: 'https://wellness.bargreen.io'
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
    name: 'Off The Record',
    tech: 'AngularJS',
    description: 'I helped Off The Record develop their web app during a 3 month internship in Seattle, WA. I primarily worked on the "reviews" page and the log in/sign up modals.',
    repository: 'null',
    video: 'offtherecord',
    link: 'https://offtherecord.com/'
  },
]

class Projects extends PureComponent {

  constructor() {
    super();
    this.state = ({ selectedProject: projects[0], animating: false });
  }

  anim() {
    const { animating } = this.state;
    const that = this;
    const anim = anime({
      targets: `.projectDisplay`,
      duration: 800,
      right: ['-50%', '0em', '-1%', '0'],
      easing: 'easeInOutQuad',
      begin() {
        that.setState({ animating: true })
      },
      complete() {
        that.setState({ animating: false })
      }
    })

    if (!animating) {
      anim.play();
    } else {
      anim.pause();
    }

  }

  selectProject(id, useAnim) {
    const { selectedProject } = this.state;
    if (projects[id] && selectedProject !== projects[id]) {
      useAnim ? this.anim(id) : null;
      this.setState({ selectedProject: projects[id] })
    }
  }

  render() {
    const { selectedProject } = this.state;
    const handleHover = id => {
      anime({
        targets: `.projectRoot${id} div`,
        duration: 300,
        letterSpacing: '2px',
        easing: 'easeInOutQuad'
      });
    }

    const handleHoverLeave = id => {
      anime({
        targets: `.projectRoot${id} div`,
        duration: 300,
        letterSpacing: '1px',
        easing: 'easeInOutQuad'
      });
    }

    const circleWidth = 50;
    const circleStyle = {
      width: `${circleWidth}em`,
      height: `${circleWidth}em`,
      borderRadius: `50%`,
      border: `1em solid #c0cace`,
      position: `absolute`,
      left: `-40em`,
      zIndex: `0`,
      boxShadow: '2px 2px 3px #0006'
    }

    let marginTop = circleWidth / (projects.length) + 5;
    let paddingLeft = circleWidth / (projects.length + 1);
    let rotation = -45;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (

      <div className="projectsRoot" id="projects">
        <ScrollAnimation animateIn="fadeIn" animateOnce initiallyVisible={false}>
          <ReactSVG className="githubLogo" src={compass} />
          <div className="projectSelectors desktop">
            <div className="projectDisplay">
              <ProjectDisplay project={selectedProject} />
            </div>
            <div style={circleStyle} className="circle" />
            {projects.map((project, i) => {
              marginTop += (circleWidth / projects.length * .4);
              rotation += (circleWidth / projects.length * 1.5);
              if (i > projects.length / 2) {
                paddingLeft -= (circleWidth / projects.length * .4 - (projects.length - i));
              } else {
                paddingLeft += (circleWidth / projects.length * .4 - (i + 1));
              }
              const style = {
                position: 'absolute',
                marginTop: `${marginTop}em`,
                paddingLeft: `${paddingLeft}em`,
                transform: `rotate(${rotation}deg)`,
                transformOrigin: `-5em ${50 / projects.length - i}%`
              }
              return (
                <StyleRoot className={`projectRoot${i} projectRoot`} key={i} onClick={() => this.selectProject(i, true)} style={style}
                  onMouseEnter={() => handleHover(i)} onMouseLeave={() => handleHoverLeave(i)} >
                  <ProjectSelector key={i} id={i} currentlySelected={projects.indexOf(selectedProject) === i} name={project.name} />
                </StyleRoot>
              )
            })
            }
          </div>
          <div className="mobile">
            <div className="projectDisplay">

              <Carousel>
                {
                  projects.map(project => <ProjectDisplay key={project} project={project} />)
                }
              </Carousel>
            </div>
          </div>
        </ScrollAnimation>

      </div>
    )

  }
}

export default Radium(Projects)
