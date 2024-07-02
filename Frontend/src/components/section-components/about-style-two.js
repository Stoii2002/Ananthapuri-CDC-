import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Import the desired icon

const AboutStyleTwo = () => {
  const [departments, setDepartments] = useState([]);

  const fetchDepartments = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/departments/');
      if (!response.ok) {
        throw new Error('Failed to fetch departments');
      }
      const data = await response.json();
      setDepartments(data);
    } catch (error) {
      console.error('Error fetching departments:', error);
      // Handle errors appropriately, e.g., display an error message to the user
    }
  };

  useEffect(() => {
    fetchDepartments(); // Call the fetch function on component mount
  }, []);

  return (
    <div className="program-area bg-smoke">
      <div className="shape-top" data-mask-src="assets/img/shape/shape.png"></div>
      <div className="shape-bottom" data-mask-src="assets/img/shape/shape2.png"></div>
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">Our Sections</span>
          <h2 className="sec-title">DEPARTMENTS</h2>
        </div>
        <div className="row gy-5 justify-content-center justify-content-lg-between">
          {departments.map((department) => (
            <div key={department.id} className="col-md-6 col-xl-3 program-feature_wrapp">
              <div className="program-feature">
                <div className="box-img ding-dong">
                  <img
                    src={department.image ? department.image : 'path_to_default_image.png'}
                    alt={`${department.title} Image`}
                  />
                </div>
                <Link to="/Departments">
                  <div className="program-feature_content">
                    <div className="prograp-line" data-mask-src="assets/img/shape/program_line.png"></div>
                    <div className="program-shape" data-bg-src="assets/img/shape/program_shape3.png"></div>
                    <h3 className="box-title">{department.title}</h3>
                    <p className="program-feature_text">{department.description}</p>
                    <a href="service-details.html" className="icon-btn">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="shape-mockup movingX d-none d-xl-block" data-top="18%" data-left="4%">
        <img src="assets/img/shape/star.png" alt="shape" />
      </div>
      <div className="shape-mockup anim01 d-none d-xl-block" data-top="20%" data-right="3%">
        <img src="assets/img/shape/rainbow.png" alt="shape" />
      </div>
      <div className="shape-mockup anim02 d-none d-xl-block" data-bottom="15%" data-left="4%">
        <img src="assets/img/shape/star3.png" alt="shape" />
      </div>
      <div className="shape-mockup anim03 d-none d-xl-block" data-bottom="15%" data-right="4%">
        <img src="assets/img/shape/balloon.png" alt="shape" />
      </div>
      <div className="shape-mockup anim04 d-none d-xl-block" data-top="20%" data-right="26%">
        <img src="assets/img/shape/heart.png" alt="shape" />
      </div>
      <div className="shape-mockup spin d-none d-xl-block" data-top="10%" data-right="11%">
        <img src="assets/img/shape/star2.png" alt="shape" />
      </div>
    </div>
  );
};

export default AboutStyleTwo;
