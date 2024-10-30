import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MobileMenu = () => {
  const publicUrl = process.env.PUBLIC_URL + '/';
  const imgAttr = 'logo';

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('https://ananthapuricdc.com/api/blogs/')
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div className="th-menu-wrapper">
        <div className="th-menu-area text-center">
          <button className="th-menu-toggle"><i className="fa fa-times" /></button>
          <div className="mobile-logo">
            <Link to="/"><img src={`${publicUrl}assets/img/logocdc.png`} alt={imgAttr} loading="lazy"/></Link>
          </div>
          <div className="th-mobile-menu">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/our-school">Our School</Link></li>
              <li className="menu-item-has-children">
											<a href="#">Services</a>	
											<ul className="sub-menu">
												<li><Link to="/Speech-Therapy">Speech Therapy</Link></li>
												<li><Link to="/Occupational-Therapy">Occupational Therapy</Link></li>
												<li><Link to="/Behavioural-Therapy">Behavioural Therapy</Link></li>
												<li><Link to="/Special-education">Special Education</Link></li>	
											</ul>
										</li>
              <li className="menu-item-has-children">
											<a href="#">Conditions</a>	
											<ul className="sub-menu">
												<li><Link to="/ADHD">Attention Deficit Hyperactive Disorder - ADHD</Link></li>
												<li><Link to="/Autism">Autism</Link></li>
												<li><Link to="/Cerebral-Palsy">Cerebral palsy (CP)</Link></li>
												<li><Link to="/Downs-Syndrome">Down Syndrome</Link></li>
												<li><Link to="/Intellectual-Disability">Intellectual disability</Link></li>
												<li><Link to="/Learning-Disability">Learning Disability (LD)</Link></li>

												<li><Link to="/Counduct-Disorder">Conduct Disorder </Link></li>	
												<li><Link to="/Virtual-Autism">Virtual Autism</Link></li>	
												<li><Link to="/Gdd">Global developmental Delay (GDD)</Link></li>	
												<li><Link to="/Adolescent_councelling">Adolescent Counselling </Link></li>	
												<li><Link to="/Stuttering">Stuttering </Link></li>	
												<li><Link to="/Senory">Sensory Processing Disorders</Link></li>	
											</ul>
										</li>

                    <li className="menu-item-has-children">
                <a href="#">Blog</a>
                <ul className="sub-menu">
                  {blogs.map(blog => (
                    <li key={blog.id}>
                      <Link to={`/blog/${blog.slug}`}>{blog.name}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              
              <li><Link to="/Gallery">Gallery</Link></li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;