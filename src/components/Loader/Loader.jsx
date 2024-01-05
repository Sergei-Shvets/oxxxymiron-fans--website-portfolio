import React from 'react';

import loader from '../../images/loader.webp';

const Loader = () => {
    return (
        <div className="loader">
            <img src={loader} alt="loader" />
        </div>
    );
};

export default Loader;
