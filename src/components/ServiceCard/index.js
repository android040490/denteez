import React from 'react';
import {Link} from 'react-router';

import {getSliceIfOverflow} from 'pipes';

const ServiceCard = ({data}) => {
    return (
        <Link to={`/contact/${data.id}`} className='service-directory__item'>
            <div className="service-directory__service-img">
                <img src={data.icon} alt={data.title} />
            </div>
            <h6 className="service-directory__service-title">{getSliceIfOverflow(data.title, 45)}</h6>
        </Link>
    );
};

export default ServiceCard;