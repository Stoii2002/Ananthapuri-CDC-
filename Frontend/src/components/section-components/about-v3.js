import React, { Component } from 'react';

class AboutV3 extends Component {

    render() {


    return <div className="overflow-hidden space-top space-extra-bottom" id="about-sec">
	<div className="container">
		<div className="row align-items-center">
		<div className="col-xl-6">
				<div className="ps-xl-4 ms-xl-5">
					<div className="title-area mb-30">
						<span className="sub-title sub-title2 style1">About Us</span>
						<h2 className="sec-title">Dedicated to Excellence in Early Child Care & Education</h2>
						<p className="sec-text">As a leading institution, we are committed to becoming a center of excellence in Early Child Care & Education, Adolescent Care & Education, and related fields. Our mission is to systematically reduce childhood disability through comprehensive systems and personalized care.</p>
						<p>Our approach integrates cutting-edge research, evidence-based practices, and multidisciplinary expertise to deliver high-quality care and education. We develop personalized care plans tailored to the unique needs of each child, ensuring they receive the best possible support. By engaging families, communities, and professionals in a collaborative effort, we aim to build a robust foundation for lifelong learning and well-being.</p>
					</div>
					<a href="about.html" className="th-btn">About More </a>
				</div>
			</div>
			<div className="col-xl-6">
				<div className="img-box1">
					<div className="img1" data-bg-src="assets/img/normal/about_shape1.png">
						<img src="assets/img/normal/school-img-2.png" alt="About"/>
					</div>
					<div className="img1 style2 ding-dong" data-bg-src="assets/img/normal/about_shape2.png">
						<img src="assets/img/normal/school-img-3.png" alt="About"/>
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