import React from 'react';
import { Link }from 'react-router-dom';

const Psychobanner = () => {
   
    return (
        <div className="breadcumb-wrapper " data-bg-src="assets/img/bg/psycho-banner.png">
                <div className="banner-shape" data-bg-src="assets/img/shape/banner_bg_2.png"></div>
                <div className="container">
                    <div className="breadcumb-content">
                        <h1 className="breadcumb-title">Behavioural Therapy</h1>
                        <ul className="breadcumb-menu">
                        <li><Link to="/">Home</Link></li>
                            <li>Behavioural Therapy</li>
                        </ul>
                    </div>
                </div>
                <div className="shape-mockup jump d-none d-lg-block" data-bottom="5%" data-left="0%"><img src="assets/img/shape/shape_1.png" alt="shape"/>
                </div>
            </div>
    );
};

export default Psychobanner;
