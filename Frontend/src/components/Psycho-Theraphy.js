import React from 'react';
import Navbar from './global-components/navbar';
import Footer from './global-components/footer';
import Psychobanner from './section-components/Department/Psycho-banner';
import Psycho_content from './section-components/Department/Psycho-content';
import { Helmet } from 'react-helmet';

const Psycho_Theraphy = () => {
    return <div>
            <Helmet>
            <title>Behavioural Therapy in Trivandrum | Behavioural  therapist Trivandrum | Ananthapuricdc</title>
                <meta name="description" content="Explore behavioral therapy at Ananthapuri CDC, where evidence-based techniques help individuals modify challenging behaviors and enhance mental well-being. Learn how our approach effectively addresses anxiety, depression, addiction, and more through practical strategies and support." />
                <meta name="keywords" content="Behavioral Therapy, Mental Health Support, speech services, speech disorders" />
            </Helmet>
        <Navbar />
        <div id="smooth-wrapper style2">
        <div id="smooth-content">
            <Psychobanner/>
            <Psycho_content/>
            <Footer/>
        </div>
        </div>
    </div>
}   

export default Psycho_Theraphy

