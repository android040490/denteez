import React, { Component } from 'react';

import ServiceDirectory from 'containers/ServiceDirectory';
import Header from 'components/Header';
import LeftSidebar from 'components/LeftSidebar';
import RightSidebar from 'components/RightSidebar';

class Layout extends Component {
    render() {
        return (
            <div className='page'>
                <div className="page__header">
                    <Header/>
                </div>
                <div className="page__content wrapper">
                    <div className="page__left-sidebar">
                        <LeftSidebar/>
                    </div>
                    <div className="page__main-content">
                        <ServiceDirectory/>
                        
                    </div>
                    <div className="page__left-sidebar">
                    <RightSidebar/>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Layout;