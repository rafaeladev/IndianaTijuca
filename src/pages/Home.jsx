import React from 'react';
import { useContext } from 'react';

import Banner from '../components/Banner.jsx';
import PhotoCard from '../components/PhotoCard.jsx';

import hommebanner from '../assets/banner-site-5.jpg';

import photoCard1 from '../assets/natal2019/portrait_16.jpg';
import photoCard2 from '../assets/natal2019/portrait_17.jpg';
import photoCard3 from '../assets/natal2019/portrait_1.jpg';
import photoCard4 from '../assets/natal2019/portrait_22.jpg';

import contentData from '../home.json';

import { LngContext } from '../utils/context.jsx';

const Home = () => {
    const { language, selectLanguage } = useContext(LngContext);
    const years = [2018, 2019, 2022];
    const yearsSize = years.length;
    const { content, subtitles, name, pic } = contentData.find((data) => data.title === language);

    const yearsButtons = years.map((year) => {
        return (
            <button
                key={year}
                className='yearsButton'
            >
                {name} {year}
            </button>
        );
    });

    return (
        <div className='home'>
            <Banner img={hommebanner} />
            <section className='photoCardList'>
                <PhotoCard img={photoCard1} />
                <PhotoCard img={photoCard2} />
                <PhotoCard img={photoCard3} />
                <PhotoCard img={photoCard4} />
            </section>
            <section className='homeContent'>
                <div className='homeContent__text'>
                    <img
                        src={pic}
                        alt='flag'
                    />
                    <p>{content}</p>
                </div>
                <div className='homeContent__actions'>
                    <h2>{subtitles.history}</h2>
                    {yearsButtons}
                    <h2>{subtitles.action}</h2>
                    <button className='yearsButton'>
                        {name} {years[yearsSize - 1]}
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Home;
