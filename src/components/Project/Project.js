import React, { Component } from 'react';
import './Project.css';

class Project extends Component {
    render() {
        return(
            <div className={this.props.direction + 'Project'}>
                <img className="project-img" src={this.props.image} />
                <div className="project-text">
                    <h1 className="project-name">{this.props.name}</h1>
                    <p className="project-techstack">Tech stack: {this.props.tech}</p>
                    <a className="project-repo" href={this.props.repo} target="_blank">Repo link</a>
                    <p className="project-desc">{this.props.desc}</p>
                </div>
            </div>
        )
    }
}

export default Project