import React from 'react';
import { nanoid } from 'nanoid';
import image from '../assets/natal2018/gateau_1.jpg';

const PhotoGallery = (props) => {
    const vertical = [
        '../assets/natal2018/portrait_1.jpg',
        '../assets/natal2018/portrait_2.jpg',
        '../assets/natal2018/portrait_3.jpg',
        '../assets/natal2018/portrait_4.jpg',
        '../assets/natal2018/portrait_5.jpg',
    ];
    const horizontal = [
        '../assets/natal2018/gateau_1.jpg',
        '../assets/natal2018/gateau_2.jpg',
        '../assets/natal2018/gateau_3.jpg',
        '../assets/natal2018/gateau_4.jpg',
        '../assets/natal2018/gateau_5.jpg',
    ];
    const horizontalImages = props.horizontal.map((data) => (
        <div
            key={nanoid()}
            className='horizontal'
        >
            <img
                src={data}
                alt='natal 2018'
            />
        </div>
    ));
    return <div className='photogallery'>{horizontal}</div>;
};

export default PhotoGallery;
