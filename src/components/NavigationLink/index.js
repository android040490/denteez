import React, { Component } from 'react';
import { Link } from 'react-router';


class NavigationLink extends Component {
    render(){
        return (
            <div className="nav-link">
                <div className="nav-link__icon">
                    <img src={this.props.icon} alt=""/>
                </div>
                <Link to={this.props.link} className='nav-link__text'>{this.props.children}</Link>
            </div>
        )
    }
}

export default NavigationLink;