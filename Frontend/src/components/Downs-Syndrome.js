import React from 'react';
import Navbar from './global-components/navbar';
import Footer from './global-components/footer';
import Newsletter from './section-components/Newsletter';
import Downs_banner from './section-components/Desorders/Downs-banner';
import Downs_content from './section-components/Desorders/Downs-content';
import { Helmet } from 'react-helmet';



const Downs = () => {
    return <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Ananthapuri CDC - Down Syndrome</title>
        </Helmet>
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

