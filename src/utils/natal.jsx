import React from 'react';
import { useFetch } from '../apiGoogle.js';
import PhotoGallery from '../components/PhotoGallery.jsx';

export function natal() {
    const { isLoading, data, error } = useFetch('Natal2022');
    if (error) {
        return <span>Oups il y a eu un problème</span>;
    }
    return (
        <>
            <h1>Natal 2022</h1>
            <div className='container'>
                {isLoading ? <div className='loader'></div> : <PhotoGallery data={data} />}
            </div>
        </>
    );
}
