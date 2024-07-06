import React from 'react';
import Navbar from './global-components/navbar';
import BlogDetails from './blog-components/blog-details';
import Footer from './global-components/footer';
import Aboutbanner from './section-components/about-banner';
import Blog_banner from './blog-components/blog-banner';

const BlogList = () => {
    return <div>
        <Navbar />
        <div id="smooth-wrapper style2">
        <div id="smooth-content">
            <Blog_banner/>
            <BlogDetails />
            <Footer />
        </div>
        </div>
    </div>
}

export default BlogList

