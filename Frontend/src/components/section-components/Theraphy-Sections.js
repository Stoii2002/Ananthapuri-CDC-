import React from 'react'

function Theraphy_Sections() {
  return (
    <div>
      <section className=" overflow-hidden space">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="title-area text-center me-xl-3 ms-xl-3 pe-xl-4 ps-xl-4">
                                <span className="sub-title">What We Do ?</span>
                                <h2 className="sec-title">The Development</h2>
                                <p> We discover the building blocks of childhood. Explore our comprehensive resources on education, therapy, and individual development.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-4 justify-content-between align-items-center">
                        <div className="col-md-6 col-xl-auto">

                            <div className="about-block">
                                <div className="about-block_icon">
                                    <img className="svg-img" src="assets/img/icon/about_1_1.svg" alt="about"/>
                                </div>
                                <div className="about-block_wrapper">
                                    <h3 className="box-title">1. Schooling</h3>
                                    <p className="mb-n2">Cultivating curious, confident, and compassionate learners who are equipped to thrive in a rapidly changing world</p>
                                </div>
                            </div>


                            <div className="about-block">
                                <div className="about-block_icon">
                                    <img className="svg-img" src="assets/img/icon/about_1_2.svg" alt="about"/>
                                </div>
                                <div className="about-block_wrapper">
                                    <h3 className="box-title">2. Therapy</h3>
                                    <p className="mb-n2">Providing personalized therapeutic care to help children overcome challenges, build resilience, and reach their full potential.</p>
                                </div>
                            </div>

                        </div>
                        <div className="col col-xl-auto text-center d-none d-xl-block">
                            <div className="about-image wow fadeInUp">
                                <img src="assets/img/normal/about-img.png" alt=""/>
                                <div className="shape-mockup  movingX d-none d-xxl-block" data-top="45%" data-right="-1%"><img src="assets/img/shape/shape_2_9.png" alt="shape"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-auto">

                            <div className="about-block style1">
                                
                                <div className="about-block_wrapper">
                                    <h3 className="box-title">3. Schooling + Therapy</h3>
                                    <p className="mb-n2">Partnering with students, families, and therapists to create a supportive environment where academic growth and emotional health go hand-in-hand.</p>
                                </div>
                                <div className="about-block_icon">
                                    <img className="svg-img" src="assets/img/icon/about_1_3.svg" alt="about"/>
                                </div>
                            </div>


                            <div className="about-block style1">
                                
                                <div className="about-block_wrapper">
                                    <h3 className="box-title">4. Individual Sessions</h3>
                                    <p className="mb-n2">Tailored programs and interventions designed to address each child's unique needs, strengths, and learning style.</p>
                                </div>
                                <div className="about-block_icon">
                                    <img className="svg-img" src="assets/img/icon/about_1_4.svg" alt="about"/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="shape-mockup movingX d-none d-xl-block" data-top="12%" data-right="10%">
                    <img className="gmovingX" src="assets/img/shape/shape_3_15.png" alt="shape"/>
                </div>
                <div className="shape-mockup movingX d-none d-xl-block" data-top="12%" data-left="6%"><img src="assets/img/shape/shape_2_16.png" alt="shape"/>
                </div>
            </section>
    </div>
  )
}

export default Theraphy_Sections
