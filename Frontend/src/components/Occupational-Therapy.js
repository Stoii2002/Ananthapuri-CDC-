import React from 'react';
import Navbar from './global-components/navbar';
import Footer from './global-components/footer';
import Occupational_content from './section-components/Department/Occupational-Content';
import Occupationalbanner from './section-components/Department/Occupational-banner';
import { Helmet } from 'react-helmet';

const Occupational_Theraphy = () => {
    return <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Ananthapuri CDC - Occupational Theraphy</title>
        </Helmet>
        <Navbar />
        <div id="smooth-wrapper style2">
        <div id="smooth-content">
            <Occupationalbanner/>
            <Occupational_content/>
            <Footer/>
        </div>
        </div>
    </div>
}   

export default Occupational_Theraphy

