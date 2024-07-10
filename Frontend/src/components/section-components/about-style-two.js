import React from 'react';
import { Link } from 'react-router-dom';

const AboutStyleTwo = () => {
  return (
    <div class="program-area bg-smoke">
    <div class="shape-top" data-mask-src="assets/img/shape/shape.png"></div>
    <div class="shape-bottom" data-mask-src="assets/img/shape/shape2.png"></div>
    <div class="container">
        <div class="title-area text-center">
            <span class="sub-title">Our Kitar Program</span>
            <h2 class="sec-title">Our Early Learning Programs</h2>
        </div>
        <div class="row gy-5 justify-content-center justify-content-lg-between">
            <div class="col-md-6 col-xl-3 program-feature_wrapp">
                <div class="program-feature">
                    <div class="box-img ding-dong">
                        <img src="assets/img/shape/feature_box_1.png" alt="img"/>
                    </div>
                    <Link to="Occupational-Theraphy">
                        <div class="program-feature_content">
                            <div class="prograp-line" data-mask-src="assets/img/shape/program_line.png"></div>
                            <div class="program-shape" data-bg-src="assets/img/shape/program_shape3.png"></div>
                            <h3 class="box-title">Occupational Therapy</h3>
                            <p class="program-feature_text">Kindergarten is often the first formal schooling experience for children.</p>
                            <a href="service-details.html" class="icon-btn"><i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </Link>
                </div>
            </div>
            <div class="col-md-6 col-xl-3 program-feature_wrapp">
                <div class="program-feature">
                    <div class="box-img ding-dong">
                        <img src="assets/img/shape/feature_box_2.png" alt="img"/>
                    </div>
                    <Link to="Psycho-Theraphy">
                        <div class="program-feature_content">
                            <div class="prograp-line" data-mask-src="assets/img/shape/program_line.png"></div>
                            <div class="program-shape" data-bg-src="assets/img/shape/program_shape3.png"></div>
                            <h3 class="box-title">Psycho Therapy</h3>
                            <p class="program-feature_text">Preschool is an early childhood educational where children</p>
                            <a href="service-details.html" class="icon-btn"><i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </Link>
                </div>
            </div>
            <div class="col-md-6 col-xl-3 program-feature_wrapp">
                <div class="program-feature">
                    <div class="box-img ding-dong">
                        <img src="assets/img/shape/feature_box_3.png" alt="img"/>
                    </div>
                    <Link to="Special-education">
                        <div class="program-feature_content">
                            <div class="prograp-line" data-mask-src="assets/img/shape/program_line.png"></div>
                            <div class="program-shape" data-bg-src="assets/img/shape/program_shape3.png"></div>
                            <h3 class="box-title">Special Education</h3>
                            <p class="program-feature_text">Kindergarten, often abbreviated as is the first formal year of schooling</p>
                            <a href="service-details.html" class="icon-btn"><i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </Link>
                </div>
            </div>
            <div class="col-md-6 col-xl-3 program-feature_wrapp">
                <div class="program-feature">
                    <div class="box-img ding-dong">
                        <img src="assets/img/shape/feature_box_4.png" alt="img"/>
                    </div>
                    <Link to="Speech-Theraphy">
                    <div class="program-feature_content">
                        <div class="prograp-line" data-mask-src="assets/img/shape/program_line.png"></div>
                        <div class="program-shape" data-bg-src="assets/img/shape/program_shape3.png"></div>
                        <h3 class="box-title">Speech Therapy</h3>
                        <p class="program-feature_text">Flex-care is a term that can refer to flexible childcare arrangements</p>
                        <a href="service-details.html" class="icon-btn"><i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    <div class="shape-mockup movingX d-none d-xl-block" data-top="18%" data-left="4%"><img src="assets/img/shape/star.png" alt="shape"/>
    </div>
    <div class="shape-mockup anim01 d-none d-xl-block" data-top="20%" data-right="3%"><img src="assets/img/shape/rainbow.png" alt="shape"/>
    </div>
    <div class="shape-mockup anim02 d-none d-xl-block" data-bottom="15%" data-left="4%"><img src="assets/img/shape/star3.png" alt="shape"/>
    </div>
    <div class="shape-mockup anim03 d-none d-xl-block" data-bottom="15%" data-right="4%"><img src="assets/img/shape/balloon.png" alt="shape"/>
    </div>
    <div class="shape-mockup anim04 d-none d-xl-block" data-top="20%" data-right="26%"><img src="assets/img/shape/heart.png" alt="shape"/>
    </div>
    <div class="shape-mockup spin d-none d-xl-block" data-top="10%" data-right="11%"><img src="assets/img/shape/star2.png" alt="shape"/>
    </div>
    

</div>


  );
};

export default AboutStyleTwo;
