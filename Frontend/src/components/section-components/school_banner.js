import React, { Component } from 'react';


class School_banner extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div class="breadcumb-wrapper " data-bg-src="assets/img/bg/breadcumb-bg.jpg">
    <div class="banner-shape" data-bg-src="assets/img/shape/banner_bg_2.png"></div>
    <div class="container">
        <div class="breadcumb-content">
            <h1 class="breadcumb-title">Our School</h1>
            <ul class="breadcumb-menu">
                <li><a href="home-kindergarten-school.html">Home</a></li>
                <li>Our classes</li>
            </ul>
        </div>
    </div>
    <div class="shape-mockup jump d-none d-lg-block" data-bottom="5%" data-left="0%"><img src="assets/img/shape/shape_1.png" alt="shape"/>
    </div>
</div>


        }
}

export default School_banner