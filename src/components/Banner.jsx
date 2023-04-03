import React from 'react';

const Banner = (props) => {
    const hommeBanner = {
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: '#161616',
        backgroundImage: `url(${props.img})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        height: '500px',
        width: '100%',
        gridColumn: '1 / -1',
    };
    return (
        <>
            <div style={hommeBanner}></div>
        </>
    );
};

export default Banner;
