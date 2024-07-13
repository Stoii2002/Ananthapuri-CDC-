import React, { Component } from 'react';

class AboutPage extends Component {

    render() {

    return	<div className="space" id="about-sec">
	<div className="container">
		<div className="row align-items-center">
			<div className="col-xl-6">
				<div className="img-box3 me-xl-5 pe-xl-2">
					<div className="img1">
						<img src="assets/img/normal/about-new-img-1.png" alt="About"/>
					</div>
					<div className="about-shape">
						<img src="assets/img/shape/circle.png" alt=""/>
					</div>
					<div className="about-shape2">
						<img src="assets/img/shape/circle2.png" alt=""/>
					</div>
					<div className="th-experience movingX">
						<div className="th-experience_content">
							<h2 className="experience-year"><span className="counter-number">5</span>+</h2>
							<p className="experience-text">Years</p>
						</div>
						<div className="about-shape3"></div>
					</div>
				</div>
			</div>
			<div className="col-xl-6">
				<div className="title-area mb-20">
					<span className="sub-title style1">About Us</span>
					<h2 className="sec-title mb-20">WELCOME TO
					Ananthapuri Centre for Child Development & Early Intervention!</h2>
				</div>
				<p className="sec-text mb-30">A leading institution dedicated to becoming a center of excellence in Early Child Care
					 & Education, Adolescent Care & Education, and related fields. Our mission is to systematically reduce childhood 
					 disability through comprehensive systems and personalized care.</p>
					 <p>At Ananthapuri Special School we specialize in holistic and customized care for every child dealing with 
						developmental disabilities and autism disorders. Our commitment extends to fostering a nurturing environment 
						that supports the unique needs of each child, ensuring their optimal growth and development.</p>
					<p>In addition to our commitment to developmental care, we take pride in the Ananthapuri Special School in 
						Trivandrum, which serves as a cornerstone in providing specialized education for children with diverse
						 needs. The Ananthapuri Special School focuses on creating an inclusive and supportive learning environment,
						  tailored to meet the specific requirements of students with developmental challenges.</p>
				</div>
			<p>
			Our dedicated team at Ananthapuri Centre for Child Development & Early Intervention (CDC) works tirelessly to uphold the
			 highest standards in child care and education. We are passionate about contributing to the well-being and development 
			 of each child, fostering a brighter and more inclusive future.Join us on this journey towards excellence in early child
			  care, education, and adolescent care. At Ananthapuri Special School in Trivandrum, we are shaping a compassionate and
			   thriving community for children with diverse needs.</p>
		</div>
	</div>
	<div className="shape-mockup movingX d-none d-xl-block" data-top="-3.5%" data-right="4%"><img src="assets/img/shape/shape_3_8.png" alt="shape"/>
	</div>
</div>



        }
}

export default AboutPage