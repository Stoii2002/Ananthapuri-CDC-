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
                        <h3 className="box-title">Comprehensive Child Development Programs</h3>
                        <p className="feature-item_text">Holistic child growth through personalized educational plans.</p>
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
                        <h3 className="box-title">Specialized Care for Developmental Disabilities</h3>
                        <p className="feature-item_text">Tailored support for unique developmental needs.</p>
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
                        <h3 className="box-title">Highly Qualified and Experienced Faculty</h3>
                        <p className="feature-item_text">Expert educators committed to exceptional child care and education.</p>
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
                        <h3 className="box-title">Educational Support and Development</h3>
                        <p className="feature-item_text">Specialized education fostering individual academic success and growth.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

        }
}

export default WhyChooseUs