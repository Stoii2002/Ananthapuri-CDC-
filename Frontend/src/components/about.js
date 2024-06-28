import React from 'react';
import Navbar from './global-components/navbar';

import About from './section-components/about';
import Team from './section-components/team-v2';
import Testimonial from './section-components/testimonial-style-one';
import Footer from './global-components/footer';
import Aboutbanner from './section-components/about-banner';
import Funfact from './section-components/funfact';
import Howitworks from './section-components/about_howitworks';
import Newsletter from './section-components/Newsletter';


const AboutPage = () => {
    return <div>
        <Navbar />
            <Aboutbanner/>
            <About />
            <Funfact/>
            <Howitworks/>
            <Team />
            <Testimonial />
            <Newsletter/>
            <Footer/>
    </div>
}

export default AboutPage

