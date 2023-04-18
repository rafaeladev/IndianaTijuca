import React from 'react';
import { Loader } from '../components/Loader.jsx';
import PhotoGallery from '../components/PhotoGallery.jsx';
import { nanoid } from 'nanoid';
import getData, { useFetch } from '../apiGoogle.js';
import { Link } from 'react-router-dom';

const Natal2022 = () => {
    const { isLoading, data, error } = useFetch('Natal2022');

    return (
        <>
            <h1>Natal 2022</h1>
            <div className='container'>
                {isLoading ? (
                    <div>
                        <Loader />
                        <h2>Data is loading</h2>
                    </div>
                ) : (
                    <PhotoGallery data={data} />
                )}
            </div>
        </>
    );
};

export default Natal2022;
