import React from 'react';

const Departmentsbanner = () => {
    return (
        <div className="breadcumb-wrapper " data-bg-src={process.env.PUBLIC_URL + "/assets/img/bg/breadcumb-bg.jpg"}>
            <div className="banner-shape" data-bg-src={process.env.PUBLIC_URL + "/assets/img/shape/banner_bg_2.png"}></div>
            <div className="container">
                <div className="breadcumb-content">
                    <h1 className="breadcumb-title">Class Details</h1>
                    <ul className="breadcumb-menu">
                        <li><a href="home-kindergarten-school.html">Home</a></li>
                        <li>Class Details</li>
                    </ul>
                </div>
            </div>
            <div className="shape-mockup jump d-none d-lg-block" data-bottom="5%" data-left="0%"><img src={process.env.PUBLIC_URL + "/assets/img/shape/shape_1.png"} alt="shape"/></div>
        </div>
    );
};

export default Departmentsbanner;
