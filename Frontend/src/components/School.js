import React from 'react';
import Navbar from './global-components/navbar';
import School_banner from './section-components/school_banner';
import AboutV3 from './section-components/about-v3';
import SchoolContent2 from './section-components/school-content-2';
import SchoolContent3 from './section-components/school-content-3';
import AboutStyleTwo from './section-components/about-style-two';
import Newsletter from './section-components/Newsletter';
import Footer_v1 from './global-components/footer';
import { Helmet } from 'react-helmet';



const School = () => {
    return <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Ananthapuri CDC - School</title>
        </Helmet>
        <Navbar/>
        <div id="smooth-wrapper style2">
        <div id="smooth-content">
            <School_banner/>
            <AboutV3/> 
            <SchoolContent2/>
            <SchoolContent3/>
            <AboutStyleTwo/>
            <Newsletter/>
            <Footer_v1/>
        </div>
        </div>
    </div>
}

export default School

