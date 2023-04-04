import React from 'react';

import { NavLink } from 'react-router-dom';

import ChangeLanguage from './ChangeLanguage.jsx';
import { useContext } from 'react';
import { LngContext } from '../utils/context.jsx';

const Nav = () => {
    const { language } = useContext(LngContext);
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
                    to='/natal/2022'
                    className={({ isActive }) => (isActive ? 'nav__link__active' : '')}
                >
                    <li className='nav__link'>Natal 2022</li>
                </NavLink>
                <NavLink
                    to='natal'
                    end
                    className={({ isActive }) => (isActive ? 'nav__link__active' : '')}
                >
                    <li className='nav__link'>
                        {language === 'BR'
                            ? 'Arquivos'
                            : language === 'FR'
                            ? 'Archives'
                            : 'Arquives'}
                    </li>
                </NavLink>
                <NavLink
                    to='infos'
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
