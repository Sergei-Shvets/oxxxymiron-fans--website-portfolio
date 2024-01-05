import React, { useState } from 'react';
import Icon from '../Icon/Icon';

const FooterForm = () => {
    const [state, setState] = useState('');

    const handleChange = ({ target: { value } }) => {
        setState(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setState('');
    };

    return (
        <form className="footer-form" onSubmit={handleSubmit}>
            <p>Oxxxymiron's fans only</p>

            <div className="footer-form__email">
                <input type="email" name="email" onChange={handleChange} value={state} placeholder="Email" />
            </div>
            <button className="footer-form__button" type="submit">
                <span>Subscribe</span>
                <Icon name="arrow-right" />
            </button>
        </form>
    );
};

export default FooterForm;
