import React, { Component } from 'react';
import './ProjectDisplay.css';
import { GitHub, Link, Youtube } from 'react-feather';

class ProjectDisplay extends Component {

  get repoLink() {
    const { project } = this.props;
    return project.repository ? (
      <a className="repository" href={`${project.repository}`}>
        <GitHub color="black"/>
      </a>
    ) : <GitHub color="lightgrey"/>
  }

  get liveLink() {
    const { project } = this.props;
    return project.link ? (
      <a className="link" href={`${project.link}`}>
        <Link color="black"/>
      </a>
    ) : <Link color="lightgrey"/>
  }

  get videoLink() {
    const { project } = this.props;
    return project.video ? (
      <a className="video" href={`${project.video}`}>
        <Youtube color="black" />
      </a>
    ) : <Youtube color="lightgrey"/>
  }

  render() {
    const { repoLink, liveLink, videoLink } = this;
    const { project } = this.props;
    return (
      <div className="projectBox">
        <div className="nameBar">
          <span className="name">{project.name}</span>
          <div className="tech">{project.tech}</div>
        </div>
        <div className="mainDisplay">
          <span className="details">{project.description}</span>
          <div className="footer">
            <span>{repoLink}</span>
            <span>{liveLink}</span>
            <span>{videoLink}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectDisplay
