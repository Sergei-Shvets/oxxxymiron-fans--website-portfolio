import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { NavLink } from 'react-router-dom';

import { MENU } from '../../utils/constants';
import Socials from '../Socials/Socials';
import Burger from './Burger';

import Logo from '../Logo/Logo';

const Header = () => {
    return (
        <section className="header">
            <div className="container">
                <header>
                    <Logo />
                    <nav className="menu">
                        {MENU.map(({ link, name }, index) => (
                            <ScrollAnimation
                                key={link}
                                className="menu-item"
                                animateIn="fadeInDown"
                                delay={index * 100}
                                offset={0}
                            >
                                <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to={`/${link}`}>
                                    {name}
                                </NavLink>
                            </ScrollAnimation>
                        ))}
                    </nav>
                    <Socials />
                    <Burger />
                </header>
            </div>
        </section>
    );
};

export default Header;
