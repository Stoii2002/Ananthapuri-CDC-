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
                            <img src={`${process.env.PUBLIC_URL}/assets/img/normal/occu-img-1.png`} alt="class Image"/>
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
                                        <img src={`${process.env.PUBLIC_URL}/assets/img/normal/occu-img-2.png`} alt="class Image"/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="page-img">
                                        <img src={`${process.env.PUBLIC_URL}/assets/img/normal/occu-img-3.png`} alt="class Image"/>
                                    </div>
                                </div>
                            </div>
                            <h4 className="mt-n2 mb-20">Work Process</h4>
                            <p className="mb-20">
                            The occupational therapist assesses the child's physical, cognitive, emotional, and social abilities through standardized tests, observations, and interviews. Based on this assessment, the therapist collaborates with the child and their family to set personalized and achievable goals, aimed at enhancing the child's ability to perform daily activities and participate in school and play.
                            </p>
                            <div className="checklist style2 list-three-column">
                                <ul>
                                    <li>Assessment and Evaluation</li>
                                    <li>Intervention Planning & Implementation</li>
                                    <li>Monitoring and Review</li>
                                </ul>
                            </div>
                            <p className="mt-30 mb-0">
                            A customized intervention plan is developed, including specific strategies, activities, and exercises designed to help the child achieve their goals. The therapist works with the child through direct therapy sessions, which may involve activities to improve fine motor skills, sensory processing, coordination, and social interactions. Adaptive equipment or environmental modifications may also be introduced to support the child's development.
                            </p>
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
