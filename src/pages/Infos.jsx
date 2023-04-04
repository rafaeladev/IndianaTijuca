import React from 'react';
import { useContext } from 'react';
import { LngContext } from '../utils/context.jsx';

import hommebanner from '../assets/back2.png';
import profilepic from '../assets/profile.jpg';
import pic1 from '../assets/logo1.png';
import pic2 from '../assets/image_maria.png';
import pic3 from '../assets/1909247_1406553006342188_6888766473033194079_o.jpg';

import aboutData from '../about.json';
import Banner from '../components/Banner.jsx';

const About = () => {
    const { language } = useContext(LngContext);
    const { section1, section2, section3, section4 } = aboutData.find(
        (data) => data.title === language
    );
    return (
        <>
            <Banner img={hommebanner} />
            <h1 className='title'>Infos</h1>
            <section className='infos'>
                <div className='infos__content'>
                    <div>
                        <h2>{section1.subtitle}</h2>
                        <p>{section1.content}</p>
                    </div>
                    <div className='infos__content__profile'>
                        <img
                            src={profilepic}
                            alt='Maria do Socorro'
                        />
                        <span>Maria do Socorro</span>
                    </div>
                </div>
                <div className='infos__content'>
                    <img
                        className='infos__content__logo'
                        src={pic1}
                        alt='logo'
                    />
                    <img
                        className='infos__content__img'
                        src={pic2}
                        alt='maria'
                    />
                    <img
                        className='infos__content__img'
                        src={pic3}
                        alt='associacao'
                    />
                </div>
            </section>
            <section className='infos'>
                <h2>{section2.subtitle}</h2>
                <p>{section2.content}</p>
            </section>
            <section className='infos'>
                <h2>{section3.subtitle}</h2>
                <p>{section3.content}</p>
            </section>
            <section className='infos'>
                <h2>{section4.subtitle}</h2>
            </section>
        </>
    );
};

export default About;
