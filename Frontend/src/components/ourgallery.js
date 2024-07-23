import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class   Ourgallery extends Component {
	
    render() {
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
                                <Link to="Gallery" className="th-btn th-style">view all Gallery</Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="shape-mockup anim03 d-none d-xl-block" data-top="20%" data-left="2%"><img src="assets/img/shape/shape_12.png" alt="shape"/>
                </div>
                <div className="shape-mockup anim02 d-none d-xl-block" data-top="20%" data-right="2%"><img src="assets/img/shape/shape_13.png" alt="shape"/>
                </div>


                <div className="swiper th-slider" id="gallerySlide3" data-slider-options='{ "effect": "coverflow", "grabCursor": true, "centeredSlides":true,"slidesPerView":2,"initialSlide": 5,"coverflowEffect": { "rotate": 0,"stretch": 0,  "depth": 100,"modifier":10,"slideShadows": false}}'>
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="gallery-box">
                                    <div className="gallery-img">
                                        <img src="assets/img/gallery/cdc1.jpg" alt="gallery image"/>
                                    </div>
                                    <div className="gallery-content">
                                        <div className="media-left">
                                            <a href="assets/img/gallery/cdc1.jpg" className="icon-btn popup-image">
                                                <i className="fa-regular fa-eye"></i></a>
                                            {/* <h4 className="box-title">
                                                <a href="gallery.html">Kids Art className</a>
                                            </h4>
                                            <span className="gallery-subtitle">Kitar Kinder Garten</span> */}

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="gallery-box">
                                    <div className="gallery-img">
                                        <img src="assets/img/gallery/cdc2.jpg" alt="gallery image"/>
                                    </div>
                                    <div className="gallery-content">
                                        <div className="media-left">
                                            <a href="assets/img/gallery/cdc2.jpg" className="icon-btn popup-image">
                                                <i className="fa-regular fa-eye"></i></a>
                                            {/* <h4 className="box-title">
                                                <a href="gallery.html">Drawing & Painting</a>
                                            </h4>
                                            <span className="gallery-subtitle">Kitar Kinder Garten</span> */}

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="gallery-box">
                                    <div className="gallery-img">
                                        <img src="assets/img/gallery/cdc3.jpg" alt="gallery image"/>
                                    </div>
                                    <div className="gallery-content">
                                        <div className="media-left">
                                            <a href="assets/img/gallery/cdc3.jpg" className="icon-btn popup-image">
                                                <i className="fa-regular fa-eye"></i></a>
                                           {/*  <h4 className="box-title">
                                                <a href="gallery.html">Kids Letter Match</a>
                                            </h4>
                                            <span className="gallery-subtitle">Kitar Kinder Garten</span> */}

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="gallery-box">
                                    <div className="gallery-img">
                                        <img src="assets/img/gallery/cdc4.jpg" alt="gallery image"/>
                                    </div>
                                    <div className="gallery-content">
                                        <div className="media-left">
                                            <a href="assets/img/gallery/cdc4.jpg" className="icon-btn popup-image">
                                                <i className="fa-regular fa-eye"></i></a>
                                            {/* <h4 className="box-title">
                                                <a href="gallery.html">Reading & Writing Skill</a>
                                            </h4>
                                            <span className="gallery-subtitle">Kitar Kinder Garten</span> */}

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="gallery-box">
                                    <div className="gallery-img">
                                        <img src="assets/img/gallery/cdc5.jpg" alt="gallery image"/>
                                    </div>
                                    <div className="gallery-content">
                                        <div className="media-left">
                                            <a href="assets/img/gallery/cdc5.jpg" className="icon-btn popup-image">
                                                <i className="fa-regular fa-eye"></i></a>
                                            {/* <h4 className="box-title">
                                                <a href="gallery.html">Drawing & Painting</a>
                                            </h4>
                                            <span className="gallery-subtitle">Kitar Kinder Garten</span> */}

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <button data-slider-prev="#gallerySlide3" className="slider-arrow slider-prev" style={{left:'45.3%',position:'absolute',top:'90%'}}><i className="fa fa-arrow-left"></i></button>
                        <button data-slider-next="#gallerySlide3" className="slider-arrow slider-next" style={{right:'45.3%',top:'90%'}}><i className="fa fa-arrow-right"></i></button>
                    </div>
            


            </div>
        )
    }
}


export default Ourgallery