import React from 'react';

import { Helmet } from 'react-helmet';



import Virtual_banner from './section-components/Desorders/Virtual-banner';
import Navbar from './global-components/navbar';
import Footer_v1 from './global-components/footer';
import Virtual_content from './section-components/Desorders/Virtual-content';
import Newsletter from './section-components/Newsletter';



const Virtual_Autism = () => {
    return <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Ananthapuri CDC - Virtual Autism</title>
        </Helmet>
        <Navbar/>
        <div id="smooth-wrapper style2">
        <div id="smooth-content">
            <Virtual_banner/>
            <Virtual_content/>
            <Newsletter/>
             <Footer_v1/>
        </div>
        </div>
    </div>
}   
 ;
export default Virtual_Autism;

