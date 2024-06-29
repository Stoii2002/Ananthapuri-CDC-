import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutV3 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="overflow-hidden space-top space-extra-bottom" id="about-sec">
	<div className="container">
		<div className="row align-items-center">
		<div className="col-xl-6">
				<div className="ps-xl-4 ms-xl-5">
					<div className="title-area mb-30">
						<span className="sub-title sub-title2 style1">About Us</span>
						<h2 className="sec-title">We’re early childhood education, & specialize in kindergarten.</h2>
						<p className="sec-text">Kindergarten curriculums vary by country and educational philosophy,
							but they typically focus on foundational skill such as literacy, numeracy, & social skill.
							Activities may include storytelling, singing, arts and crafts, counting, basic math
							concepts, and social interaction with peers.</p>
						<p>Qualified teachers or educators lead kindergarten classNamees. They create a nurturing and
							stimulating environment where children can explore, learn, and grow.</p>
					</div>
					<a href="about.html" className="th-btn">About More </a>
				</div>
			</div>
			<div className="col-xl-6">
				<div className="img-box1">
					<div className="img1" data-bg-src="assets/img/normal/about_shape1.png">
						<img src="assets/img/normal/about_1.png" alt="About"/>
					</div>
					<div className="img1 style2 ding-dong" data-bg-src="assets/img/normal/about_shape2.png">
						<img src="assets/img/normal/about_2.png" alt="About"/>
					</div>
					<div className="about-shape spin">
						<img src="assets/img/shape/about-shape.png" alt="About"/>
					</div>
				</div>
			</div>
			
		</div>
	</div>
	<div className="shape-mockup anim03 d-none d-xxl-block" data-top="15%" data-left="4%"><img src="assets/img/shape/bag.png" alt="shape"/>
	</div>
	<div className="shape-mockup movingX d-none d-xxl-block" data-top="5%" data-right="10%">
		<img className="gmovingX" src="assets/img/shape/boy_3.png" alt="shape"/>
	</div>
</div>


        }
}

export default AboutV3