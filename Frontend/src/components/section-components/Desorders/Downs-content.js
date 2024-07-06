import React from 'react';
import Departmentaside from '../Department-aside';


const Downs_content = () => {

    return (
        <section className="space-top space-extra-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-8 col-lg-8">
                            <div className="page-single mb-0">
                                <div className="page-img th-anim">
                                    <img src="assets/img/service/down-img-1.png" alt="Service Image"/>
                                </div>
                                <div className="page-content">
                                    <h3 className="sec-title page-title">UNDERSTANDING DOWN'S SYNDROME</h3>
                                    <h3 className="sec-title page-title">What is Down's Syndrome?</h3>
                                    <p className="sec-textmb-30">Down's Syndrome, also known as Trisomy 21, is a genetic disorder caused by the presence of an extra copy of chromosome 21. This additional genetic material affects the physical and cognitive development of individuals with the condition.</p>

                                    <h3 className="sec-title page-title">Characteristics</h3>
                                    <p className="sec-textmb-30">
                                        <ol>
                                            <li>Physical Features: Individuals with Down's Syndrome often have distinct facial characteristics, including:</li>
                                              <ul>
                                                <li>A flat facial profile</li>
                                                <li>Almond-shaped eyes with an upward slant</li>
                                                <li>A short neck</li>
                                                <li>A small nose and mouth</li>
                                                <li>Low muscle tone (hypotonia)</li>
                                                <li>A single deep crease across the center of the palm</li>
                                              </ul>
                                            <li>Developmental Delays: Children with Down's Syndrome may experience:</li>
                                               <ul>
                                                <li>Delayed milestones in motor skills, such as sitting, crawling, and walking</li>
                                                <li>Speech and language delays</li>
                                                <li>Intellectual disability, which can range from mild to moderate</li>
                                               </ul>
                                            <li>Health Issues: There are several health conditions commonly associated with Down's Syndrome, including:</li>
                                            <ul>
                                                <li>Congenital heart defects</li>
                                                <li>Respiratory and hearing problems</li>
                                                <li>Thyroid conditions</li>
                                                <li>Gastrointestinal issues</li>
                                                <li>Increased susceptibility to infections</li>
                                            </ul>
                                        </ol>
                                    </p>

                                    <h3 className="sec-title page-title">Treatment and Support</h3>
                                    <p className="sec-textmb-30">While there is no cure for Down's Syndrome, early intervention and supportive therapies can significantly improve quality of life. Key aspects of treatment include:</p>
                                    <p className="sec-textmb-30">
                                        <ul>
                                            <li>Educational Support: Customized learning plans to address specific needs</li>
                                            <li>Therapies: Speech, occupational, and physical therapies to enhance development</li>
                                            <li>Medical Care: Regular health check-ups and treatment for associated health issues</li>
                                            <li>Family Support: Counseling and resources to help families navigate the challenges and celebrate the achievements of their children</li>
                                        </ul>
                                    </p>

                                    <h3 className="sec-title page-title">Our Role</h3>
                                    <p className="sec-textmb-30">At Ananthapuri Special School, we specialize in holistic and customized care for children with Down's Syndrome. Our comprehensive approach ensures that each child receives the necessary support to achieve their fullest potential in a nurturing and inclusive environment. Our mission is to reduce childhood disability through personalized care and support, fostering optimal growth and development for every child.</p>


                                    <div className="row justify-content-center">
                                        <div className="col-md-6">
                                            <div className="page-img th-anim">
                                                <img src="assets/img/service/down-img-2.png" alt="service Image"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="page-img th-anim">
                                                <img src="assets/img/service/down-img-3.png" alt="service Image"/>
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

export default Downs_content;
