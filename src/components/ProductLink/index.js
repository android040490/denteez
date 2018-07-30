import React from 'react';
import {Link} from 'react-router';

import {getSliceIfOverflow} from 'pipes';

const ProductLink = ({data}) => {
    return (
        <div className="advertising-link">
            <div className="advertising-link__header"><div className="advertising-link__title">{getSliceIfOverflow(data.name, 12) }</div></div>
            <div className="advertising-link__content">
                <Link to='/' className="advertising-link__img">
                    <img src={data.image} alt={data.name}/>
                </Link>
                <div className="advertising-link__text">     
                    <div className="advertising-link__descr">{getSliceIfOverflow(data.description, 75) }</div>
                </div>
            </div>
        </div>
    );
};

export default ProductLink;