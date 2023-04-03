import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/fav.png';
import Nav from './Nav.jsx';

const Header = () => {
    return (
        <header className='header'>
            <Link to='/'>
                <img
                    className='nav__img'
                    src={Logo}
                    alt='logo'
                />
            </Link>
            <h1>Natal Indiana Tijuca</h1>
            <Nav />
        </header>
    );
};

export default Header;
