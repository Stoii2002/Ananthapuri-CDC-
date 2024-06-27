import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Skill extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="benefit-area overflow-hidden">
				<div className="container">
					<div className="row align-items-end">
						<div className="col-xl-6">
							<div className="pe-xl-5 me-xl-4">
								<div className="title-area mb-15">
									<span className="sub-title">Our Benefits</span>
									<h2 className="sec-title">The Importance of Kindergarten in Early Childhood Education</h2>
								</div>
								<p className="mb-25">Kindergarten provides opportunities for children to develop fine and gross motor skills
									through various activities such as drawing, painting, cutting, and playing games. These
									activities help strengthen muscles.
								</p>
								<div className="checklist style1 list-two-column">
									<ul>
										<li>Academic Readiness</li>
										<li>Emotional Development</li>
										<li>Socialization Skills</li>
										<li>Independence & Responsibility</li>
										<li>Home-like environment</li>
										<li>Safety and scurity</li>
										<li>Safety and scurity</li>
										<li>Love for Learning</li>

									</ul>
								</div>
							</div>
						</div>
						<div className="col-xl-6">
							<div className="img-box2 mt-50 mt-xl-0">
								<div className="img1">
									<img src="assets/img/normal/benefit_1.png" alt="About"/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="shape-mockup shape1 spin d-none d-xxl-block" data-top="25%" data-left="3%">
					<img className="gspin" src="assets/img/shape/shape_10.png" alt="shape"/>
				</div>
				<div className="shape-mockup anim02 d-none d-xl-block" data-top="10%" data-right="5%"><img src="assets/img/shape/shape_11.png" alt="shape"/>
				</div>
			</div>


        }
}

export default Skill