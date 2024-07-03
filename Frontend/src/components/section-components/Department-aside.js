import React from 'react';


const Departmentaside = () => {

    return (
        <aside className="sidebar-area">
        <div className="widget widget_search">
            <form className="search-form">
                <input type="text" placeholder="Enter Keyword"/>
                <button type="submit"><i className="far fa-search"></i></button>
            </form>
        </div>
        <div className="widget widget_categories">
            <h3 className="widget_title">Categories</h3>
            <ul>
                <li><a href="blog.html">Reading & Writing Skill</a></li>
                <li><a href="blog.html">Drawing & Painting</a></li>
                <li><a href="blog.html">Kids Letter Match</a></li>
                <li><a href="blog.html">Daycare Centers</a></li>
                <li><a href="blog.html">Baby Nurses</a></li>
                <li><a href="blog.html">Maternity Service</a></li>
            </ul>
        </div>
        <div className="widget">
            <h3 className="widget_title">Opening Time</h3>
            <div className="th-widget-schedule style2">
                <p className="schedule-info"><span className="fw-semibold text-title">Monday - Thursday:</span><span>8am - 4pm</span></p>
                <p className="schedule-info"><span className="fw-semibold text-title">Friday - Saturday:</span><span>8am - 5pm</span></p>
                <p className="schedule-info"><span className="fw-semibold text-title">Sunday:</span><span className="text-theme">Closed</span></p>
            </div>
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
