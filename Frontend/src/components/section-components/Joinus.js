import React, { Component } from 'react';
import { Link }from 'react-router-dom';

class Joinus extends Component {

    render() {

    return <section className="cta-area overflow-hidden" data-bg-src="assets/img/bg/joinus-bg-img.png">
    <div className="container">
        <div className="cta-cloud" data-bg-src="assets/img/shape/cta_shape.png">
            <div className="title-area mb-20">
                <span className="sub-title">Join Us</span>
                <h2 className="sec-title">How to <span className="text-theme3">enroll</span> your child? </h2>
            </div>
            <Link to="/contact" className="th-btn">FILL OUT THE FORM</Link>
        </div>
    </div>
</section>


        }
}

export default Joinus