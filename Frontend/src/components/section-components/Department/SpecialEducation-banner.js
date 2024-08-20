import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const Special_Education_banner = () => {
   
    return (
        <div className="breadcumb-wrapper " data-bg-src="assets/img/bg/special-banner.png">
                <div className="banner-shape" data-bg-src="assets/img/shape/banner_bg_2.png"></div>
                <div className="container">
                    <div className="breadcumb-content">
                        <h1 className="breadcumb-title">Special Education</h1>
                        <ul className="breadcumb-menu">
                        <li><Link to="/">Home</Link></li>
                            <li>Special Education</li>
                        </ul>
                    </div>
                </div>
                <div className="shape-mockup jump d-none d-lg-block" data-bottom="5%" data-left="0%"><img src="assets/img/shape/shape_1.png" alt="shape"/>
                </div>
            </div>
    );
};

export default Special_Education_banner;
