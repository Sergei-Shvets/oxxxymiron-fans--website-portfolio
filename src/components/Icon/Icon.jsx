import React from 'react';

const Icon = ({ name, width, height }) => {
    return (
        <svg className={`icon icon-${name}`} style={{ width, height }}>
            <use xlinkHref={`${process.env.PUBLIC_URL}/images/sprite.svg#${name}`}></use>
        </svg>
    );
};

export default Icon;
