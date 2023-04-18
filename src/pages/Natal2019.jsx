import React from 'react';
import { useLoaderData } from 'react-router-dom';
import GetDataAPI from '../api.js';

export function loader() {
    return GetDataAPI('about');
}

const Natal2019 = () => {
    const data = useLoaderData();
    console.log(data);
    return <div>Natal 2019 page</div>;
};

export default Natal2019;
