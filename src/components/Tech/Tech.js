import React, { Component } from 'react';
import './Tech.css';

class Tech extends Component {
    render() {
        return( 
            <p className="tech-box">{this.props.name}</p>
        )
    }
}

export default Tech