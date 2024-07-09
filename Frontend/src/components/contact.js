import React from 'react';
import Navbar from './global-components/navbar';
<<<<<<< HEAD

=======
>>>>>>> 0d4b2aaa16974d4ca5dcb569effb8f9f231ff993
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

