import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Departmentaside = () => {

    return (
        <aside className="sidebar-area">
        <div className="widget widget_categories">
            <h3 className="widget_title">Departments</h3>
            <ul>
                <li><Link to="Occupational-Theraphy">Occupational Theraphy</Link></li>
                <li><Link to="Psycho-Theraphy">Psycho Theraphy</Link></li>
                <li><Link to="Special-education">Special Education</Link></li>
                <li><Link to="Speech-Theraphy">Speech Theraphy</Link></li>
            </ul>
        </div>

        <div className="widget widget_categories">
            <h3 className="widget_title">Disorders</h3>
            <ul>
                <li><Link to="ADHD">ADHD</Link></li>
                <li><Link to="Autism">Autism</Link></li>
                <li><Link to="Cerebral-Palsy">Cerebral Palsy</Link></li>
                <li><Link to="Downs-Syndrome">Downs Syndrome</Link></li>
                <li><Link to="Intellectual-Disability">Intellectual disability</Link></li>
                <li><Link to="Learning-Disability">Learning Disability</Link></li>
            </ul>
        </div>

        <div className="widget">
            <h3 className="widget_title">Social Network</h3>
            <div className="th-social">
                <a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
                <a href="https://linkedin.com"><i className="fab fa-instagram"></i></a>
                <a href="https://pinterest.com"><i className="fab fa-pinterest-p"></i></a>
                <a href="https://linkedin.com"><i className="fab fa-linkedin-in"></i></a>
            </div>
        </div>
    </aside>
    );
};

export default Departmentaside;
