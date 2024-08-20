import React from 'react';
import Navbar from './global-components/navbar';
import Footer from './global-components/footer';
import Autism_banner from './section-components/Desorders/Autism-Banner';
import Autism_content from './section-components/Desorders/Autism-content';
import Newsletter from './section-components/Newsletter';
import { Helmet } from 'react-helmet';




const Autism = () => {
    return <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Ananthapuri CDC - Autism</title>
        </Helmet>
        <Navbar />
        <div id="smooth-wrapper style2">
        <div id="smooth-content">
            <Autism_banner/>
            <Autism_content/>
            <Newsletter/>
            <Footer/>
        </div>
        </div>
    </div>
}   
 ;
export default Autism;

