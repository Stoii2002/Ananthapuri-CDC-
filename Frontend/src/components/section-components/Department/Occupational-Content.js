import React from 'react';
import Departmentaside from '../Department-aside';


const Occupational_content = () => {

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
                            <p className="sec-text mb-30">
                                    Occupational therapy is often mistaken for something related to career counseling. In fact, 
                                    occupational therapists are not worried about careers; they are focused on their work that 
                                    gives daily life meaning.</p>
                                    <p>Occupational therapy helps patients recover or develop skills required for the activities of daily 
                            living, including self-care, leisure, independent living and work. Therapists work in hospitals, in 
                            schools, in nursing homes and with patients in their own homes</p>
                            
                            <p>People who benefit from occupational therapy or OT, include those who have had autism, ADHD, 
                                Down syndrome, dyslexia and other developmental disorders.</p>
                            <p>In this article, we will review the skills that an occupational therapist can address for children
                                 with developmental delays.</p>

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

export default Occupational_content;
