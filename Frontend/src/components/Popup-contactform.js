import React, { Component } from 'react';
import { useState } from 'react';
import axios from 'axios';

function Popup_contactform() {
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
        axios.post('http://localhost:8000/api/contact/', formData)
            .then(response => {
                console.log('Form submitted successfully:', response.data);
            })
            .catch(error => {
                console.error('Error in form submission:', error.response.data);
            });
    };
  return (
    <div>
        <div class="sidemenu-wrapper shopping-cart ">
    <div class="sidemenu-content">
        <button class="closeButton sideMenuCls"><i class="fa fa-times"></i></button>
        <div class="widget woocommerce widget_shopping_cart">
            <h3 class="widget_title">Connect with us </h3>
            <div class="widget_shopping_cart_content">
               
                

            <form onSubmit={handleSubmit} className="contact-form style2 ajax-contact">
            <div className="title-area mb-30">
                <h3 className="sec-title mt-n3">Get In Touch</h3>
            </div>
            <div className="row">
                <div className="col-12 form-group">
                    <input type="text" placeholder="Your Name" className="form-control" name="name" value={formData.name} onChange={handleChange} />
                    <i className="fa fa-user"></i>
                </div>
                <div className="col-md-6 form-group">
                    <input type="email" placeholder="Your Email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
                    <i className="fa fa-envelope"></i>
                </div>
                <div className="col-md-6 form-group">
                    <input type="tel" className="form-control" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
                    <i className="fa fa-phone"></i>
                </div>
                <div className="form-group col-12">
                    <input type="text" className="form-control" name="message" value={formData.message} onChange={handleChange} placeholder="How can I help you" />
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
</div>
    </div>
  )
}

export default Popup_contactform