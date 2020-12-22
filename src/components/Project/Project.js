import React, { Component } from 'react';
import './Project.css';

class Project extends Component {
    render() {
        return(
            <div className={this.props.direction + 'Project'}>
                <img className="project-img" src={this.props.image} />
                <div className="project-text">
                    <h1 className="project-name">{this.props.name}</h1>
                    <h1 className="project-desc">{this.props.desc}</h1>
                </div>
            </div>
        )
    }
}

export default Project