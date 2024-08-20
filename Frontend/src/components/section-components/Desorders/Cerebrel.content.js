import React from 'react';
import Departmentaside from '../Department-aside';


const Cerebrel_content = () => {

    return (
        <section className="space-top space-extra-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-8 col-lg-8">
                            <div className="page-single mb-0">
                                <div className="page-img th-anim">
                                    <img src="assets/img/service/cerebral-img-1.png" alt="Service Image"/>
                                </div>
                                <div className="page-content">
                                    <h3 className="sec-title page-title">EARLY SIGNS AND SYMPTOMS</h3>
                                    <h3 className="sec-title page-title">Signs related to behavioural aspects</h3>
                                    <p className="sec-textmb-30">
                                        <ol>
                                            <li>Developmental delays</li>
                                            <li>Poor attention and concentration</li>
                                            <li>Dependency</li>
                                            <li>Stubbornness & tantrums</li>
                                            <li>Poor orientation</li>
                                            <li>Difficulties to understand concepts</li>
                                        </ol>
                                    </p>
                                    
                                    <h3 className="sec-title page-title">Signs related to speech</h3>
                                    <p className="sec-textmb-30">
                                        <ol>
                                            <li>Delays in speech development</li>
                                            <li>Difficulty speaking to express own wants and needs</li>
                                            <li>Difficulty with sucking, chewing or eating</li>
                                            <li>Excessive drooling or problems with swallowing</li>
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
                                                <img src="assets/img/service/cerebral-img-2.png" alt="service Image"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="page-img th-anim">
                                                <img src="assets/img/service/cerebral-img-3.png" alt="service Image"/>
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

export default Cerebrel_content;
