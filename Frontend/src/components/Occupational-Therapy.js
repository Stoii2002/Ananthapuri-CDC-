import React from 'react';
import Navbar from './global-components/navbar';
import Footer from './global-components/footer';
import Occupational_content from './section-components/Department/Occupational-Content';
import Occupationalbanner from './section-components/Department/Occupational-banner';
import { Helmet } from 'react-helmet';
import Newsletter from './section-components/Newsletter';

const Occupational_Theraphy = () => {
    return <div>
            <Helmet>
                <title>Occupational therapy in Trivandrum | Occupational therapist | Ananthapuricdc</title>
                <meta name="description" content="Ananthapuri CDC provides professional occupational therapy in Trivandrum. Tailored therapy for sensory integration, and developement delay." />
                <meta name="keywords" content="occupational therapy, fine motor skills, sensory integration, hand therapy, rehabilitation, physical therapy, occupational therapist, Trivandrum, cognitive therapy, pediatric therapy, ADL training, sensory processing disorders, developmental delays, therapy for children, adult rehabilitation" />
            </Helmet>
        <Navbar />
        <div id="smooth-wrapper style2">
        <div id="smooth-content">
            <Occupationalbanner/>
            <Occupational_content/>
            <Newsletter/>
            <Footer/>
        </div>
        </div>
    </div>
}   

export default Occupational_Theraphy

