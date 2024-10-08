import React from 'react';
import Navbar from './global-components/navbar';
import Footer from './global-components/footer';
import Newsletter from './section-components/Newsletter';
import Learning_banner from './section-components/Desorders/Learning-banner';
import Learning_content from './section-components/Desorders/Learning-content';
import { Helmet } from 'react-helmet';




const Learning_Disability = () => {
    return <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Ananthapuri CDC - Learning Disability</title>
        </Helmet>
        <Navbar />
        <div id="smooth-wrapper style2">
        <div id="smooth-content">
            <Learning_banner/>
            <Learning_content/>
            <Newsletter/>
            <Footer/>
        </div>
        </div>
    </div>
}   
 ;
export default Learning_Disability;

