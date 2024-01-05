import React from 'react';

import Img from '../../images/3de0839ccc9cb026dfd5851c19761a7c.jpeg';

const OhyshopPage = () => {
    return (
        <div className="shop">
            <div className="container">
                <p className="shop-text">
                    Unfortunately the shop is not working now.
                    <br /> Please, come a bit later, we will try to bring something interesting :)
                </p>
                <div className="shop-img">
                    <img src={Img} alt="shop" />
                </div>
            </div>
        </div>
    );
};

export default OhyshopPage;
