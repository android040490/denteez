import React, { Component } from 'react';

import logo from 'assets/images/Logo.png';
import chat from 'assets/images/icons/Chat.png';
import note from 'assets/images/icons/Notifications.png';
import avatar from 'assets/images/Avatar.jpg';


class Header extends Component {
    render() {
        return (
            <div className='primary-header'>
                <div className='primary-header__wrapper wrapper'>
                    <div className="primary-header__logo">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="primary-header__search-form">
                        <form action=""><input type="text" placeholder="Company Name"/></form>
                    </div>
                    <div className="primary-header__user-info">
                        <div className="primary-header__info-icon">
                            <img src={chat} alt=""/>
                        </div>
                        <div className="primary-header__info-icon">
                            <img src={note} alt=""/>
                        </div>
                        <div className="primary-header__current-user">
                            <div className="primary-header__user-avatar">
                                <img src={avatar} alt=""/>
                            </div>
                            <div className="primary-header__user-name">Maximillian Beekeeper</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;