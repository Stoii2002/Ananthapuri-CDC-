import React from 'react';
import Departmentaside from '../Department-aside';


const Psycho_content = () => {

    return (
        <section className="space-top space-bottom">
        <div className="container">
            <div className="row">
                <div className="col-xxl-8 col-lg-8">
                    <div className="page-single mb-0">
                        <div className="page-img th-anim">
                            <img src={`${process.env.PUBLIC_URL}/assets/img/normal/class_details.jpg`} alt="class Image"/>
                        </div>
                        <div className="page-content">
                            <h3 className="sec-title page-title">Drawing & Painting</h3>
                            <p className="sec-text mb-30">
                                Drawing and painting play a crucial role in the creative development of children, and they are often integrated into educational curricula to foster holistic learning experiences. These artistic activities not only stimulate a child's imagination but also enhance their cognitive, motor, and emotional skills.
                            </p>
                            <p className="sec-text mb-45">
                                By engaging in the process of creating visual art, children learn to express themselves, problem-solve, and observe the world around them with a heightened sense of curiosity. Moreover, the integration of drawing and painting in educational settings promotes a well-rounded approach.
                            </p>
                            <div className="row justify-content-center">
                                <div className="col-lg-6">
                                    <div className="page-img">
                                        <img src={`${process.env.PUBLIC_URL}/assets/img/normal/class_inner_1.jpg`} alt="class Image"/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="page-img">
                                        <img src={`${process.env.PUBLIC_URL}/assets/img/normal/class_inner_2.jpg`} alt="class Image"/>
                                    </div>
                                </div>
                            </div>
                            <h4 className="mt-n2 mb-20">Work Process</h4>
                            <p className="mb-20">
                                Early childhood education is a crucial foundation for lifelong learning. Our curriculum is designed to stimulate cognitive development, creativity, and a love for learning. We integrate play-based learning to make education enjoyable and engaging for your child.
                            </p>
                            <div className="checklist style2 list-three-column">
                                <ul>
                                    <li>Supervision of a babysitter</li>
                                    <li>Childcare for all age groups</li>
                                    <li>Solutions for Baby care</li>
                                </ul>
                            </div>
                            <p className="mt-30 mb-0">
                                Crafting the destiny of our children is a profound and multifaceted responsibility that involves shaping their characters, providing them with opportunities, and guiding them towards futures filled with purpose and fulfillment. Parents, educators, and society as a whole play pivotal roles in this process. Here are some key aspects to consider when it comes to crafting the destiny of our children:
                            </p>
                        </div>
                    </div>
                    <div className="th-comment-form style2">
                        <div className="th-comments-wrapp">
                            <h2 className="blog-inner-title h4">Client Comment</h2>
                            <div className="testi-card_review">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                            </div>
                        </div>
                        <div className="th-comment-content">
                            <p className="mb-30">
                                It's wonderful to hear that you're pleased with the Kitar Baby Care set for your newborn! Providing gentle and high-quality products for your baby's sensitive skin is essential, and it sounds like Kitar’s has delivered on that front. The positive results with the diaper cream and the delightful scent of the baby lotion add to the overall positive experience.
                            </p>
                            <div className="comment-wrapper">
                                <div className="comment-profile">
                                    <div className="comment-avater">
                                        <img src={`${process.env.PUBLIC_URL}/assets/img/blog/comment-author-1.jpg`} alt="Comment Author"/>
                                    </div>
                                    <div>
                                        <h3 className="name">Rita Hirwat Michel</h3>
                                        <span className="desig">Kids Mother</span>
                                    </div>
                                </div>
                                <div className="comment-content">
                                    <div className="comment-quote">
                                        <img src={`${process.env.PUBLIC_URL}/assets/img/icon/quote3.svg`} alt="quote"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <input type="text" placeholder="Your Name" className="form-control"/>
                                <i className="far fa-user"></i>
                            </div>
                            <div className="col-md-6 form-group">
                                <input type="text" placeholder="Your Email" className="form-control"/>
                                <i className="far fa-envelope"></i>
                            </div>
                            <div className="col-12 form-group">
                                <textarea placeholder="Write a Comment" className="form-control"></textarea>
                                <i className="far fa-pencil"></i>
                            </div>
                            <div className="col-12 form-group mb-0">
                                <button className="th-btn btn-fw">Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xxl-4 col-lg-4">
                    <Departmentaside/>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Psycho_content;
