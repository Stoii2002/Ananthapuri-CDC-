import React from 'react';

import { Helmet } from 'react-helmet';




import Navbar from './global-components/navbar';
import Footer_v1 from './global-components/footer';

import Newsletter from './section-components/Newsletter';
import Adolescent_banner from './section-components/Desorders/Adolescent-banner';
import Adolescent_content from './section-components/Desorders/Adolescent-content';




const Adolescent_Counselling = () => {
    return <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Ananthapuri CDC - Adolescent Counselling</title>
        </Helmet>
        <Navbar/>
        <div id="smooth-wrapper style2">
        <div id="smooth-content">
            <Adolescent_banner/>
            <Adolescent_content/>
            <Newsletter/>
             <Footer_v1/>
        </div>
        </div>
    </div>
}   
 ;
export default Adolescent_Counselling;