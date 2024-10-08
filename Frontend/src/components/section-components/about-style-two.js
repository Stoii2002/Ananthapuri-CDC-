import React from 'react';
import { Link } from 'react-router-dom';

const AboutStyleTwo = () => {
  return (
    <div className="program-area bg-smoke">
      <div className="shape-top" data-mask-src="assets/img/shape/shape.png"></div>
      <div className="shape-bottom" data-mask-src="assets/img/shape/shape2.png" style={{ marginBottom: '-22px' }}></div>
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">Our Programs</span>
          <h2 className="sec-title">Our Early Learning Programs</h2>
        </div>
        <div className="row gy-5 justify-content-center justify-content-lg-between">
          <div className="col-md-6 col-xl-3 program-feature_wrapp">
            <div className="program-feature">
              <div className="box-img ding-dong">
                <img src="assets/img/shape/feature_box_1.png" alt="img" loading="lazy" />
              </div>
              <Link to="Occupational-Therapy">
                <div className="program-feature_content">
                  <div className="prograp-line" data-mask-src="assets/img/shape/program_line.png"></div>
                  <div className="program-shape" data-bg-src="assets/img/shape/program_shape3.png"></div>
                  <h3 className="box-title">Occupational Therapy</h3>
                  <p className="program-feature_text">Kindergarten is often the first formal schooling experience for children.</p>
                  <button className="icon-btn">
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-xl-3 program-feature_wrapp">
            <div className="program-feature">
              <div className="box-img ding-dong">
                <img src="assets/img/shape/feature_box_2.png" alt="img" loading="lazy" />
              </div>
              <Link to="Behavioural-Therapy">
                <div className="program-feature_content">
                  <div className="prograp-line" data-mask-src="assets/img/shape/program_line.png"></div>
                  <div className="program-shape" data-bg-src="assets/img/shape/program_shape3.png"></div>
                  <h3 className="box-title">Behavioural Therapy</h3>
                  <p className="program-feature_text">Preschool is an early childhood educational where children</p>
                  <button className="icon-btn">
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-xl-3 program-feature_wrapp">
            <div className="program-feature">
              <div className="box-img ding-dong">
                <img src="assets/img/shape/feature_box_3.png" alt="img" loading="lazy" />
              </div>
              <Link to="Special-education">
                <div className="program-feature_content">
                  <div className="prograp-line" data-mask-src="assets/img/shape/program_line.png"></div>
                  <div className="program-shape" data-bg-src="assets/img/shape/program_shape3.png"></div>
                  <h3 className="box-title">Special Education</h3>
                  <p className="program-feature_text">Kindergarten, often abbreviated as is the first formal year of schooling</p>
                  <button className="icon-btn">
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-xl-3 program-feature_wrapp">
            <div className="program-feature">
              <div className="box-img ding-dong">
                <img src="assets/img/shape/feature_box_4.png" alt="img" loading="lazy" />
              </div>
              <Link to="Speech-Therapy">
                <div className="program-feature_content">
                  <div className="prograp-line" data-mask-src="assets/img/shape/program_line.png"></div>
                  <div className="program-shape" data-bg-src="assets/img/shape/program_shape3.png"></div>
                  <h3 className="box-title">Speech Therapy</h3>
                  <p className="program-feature_text">Flex-care is a term that can refer to flexible childcare arrangements</p>
                  <button className="icon-btn">
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="shape-mockup movingX d-none d-xl-block" data-top="18%" data-left="4%">
        <img src="assets/img/shape/star.png" alt="shape" loading="lazy" />
      </div>
      <div className="shape-mockup anim01 d-none d-xl-block" data-top="20%" data-right="3%">
        <img src="assets/img/shape/rainbow.png" alt="shape" loading="lazy" />
      </div>
      <div className="shape-mockup anim02 d-none d-xl-block" data-bottom="15%" data-left="4%">
        <img src="assets/img/shape/star3.png" alt="shape" loading="lazy" />
      </div>
      <div className="shape-mockup anim03 d-none d-xl-block" data-bottom="15%" data-right="4%">
        <img src="assets/img/shape/balloon.png" alt="shape" loading="lazy" />
      </div>
      <div className="shape-mockup anim04 d-none d-xl-block" data-top="20%" data-right="26%">
        <img src="assets/img/shape/heart.png" alt="shape" loading="lazy" />
      </div>
      <div className="shape-mockup spin d-none d-xl-block" data-top="10%" data-right="11%">
        <img src="assets/img/shape/star2.png" alt="shape" loading="lazy" />
      </div>
    </div>
  );
};

export default AboutStyleTwo;
