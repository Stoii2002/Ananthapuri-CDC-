import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class TestimonialOne extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <div className="space overflow-hidden" id="testi-sec">
	<div className="container">
		<div className="row">
			<div className="col-xl-7">
				<div className="testi-image2" data-mask-src="assets/img/shape/testi-img-shape.png">
					<img src="assets/img/testimonial/testi-image2.png" alt=""/>
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
							<div className="swiper-slide">
								<div className="testi-box">
									<div className="testi-box_profile">
										<p className="testi-box_text">“Kitar has been a game -changer educ for the most our kindergartens! The users educ friendly's interfaces and engaging's of the designs have made it easy for parents to our edu stay connected with of the theirs child's activities.”</p>
										<div className="testi-box_img">
											<img className="img1" src="assets/img/testimonial/testi_2_1.jpg" alt=""/>
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
										<h3 className="box-title">Emily Johnson</h3>
									</div>
								</div>
							</div>
							<div className="swiper-slide">
								<div className="testi-box">
									<div className="testi-box_profile">
										<p className="testi-box_text">“I recently purchased the Kitar Baby Care set for my newborns bab, and I couldn't be happier. The quality of the products is outstanding kids , and they are gentle on my baby's sensitive skin. The diaper cream worked wonders, and the baby</p>
										<div className="testi-box_img">
											<img className="img1" src="assets/img/testimonial/testi_2_2.jpg" alt=""/>
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
										<h3 className="box-title">Angelina Rose</h3>
									</div>
								</div>
							</div>
							<div className="swiper-slide">
								<div className="testi-box">
									<div className="testi-box_profile">
										<p className="testi-box_text">“Kitar has been a game -changer educ for the most our kindergartens! The users educ friendly's interfaces and engaging's of the designs have made it easy for parents to our edu stay connected with of the theirs child's activities”</p>
										<div className="testi-box_img">
											<img className="img1" src="assets/img/testimonial/testi_2_3.jpg" alt=""/>
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
										<h3 className="box-title">Rita Hirwat Michel</h3>
									</div>
								</div>
							</div>

						</div>
					</div>
					<div className="testi-frame"><img src="assets/img/shape/testi-frame.png" alt=""/></div>
					<div className="testi-quote"><img src="assets/img/shape/testi-shape.png" alt=""/></div>
				</div>
			</div>
		</div>
	</div>

	<div className="shape-mockup z-index-3 movingX d-none d-xl-block" data-top="5%" data-left="2%"><img src="assets/img/shape/shape_2_20.png" alt="shape"/>
	</div>
	<div className="shape-mockup z-index-3 spin d-none d-xl-block" data-bottom="18%" data-left="25%"><img className="gspin" src="assets/img/shape/shape_2_21.png" alt="shape"/>
	</div>
</div>
			  

        }
}

export default TestimonialOne