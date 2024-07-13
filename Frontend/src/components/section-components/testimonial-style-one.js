import React, { useState, useEffect } from 'react';

const TestimonialOne = () => {

	const [testimonials, setTestimonials] = useState([]);
  
	useEffect(() => {
	  fetch('http://127.0.0.1:8000/api/Testimonials/')
	   .then(response => response.json())
	   .then(data => setTestimonials(data));
	}, []);

    return (
        <div className="space overflow-hidden" id="testi-sec">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7">
                        <div className="testi-image2" data-mask-src="assets/img/shape/testi-img-shape.png">
                            <img src="assets/img/testimonial/client-testi.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-xl-5">
                        <div className="title-area ms-xl-4 mt-40">
                            <span className="sub-title">Clients Review</span>
                            <h2 className="sec-title">What Parents Says?</h2>
                        </div>
                        <div className="testi-slider">
                            <div className="swiper th-slider team-slider" id="testiSlide1" data-slider-options='{"effect":"fade","loop":false,"spaceBetween":10}'>
                                <div className="swiper-wrapper">



								{testimonials.map((testimonial, index) => (
                                    <div key={index} className="swiper-slide">
                                        <div className="testi-box">
                                            <div className="testi-box_profile">
                                                <p className="testi-box_text">{testimonial.Discription}</p>
                                                <div className="testi-box_img">
                                                    <img className="img1" src="assets/img/testimonial/test-1.png" alt=""/>
                                                </div>
                                            </div>
                                            <div className="testi-box_wrapper">
                                                <div className="testi-box_review">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-regular fa-star"></i>
                                                </div>
                                                {/* <h3 className="box-title">{testimonial.name}</h3> */}
                                            </div>
                                        </div>
                                    </div>
								))}


                                    
									
                                </div>
                            </div>
                            <div className="testi-frame"><img src="assets/img/shape/testi-frame.png" alt=""/></div>
                            <div className="testi-quote"><img src="assets/img/shape/testi-shape.png" alt=""/></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-mockup z-index-3 movingX d-none d-xl-block" data-top="5%" data-left="2%"><img src="assets/img/shape/shape_2_20.png" alt="shape"/></div>
            <div className="shape-mockup z-index-3 spin d-none d-xl-block" data-bottom="18%" data-left="25%"><img className="gspin" src="assets/img/shape/shape_2_21.png" alt="shape"/></div>
        </div>
    );
}

export default TestimonialOne;
