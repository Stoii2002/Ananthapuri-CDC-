import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Howitworks extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="faq-area position-relative space overflow-hidden" id="faq-sec">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-xl-6">
                <div className="title-area">
                    <span className="sub-title">How it works</span>
                    <h2 className="sec-title">Exploring, Learning, Growing Together</h2>
                </div>
                <div className="accordion" id="faqAccordion">


                    <div className="accordion-card">
                        <div className="accordion-header" id="collapse-item-1">
                            <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">Do you offer parent-teacher conferences?</button>
                        </div>
                        <div id="collapse-1" className="accordion-collapse collapse show" aria-labelledby="collapse-item-1" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                <p className="faq-text">As an AI developed by OpenAI, I don't offer parent-teacher conferences myself. However, I can provide information and advice on how to conduct effective parent-teacher conferences if you're interested.</p>
                            </div>
                        </div>
                    </div>


                    <div className="accordion-card">
                        <div className="accordion-header" id="collapse-item-2">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">What is your educational philosophy?</button>
                        </div>
                        <div id="collapse-2" className="accordion-collapse collapse " aria-labelledby="collapse-item-2" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                <p className="faq-text">I believe education should be accessible to everyone, regardless of background or ability. This means striving to provide information in a clear, concise, and unbiased way.</p>
                            </div>
                        </div>
                    </div>


                    <div className="accordion-card">
                        <div className="accordion-header" id="collapse-item-3">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">What is the teacher-to-child ratio?</button>
                        </div>
                        <div id="collapse-3" className="accordion-collapse collapse " aria-labelledby="collapse-item-3" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                <p className="faq-text">The teacher-to-child ratio can vary widely depending on the educational setting and the specific requirements or standards set by governing bodies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-6">
                <div className="faq-img1 ms-xl-5 ps-2">
                    <div className="img1">
                        <img src="assets/img/normal/faq_img.png" alt="faq"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="shape-mockup d-none d-xxl-block" data-bottom="0%" data-right="0%"><img src="assets/img/shape/shape_2_11.png" alt="shape"/>
    </div>
    <div className="shape-mockup shape1 movingX z-index-3 d-none d-xxl-block" data-top="50%" data-left="-5%">/
        <img className="gmovingX" src="assets/img/shape/shape_2_12.png" alt="shape"/>
    </div>
    <div className="shape-mockup shape1 movingX d-none d-xxl-block" data-bottom="15%" data-right="10%">
        <img className="gmovingX" src="assets/img/shape/shape_2_13.png" alt="shape"/>
    </div>



</div>

        }
	}

export default Howitworks