import React from 'react';

const Testimonial = () => {

    return (
		 <div className="" id="testi-sec">
				<div className="testi-sec">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-xl-6">
								<div className="testi-wrapper">
									<div className="testi-image">
										<img src="assets/img/testimonial/testimonial-img.png" alt=""/>
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
										<h2 className="sec-title">What the Parents Say</h2>
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
													<p className="testi-card_text">“My son was very hyperactive. He never used to sit still, he would climb over the window grills. His favourite spot was top of the cupboard. He would never listen to me as if he was deaf and could not hear anything. We came at Ananthapuri Centre for Child Development & Early Intervention, with the thought of asking for some tips to make the child calmer. We liked the way they listened and understood my child’s problem. They conducted a detailed assessment for my kid. Now we are attending the therapy sessions suggested by them. It’s almost two months and we can see a very significant change in my son’s behaviour. Would like to thank the team at Ananthapuri CDC. ”</p>
													<div className="testi-card_profile">
														
														<div className="testi-card_content">
															<h3 className="testi-card_name box-title">Maya Rani ( name changed )</h3>
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
													<p className="testi-card_text">“My son was very hyperactive. He never used to sit still, he would climb over the window grills. His favourite spot was top of the cupboard. He would never listen to me as if he was deaf and could not hear anything. We came at Ananthapuri Centre for Child Development & Early Intervention, with the thought of asking for some tips to make the child calmer. We liked the way they listened and understood my child’s problem. They conducted a detailed assessment for my kid. Now we are attending the therapy sessions suggested by them. It’s almost two months and we can see a very significant change in my son’s behaviour. Would like to thank the team at Ananthapuri CDC. ”</p>
													<div className="testi-card_profile">
														
														<div className="testi-card_content">
															<h3 className="testi-card_name box-title">Maya Rani ( name changed )</h3>
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
		)
        
}

export default Testimonial