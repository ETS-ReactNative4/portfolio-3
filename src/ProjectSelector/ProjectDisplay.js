import React, { PureComponent } from 'react';
import './ProjectDisplay.css';
import { GitHub, Link, Youtube } from 'react-feather';
import ReactPlayer from 'react-player';
import ScrollAnimation from 'react-animate-on-scroll';
import crunch from '../video/crunch.mp4';
import magento2pwa from '../video/magento2pwa.mp4';
import thankyoumaam from '../video/thankyoumaam.mp4';
import wellness from '../video/wellness.mp4';
import offtherecord from '../video/offtherecord.mp4';
import "animate.css/animate.min.css";

class ProjectDisplay extends PureComponent {

  get repoLink() {
    const { project } = this.props;
    return project.repository ? (
      <a className="repository" href={`${project.repository}`} target="_blank">
        <GitHub color="white"/>
      </a>
    ) : <GitHub color="grey"/>
  }

  get liveLink() {
    const { project } = this.props;
    return project.link ? (
      <a className="link" href={`${project.link}`} target="_blank">
        <Link color="white"/>
      </a>
    ) : <Link color="grey"/>
  }

  get videoLink() {
    const { project } = this.props;
    return project.video ? (
      <a className="video" href={`${project.video}`} target="_blank">
        <Youtube color="white" />
      </a>
    ) : <Youtube color="grey"/>
  }

  render() {
    const vids = {crunch, magento2pwa, wellness, thankyoumaam, offtherecord};
    const { repoLink, liveLink, videoLink } = this;
    const { project } = this.props;
    return (
      <div className="projectBox">
        <ScrollAnimation animateIn="fadeIn" animateOnce initiallyVisible>

        <div className="nameBar">
          <span className="name">{project.name}</span>
          <div className="tech">{project.tech}</div>
          <div className="links">
            <span>{repoLink}</span>
            <span>{liveLink}</span>
          </div>
        </div>
        <div className="video">
          <ReactPlayer url={vids[project.video]} playing loop width="100%" height="auto" maxheight="42em" />
        </div>
        <div className="mainDisplay">
          <span className="details">{project.description}</span>
          <div className="footer" />
        </div>

      </ScrollAnimation>
      </div>
    );
  }
}

export default ProjectDisplay
