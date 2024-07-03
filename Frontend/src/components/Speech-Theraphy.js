import React from 'react';
import Navbar from './global-components/navbar';
import Footer from './global-components/footer';
import Speechbanner from './section-components/Department/Speech-banner';
import Speech_content from './section-components/Department/Speech-content';


const Speech_Theraphy = () => {
    return <div>
        <Navbar />
       <Speechbanner/>
       <Speech_content/>
        <Footer/>
    </div>
}   
 ;
export default Speech_Theraphy;

