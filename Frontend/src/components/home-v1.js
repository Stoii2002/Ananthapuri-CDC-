import React from 'react';
import Navbar from './global-components/navbar';
import Banner from './section-components/banner';
import WhyChooseUs from './section-components/why-choose-us';
import AboutStyleOne from './section-components/about-style-one';
import AboutStyleTwo from './section-components/about-style-two';

import Skill from './section-components/skill';
import Funfact from './section-components/funfact';


import PostSlider from './section-components/post-slider';

import Joinus from './section-components/Joinus';
import Ourgallery from './ourgallery';
import Testimonial from './section-components/Testominials';
import Child_disorders from './section-components/Child-disorders';
import FeatureList from './Api-test';
import Footer_v1 from './global-components/footer';

const Home_V1 = () => {
    return <div>
        <Navbar />
        <div id="smooth-wrapper style2">
        <div id="smooth-content">
            <Banner />
            <WhyChooseUs />
            <AboutStyleOne />
            <AboutStyleTwo />
            
            <Skill />
            <Funfact/>
            <Child_disorders/>
            <Joinus/>
            <Ourgallery/>
            <PostSlider />
            
            <Testimonial/>
            <Footer_v1/>
            
        </div>
        </div>
    </div>
}

export default Home_V1

