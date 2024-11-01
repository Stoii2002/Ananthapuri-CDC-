import React, { useState, useEffect } from 'react';
import { Link }from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';



const Departmentaside = () => {
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
        <aside className="sidebar-area">
        <div className="widget widget_categories">
            <h3 className="widget_title">Departments</h3>
            <ul>
                <li><Link to="/Occupational-Therapy">Occupatonal Therapy</Link></li>
                <li><Link to="/Behavioural-Therapy">Behavioural Therapy</Link></li>
                <li><Link to="/Special-education">Special Education</Link></li>
                <li><Link to="/Speech-Therapy">Speech Therapy</Link></li>
            </ul>
        </div>

        <div className="widget widget_categories">
            <h3 className="widget_title">Conditions</h3>
            <ul>
                <li><Link to="/ADHD">ADHD</Link></li>
                <li><Link to="/Autism">Autism</Link></li>
                <li><Link to="/Cerebral-Palsy">Cerebral Palsy</Link></li>
                <li><Link to="/Downs-Syndrome">Downs Syndrome</Link></li>
                <li><Link to="/Intellectual-Disability">Intellectual disability</Link></li>
                <li><Link to="/Learning-Disability">Learning Disability</Link></li>
                <li><Link to="/Virtual-Autism">Virtual Autism</Link></li>            
                <li><Link to="/Counduct-Disorder">Conduct Disorder</Link></li>
                <li><Link to="/Gdd">Global Developmental Delay</Link></li>
                <li><Link to="/Adolescent_councelling">Adolescent Counselling</Link></li>
                <li><Link to="/Stuttering">Stuttering</Link></li>
                <li><Link to="/Senory">Sensory Processing Disoders</Link></li>
            </ul>
        </div>
        
        <div className="widget widget_categories">
            <h3 className="widget_title">Recent Blogs</h3>
            <ul className="sub-menu">
			    {blogs.map(blog => (
			    	<li key={blog.id}>
			    	<a href={`/blog/${blog.slug}`}>{blog.name}</a>
			    	</li>
			    ))}
			</ul>
        </div>

        <div className="widget">
            <h3 className="widget_title">Social Network</h3>
            <div className="th-social">
            <a href="https://www.facebook.com/profile.php?id=61555715290318" target="_blank"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/ananthapuricdc?utm_source=ig_web_button_share_sheet&amp;igsh=ZDNlZDc0MzIxNw==" target="_blank"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/company/99358336/admin/feed/posts/ " target="_blank"><i className="fab fa-linkedin-in"></i></a>
            </div>
        </div>
    </aside>
    );
};

export default Departmentaside;
