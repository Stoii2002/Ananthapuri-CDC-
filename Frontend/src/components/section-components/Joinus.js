import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Joinus extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section class="cta-area overflow-hidden" data-bg-src="assets/img/bg/cta_bg_1.png">
    <div class="container">
        <div class="cta-cloud" data-bg-src="assets/img/shape/cta_shape.png">
            <div class="title-area mb-20">
                <span class="sub-title">Join Us</span>
                <h2 class="sec-title">How to <span class="text-theme3">enroll</span> your child? </h2>
            </div>
            <a href="classes.html" class="th-btn">FILL OUT THE FORM</a>
        </div>
    </div>
</section>


        }
}

export default Joinus