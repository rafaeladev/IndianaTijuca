import React from 'react';
import { Outlet } from 'react-router-dom';
import pic from '../assets/SEEMORE.png';

const NatalLayout = () => {
    return (
        <>
            <Outlet />
            <img
                src={pic}
                alt='see more'
            />
        </>
    );
};

export default NatalLayout;
