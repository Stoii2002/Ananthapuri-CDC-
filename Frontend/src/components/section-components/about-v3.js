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
						<h2 className="sec-title">Ananthapuri Special School: Excellence in Developmental Care and Education</h2>
						<p className="sec-text">Ananthapuri Special School stands at the forefront of Early Child Care & Education, Adolescent Care & Education, and associated disciplines. Our core mission is to systematically diminish childhood disabilities through a combination of comprehensive systems and personalized care.</p>
						<p className="mb-20">
                                <ul>
                                    <li><span style={{ fontWeight: 'bold'}}>Center of Excellence</span>: We aspire to be a premier institution in the field, offering state-of-the-art facilities and cutting-edge educational methods.</li>
                                    <li><span style={{ fontWeight: 'bold'}}>Holistic Approach</span>: Our services are tailored to each child's unique developmental needs, particularly those with disabilities and autism.</li>
									<li><span style={{ fontWeight: 'bold'}}>Personalized Care</span>: We prioritize individualized care plans that focus on the specific requirements and potential of every child.</li>
									<li><span style={{ fontWeight: 'bold'}}>Nurturing Environment</span>: Our school is designed to be a supportive and encouraging space, promoting the optimal growth and development of all our students.</li>
                                    <li><span style={{ fontWeight: 'bold'}}>Comprehensive Programs</span>: From early childhood education to adolescent care, our programs are designed to provide a continuum of care that supports lifelong learning and development.</li>
                                </ul>
                            </p>
							<p className="mb-20">At Ananthapuri Special School, we are dedicated to fostering an inclusive and nurturing environment where every child can thrive. Our commitment to excellence ensures that we provide the highest standard of care and education, helping each child to achieve their fullest potential.</p>
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