import React from 'react';

const Preloader = () => {
    return (
        <div className="preloader">
            <div className="preloader__title">Loading</div>
            <div className="preloader__circles">
                <div className="preloader__item item-1"></div>
                <div className="preloader__item item-2"></div>
                <div className="preloader__item item-3"></div>
                <div className="preloader__item item-4"></div>
            </div>
        </div>
    );
};

export default Preloader;