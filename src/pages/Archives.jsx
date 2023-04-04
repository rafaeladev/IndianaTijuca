import React from 'react';
import { useContext } from 'react';
import { LngContext } from '../utils/context.jsx';
import { Link } from 'react-router-dom';

import hommebanner from '../assets/back2.png';
import Banner from '../components/Banner.jsx';

import pic2018 from '../assets/natal2018/portrait_3.jpg';
import pic2019 from '../assets/natal2019/portrait_22.jpg';
import pic2022 from '../assets/natal2019/portrait_22.jpg';

const Historico = () => {
    const { language } = useContext(LngContext);
    const name = language === 'BR' ? 'Natal' : language === 'FR' ? 'Noël' : 'Christmas';
    return (
        <>
            <Banner img={hommebanner} />
            <h1 className='title'>
                {language === 'BR' ? 'Arquivos' : language === 'FR' ? 'Archives' : 'Arquives'}
            </h1>
            <section className='archives'>
                <div className='card-item'>
                    <div
                        className='card-img'
                        style={{
                            backgroundImage: `url(${pic2018})`,
                            minHeight: '350px',
                            minWidth: '350px',
                        }}
                    ></div>
                    <button className='yearsButton'>
                        <Link to={'2018'}>{name} 2018</Link>
                    </button>
                </div>
                <div className='card-item'>
                    <div
                        className='card-img'
                        style={{
                            backgroundImage: `url(${pic2019})`,
                            minHeight: '350px',
                            minWidth: '350px',
                        }}
                    ></div>

                    <button className='yearsButton'>
                        <Link to={'2019'}>{name} 2019</Link>
                    </button>
                </div>
                <div className='card-item'>
                    <div
                        className='card-img'
                        style={{
                            backgroundImage: `url(${pic2022})`,
                            minHeight: '350px',
                            minWidth: '350px',
                        }}
                    ></div>
                    <button className='yearsButton'>
                        <Link to={'2022'}>{name} 2022</Link>
                    </button>
                </div>
            </section>
        </>
    );
};

export default Historico;
