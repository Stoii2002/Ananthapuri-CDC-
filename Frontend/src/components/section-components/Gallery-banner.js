import React, { Component } from 'react';


class Gallery_banner extends Component {

    render() {

    return <div className="breadcumb-wrapper " data-bg-src="assets/img/bg/gallery-img-1.png">
    <div className="banner-shape" data-bg-src="assets/img/shape/banner_bg_2.png"></div>
    <div className="container">
        <div className="breadcumb-content">
            <h1 className="breadcumb-title">Our Gallery</h1>
            <ul className="breadcumb-menu">
                <li><a href="home-kindergarten-school.html">Home</a></li>
                <li>Our Gallery</li>
            </ul>
        </div>
    </div>
    <div className="shape-mockup jump d-none d-lg-block" data-bottom="5%" data-left="0%"><img src="assets/img/shape/shape_1.png" alt="shape"/>
    </div>
</div>


        }
}

export default Gallery_banner