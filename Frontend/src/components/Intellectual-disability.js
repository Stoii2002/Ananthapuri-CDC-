import React from 'react';
import Navbar from './global-components/navbar';
import Footer from './global-components/footer';
import Newsletter from './section-components/Newsletter';
import Intellectual_banner from './section-components/Desorders/Intellectual-banner';
import Intellectual_content from './section-components/Desorders/Intellectual-content';



const Intellectual = () => {
    return <div>
        <Navbar />
        <div id="smooth-wrapper style2">
        <div id="smooth-content">
            <Intellectual_banner/>
            <Intellectual_content/>
            <Newsletter/>
            <Footer/>
        </div>
        </div>
    </div>
}   
 ;
export default Intellectual;

