import React from 'react';
import Navbar from './global-components/navbar';

import About from './section-components/about';
import Team from './section-components/team-v2';
import Testimonial from './section-components/testimonial-style-one';

import Aboutbanner from './section-components/about-banner';
import Funfact from './section-components/funfact';
import Howitworks from './section-components/about_howitworks';
import Newsletter from './section-components/Newsletter';
import Footer_v1 from './global-components/footer';


const AboutPage = () => {
    return <div>
        <Navbar />
        <div id="smooth-wrapper style2">
        <div id="smooth-content">
            <Aboutbanner/>
            <About />
            <Howitworks/>
            <Funfact/>
            <Team />
            <Testimonial />
            <Newsletter/>
            <Footer_v1/>
        </div>
        </div>
    </div>
}

export default AboutPage

