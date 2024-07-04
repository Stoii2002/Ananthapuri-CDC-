import React from 'react';
import Navbar from './global-components/navbar';
import Footer from './global-components/footer';
import Psychobanner from './section-components/Department/Psycho-banner';
import Psycho_content from './section-components/Department/Psycho-content';

const Psycho_Theraphy = () => {
    return <div>
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

