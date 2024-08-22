import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Blog_banner = () => {
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

    return (
        <div 
            className="breadcumb-wrapper" 
            style={{ 
                backgroundImage: `url(${blog.Banner})` ,backgroundSize:'cover',backgroundRepeat:'no-repeat'
            }}
        >
            <div 
                className="banner-shape" 
                style={{ 
                    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/shape/banner_bg_2.png)` 
                }}
            ></div>
            <div className="container">
                <div className="breadcumb-content">
                    <h1 className="breadcumb-title">{blog.name}</h1>
                    <ul className="breadcumb-menu">
                        <li><Link to="/">Home</Link></li>
                        <li>{blog.name}</li>
                    </ul>
                </div>
            </div>
            <div 
                className="shape-mockup jump d-none d-lg-block" 
                style={{ 
                    bottom: '5%', 
                    left: '0%',
                    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/shape/shape_1.png)` 
                }}
            >
                <img src={`${process.env.PUBLIC_URL}/assets/img/shape/shape_1.png`} alt="shape" />
            </div>
        </div>
    );
};

export default Blog_banner;
