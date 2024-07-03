import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Contact from './section-components/contact-page';
import Footer from './global-components/footer';
import Contact_banner from './section-components/Contact_banner';
import Get_in_touch from './section-components/Contact_getintouch';
import Newsletter from './section-components/Newsletter';

const ContactPage = () => {
    return <div>
        <Navbar />
        <div id="smooth-wrapper style2">
        <div id="smooth-content">
            <Contact_banner/>
            <Contact />
            <Get_in_touch/>
            <Newsletter/>
            <Footer />
        </div>
        </div>
    </div>
}

export default ContactPage

