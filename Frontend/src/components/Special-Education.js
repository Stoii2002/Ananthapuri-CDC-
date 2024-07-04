import React from 'react';
import Navbar from './global-components/navbar';
import Footer from './global-components/footer';
import Special_Education_banner from './section-components/Department/SpecialEducation-banner';
import Special_Education_content from './section-components/Department/SpecialEducation-content';


const Special_Education = () => {
    return <div>
        <Navbar />
        <div id="smooth-wrapper style2">
        <div id="smooth-content">
            <Special_Education_banner/>
            <Special_Education_content/>
            <Footer/>
        </div>
        </div>
    </div>
}   
 ;
export default Special_Education

