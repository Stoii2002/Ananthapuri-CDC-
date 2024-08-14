import React from 'react';

import { Helmet } from 'react-helmet';




import Navbar from './global-components/navbar';
import Footer_v1 from './global-components/footer';

import Newsletter from './section-components/Newsletter';
import Stuttering_banner from './section-components/Desorders/Stuttering-banner';
import Stuttering_content from './section-components/Desorders/Stuttering_content';




const Stuttering_disorder = () => {
    return <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Ananthapuri CDC - Stuttering</title>
        </Helmet>
        <Navbar/>
        <div id="smooth-wrapper style2">
        <div id="smooth-content">
            <Stuttering_banner/>
            <Stuttering_content/>
            <Newsletter/>
             <Footer_v1/>
        </div>
        </div>
    </div>
}   
 ;
export default Stuttering_disorder;