import React from 'react';
// import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
// import { LngContext } from '../utils/context.jsx';
import ChangeLanguage from './ChangeLanguage.jsx';

const Nav = () => {
    // const { language, changeLanguage } = useContext(LngContext);

    return (
        <nav className='nav'>
            <ul>
                <NavLink
                    to='/'
                    className={({ isActive }) => (isActive ? 'nav__link__active' : '')}
                >
                    <li className='nav__link'>Home</li>
                </NavLink>
                <NavLink
                    to='/natal:id'
                    className={({ isActive }) => (isActive ? 'nav__link__active' : '')}
                >
                    <li className='nav__link'>Natal 2022</li>
                </NavLink>
                <NavLink
                    to='/historico'
                    className={({ isActive }) => (isActive ? 'nav__link__active' : '')}
                >
                    <li className='nav__link'>Historico</li>
                </NavLink>
                <NavLink
                    to='/infos'
                    className={({ isActive }) => (isActive ? 'nav__link__active' : '')}
                >
                    <li className='nav__link'>Infos</li>
                </NavLink>
            </ul>
            <ul className='nav__lang'>
                <ChangeLanguage />
            </ul>
        </nav>
    );
};

export default Nav;
