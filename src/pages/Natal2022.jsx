import React from 'react';
import PhotoGallery from '../components/PhotoGallery.jsx';
import { useFetch } from '../apiGoogle.js';

const Natal2022 = () => {
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
            <img
                src='http://jlmsscf.cluster030.hosting.ovh.net/indianatijuca/Natal2022/PXL_20221222_180336256.jpg'
                alt='children'
            />
        </>
    );
};

export default Natal2022;
