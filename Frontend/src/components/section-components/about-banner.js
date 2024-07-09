import React, { Component } from 'react';


class Aboutbanner extends Component {

    render() {

        let HeaderTitle = this.props.headertitle;
        let publicUrl = process.env.PUBLIC_URL+'/'
        let Subheader = this.props.subheader ? this.props.subheader : HeaderTitle
        let Img = this.props.Img ? this.props.Img :'page-header-bg-1-1.jpg'

        return (
			<div className="breadcumb-wrapper" data-bg-src="assets/img/bg/about-img-banner.png">
                <div className="banner-shape" data-bg-src="assets/img/shape/banner_bg_2.png"></div>
                <div className="container">
                    <div className="breadcumb-content">
                        <h1 className="breadcumb-title">About Us</h1>
                        <ul className="breadcumb-menu">
                            <li><a href="home-kindergarten-school.html">Home</a></li>
                            <li>About Us</li>
                        </ul>
                    </div>
                </div>
                <div className="shape-mockup jump d-none d-lg-block" data-bottom="5%" data-left="0%"><img src="assets/img/shape/shape_1.png" alt="shape"/>
                </div>
            </div>

        )
    }
}


export default Aboutbanner