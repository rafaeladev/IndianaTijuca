import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='nav'>
            <ul>
                <NavLink
                    to='/'
                    className={({ isActive }) => (isActive ? 'nav__link__active' : '')}
                >
                    <li>Home</li>
                </NavLink>
                <NavLink
                    to='/about'
                    className={({ isActive }) => (isActive ? 'nav__link__active' : '')}
                >
                    <li>About</li>
                </NavLink>
                <NavLink
                    to='/infos'
                    className={({ isActive }) => (isActive ? 'nav__link__active' : '')}
                >
                    <li>Infos</li>
                </NavLink>
            </ul>
        </nav>
    );
};

export default Nav;
