import React from 'react';
import Navbar from './global-components/navbar';
import Footer from './global-components/footer';
import Newsletter from './section-components/Newsletter';
import Cerebrel_banner from './section-components/Desorders/Cerebrel-banner';
import Cerebrel_content from './section-components/Desorders/Cerebrel.content';



const Cerebral = () => {
    return <div>
        <Navbar />
        <div id="smooth-wrapper style2">
        <div id="smooth-content">
            <Cerebrel_banner/>
            <Cerebrel_content/>
            <Newsletter/>
            <Footer/>
        </div>
        </div>
    </div>
}   
 ;
export default Cerebral;

