import React from 'react';

import { Helmet } from 'react-helmet';
import Counduct_banner from './components/section-components/Desorders/Conduct-banner';
import Footer_v1 from './components/global-components/footer';
import Navbar from './components/global-components/navbar';
import Counduct_content from './components/section-components/Desorders/counduct-content';
import Newsletter from './components/section-components/Newsletter';



const Counduct = () => {
    return <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Ananthapuri CDC - Conduct Disoders</title>
        </Helmet>
        <Navbar/>
        <div id="smooth-wrapper style2">
        <div id="smooth-content">
            <Counduct_banner/>
            <Counduct_content/>
            <Newsletter/>
            <Footer_v1/>
        </div>
        </div>
    </div>
}   
 ;
export default Counduct;

