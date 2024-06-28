import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutPage extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return	<div className="space" id="about-sec">
	<div className="container">
		<div className="row align-items-center">
			<div className="col-xl-6">
				<div className="img-box3 me-xl-5 pe-xl-2">
					<div className="img1">
						<img src="assets/img/normal/about_3.jpg" alt="About"/>
					</div>
					<div className="about-shape">
						<img src="assets/img/shape/circle.png" alt=""/>
					</div>
					<div className="about-shape2">
						<img src="assets/img/shape/circle2.png" alt=""/>
					</div>
					<div className="th-experience movingX">
						<div className="th-experience_content">
							<h2 className="experience-year"><img src="assets/img/icon/about_2.svg" alt=""/><span className="counter-number">30</span>+</h2>
							<p className="experience-text">Award.</p>
						</div>
						<div className="about-shape3"></div>
					</div>
				</div>
			</div>
			<div className="col-xl-6">
				<div className="title-area mb-20">
					<span className="sub-title style1">About Our Baby Care Garden</span>
					<h2 className="sec-title mb-20">A Guide to Nurturing and Nannying</h2>
				</div>
				<p className="sec-text mb-30">This term implies a focus on overall well-beings, healths, and positive
					development. It suggests that the guide is not just about meeting basic needs but also about
					creating a positive and enriching environment for the children.</p>
				<div className="about-wrapper">
					<div className="about-item-wrap">
						<div className="about-item">
							<div className="about-item_icon">
								<i className="fa-solid fa-badge-check"></i>
							</div>
							<div className="about-item_centent">
								<h5 className="box-title">Play To Learn</h5>
								<p className="about-item_text">Engaging in play is an essential aspect of a baby's
									development.
								</p>
							</div>
						</div>
						<div className="about-item">
							<div className="about-item_icon">
								<i className="fa-solid fa-badge-check"></i>
							</div>
							<div className="about-item_centent">
								<h5 className="box-title">Qualitiful Nanny</h5>
								<p className="about-item_text">Hiring the qualifie’d and quality nanny is crucial for the
									well.</p>
							</div>
						</div>
					</div>
					<blockquote className="about-blockquote">
						<p>"Baby care where the tiniest gestures create the biggest bonds." </p>
					</blockquote>

				</div>
				<div className="btn-group justify-content-start">
					<a href="about.html" className="th-btn th-icon">About More</a>
					<div className="feature-wrapper">
						<div className="feature-icon">
							<a href="tel:+163-642-2567"><img src="assets/img/icon/earphone.svg" alt=""/></a>
						</div>
						<div className="media-body">
							<span className="header-info_label">Call Now</span>
							<p className="header-info_link"><a href="tel:+163-642-2567">+163-642-2567</a></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="shape-mockup movingX d-none d-xl-block" data-top="-3.5%" data-right="4%"><img src="assets/img/shape/shape_3_8.png" alt="shape"/>
	</div>
</div>



        }
}

export default AboutPage