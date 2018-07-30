import React from 'react';

const Advertisement  = ({image}) => {
    return (
        <div className="advertisement">
            <div className="advertisement__title">Advartisement</div>
            <div className="advertisement__img">
                <img src={image} alt=""/>
            </div>
            <div className="advertisement__ads-by">Ads By Denteez.com</div>
        </div>
    );
};

export default Advertisement ;