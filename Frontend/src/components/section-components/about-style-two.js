import React from 'react';
import { Link } from 'react-router-dom';

const AboutStyleTwo = () => {
    const departments = [
        { id: '1', name: 'Education' },
        { id: '2', name: 'Health' },
        { id: '3', name: 'Nutrition' },
        { id: '4', name: 'Counseling' }
    ];

    return (
        <div className="program-area bg-smoke">
            <div className="shape-top" data-mask-src="assets/img/shape/shape.png"></div>
            <div className="shape-bottom" data-mask-src="assets/img/shape/shape2.png"></div>
            <div className="container">
                <div className="title-area text-center">
                    <span className="sub-title">Our Sections</span>
                    <h2 className="sec-title">Departments</h2>
                </div>
                <div className="row gy-5 justify-content-center justify-content-lg-between">
                    {departments.map(dept => (
                        <div key={dept.id} className="col-md-6 col-xl-3 program-feature_wrapp">
                            <div className="program-feature">
                                <div className="box-img ding-dong">
                                    <img src="assets/img/shape/feature_box_1.png" alt="img"/>
                                </div>
                                <div className="program-feature_content">
                                    <div className="prograp-line" data-mask-src="assets/img/shape/program_line.png"></div>
                                    <div className="program-shape" data-bg-src="assets/img/shape/program_shape3.png"></div>
                                    <h3 className="box-title">{dept.name}</h3>
                                    <p className="program-feature_text">Occupational therapy is often mistaken for something related to career counseling.</p>
                                    <Link to={`/department/${dept.name}`} className="icon-btn"><i className="fa-regular fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="shape-mockup movingX d-none d-xl-block" data-top="18%" data-left="4%"><img src="assets/img/shape/star.png" alt="shape"/></div>
            <div className="shape-mockup anim01 d-none d-xl-block" data-top="20%" data-right="3%"><img src="assets/img/shape/rainbow.png" alt="shape"/></div>
            <div className="shape-mockup anim02 d-none d-xl-block" data-bottom="15%" data-left="4%"><img src="assets/img/shape/star3.png" alt="shape"/></div>
            <div className="shape-mockup anim03 d-none d-xl-block" data-bottom="15%" data-right="4%"><img src="assets/img/shape/balloon.png" alt="shape"/></div>
            <div className="shape-mockup anim04 d-none d-xl-block" data-top="20%" data-right="26%"><img src="assets/img/shape/heart.png" alt="shape"/></div>
            <div className="shape-mockup spin d-none d-xl-block" data-top="10%" data-right="11%"><img src="assets/img/shape/star2.png" alt="shape"/></div>
        </div>
    );
};

export default AboutStyleTwo;
