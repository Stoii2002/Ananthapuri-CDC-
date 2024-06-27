import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Testimonial extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return    <div className="" id="testi-sec">
				<div className="testi-sec">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-xl-6">
								<div className="testi-wrapper">
									<div className="testi-image">
										<img src="assets/img/testimonial/testi-image.png" alt=""/>
									</div>
									<div className="testi-shape"><img src="assets/img/shape/testi-line.png" alt=""/></div>
									<div className="team-thumb" data-slider-tab="#testiSlide1">
										<div className="tab-btn active"></div>
										<div className="tab-btn"></div>
										<div className="tab-btn"></div>
										<div className="tab-btn"></div>
										<div className="tab-btn"></div>
									</div>
								</div>
							</div>
							<div className="col-xl-6">
								<div className="testi-area">
									<div className="title-area mb-40">
										<span className="sub-title">Testimonials</span>
										<h2 className="sec-title">What Our Parents Say?</h2>
									</div>
									<div className="swiper th-slider team-slider" id="testiSlide1" data-slider-options='{"effect":"slide","loop":false,"spaceBetween":10}'>
										<div className="swiper-wrapper">
											<div className="swiper-slide">
												<div className="testi-card">
													<div className="testi-card_wrapper">
														<div className="testi-card-quote">
															<img src="assets/img/icon/testi-quote.svg" alt="img"/>
														</div>
														<div className="testi-card_review">
															<i className="fa-solid fa-star"></i>
															<i className="fa-solid fa-star"></i>
															<i className="fa-solid fa-star"></i>
															<i className="fa-solid fa-star"></i>
															<i className="fa-regular fa-star"></i>
														</div>
													</div>
													<p className="testi-card_text">“I recently purchased the Kitar Baby Care set for my newborns bab, and I couldn't be happier. The quality of the products is outstanding kids , and they are gentle on my baby's sensitive skin. The diaper cream worked wonders, and the baby lotion has a delightful scent. Highly recommend the Kitar Baby Care! ”</p>
													<div className="testi-card_profile">
														<div className="testi-card_avater">
															<img src="assets/img/testimonial/testi_1_1.jpg" alt="testimonial"/>
														</div>
														<div className="testi-card_content">
															<h3 className="testi-card_name box-title">Rita Hirwat Michel</h3>
															<span className="testi-card_desig">Kids Mother</span>

														</div>
													</div>



												</div>
											</div>
											<div className="swiper-slide">
												<div className="testi-card">
													<div className="testi-card_wrapper">
														<div className="testi-card-quote">
															<img src="assets/img/icon/testi-quote.svg" alt="img"/>
														</div>
														<div className="testi-card_review">
															<i className="fa-solid fa-star"></i>
															<i className="fa-solid fa-star"></i>
															<i className="fa-solid fa-star"></i>
															<i className="fa-solid fa-star"></i>
															<i className="fa-regular fa-star"></i>
														</div>
													</div>
													<p className="testi-card_text">“Kitar has been a game -changer educ for the most our kindergartens! The users educ friendly's interfaces and engaging's of the designs have made it easy for parents to our edu stay connected with of the theirs child's activities it easy for parents.”</p>
													<div className="testi-card_profile">
														<div className="testi-card_avater">
															<img src="assets/img/testimonial/testi_1_2.jpg" alt="testimonial"/>
														</div>
														<div className="testi-card_content">
															<h3 className="testi-card_name box-title">Michel Carlos</h3>
															<span className="testi-card_desig">Kids Mother</span>

														</div>
													</div>



												</div>
											</div>
											<div className="swiper-slide">
												<div className="testi-card">
													<div className="testi-card_wrapper">
														<div className="testi-card-quote">
															<img src="assets/img/icon/testi-quote.svg" alt="img"/>
														</div>
														<div className="testi-card_review">
															<i className="fa-solid fa-star"></i>
															<i className="fa-solid fa-star"></i>
															<i className="fa-solid fa-star"></i>
															<i className="fa-solid fa-star"></i>
															<i className="fa-regular fa-star"></i>
														</div>
													</div>
													<p className="testi-card_text">“I recently purchased the Kitar Baby Care set for my newborns bab, and I couldn't be happier. The quality of the products is outstanding kids , and they are gentle on my baby's sensitive skin. The diaper cream worked wonders, and the baby lotion has a delightful scent. Highly recommend the Kitar Baby Care! ”</p>
													<div className="testi-card_profile">
														<div className="testi-card_avater">
															<img src="assets/img/testimonial/testi_1_1.jpg" alt="testimonial"/>
														</div>
														<div className="testi-card_content">
															<h3 className="testi-card_name box-title">Angelina Rose</h3>
															<span className="testi-card_desig">Kids Mother</span>

														</div>
													</div>



												</div>
											</div>
											<div className="swiper-slide">
												<div className="testi-card">
													<div className="testi-card_wrapper">
														<div className="testi-card-quote">
															<img src="assets/img/icon/testi-quote.svg" alt="img"/>
														</div>
														<div className="testi-card_review">
															<i className="fa-solid fa-star"></i>
															<i className="fa-solid fa-star"></i>
															<i className="fa-solid fa-star"></i>
															<i className="fa-solid fa-star"></i>
															<i className="fa-regular fa-star"></i>
														</div>
													</div>
													<p className="testi-card_text">“I recently purchased the Kitar Baby Care set for my newborns bab, and I couldn't be happier. The quality of the products is outstanding kids , and they are gentle on my baby's sensitive skin. The diaper cream worked wonders, and the baby lotion has a delightful scent. Highly recommend the Kitar Baby Care! ”</p>
													<div className="testi-card_profile">
														<div className="testi-card_avater">
															<img src="assets/img/testimonial/testi_1_2.jpg" alt="testimonial"/>
														</div>
														<div className="testi-card_content">
															<h3 className="testi-card_name box-title">Rita Hirwat Michel</h3>
															<span className="testi-card_desig">Kids Mother</span>

														</div>
													</div>



												</div>
											</div>
											<div className="swiper-slide">
												<div className="testi-card">
													<div className="testi-card_wrapper">
														<div className="testi-card-quote">
															<img src="assets/img/icon/testi-quote.svg" alt="img"/>
														</div>
														<div className="testi-card_review">
															<i className="fa-solid fa-star"></i>
															<i className="fa-solid fa-star"></i>
															<i className="fa-solid fa-star"></i>
															<i className="fa-solid fa-star"></i>
															<i className="fa-regular fa-star"></i>
														</div>
													</div>
													<p className="testi-card_text">“Kitar has been a game -changer educ for the most our kindergartens! The users educ friendly's interfaces and engaging's of the designs have made it easy for parents to our edu stay connected with of the theirs child's activities it easy for parents.”</p>
													<div className="testi-card_profile">
														<div className="testi-card_avater">
															<img src="assets/img/testimonial/testi_1_1.jpg" alt="testimonial"/>
														</div>
														<div className="testi-card_content">
															<h3 className="testi-card_name box-title">Michel Carlos</h3>
															<span className="testi-card_desig">Kids Mother</span>

														</div>
													</div>



												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="shape-mockup z-index-3 movingX d-none d-xl-block" data-top="-10%" data-left="0%"><img src="assets/img/shape/shape_2_17.png" alt="shape"/>
				</div>
				<div className="shape-mockup z-index-3 movingX d-none d-xl-block" data-top="-10%" data-right="5%"><img src="assets/img/shape/shape_2_18.png" alt="shape"/>
				</div>
				<div className="shape-mockup z-index-3 movingX d-none d-xl-block" data-bottom="0%" data-right="10%"><img src="assets/img/shape/shape_2_19.png" alt="shape"/>
				</div>
			</div>

        }
}

export default Testimonial