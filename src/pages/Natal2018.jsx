import React from 'react';
import { nanoid } from 'nanoid';
import { getPhotos } from '../apiGoogle.js';
import { useLoaderData } from 'react-router-dom';

// import getData from '../apiGoogle.js';
// import GetDataAPI from '../api.js';

export function loader() {
    return getPhotos('Natal2018');
}

const Natal2018 = () => {
    const photos = useLoaderData();

    const photosDisplay = photos.map((photo) => {
        return photo.direction === 'horizontal' ? (
            <div
                key={nanoid()}
                className={`photoGallery__big`}
            >
                <img
                    key={nanoid()}
                    src={photo.url}
                    alt={`${photo.id}`}
                    className='galleryImg'
                />
            </div>
        ) : (
            <div
                key={nanoid()}
                className={'photoGallery__vertical'}
            >
                <img
                    key={nanoid()}
                    src={photo.url}
                    alt={`${photo.id}`}
                    className='galleryImg'
                />
            </div>
        );
    });

    // for (let i = 0; i < photos.length - 1; i++) {
    //     newArray = [...newArray, i * Math.random()];
    // }

    // console.log(newArray);
    return (
        <>
            <h1>2018</h1>
            <div className='container'>{photosDisplay}</div>
        </>
    );
};

export default Natal2018;
