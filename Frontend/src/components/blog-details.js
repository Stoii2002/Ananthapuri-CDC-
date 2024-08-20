import Navbar from './global-components/navbar';
import BlogDetails from './blog-components/blog-details';
import Footer from './global-components/footer';
import {Helmet} from "react-helmet";
import Blog_banner from './blog-components/blog-banner';
import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BlogList = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState({});
  
    useEffect(() => {
      axios.get(`https://ananthapuricdc.com/api/blogs/${slug}/`)
        .then(response => {
          setBlog(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, [slug]);
    return <div>
                <Helmet>
                <meta charSet="utf-8" />
                <title>{blog.meta_title}</title>
        </Helmet>
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

