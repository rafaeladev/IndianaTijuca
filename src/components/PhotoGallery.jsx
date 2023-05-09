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
                    alt={`http://jlmsscf.cluster030.hosting.ovh.net/indianatijuca/natal${props.year}/${photo.name}.jpg`}
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
                    src={`http://jlmsscf.cluster030.hosting.ovh.net/indianatijuca/natal${props.year}/${photo.name}.jpg`}
                    alt={`${photo.id}`}
                    className='galleryImg'
                />
            </Link>
        );
    });
};

export default PhotoGallery;
