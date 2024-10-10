import React from 'react';
import Navbar from './global-components/navbar';
import Footer from './global-components/footer';
import Speechbanner from './section-components/Department/Speech-banner';
import Speech_content from './section-components/Department/Speech-content';
import { Helmet } from 'react-helmet';

const Speech_Therapy = () => {
    return (
        <div>
            <Helmet>
                <title>Speech therapy in Trivandrum | Speech therapist Trivandrum | Ananthapuricdc</title>
                <meta name="description" content="Ananthapuri CDC provides leading speech therapy services in Trivandrum, helping patients overcome speech delays and communication challenges" />
                <meta name="keywords" content="speech therapy, communication improvement, speech services, speech disorders" />
            </Helmet>
            <Navbar />
            <div id="smooth-wrapper style2">
                <div id="smooth-content">
                    <Speechbanner />
                    <Speech_content />
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Speech_Therapy;
