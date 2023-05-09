import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PhotoGallery from '../components/PhotoGallery.jsx';
import GetDataAPI from '../api.js';
import { useFetch } from '../apiGoogle.js';
export function loader() {
    return GetDataAPI('about');
}

const Natal2019 = () => {
    const { isLoading, data, error } = useFetch('Natal2019');

    return (
        <>
            <h1>Natal 2019</h1>
            <div className='container'>
                {isLoading ? (
                    <div className='loader'></div>
                ) : (
                    <PhotoGallery
                        data={data}
                        year={2019}
                    />
                )}
            </div>
        </>
    );
};

export default Natal2019;
