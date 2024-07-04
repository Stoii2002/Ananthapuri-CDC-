import React from 'react';
import Departmentaside from '../Department-aside';


const Adhd_content = () => {

    return (
        <section className="space-top space-extra-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-8 col-lg-8">
                            <div className="page-single mb-0">
                                <div className="page-img th-anim">
                                    <img src="assets/img/service/service_details.jpg" alt="Service Image"/>
                                </div>
                                <div className="page-content">
                                    <h3 className="sec-title page-title">Night Nurses</h3>
                                    <p className="sec-textmb-30">Night nurses, also known as nocturnal or overnight nurses, work during
                                        the night shift in healthcare settings such as hospitals, clinics, and long-term care
                                        facilities. They play a crucial role in providing patient care and maintaining a safe and
                                        supportive environment during nighttime hours.</p>
                                    <p className="sec-text mb-45">Night nurses are responsible for monitoring and attending to the needs
                                        of patients during the night. This includes administering medications, checking vital signs,
                                        providing wound care, and addressing any concerns or emergencies that may arise..</p>
                                    <div className="row justify-content-center">
                                        <div className="col-md-6">
                                            <div className="page-img th-anim">
                                                <img src="assets/img/service/service_inner_1.jpg" alt="service Image"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="page-img th-anim">
                                                <img src="assets/img/service/service_inner_2.jpg" alt="service Image"/>
                                            </div>
                                        </div>
                                    </div>


                                    <h4 className="mb-20">Prime Selection for Your Cherished Child</h4>

                                    <p className="mb-35">Selecting the right toys and activities for your child is crucial for more
                                        their development and overall well-being. Here's a prime selection guide for your cherished
                                        child.Choose toys mor that are suitable for your child's age and developmental stage. This
                                        ensures safety and engagement.</p>
                                    <p className="mt-30 mb-0">Crafting the destiny of our children is a profound’s and multifaceted
                                        responsibility that the involve shaping their characters, providing them with the
                                        opportunities, and guiding them towards the futures filled with purpose and fulfillments.
                                        Parents, educatored, and society as the whole plays pivotal roles in this process. Here are
                                        some key aspects to consider when it comes to crafting the destiny of our children:</p>

                                </div>
                            </div>
                            <div className="th-comment-form style2 ">
                                <h2 className="blog-inner-title h3 mb-4">Frequently Asked Question</h2>
                                <div className="accordion" id="faqAccordion">


                                    <div className="accordion-card style2">
                                        <div className="accordion-header" id="collapse-item-1">
                                            <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">Do you offer parent-teacher conferences?</button>
                                        </div>
                                        <div id="collapse-1" className="accordion-collapse collapse show" aria-labelledby="collapse-item-1" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                <p className="faq-text">As an AI developed by OpenAI, I don't offer parent-teacher conferences myself. However, I can provide information and advice on how to conduct effective parent-teacher conferences if you're interested.</p>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="accordion-card style2">
                                        <div className="accordion-header" id="collapse-item-2">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">What is your educational philosophy?</button>
                                        </div>
                                        <div id="collapse-2" className="accordion-collapse collapse " aria-labelledby="collapse-item-2" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                <p className="faq-text">I believe education should be accessible to everyone, regardless of background or ability. This means striving to provide information in a clear, concise, and unbiased way.</p>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="accordion-card style2">
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
                        </div>
                        <div className="col-xxl-4 col-lg-4">
                            <Departmentaside/>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Adhd_content;
