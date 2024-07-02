import React, { Component } from 'react';


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
                            <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">Comprehensive Child Development Approach</button>
                        </div>
                        <div id="collapse-1" className="accordion-collapse collapse show" aria-labelledby="collapse-item-1" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                <p className="faq-text">Our institution employs a holistic approach to early childhood and adolescent care, ensuring all aspects of development are nurtured through evidence-based practices and personalized care plans.</p>
                            </div>
                        </div>
                    </div>


                    <div className="accordion-card">
                        <div className="accordion-header" id="collapse-item-2">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">Personalized Care Plans</button>
                        </div>
                        <div id="collapse-2" className="accordion-collapse collapse " aria-labelledby="collapse-item-2" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                <p className="faq-text">Each child receives a customized care plan tailored to their unique needs, leveraging our comprehensive systems to address and support their physical, cognitive, and emotional development.</p>
                            </div>
                        </div>
                    </div>


                    <div className="accordion-card">
                        <div className="accordion-header" id="collapse-item-3">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">Family-Centered Support</button>
                        </div>
                        <div id="collapse-3" className="accordion-collapse collapse " aria-labelledby="collapse-item-3" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                <p className="faq-text">We engage families as active partners in their child's development, offering guidance, resources, and support to create a nurturing environment both at our institution and at home.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-6">
                <div className="faq-img1 ms-xl-5 ps-2">
                    <div className="img1">
                        <img src="assets/img/normal/howitworks-img.png" alt="faq"/>
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