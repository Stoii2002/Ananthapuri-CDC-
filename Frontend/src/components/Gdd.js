import React from 'react';

import { Helmet } from 'react-helmet';




import Navbar from './global-components/navbar';
import Footer_v1 from './global-components/footer';

import Newsletter from './section-components/Newsletter';
import Gdd_banner from './section-components/Desorders/Gdd-Banner';
import Gdd_content from './section-components/Desorders/Gdd-Content';




const Global_Developmental_Delay = () => {
    return <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Ananthapuri CDC - Global Developmental Delay(GDD)</title>
        </Helmet>
        <Navbar/>
        <div id="smooth-wrapper style2">
        <div id="smooth-content">
            <Gdd_banner/>
            <Gdd_content/>
            <Newsletter/>
             <Footer_v1/>
        </div>
        </div>
    </div>
}   
 ;
export default Global_Developmental_Delay;