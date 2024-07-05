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
                                    <img src="assets/img/service/adhd-img-1.png" alt="Service Image"/>
                                </div>
                                <div className="page-content">
                                    <h3 className="sec-title page-title">EARLY SIGNS AND SYMPTOMS</h3>
                                    <h3 className="sec-title page-title">Signs related to behavioural aspects</h3>
                                    <p className="sec-textmb-30">
                                        <ol>
                                            <li>Poor sitting tolerance</li>
                                            <li>Gets excited easily</li>
                                            <li>Poor waiting tolerance</li>
                                            <li>Poor concentration and short attention span</li>
                                            <li>Restless; Can’t sit quietly</li>
                                            <li>Easily gets distracted</li>
                                            <li>Attention seeking; Interrupts in between conversation</li>
                                            <li>Problems in emotional regulation; poor anger management</li>
                                            <li>Difficulties to complete an activity; shifts from one activity to another</li>
                                        </ol>
                                    </p>

                                    <h3 className="sec-title page-title">Signs related to speech</h3>
                                    <p className="sec-textmb-30">
                                        <ol>
                                            <li>Difficulty forming sentences with proper grammar</li>
                                            <li>Difficulty socialisation with others</li>
                                            <li>Difficulty in normal back and forth conversation./Talking over others</li>
                                            <li>Use of inappropriate body language matching to conversation</li>
                                            <li>May blurt out answers, interrupt others, and speak too loudly or excessively</li>
                                            <li>Trouble in waiting their turn to speak</li>
                                        </ol>
                                    </p>

                                    <h3 className="sec-title page-title">Signs related to physical aspects</h3>
                                    <p className="sec-textmb-30">
                                        <ol>
                                            <li>Over response or lack of reaction to stimuli</li>
                                            <li>Bumps into things</li>
                                            <li>Often fidgets</li>
                                            <li>Poor fine motor control</li>
                                            <li>Make careless mistakes</li>
                                            <li>Sensitivity to smell and sound</li>
                                            <li>Dislike certain Fabrics and discomfort in certain movements</li>
                                        </ol>
                                    </p>

                                    <div className="row justify-content-center">
                                        <div className="col-md-6">
                                            <div className="page-img th-anim">
                                                <img src="assets/img/service/adhd-img-2.png" alt="service Image"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="page-img th-anim">
                                                <img src="assets/img/service/adhd-img-3.png" alt="service Image"/>
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
