import React, { Component } from 'react';
import {Link} from 'react-router';

import NavigationLink from 'components/NavigationLink';
import Advertisement from 'components/Advertisement';
import Recommendation from 'components/Recommendation';
import CompanyLink from 'components/CompanyLink';


import feed from 'assets/images/icons/Feed.png';
import ask from 'assets/images/icons/Ask.png';
import companies from 'assets/images/icons/Companies.png';
import services from 'assets/images/icons/Services.png';
import advert1 from 'assets/images/Advertisement1.jpg';

import {CompaniesData} from 'mockData';

class LeftSidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <NavigationLink link='/' icon={feed}>Feed</NavigationLink>
                <NavigationLink link='/' icon={ask}>Ask a Colleague</NavigationLink>
                <NavigationLink link='/' icon={companies}>Companies</NavigationLink>
                <NavigationLink link='/' icon={services}>Service Directory</NavigationLink>
                <div className="sidebar__item"><Advertisement image={advert1}/></div>
                <div className="sidebar__item">
                    <Recommendation title="Featured Companies">
                        { CompaniesData.map((item) => <CompanyLink key={item.id} data={item}/>)}
                    </Recommendation>
                    
                </div>
                
                <div className="copyright">
                    <h6 className="copyright__title">Denteez Copyright 2015</h6>
                    <div className="copyright__navbar">
                        <Link className="copyright__link" to="/">Terms of use</Link>
                        <Link className="copyright__link" to="/">Privacy Policy</Link>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default LeftSidebar;