import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class TeamV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="team-area2">
	<div className="container z-index-common">
		<div className="title-area text-center">
			<span className="sub-title">Our Honorable Teacher</span>
			<h2 className="sec-title">Greet our instructor</h2>
		</div>
		<div className="slider-area">
			<div className="swiper th-slider teamSlider2 has-shadow" id="teamSlider2" data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"}}}'>
				<div className="swiper-wrapper">
					{/* <!-- Single Item --> */}
					<div className="swiper-slide">
						<div className="team-box">
							<div className="team-img-wrap">
								<div className="team-img">
									<img src="assets/img/team/team_2_1.jpg" alt="Team"/>
								</div>
								<div className="th-social">
									<a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f"></i></a>
									<a target="_blank" href="https://instagram.com/"><i className="fab fa-instagram"></i></a>
									<a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
								</div>
							</div>
							<div className="team-content">
								<h3 className="box-title"><a href="team-details.html">Zenith Celestia</a></h3>
								<span className="team-desig">Assistant Teacher</span>
							</div>
						</div>
					</div>


					{/* <!-- Single Item --> */}
					<div className="swiper-slide">
						<div className="team-box">
							<div className="team-img-wrap">
								<div className="team-img">
									<img src="assets/img/team/team_2_2.jpg" alt="Team"/>
								</div>
								<div className="th-social">
									<a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f"></i></a>
									<a target="_blank" href="https://instagram.com/"><i className="fab fa-instagram"></i></a>
									<a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
								</div>
							</div>
							<div className="team-content">
								<h3 className="box-title"><a href="team-details.html">Aurelia Starlight</a></h3>
								<span className="team-desig">Assistant Teacher</span>
							</div>
						</div>
					</div>


					{/* <!-- Single Item --> */}
					<div className="swiper-slide">
						<div className="team-box">
							<div className="team-img-wrap">
								<div className="team-img">
									<img src="assets/img/team/team_2_3.jpg" alt="Team"/>
								</div>
								<div className="th-social">
									<a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f"></i></a>
									<a target="_blank" href="https://instagram.com/"><i className="fab fa-instagram"></i></a>
									<a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
								</div>
							</div>
							<div className="team-content">
								<h3 className="box-title"><a href="team-details.html">Nebula Whisper</a></h3>
								<span className="team-desig">Assistant Teacher</span>
							</div>
						</div>
					</div>


					{/* <!-- Single Item --> */}
					<div className="swiper-slide">
						<div className="team-box">
							<div className="team-img-wrap">
								<div className="team-img">
									<img src="assets/img/team/team_2_1.jpg" alt="Team"/>
								</div>
								<div className="th-social">
									<a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f"></i></a>
									<a target="_blank" href="https://instagram.com/"><i className="fab fa-instagram"></i></a>
									<a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
								</div>
							</div>
							<div className="team-content">
								<h3 className="box-title"><a href="team-details.html">Zenith Celestia</a></h3>
								<span className="team-desig">Assistant Teacher</span>
							</div>
						</div>
					</div>


					{/* <!-- Single Item --> */}
					<div className="swiper-slide">
						<div className="team-box">
							<div className="team-img-wrap">
								<div className="team-img">
									<img src="assets/img/team/team_2_2.jpg" alt="Team"/>
								</div>
								<div className="th-social">
									<a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f"></i></a>
									<a target="_blank" href="https://instagram.com/"><i className="fab fa-instagram"></i></a>
									<a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
								</div>
							</div>
							<div className="team-content">
								<h3 className="box-title"><a href="team-details.html">Aurelia Starlight</a></h3>
								<span className="team-desig">Assistant Teacher</span>
							</div>
						</div>
					</div>


					{/* <!-- Single Item --> */}
					<div className="swiper-slide">
						<div className="team-box">
							<div className="team-img-wrap">
								<div className="team-img">
									<img src="assets/img/team/team_2_3.jpg" alt="Team"/>
								</div>
								<div className="th-social">
									<a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f"></i></a>
									<a target="_blank" href="https://instagram.com/"><i className="fab fa-instagram"></i></a>
									<a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
								</div>
							</div>
							<div className="team-content">
								<h3 className="box-title"><a href="team-details.html">Nebula Whisper</a></h3>
								<span className="team-desig">Assistant Teacher</span>
							</div>
						</div>
					</div>


					{/* <!-- Single Item --> */}
					<div className="swiper-slide">
						<div className="team-box">
							<div className="team-img-wrap">
								<div className="team-img">
									<img src="assets/img/team/team_2_1.jpg" alt="Team"/>
								</div>
								<div className="th-social">
									<a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f"></i></a>
									<a target="_blank" href="https://instagram.com/"><i className="fab fa-instagram"></i></a>
									<a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
								</div>
							</div>
							<div className="team-content">
								<h3 className="box-title"><a href="team-details.html">Zenith Celestia</a></h3>
								<span className="team-desig">Assistant Teacher</span>
							</div>
						</div>
					</div>


					{/* <!-- Single Item --> */}
					<div className="swiper-slide">
						<div className="team-box">
							<div className="team-img-wrap">
								<div className="team-img">
									<img src="assets/img/team/team_2_2.jpg" alt="Team"/>
								</div>
								<div className="th-social">
									<a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f"></i></a>
									<a target="_blank" href="https://instagram.com/"><i className="fab fa-instagram"></i></a>
									<a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
								</div>
							</div>
							<div className="team-content">
								<h3 className="box-title"><a href="team-details.html">Aurelia Starlight</a></h3>
								<span className="team-desig">Assistant Teacher</span>
							</div>
						</div>
					</div>


					{/* <!-- Single Item --> */}
					<div className="swiper-slide">
						<div className="team-box">
							<div className="team-img-wrap">
								<div className="team-img">
									<img src="assets/img/team/team_2_3.jpg" alt="Team"/>
								</div>
								<div className="th-social">
									<a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f"></i></a>
									<a target="_blank" href="https://instagram.com/"><i className="fab fa-instagram"></i></a>
									<a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
								</div>
							</div>
							<div className="team-content">
								<h3 className="box-title"><a href="team-details.html">Nebula Whisper</a></h3>
								<span className="team-desig">Assistant Teacher</span>
							</div>
						</div>
					</div>


				</div>

			</div>
			<button data-slider-prev="#teamSlider2" className="slider-arrow slider-prev"><i className="far fa-arrow-left"></i></button>
			<button data-slider-next="#teamSlider2" className="slider-arrow slider-next"><i className="far fa-arrow-right"></i></button>
		</div>
	</div>
	<div className="shape-mockup anim02 d-none d-xxl-block" data-top="30%" data-left="5%"><img src="assets/img/shape/star3-1.png" alt="shape"/>
	</div>
	<div className="shape-mockup jump d-none d-xxl-block" data-top="30%" data-right="4%"><img src="assets/img/shape/shape_18.png" alt="shape"/>
	</div>
</section>

        }
}

export default TeamV2