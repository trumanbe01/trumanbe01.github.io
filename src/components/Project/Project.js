import React, { Component } from 'react';
import './Project.css';

class Project extends Component {
    render() {
        return(
            <div className={this.props.direction + 'Project'}>
                <img className="project-img" src={this.props.image} />
                <div className="project-text">
                    <a className="project-name" href={this.props.repo}>{this.props.name}</a>
                    <p className="project-techstack">Tech stack: {this.props.tech}</p>
                    <p className="project-desc">{this.props.desc}</p>
                </div>
            </div>
        )
    }
}

export default Project