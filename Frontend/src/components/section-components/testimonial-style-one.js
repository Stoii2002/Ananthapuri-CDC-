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
					<img src="assets/img/testimonial/about-testimonial.png" alt=""/>
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
										<p className="testi-box_text">“My son was very hyperactive. He never used to sit still,climb over the window grills.Favourite spot was top of the cupboard.Never listen to me as if he was deaf. We came at Ananthapuri Centre.They listened and understood my child’s problem. They conducted a detailed assessment for my kid.It’s almost two months and a very significant change in my son’s behaviour.Thank the team at Ananthapuri CDC.”</p>
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
										<h3 className="box-title">Maya Rani ( name changed )</h3>
									</div>
								</div>
							</div>
							<div className="swiper-slide">
								<div className="testi-box">
									<div className="testi-box_profile">
										<p className="testi-box_text">“My daughter’s journey with Ananthapuri CDC has been wonderful. She has made a great progress through speech therapy. She never looked at me when I used to talk to her. On top of that, she often threw tantrums. Post her speech therapy sessions, I could see lot of changes in her behaviour. I am extremely pleased with my daughter’s accomplishments.
										Thanks a lot team Ananthapuri for your continued support.”</p>
										<div className="testi-box_img">
											<img className="img1" src="assets/img/testimonial/test-2.png" alt=""/>
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
										<h3 className="box-title">Radhika Nair ( name changed )</h3>
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