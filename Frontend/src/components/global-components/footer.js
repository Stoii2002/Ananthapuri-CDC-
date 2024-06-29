import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer_v1 extends Component {

	componentDidMount() {

		const $ = window.$;

		let publicUrl = process.env.PUBLIC_URL + '/'
		const minscript = document.createElement("script");
		minscript.async = true;
		minscript.src = publicUrl + "assets/js/theme.js";

		document.body.appendChild(minscript);

		$('.go-top').find('a').on('click', function () {
			$(window).scrollTop(0);
		});
	}

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imgattr = "Footer logo"

		return (
			<div>
				<footer className="footer-wrapper footer-layout1">
                <div className="container">
                    <div className="widget-area">
                        <div className="row justify-content-between">
                            <div className="col-md-6 col-lg-6 col-xl-auto">
                                <div className="widget footer-widget">
                                    <div className="th-widget-about">
                                        <div className="about-logo">
                                            <a href="home-kindergarten-school.html"><img src="assets/img/logo-white.svg" alt="kitar "/></a>
                                        </div>
                                        <p className="about-text">Welcome To Ananthapuri Centre
                                        For Child Development & Early Intervention! .</p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-auto">
                                <div className="widget widget_nav_menu footer-widget">
                                    <h3 className="widget_title">Quick Links</h3>
                                    <div className="menu-all-pages-container">
                                        <ul className="menu">

                                            <li><a href="about.html">Home</a></li>
                                            <li><a href="classNamees.html">About</a></li>
                                            <li><a href="contact.html">Our school</a></li>
                                            <li><a href="team.html">Disorder</a></li>
                                            <li><a href="contact.html">Gallery</a></li>
                                            <li><a href="service.html">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                            <div className="col-md-6 col-xl-auto">
                                <div className="widget widget_nav_menu footer-widget">
                                    <h3 className="widget_title">Blog</h3>
                                    <div className="menu-all-pages-container">
                                        <ul className="menu">
                                            <li><a href="classNamees.html">Parents Role</a></li>
                                            <li><a href="classNamees.html">Stuttering</a></li>
                                            <li><a href="classNamees.html">Autism</a></li>
                                            <li><a href="classNamees.html">Sign and Symptoms</a></li>
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-auto">
                                <div className="widget footer-widget">
                                    <h3 className="widget_title">Contact Us!</h3>
                                    <div className="th-widget-contact">
                                            <p className="footer-info"><i className="fas fa-map-marker-alt"></i>Medical College, Chalakkuzhi, Trivandrum, Kerala 695011</p>
                                            <p className="footer-info"><i className="fas fa-envelope"></i><a className="text-inherit" href="mailto:info@kitar.com">Email: cdc.ananthapuri@gmail.com</a></p>
                                            <p className="footer-info"><i className="fa-sharp fa-solid fa-phone"></i><a className="text-inherit" href="tel:+1636422567">Phone: 0471 2554990,<br /> 94460 64178</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="copyright-wrap text-center">
                    <p className="copyright-text">Copyright <i className="fal fa-copyright"></i> 2024 <a href="home-kindergarten-school.html">Misc Archive </a>. All Rights Reserved.</p>
                </div>
                <div className="shape-mockup shape1 movingX d-none d-xxl-block" data-top="32%" data-left="2%"><img src="assets/img/shape/shape_4.png" alt="shape"/>
                </div>
                <div className="shape-mockup shape1 movingX d-none d-xxl-block" data-top="0%" data-right="4%"><img src="assets/img/shape/shape_5.png" alt="shape"/>
                </div>
            </footer>
			</div>


		)
	}
}


export default Footer_v1