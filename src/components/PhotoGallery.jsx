import React from 'react';
import { Link } from 'react-router-dom';

const PhotoGallery = (props) => {
    return props.data.map((photo) => {
        return photo.direction === 'horizontal' ? (
            <div
                key={photo.index}
                className={`photoGallery__big`}
            >
                <Link to={'.'}>
                    <img
                        key={photo.index}
                        src={photo.url}
                        alt={`${photo.id}`}
                        className='galleryImg'
                    />
                </Link>
            </div>
        ) : (
            <div
                key={photo.index}
                className={'photoGallery__vertical'}
            >
                <Link to={'.'}>
                    <img
                        key={photo.index}
                        src={photo.url}
                        alt={`${photo.id}`}
                        className='galleryImg'
                    />
                </Link>
            </div>
        );
    });
};

export default PhotoGallery;
