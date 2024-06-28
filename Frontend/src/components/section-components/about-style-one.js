import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutStyleOne extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return             <div class="overflow-hidden space-top space-extra-bottom" id="about-sec">
	<div class="container">
		<div class="row align-items-center">
			<div class="col-xl-6">
				<div class="img-box1">
					<div class="img1" data-bg-src="assets/img/normal/about_shape1.png">
						<img src="assets/img/normal/about_1.png" alt="About"/>
					</div>
					<div class="img1 style2 ding-dong" data-bg-src="assets/img/normal/about_shape2.png">
						<img src="assets/img/normal/about_2.png" alt="About"/>
					</div>
					<div class="about-shape spin">
						<img src="assets/img/shape/about-shape.png" alt="About"/>
					</div>
				</div>
			</div>
			<div class="col-xl-6">
				<div class="ps-xl-4 ms-xl-5">
					<div class="title-area mb-30">
						<span class="sub-title sub-title2 style1">About Us</span>
						<h2 class="sec-title">WELCOME TO ANANTHAPURI CENTRE FOR CHILD DEVELOPMENT & EARLY INTERVENTION!</h2>
						<p class="sec-text">A leading institution dedicated to becoming a center of excellence in Early Child Care & Education, Adolescent Care & Education, and related fields. Our mission is to systematically reduce childhood disability through comprehensive systems and personalized care.</p>
						<p>At Ananthapuri Special School we specialize in holistic and customized care for every child dealing with developmental disabilities and autism disorders. Our commitment extends to fostering a nurturing environment that supports the unique needs of each child, ensuring their optimal growth and development.</p>
					</div>
					<a href="about.html" class="th-btn">About More </a>
				</div>
			</div>
		</div>
	</div>
	<div class="shape-mockup anim03 d-none d-xxl-block" data-top="15%" data-left="4%"><img src="assets/img/shape/bag.png" alt="shape"/>
	</div>
	<div class="shape-mockup movingX d-none d-xxl-block" data-top="5%" data-right="10%">
		<img class="gmovingX" src="assets/img/shape/boy_3.png" alt="shape"/>
	</div>
</div>

        }
}

export default AboutStyleOne