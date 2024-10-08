import React, { Component } from 'react';


class Contact_banner extends Component {

    render() {

    return <div className="breadcumb-wrapper " data-bg-src="assets/img/bg/contact-banner-new.png">
    <div className="banner-shape" data-bg-src="assets/img/shape/banner_bg_2.png"></div>
    <div className="container">
        <div className="breadcumb-content">
            <h1 className="breadcumb-title">Contact Us</h1>
            <ul className="breadcumb-menu">
                <li><a href="home-kindergarten-school.html">Home</a></li>
                <li>Contact Us</li>
            </ul>
        </div>
    </div>
    <div className="shape-mockup jump d-none d-lg-block" data-bottom="5%" data-left="0%"><img src="assets/img/shape/shape_1.png" alt="shape" loading="lazy"/>
    </div>
</div> 


        }
}

export default Contact_banner