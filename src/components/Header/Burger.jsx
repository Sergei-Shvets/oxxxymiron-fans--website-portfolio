import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

import { MENU } from '../../utils/constants';

import Icon from '../Icon/Icon';
import Logo from '../Logo/Logo';

const Burger = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="menu-mobile">
            <div className="menu-mobile__button" onClick={toggleMenu}>
                <Icon name="round-menu" />
            </div>

            {isOpen && (
                <nav className="menu-mobile__list">
                    <Logo onClick={toggleMenu} />

                    <div className="menu-mobile__items">
                        {MENU.map(({ link, name }, index) => (
                            <ScrollAnimation
                                key={link}
                                className="menu-mobile__item"
                                animateIn="fadeInDown"
                                delay={index * 100}
                                offset={0}
                            >
                                <NavLink
                                    className={({ isActive }) => (isActive ? 'active' : '')}
                                    to={`/${link}`}
                                    onClick={toggleMenu}
                                >
                                    {name}
                                </NavLink>
                            </ScrollAnimation>
                        ))}
                    </div>
                    <div className="menu-mobile__button" onClick={toggleMenu}>
                        <Icon name="round-close" onClick={toggleMenu} />
                    </div>
                </nav>
            )}
        </div>
    );
};

export default Burger;
