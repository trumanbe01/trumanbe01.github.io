import React, { Component } from 'react';
import './Activity.css';

class Activity extends Component {
    render() {
        return(
            <div className="activity-box">
                <img className="activity-img" src={this.props.image} alt="" />
                <div className="activity-text">
                    <p className="activity-text-name">{this.props.name}</p>
                    <p className="activity-text-date">{this.props.date}</p>
                    <p className="activity-text-desc">{this.props.desc}</p>
                </div>
            </div>
        )
    }
}

export default Activity