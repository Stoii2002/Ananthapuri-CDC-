import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa';

class Ourgallery extends Component {
	
    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'logo'
        let anchor = '#'
        return (
			<div className="space">
                <div className="container">
                    <div className="row justify-content-lg-between justify-content-center align-items-end">
                        <div className="col-lg">
                            <div className="title-area text-center text-lg-start">
                                <span className="sub-title">Memory Of Our Kinder garten</span>
                                <h2 className="sec-title">Our Photo Gallery</h2>
                            </div>
                        </div>
                        <div className="col-lg-auto d-none d-lg-block">
                            <div className="sec-btn">
                                <a href="gallery.html" className="th-btn th-style">view all Gallery</a>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-30 gallery-row filter-active overlay-direction">
                        <div className="col-xxl-auto col-md-6 filter-item">
                            <div className="gallery-card">
                                <a className="box-img popup-image" href="assets/img/gallery/gallery_1_1.jpg"><img src="assets/img/gallery/gallery_1_1.jpg" alt="gallery image"/>
                                    <div className="box-content">
                                        <span className="icon-btn style2">
                                            <i className="fas fa-eye"></i></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-xxl-auto col-md-6 filter-item">
                            <div className="gallery-card">
                                <a className="box-img popup-image" href="assets/img/gallery/gallery_1_2.jpg"><img src="assets/img/gallery/gallery_1_2.jpg" alt="gallery image"/>
                                    <div className="box-content">
                                        <span className="icon-btn style2">
                                            <i className="fas fa-eye"></i></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-xxl-auto col-md-6 filter-item">
                            <div className="gallery-card">
                                <a className="box-img popup-image" href="assets/img/gallery/gallery_1_3.jpg"><img src="assets/img/gallery/gallery_1_3.jpg" alt="gallery image"/>
                                    <div className="box-content">
                                        <span className="icon-btn style2">
                                            <i className="fas fa-eye"></i></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-xxl-auto col-md-6 filter-item">
                            <div className="gallery-card">
                                <a className="box-img popup-image" href="assets/img/gallery/gallery_1_4.jpg"><img src="assets/img/gallery/gallery_1_4.jpg" alt="gallery image"/>
                                    <div className="box-content">
                                        <span className="icon-btn style2">
                                            <i className="fas fa-eye"></i></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-mockup anim03 d-none d-xl-block" data-top="20%" data-left="2%"><img src="assets/img/shape/shape_12.png" alt="shape"/>
                </div>
                <div className="shape-mockup anim02 d-none d-xl-block" data-top="20%" data-right="2%"><img src="assets/img/shape/shape_13.png" alt="shape"/>
                </div>
            </div>
        )
    }
}


export default Ourgallery