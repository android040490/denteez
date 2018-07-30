import React from 'react';
import {Link} from 'react-router';

import {getSliceIfOverflow} from 'pipes';

const CompanyLink = ({data}) => {
    return (
        <div className="advertising-link">
            <div className="advertising-link__content">
                <Link to='/' className="advertising-link__img">
                    <img src={data.image} alt=""/>
                </Link>
                <div className="advertising-link__text">
                    <div className="advertising-link__title">{getSliceIfOverflow(data.title, 12)}</div>
                    <div className="advertising-link__descr">{getSliceIfOverflow(data.services , 20)}</div>
                    <address className="advertising-link__descr">{getSliceIfOverflow(data.address, 20)}</address>
                    <Link className="advertising-link__link">Follow Now</Link>
                </div>
            </div>
        </div>
    );
};

export default CompanyLink;