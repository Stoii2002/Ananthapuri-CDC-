import React, { useState } from 'react';
import axios from 'axios';

const Newsletter = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form action
        axios.post('https://ananthapuricdc.com/api/contact/', formData)
            .then(response => {
                console.log('Form submitted successfully:', response.data);
                window.location.reload(); // Refresh the page after successful submission
            })
            .catch(error => {
                console.error('Error in form submission:', error.response.data);
            });
      };

    return (
        <div className="newsletter-sec overflow-hidden ">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-6 col-xl-8">
                        <div className="newsletter-widget">
                            <h4 className="h2 newsletter-title">Stay Connected With Us</h4>


                            <form onSubmit={handleSubmit} className="contact-form style3 ajax-contact">
                                <div className="row">
                                    <div className="col-12 form-group mb-1">
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="form-control"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                        <i className="fa fa-user"></i>
                                    </div>
                                    <div className="col-md-6 form-group mb-1">
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            className="form-control"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                        <i className="fa fa-envelope"></i>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input
                                            type="tel"
                                            className="form-control"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Phone"
                                        />
                                        <i className="fa fa-phone"></i>
                                    </div>
                                    <div className="form-group col-12 mb-1 mt-1">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="How can I help you"
                                        />
                                        <i className="fa fa-comment"></i>
                                    </div>
                                    <div className="col-12 form-group mb-0">
                                        <button type="submit" className="th-btn btn-fw">Send Message</button>
                                    </div>
                                </div>
                                <p className="form-messages mb-0 mt-3"></p>
                            </form>


                        </div>
                    </div>
                </div>
                <div className="shape-mockup movingX d-none d-xxl-block" data-bottom="-8%" data-left="0%">
                    <img src="assets/img/shape/shape_2.png" alt="shape" loading="lazy"/>
                </div>
                <div className="shape-mockup movingX d-none d-xxl-block" data-bottom="-8%" data-right="0%">
                    <img src="assets/img/shape/shape_3.png" alt="shape" loading="lazy"/>
                </div>
            </div>
            <div className="newsletter-shape" data-mask-src="assets/img/shape/newsletter-shape.png"></div>
            <div className="newsletter-shape2" data-mask-src="assets/img/shape/newsletter-shape2.png"></div>
        </div>
    );
};

export default Newsletter;
