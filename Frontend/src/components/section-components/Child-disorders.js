import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class Child_disorders extends Component {

    render() {

    return <section class=" overflow-hidden space">
	<div class="container z-index-common">
		<div class="title-area text-center">
			<span class="sub-title">Childhood Disorders</span>
			<h2 class="sec-title">PEDIATRIC CONDITIONS</h2>
		</div>

		
		<div class="slider-area">
			<div class="swiper th-slider teamSlider1 has-shadow" id="teamSlider1" data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"}}}'>
				<div class="swiper-wrapper">
					{/* <!-- Single Item --> */}
					<div class="swiper-slide">
						<div class="team-card">
							<div class="team-img-wrap">
								<div class="team-img" data-mask-src="assets/img/shape/team-shape2.png">
										<img src="assets/img/team/adhd-img.png" alt="Team"/>
									<div class="team-overlay" data-mask-src="assets/img/normal/team_overlay.png"></div>
								</div>
								<div class="th-social">
										<div class="team-content">
										<h3 class="box-title"><Link to="Adhd">More</Link></h3>
									</div>
								</div>
							</div>
							<div class="team-content">
								<h3 class="box-title"><Link to="Adhd">ADHD</Link></h3>
							</div>
						</div>
					</div>


					{/* <!-- Single Item --> */}
					<div class="swiper-slide">
						
						<div class="team-card">
							<div class="team-img-wrap">
								<div class="team-img" data-mask-src="assets/img/shape/team-shape2.png">
								<img src="assets/img/team/autism-img.png" alt="Team"/>
									<div class="team-overlay" data-mask-src="assets/img/normal/team_overlay.png"></div>
								</div>
								<div class="th-social">
								<div class="team-content">
								<h3 class="box-title"><Link to="Autism">More</Link></h3>
							</div>
								</div>
							</div>
							<div class="team-content">
								<h3 class="box-title"><Link to="Autism">Autism</Link></h3>
							</div>
						</div>
						
					</div>


					{/* <!-- Single Item --> */}
					<div class="swiper-slide">
						<div class="team-card">
							<div class="team-img-wrap">
								<div class="team-img" data-mask-src="assets/img/shape/team-shape2.png">
									<img src="assets/img/team/cerebral-palsy-img.png" alt="Team"/>
									<div class="team-overlay" data-mask-src="assets/img/normal/team_overlay.png"></div>
								</div>
								<div class="th-social">
								<div class="team-content">
								<h3 class="box-title"><Link to="Cerebral-Palsy">More</Link></h3>
							</div>
								</div>
							</div>
							<div class="team-content">
								<h3 class="box-title"><Link to="Cerebral-Palsy">Cerebral Palsy</Link></h3>
							</div>
						</div>
					</div>


					{/* <!-- Single Item --> */}
					<div class="swiper-slide">
						<div class="team-card">
							<div class="team-img-wrap">
								<div class="team-img" data-mask-src="assets/img/shape/team-shape2.png">
									<img src="assets/img/team/down-syndrome-img.png" alt="Team"/>
									<div class="team-overlay" data-mask-src="assets/img/normal/team_overlay.png"></div>
								</div>
								<div class="th-social">
								<div class="team-content">
								<h3 class="box-title"><Link to="Downs-Syndrome">More</Link></h3>
							</div>
								</div>
							</div>
							<div class="team-content">
								<h3 class="box-title"><Link to="Downs-Syndrome">Downs Syndrome</Link></h3>
							</div>
						</div>
					</div>


					{/* <!-- Single Item --> */}
					<div class="swiper-slide">
						<div class="team-card">
							<div class="team-img-wrap">
								<div class="team-img" data-mask-src="assets/img/shape/team-shape2.png">
									<img src="assets/img/team/intellectual-home-img.png" alt="Team"/>
									<div class="team-overlay" data-mask-src="assets/img/normal/team_overlay.png"></div>
								</div>
								<div class="th-social">
								<div class="team-content">
								<h3 class="box-title"><Link to="Intellectual-Disability">More</Link></h3>
							</div>
								</div>
							</div>
							<div class="team-content">
								<h3 class="box-title"><Link to="Intellectual-Disability">Intellectual Disability</Link></h3>
							</div>
						</div>
					</div>


					{/* <!-- Single Item --> */}
					<div class="swiper-slide">
						<div class="team-card">
							<div class="team-img-wrap">
								<div class="team-img" data-mask-src="assets/img/shape/team-shape2.png">
									<img src="assets/img/team/learning-home-img.png" alt="Team"/>
									<div class="team-overlay" data-mask-src="assets/img/normal/team_overlay.png"></div>
								</div>
								<div class="th-social">
								<div class="team-content">
								<h3 class="box-title"><Link to="Learning-Disability">More</Link></h3>
							</div>
								</div>
							</div>
							<div class="team-content">
								<h3 class="box-title"><Link to="Learning-Disability">Learning Disability</Link></h3>
							</div>
						</div>
					</div>


					


				</div>
			</div>
			<button data-slider-prev="#teamSlider1" class="slider-arrow slider-prev"><i class="far fa-arrow-left"></i></button>
			<button data-slider-next="#teamSlider1" class="slider-arrow slider-next"><i class="far fa-arrow-right"></i></button>
		</div>
	</div>
	<div class="shape-mockup anim02 d-none d-xl-block" data-bottom="22%" data-left="5%"><img src="assets/img/shape/star3-1.png" alt="shape"/>
	</div>
	<div class="shape-mockup jump d-none d-xl-block" data-top="30%" data-right="4%"><img src="assets/img/shape/shape_18.png" alt="shape"/>
	</div>
</section>

        }
}

export default Child_disorders