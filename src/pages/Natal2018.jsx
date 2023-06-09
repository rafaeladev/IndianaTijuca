import React from 'react';
import PhotoGallery from '../components/PhotoGallery.jsx';
import { useFetch } from '../apiGoogle.js';

// import getData from '../apiGoogle.js';
// import GetDataAPI from '../api.js';

const Natal2018 = () => {
    const { isLoading, data, error } = useFetch('Natal2018');
    if (error) {
        return <span>Oups il y a eu un problème</span>;
    }
    return (
        <>
            <h1>Natal 2018</h1>
            <div className='container'>
                {isLoading ? (
                    <div className='loader'></div>
                ) : (
                    <PhotoGallery
                        data={data}
                        year={2018}
                    />
                )}
            </div>
        </>
    );
};

export default Natal2018;
