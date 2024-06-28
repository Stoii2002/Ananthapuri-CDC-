import React from 'react';
import Navbar from './global-components/navbar';
import School_banner from './section-components/school_banner';
import AboutV3 from './section-components/about-v3';
import AboutStyleTwo from './section-components/about-style-two';
import Newsletter from './section-components/Newsletter';
import Footer_v1 from './global-components/footer';


const School = () => {
    return <div>
        <Navbar/>
        <School_banner/>
        <AboutV3/>
        <AboutStyleTwo/>
        <Newsletter/>
        <Footer_v1/>
    </div>
}

export default School

