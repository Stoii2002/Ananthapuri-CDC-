import React, { Component } from 'react';

class Newsletter extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="newsletter-sec overflow-hodden">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-12 col-lg-6 col-xl-8">
                <div className="newsletter-widget">
                    <h4 className="h2 newsletter-title">Subscribe to our newsletter for daily updates</h4>
                    <form className="newsletter-form style2">
                        <input className="form-control " type="email" placeholder="Write Email" required=""/>
                        <button type="submit" className="th-btn style4">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
        <div className="shape-mockup movingX d-none d-xxl-block" data-bottom="-8%" data-left="0%"><img src="assets/img/shape/shape_2.png" alt="shape"/>
        </div>
        <div className="shape-mockup movingX d-none d-xxl-block" data-bottom="-8%" data-right="0%"><img src="assets/img/shape/shape_3.png" alt="shape"/>
        </div>
    </div>
    <div className="newsletter-shape" data-mask-src="assets/img/shape/newsletter-shape.png"></div>
    <div className="newsletter-shape2" data-mask-src="assets/img/shape/newsletter-shape2.png"></div>
</div>

        }
}

export default Newsletter