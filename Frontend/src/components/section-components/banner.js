import React, { Component } from 'react';
import { Link }from 'react-router-dom';
class Banner extends Component {

    render() {



    return <div className="th-hero-wrapper hero-3" id="hero"><div className="bottom-shape" data-bg-src="assets/img/shape/hero_bottom_shape.png"></div>
	<div className="swiper th-slider number-dots hero-slider-3" id="heroSlide3" data-slider-options='{"effect":"fade"}'>
		<div className="swiper-wrapper">
			<div className="swiper-slide">
				<div className="hero-inner">
					<div className="th-hero-bg" data-bg-src="assets/img/hero/cdc-BANNER-NEW.jpg" style={{backgroundSize:'cover'}}>
						
					</div>
					<div className="container">
						<div className="hero-style3">
							<span className="sub-title" data-ani="slideindown" data-ani-delay="0.1s">Expert on Child Care</span>
							<h1 className="hero-title" data-ani="slideinleft" data-ani-delay="0.4s">
							Customized intervention and attention as per each child’s need! </h1>
							<p className="hero-text" data-ani="slideinleft" data-ani-delay="0.4s">Comprehensive Well-being Guide for Child Development: Nurturing Health and Growth </p>
							<div className="btn-group">
							<Link to="/contact"  className="th-btn">Connect With Us</Link>
								<div className="call-btn" data-ani="slideinright" data-ani-delay="0.9s">
									<a  className="play-btn popup-video">
										<i className="fas fa-play"></i>	
									</a>
									<div className="media-body">
										<a className="btn-title popup-video">Watch Video</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="swiper-slide">
				<div className="hero-inner">
					<div className="th-hero-bg" data-bg-src="assets/img/hero/web-banner.jpg" style={{backgroundSize:'cover'}}>
						
					</div>
					<div className="container">
						<div className="hero-style3">
							<span className="sub-title" data-ani="slideindown" data-ani-delay="0.1s">Expert on Child Care</span>
							<h1 className="hero-title" data-ani="slideinleft" data-ani-delay="0.4s">
							Every child can learn, just not on the same day or in the same way!  </h1>
							<p className="hero-text" data-ani="slideinleft" data-ani-delay="0.4s">
							Holistic Well-being and Development Guide for Children: Supporting Health, Growth, and Happiness</p>
							<div className="btn-group">
								<div className="" data-ani="slideinleft" data-ani-delay="0.8s">
								<Link to="/contact"  className="th-btn">Connect With Us</Link>
								</div>
								<div className="call-btn" data-ani="slideinright" data-ani-delay="0.9s">
									<a  className="play-btn popup-video">
										<i className="fas fa-play"></i>
									</a>
									<div className="media-body">
										<a  className="btn-title popup-video">Watch Video</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="swiper-slide">
				<div className="hero-inner">
					<div className="th-hero-bg" data-bg-src="assets/img/hero/web-banner2.jpg" style={{backgroundSize:'cover'}}>
						
					</div>
					<div className="container">
						<div className="hero-style3">
							<span className="sub-title" data-ani="slideindown" data-ani-delay="0.1s">Expert on Child Care</span>
							<h1 className="hero-title" data-ani="slideinleft" data-ani-delay="0.4s">
							Nurturing Individual Learning and Growth for Every Child </h1>
							<p className="hero-text" data-ani="slideinleft" data-ani-delay="0.4s">Guide to Comprehensive Child Development and Wellness: Promoting Holistic Health, Supporting Growth, and Nurturing Happiness</p>
							<div className="btn-group">
								<div className="" data-ani="slideinleft" data-ani-delay="0.8s">
								<Link to="/contact"  className="th-btn">Connect With Us</Link>
								</div>
								<div className="call-btn" data-ani="slideinright" data-ani-delay="0.9s">
									<a  className="play-btn popup-video">
										<i className="fas fa-play"></i>
									</a>
									<div className="media-body">
										<a  className="btn-title popup-video">Watch Video</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="slider-pagination" style={{top:'40%'}}></div>
		<div className="shape-mockup z-index-3 spin d-none d-md-block" data-top="30%" data-left="1%"><img className="gspin" src="assets/img/shape/shape_3_1.png" alt="shape"/>
		</div>
		<div className="shape-mockup z-index-3 anim02 d-none d-xl-block" data-top="23%" data-left="28%"><img src="assets/img/shape/shape_3_2.png" alt="shape"/>
		</div>
		<div className="shape-mockup z-index-3 movingX d-none d-md-block" data-top="35%" data-left="40%"><img className="gmovingX" src="assets/img/shape/shape_3_3.png" alt="shape"/>
		</div>
		<div className="shape-mockup z-index-3 d-none d-xl-block" data-bottom="10%" data-left="-3%"><img src="assets/img/shape/shape_3_4.png" alt="shape"/>
		</div>
		<div className="shape-mockup z-index-3 movingX d-none d-md-block" data-bottom="15%" data-left="36%"><img src="assets/img/shape/shape_3_6.png" alt="shape"/>
		</div>
	</div>
</div>
        }
}

export default Banner