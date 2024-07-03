import React from 'react';
import Navbar from './global-components/navbar';
import Footer from './global-components/footer';
import Occupational_content from './section-components/Department/Occupational-Content';
import Occupationalbanner from './section-components/Department/Occupational-banner';

const Occupational_Theraphy = () => {
    return <div>
        <Navbar />
        <Occupationalbanner/>
        <Occupational_content/>
        <Footer/>
    </div>
}   

export default Occupational_Theraphy

