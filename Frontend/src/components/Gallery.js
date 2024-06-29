import React from 'react';
import Navbar from './global-components/navbar';
import Footer from './global-components/footer';
import Gallery_banner from './section-components/Gallery-banner';
import Gallery_content from './section-components/Gallery-content';
import Newsletter from './section-components/Newsletter';

const Gallery = () => {
    return <div>
        <Navbar/>
        <Gallery_banner/>
        <Gallery_content/>
        <Newsletter/>
        <Footer />
    </div>
}

export default Gallery

