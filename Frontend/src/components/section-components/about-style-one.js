import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AboutStyleOne extends Component {

    render() {
        return (
            <div className="overflow-hidden space-top space-extra-bottom" id="about-sec">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6">
                            <div className="img-box1">
                                <div className="img1" data-bg-src="assets/img/normal/about_shape1.png">
                                    <img src="assets/img/normal/cdc-banner-image.jpg" alt="About" loading="lazy"/>
                                </div>
                                <div className="img1 style2 ding-dong" data-bg-src="assets/img/normal/about_shape2.png">
                                    <img src="assets/img/normal/cdc-banner-img2.jpg" alt="About" loading="lazy"/>
                                </div>
                                <div className="about-shape spin">
                                    <img src="assets/img/shape/about-shape.png" alt="About" loading="lazy"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="ps-xl-4 ms-xl-5">
                                <div className="title-area mb-30">
                                    <span className="sub-title sub-title2 style1">About Us</span>
                                    <h2 className="sec-title">WELCOME TO ANANTHAPURI CENTRE FOR CHILD DEVELOPMENT & EARLY INTERVENTION!</h2>
                                    <p className="sec-text">A leading institution dedicated to becoming a center of excellence in Early Child Care & Education, Adolescent Care & Education, and related fields. Our mission is to systematically reduce childhood disability through comprehensive systems and personalized care.</p>
                                    <p>At Ananthapuri Special School we specialize in holistic and customized care for every child dealing with developmental disabilities and autism disorders. Our commitment extends to fostering a nurturing environment that supports the unique needs of each child, ensuring their optimal growth and development.</p>
                                </div>
                                <Link to="about" className="th-btn">Know More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-mockup anim03 d-none d-xxl-block" data-top="15%" data-left="4%">
                    <img src="assets/img/shape/bag.png" alt="shape" loading="lazy"/>
                </div>
                <div className="shape-mockup movingX d-none d-xxl-block" data-top="5%" data-right="10%">
                    <img className="gmovingX" src="assets/img/shape/boy_3.png" alt="shape" loading="lazy"/>
                </div>
            </div>
        );
    }
}

export default AboutStyleOne;
