import React from 'react';
import Navbar from './global-components/navbar';
import Footer from './global-components/footer';
import Adhd_banner from './section-components/Desorders/ADHD-Banner';
import Adhd_content from './section-components/Desorders/ADHD-content';
import Newsletter from './section-components/Newsletter';
import { Helmet } from 'react-helmet';



const Adhd = () => {
    return <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Ananthapuri CDC - ADHD</title>
        </Helmet>
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

