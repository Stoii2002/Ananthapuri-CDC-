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
import {Helmet} from "react-helmet";
import Skill from './section-components/skill';


const AboutPage = () => {
    return <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Ananthapuri CDC - About</title>
        </Helmet>
        <Navbar />
        <div id="smooth-wrapper style2">
        <div id="smooth-content">
            <Aboutbanner/>
            <About />
            <Howitworks/>
            <Skill/>
            <Funfact/>
            <Testimonial />
            <Team />
           
            <Newsletter/>
            <Footer_v1/>
        </div>
        </div>
    </div>
}

export default AboutPage

