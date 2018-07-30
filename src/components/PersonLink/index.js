import React from 'react';
import {Link} from 'react-router';

import {getSliceIfOverflow} from 'pipes';

const PersonLink = ({data}) => {
    return (
        <div className="advertising-link">
            <div className="advertising-link__header"><div className="advertising-link__title">{getSliceIfOverflow(data.name, 20)}</div></div>
            <div className="advertising-link__content">
                <Link to='/' className="advertising-link__img">
                    <img src={data.image} alt=""/>
                </Link>
                <div className="advertising-link__text">
                    
                    <div className="advertising-link__descr">{getSliceIfOverflow(data.profession, 30)}</div>
                    <address className="advertising-link__descr">{getSliceIfOverflow(data.location, 20)}</address>
                    <Link className="advertising-link__link">Add Friend</Link>
                </div>
            </div>
        </div>
    );
};

export default PersonLink;