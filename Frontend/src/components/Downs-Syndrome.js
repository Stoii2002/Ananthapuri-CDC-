import React from 'react';
import Navbar from './global-components/navbar';
import Footer from './global-components/footer';
import Newsletter from './section-components/Newsletter';
import Downs_banner from './section-components/Desorders/Downs-banner';
import Downs_content from './section-components/Desorders/Downs-content';



const Downs = () => {
    return <div>
        <Navbar />
        <div id="smooth-wrapper style2">
        <div id="smooth-content">
            <Downs_banner/>
            <Downs_content/>
            <Newsletter/>
            <Footer/>
        </div>
        </div>
    </div>
}   
 ;
export default Downs;

