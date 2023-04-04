import React from 'react';
import PhotoGallery from '../components/PhotoGallery.jsx';
import { nanoid } from 'nanoid';

const Natal2018 = () => {
    const vertical = [
        '/natal2018/portrait_1.jpg',
        '../assets/natal2018/portrait_2.jpg',
        '../assets/natal2018/portrait_3.jpg',
        '../assets/natal2018/portrait_4.jpg',
        '../assets/natal2018/portrait_5.jpg',
    ];
    const horizontal = [
        '/natal2018/gateau_1.jpg',
        'natal2018/gateau_2.jpg',
        '../assets/natal2018/gateau_3.jpg',
        '../assets/natal2018/gateau_4.jpg',
        '../assets/natal2018/gateau_5.jpg',
    ];
    return (
        <>
            <h1>2018</h1>
            <div className='horizontal'>
                <img
                    src={`/IndianaTijuca/static/media/${horizontal[1]}`}
                    alt='2018'
                />
            </div>
        </>
    );
};

export default Natal2018;
