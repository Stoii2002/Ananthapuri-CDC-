import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const Blog_banner = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState({});
  
    useEffect(() => {
      axios.get(`http://localhost:8000/api/blogs/${slug}/`)
       .then(response => {
          setBlog(response.data);
        })
       .catch(error => {
          console.error(error);
        });
    }, [slug]);
    return (
        <div className="breadcumb-wrapper " data-bg-src="assets/img/bg/autism-banner.png">
                <div className="banner-shape" data-bg-src="assets/img/shape/banner_bg_2.png"></div>
                <div className="container">
                    <div className="breadcumb-content">
                        <h1 className="breadcumb-title">{blog.name}</h1>
                        <ul className="breadcumb-menu">
                            <li><Link to="/">Home</Link></li>
                            <li>{blog.name}</li>
                        </ul>
                    </div>
                </div>
                <div className="shape-mockup jump d-none d-lg-block" data-bottom="5%" data-left="0%"><img src="assets/img/shape/shape_1.png" alt="shape"/>
                </div>
            </div>
    );
};

export default Blog_banner;
