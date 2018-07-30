import React, { Component } from 'react';

import Advertisement from 'components/Advertisement';
import Recommendation from 'components/Recommendation';
import PersonLink from 'components/PersonLink';
import ProductLink from 'components/ProductLink';

import advert2 from 'assets/images/Advertisement2.jpg';

import {PersonsData, ProductsData} from 'mockData';

class RightSidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                
                <div className="sidebar__item">
                    <Recommendation title="People you may know">
                        { PersonsData.map((item) => <PersonLink key={item.id} data={item}/>)}
                    </Recommendation>
                </div>
                <div className="sidebar__item">
                    <Recommendation title="Featured Products">
                        { ProductsData.map((item) => <ProductLink key={item.id} data={item}/>)}
                    </Recommendation>
                </div>
                <div className="sidebar__item"><Advertisement image={advert2}/></div>  
            </div>
        );
    }
}

export default RightSidebar;