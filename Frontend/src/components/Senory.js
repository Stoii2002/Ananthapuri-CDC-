import React from 'react';

import { Helmet } from 'react-helmet';




import Navbar from './global-components/navbar';
import Footer_v1 from './global-components/footer';

import Newsletter from './section-components/Newsletter';
import Senory_banner from './section-components/Desorders/Senory-banner';
import Senory_content from './section-components/Desorders/Senory-content'




const Senory_Processing_Disorders = () => {
    return <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Ananthapuri CDC - Sensory Processing Disorders</title>
        </Helmet>
        <Navbar/>
        <div id="smooth-wrapper style2">
        <div id="smooth-content">
            <Senory_banner/>
            <Senory_content/>
            <Newsletter/>
             <Footer_v1/>
        </div>
        </div>
    </div>
}   
 ;
export default Senory_Processing_Disorders;