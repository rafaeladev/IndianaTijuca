import { nanoid } from 'nanoid';
import React from 'react';
import { Link } from 'react-router-dom';

const PhotoGallery = (props) => {
    return props.data.map((photo) => {
        return photo.direction === 'horizontal' ? (
            <Link
                to={'.'}
                key={nanoid()}
                className={`photoGallery__horizontal`}
            >
                <img
                    src={photo.url}
                    alt={`${photo.id}`}
                    className='galleryImg'
                />
            </Link>
        ) : (
            <Link
                to={'.'}
                key={nanoid()}
                className={'photoGallery__vertical'}
            >
                <img
                    src={photo.url}
                    alt={`${photo.id}`}
                    className='galleryImg'
                />
            </Link>
        );
    });
};

export default PhotoGallery;
