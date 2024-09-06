import React from 'react'

function CEO() {
  return (
    <div class="choose-area overflow-hidden space">
    <div class="container">
        <div class="row align-items-end">
            <div class="col-xl-7 mb-5">
                <div class="me-xl-5 pe-xl-4">
                    <div class="title-area mb-30">
                        <span class="sub-title">Director Statement</span>
                        <h2 class="sec-title">A Message from Our Director</h2>
                        <p>As the Director of this wonderful organization, I am deeply committed to ensuring that our programs 
                            and services are tailored to meet the unique needs of each child. Our dedicated team of professionals
                             works tirelessly to create a positive, stimulating experience that supports developmental milestones 
                             and encourages lifelong success.</p>

                             <p>We are honored to be a part of your child's journey and look forward to partnering with you in 
                                their growth and development. Together, we can build a brighter future for our children and the 
                                world they will one day shape. Some of Our Guiding Principles Are</p>
                            
                    </div>
                    <div class="checklist style2 list-two-column mb-1">
                        <ul>
                            <li>Tailored Programs</li>
                            <li>Professional Excellence</li>
                            <li>Holistic Growth</li>
                            <li>Collaborative Partnership</li>

                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-xl-5">					
            <div className="testi-image2" data-mask-src="assets/img/shape/testi-img-shape.png">
                <img src="assets/img/team/arya.jpg" alt="banner"/>
             </div>	
            <div style={{textAlign:'center'}}>
             <h6 >Arya J Kumar </h6> 
             <p>Director Audiologist and Speech language Pathologist Educational <br/>
             Qualification: BASLP, MASLPExperience: 8 years</p>		
             </div>
            </div>
        </div>
    </div>
    <div class="shape-mockup pulse d-none d-xxl-block" data-top="13%" data-left="2%"><img src="assets/img/shape/star3-3.png" alt="shape"/>
    </div>
    <div class="shape-mockup movingX d-none d-xxl-block" data-bottom="30%" data-right="16%"><img class="gmovingX" src="assets/img/shape/shape_3_15.png" alt="shape"/>
    </div>
</div>
  )
}

export default CEO
