import React, { Component } from 'react';

class WhyChooseUs extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return              <div className="feature-area overflow-hidden space-top" id="feature-area">
    <div className="container">
        <div className="row gy-4 justify-content-center">
            <div className="col-md-6 col-xl-3">
                <div className="feature-item th-ani" data-bg-color="#FEEDEA">
                    <div className="feature-shape" data-theme-color="#FE5A86"></div>
                    <div className="feature-item_icon">
                        <img src="assets/img/icon/feature_1_1.svg" alt="icon"/>
                    </div>
                    <div className="media-body">
                        <h3 className="box-title">Licensed Child Care</h3>
                        <p className="feature-item_text">Kindergarten is often the first formal schooling experience for
                            children, typically aged.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-xl-3">
                <div className="feature-item th-ani" data-bg-color="#F1F9EA">
                    <div className="feature-shape" data-theme-color="#7DBE48"></div>
                    <div className="feature-item_icon">
                        <img src="assets/img/icon/feature_1_2.svg" alt="icon"/>
                    </div>
                    <div className="media-body">
                        <h3 className="box-title">High Quality Learning</h3>
                        <p className="feature-item_text">High Quality Learning" refers to an educational approach focused on
                            providing students</p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-xl-3">
                <div className="feature-item th-ani" data-bg-color="#FFF6E8">
                    <div className="feature-shape" data-theme-color="#FC800A"></div>
                    <div className="feature-item_icon">
                        <img src="assets/img/icon/feature_1_3.svg" alt="icon"/>
                    </div>
                    <div className="media-body">
                        <h3 className="box-title">Super Talented Staff</h3>
                        <p className="feature-item_text">Super Talented Staff" refers to a team of individuals who possess
                            exceptional skills, expertise</p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-xl-3">
                <div className="feature-item th-ani" data-bg-color="#E3F5F9">
                    <div className="feature-shape" data-theme-color="#16C4E3"></div>
                    <div className="feature-item_icon">
                        <img src="assets/img/icon/feature_1_4.svg" alt="icon"/>
                    </div>
                    <div className="media-body">
                        <h3 className="box-title">Play to Learn</h3>
                        <p className="feature-item_text">Play to Learn" is an educational approach that incorporates
                            elements of play</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

        }
}

export default WhyChooseUs