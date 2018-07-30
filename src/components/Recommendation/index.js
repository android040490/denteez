import React from 'react';
import { Link } from 'react-router';

const Recommendation = ({title, children}) => {
    return(
        <div className="recommendation">
            <div className="recommendation__header">
                <div className="recommendation__title">{title}</div>
                <Link to="/" className="recommendation__link">See All</Link>
            </div>
            <div className="recommendation__content">
                {children}
            </div>
        </div>
    )
}

export default Recommendation;

