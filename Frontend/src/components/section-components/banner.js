import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Banner extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="th-hero-wrapper hero-1" id="hero">
				<div className="th-hero-bg" data-bg-src={publicUrl+"assets/img/bg/hero_bg_1_1.jpg" }>
				</div>
				<div className="bottom-shape" data-bg-src={publicUrl+"assets/img/shape/hero_bottom_shape.png" }></div>
					<div className="container">
						<div className="hero-style1">
							<h6 className="sub-title sub-title2">Center for Child Development & Early Intervention</h6>
							<h1 className="hero-title">Better Feature<span className="text-theme"> For Your Kid’s</span></h1>
							<a className="th-btn btn-green" href="contact.html">Book a Visit</a>
							</div>
						</div>
			</div>
        }
}

export default Banner