import React from 'react';
import Departmentaside from '../Department-aside';


const Intellectual_content = () => {

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
                                    <h3 className="sec-title page-title">UNDERSTANDING INTELLECTUAL DISABILITY</h3>
                                    <h3 className="sec-title page-title">What is Intellectual Disability?</h3>
                                    <p className="sec-textmb-30">Intellectual disability (ID) is a term used when a person has certain limitations in cognitive functioning and skills, including communication, social skills, and self-care. These limitations can cause a child to develop and learn more slowly or differently than a typically developing child.</p>
                                    
                                    <h3 className="sec-title page-title">Characteristics</h3>
                                    
                                    <p className="sec-textmb-30">
                                        <ol>
                                            <li>Cognitive Impairment: Individuals with intellectual disabilities may have difficulties with:
                                               <ul>
                                                  <li>Problem-solving</li>
                                                  <li>Abstract thinking</li>
                                                  <li>Comprehending complex ideas</li>
                                                  <li>Learning new skills</li>
                                               </ul>
                                            </li>
                                            <li>Adaptive Behavior: Challenges in adaptive behavior affect daily life skills, including:
                                               <ul>
                                                  <li>Communication (understanding and expressing language)</li>
                                                  <li>Social skills (interacting with others, following social rules)</li>
                                                  <li>Practical skills (personal care, safety, using money, and managing work responsibilities)</li>
                                               </ul>
                                            </li>
                                            <li>Medical Care: Regular health check-ups and treatment for associated health issues
                                               <ul>
                                                  <li>Motor skills (crawling, walking)</li>
                                                  <li>Language development (speaking, understanding speech)</li>
                                                  <li>Academic skills (reading, writing, mathematics)</li>
                                               </ul>
                                            </li>
                                            
                                        </ol>
                                    </p>

                                    <h3 className="sec-title page-title">Causes</h3>
                                    <p className="sec-textmb-30">Intellectual disability can result from various factors, including:</p>
                                    <p className="sec-textmb-30">
                                        <ul>
                                            <li>Genetic Conditions: Such as Down's Syndrome, Fragile X Syndrome, and Phenylketonuria (PKU).</li>
                                            <li>Prenatal Issues: Exposure to alcohol, drugs, infections, or malnutrition during pregnancy.</li>
                                            <li>Perinatal Problems: Complications during birth, such as oxygen deprivation or premature birth.</li>
                                            <li>Postnatal Factors: Severe malnutrition, brain infections (like meningitis), traumatic brain injury, or exposure to toxic substances.</li>
                                        </ul>
                                    </p>

                                    <h3 className="sec-title page-title">Our Role</h3>
                                    <p className="sec-textmb-30">At Ananthapuri Special School, we are dedicated to providing holistic and individualized care for children with intellectual disabilities. Our approach includes:</p>
                                    <p className="sec-textmb-30">
                                        <ul>
                                            <li>Customized Education Plans: Tailored to each child's strengths and needs, ensuring they receive the appropriate support for their cognitive and adaptive development.</li>
                                            <li>Comprehensive Therapies: Access to speech, occupational, and behavioral therapies to support overall development.</li>
                                            <li>Family Involvement: Engaging families in the therapeutic process, offering resources, and creating a supportive community.</li>
                                            <li>Inclusive Environment: Promoting a nurturing and inclusive atmosphere where every child feels valued and supported.</li>
                                        </ul>
                                    </p>
                                    <p className="sec-textmb-30">Our mission is to systematically reduce childhood disability through comprehensive systems and personalized care, fostering optimal growth and development for every child.</p>


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

export default Intellectual_content;
