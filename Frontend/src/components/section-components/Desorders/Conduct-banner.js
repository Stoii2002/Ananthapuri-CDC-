import React from 'react';
import { Link }from 'react-router-dom';

const Counduct_banner = () => {
   
    return (
        <div className="breadcumb-wrapper " data-bg-src="assets/img/bg/Counduct2.jpg">
                <div className="banner-shape" data-bg-src="assets/img/shape/banner_bg_2.png"></div>
                <div className="container">
                    <div className="breadcumb-content">
                        <h1 className="breadcumb-title">Counduct Disorder </h1>
                        <ul className="breadcumb-menu">
                            <li><Link to="/">Home</Link></li>
                            <li>Counduct Disorder </li>
                        </ul>
                    </div>
                </div>
                <div className="shape-mockup jump d-none d-lg-block" data-bottom="5%" data-left="0%"><img src="assets/img/shape/shape_1.png" alt="shape"/>
                </div>
            </div>
    );
};

export default Counduct_banner;
