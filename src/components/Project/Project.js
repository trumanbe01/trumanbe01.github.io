import React, { Component } from 'react';
import Tech from '../Tech/Tech';
import './Project.css';

class Project extends Component {
    render() {
        return(
            <div className={this.props.direction + 'Project'}>
                <img className="project-img" src={this.props.image} />
                <div className="project-text">
                    <a className="project-name" href={this.props.repo} target="_blank">{this.props.name}</a>
                    <div className="project-techstack">
                        {this.props.tech.map((item, index) => {
                            return(
                                <Tech className="project-tech-card" name={item} />
                            )
                        })}
                    </div>
                    <p className="project-desc">{this.props.desc}</p>
                </div>
            </div>
        )
    }
}

export default Project