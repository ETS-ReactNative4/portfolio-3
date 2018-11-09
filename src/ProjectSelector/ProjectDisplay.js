import React, { Component } from 'react';
import './ProjectDisplay.css';
import { GitHub, Link, Youtube } from 'react-feather';
import ReactPlayer from 'react-player';
import crunch from '../video/crunch.mp4';
import magento2pwa from '../video/magento2pwa.mp4';
import thankyoumaam from '../video/thankyoumaam.mp4';
import wellness from '../video/wellness.mp4';
import overwatchstats from '../video/overwatchstats.mp4';

class ProjectDisplay extends Component {

  get repoLink() {
    const { project } = this.props;
    return project.repository ? (
      <a className="repository" href={`${project.repository}`} target="_blank">
        <GitHub color="black"/>
      </a>
    ) : <GitHub color="grey"/>
  }

  get liveLink() {
    const { project } = this.props;
    return project.link ? (
      <a className="link" href={`${project.link}`} target="_blank">
        <Link color="black"/>
      </a>
    ) : <Link color="grey"/>
  }

  get videoLink() {
    const { project } = this.props;
    return project.video ? (
      <a className="video" href={`${project.video}`} target="_blank">
        <Youtube color="black" />
      </a>
    ) : <Youtube color="grey"/>
  }

  render() {
    const vids = {crunch, magento2pwa, wellness, thankyoumaam, overwatchstats};
    const { repoLink, liveLink, videoLink } = this;
    const { project } = this.props;
    return (
      <div className="projectBox">
        <div className="nameBar">
          <span className="name">{project.name}</span>
          <div className="tech">{project.tech}</div>
        </div>
        <div className="video">
          <ReactPlayer url={vids[project.video]} playing loop width="100%" height="auto" maxheight="42em" />
        </div>
        <div className="mainDisplay">
          <span className="details">{project.description}</span>
          <div className="footer">
            <span>{repoLink}</span>
            <span>{liveLink}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectDisplay
