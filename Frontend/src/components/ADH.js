import React from 'react';
import Navbar from './global-components/navbar';
import Footer from './global-components/footer';
import Adhd_banner from './section-components/Desorders/ADHD-Banner';
import Adhd_content from './section-components/Desorders/ADHD-content';
import Newsletter from './section-components/Newsletter';



const Adhd = () => {
    return <div>
        <Navbar />
        <div id="smooth-wrapper style2">
        <div id="smooth-content">
            <Adhd_banner/>
            <Adhd_content/>
            <Newsletter/>
            <Footer/>
        </div>
        </div>
    </div>
}   
 ;
export default Adhd;

