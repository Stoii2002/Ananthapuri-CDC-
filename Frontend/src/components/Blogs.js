import React from 'react';
import Navbar from './global-components/navbar';
import Footer from './global-components/footer';
import Blogbanner2 from './blog-components/blog-banner2';
import Blogdetails2 from './blog-components/blog-details2';
import {Helmet} from "react-helmet";

const Blogs = () => {
    return <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Ananthapuri CDC - Blogs</title>
        </Helmet>
        <Navbar />
        <div id="smooth-wrapper style2">
        <div id="smooth-content">
            <Blogbanner2/>
            <Blogdetails2/>
            <Footer />
        </div>
        </div>
    </div>
}

export default Blogs

