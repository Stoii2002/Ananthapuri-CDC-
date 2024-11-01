import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Departmentaside from '../section-components/Department-aside';

const Blog_page = () => {
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

  

  /* form data  */
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
    <div>      
      <section className="th-blog-wrapper blog-details space-top space-extra-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-7">
              <div className="th-blog blog-single">
                <div className="blog-img">
                <img src={blog.image} alt={blog.name} loading="lazy"/>
                  <a href="blog-details.html" className="blog-date"> 26 <span className="month">May</span> </a>
                </div>
                <div className="blog-content">
                  <h2 className="blog-title">{blog.name}</h2>
                  <p className="mb-30" dangerouslySetInnerHTML={{ __html: blog.description }}></p>



                  <div className="share-links clearfix">
                    <div className="row justify-content-between">
                      <div className="col-md-auto">
                        <span className="share-links-title">Tags:</span>
                        <div className="tagcloud">
                          <a>Ananthapuri CDC</a>
                          <a>Child Developement</a>
                        </div>
                      </div>
                      <div className="col-md-auto text-xl-end">
                        <span className="share-links-title">Follow us:</span>
                        <div className="th-social">
                          <a href="https://www.facebook.com/profile.php?id=61555715290318" target="_blank"><i className="fab fa-facebook-f"></i></a>
                          
                          <a href="https://www.linkedin.com/company/99358336/admin/feed/posts/ " target="_blank"><i className="fab fa-linkedin-in"></i></a>
                          <a href="https://www.instagram.com/ananthapuricdc?utm_source=ig_web_button_share_sheet&amp;igsh=ZDNlZDc0MzIxNw==" target="_blank"><i className="fab fa-instagram"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="blog-navigation mb-5">
                <a href="" className="nav-btn prev">
                  <i className="fa-solid fa-angle-left"></i>
                  <span className="nav-text">Explore Adventures in Ananthapuri CDC</span>
                </a>
                <a href="" className="nav-btn next">
                  <i className="fa-solid fa-angle-right"></i>
                  <span className="nav-text">Friendship Blooms in Ananthapuri CDC</span>
                </a>
              </div>

              {/* <div className="th-comments-wrap">
                <h2 className="blog-inner-title h4"> <i className="fa-solid fa-comments"></i>Comments (02)</h2>
                <ul className="comment-list">
                  <li className="th-comment-item">
                    <div className="th-post-comment">
                      <div className="comment-avater">
                        <img 
                          src={`${process.env.PUBLIC_URL}/assets/img/blog/comment-author-1.jpg`} 
                          alt="Comment Author" 
                        />
                      </div>

                      <div className="comment-content">
                        <h3 className="name">Rita Hirwat Michel</h3>
                        <span className="commented-on">26 Mar, 2024 10:30 am</span>
                        <p className="text">
                          I recently purchased the Kitar Baby Care set for my newborn baby, and I couldn't be happier. The quality of the products is outstanding, and they are gentle on my baby's sensitive skin. The diaper cream worked wonders, and the baby lotion has a delightful scent.
                        </p>
                        <div className="reply_and_edit">
                          <a href="blog-details.html" className="reply-btn"><i className="fas fa-reply"></i>Reply</a>
                        </div>
                      </div>
                    </div>
                    <ul className="children">
                      <li className="th-comment-item">
                        <div className="th-post-comment">
                          <div className="comment-avater">
                            <img 
                              src={`${process.env.PUBLIC_URL}/assets/img/blog/comment-author-2.jpg`} 
                              alt="Comment Author" 
                            />
                          </div>
                          <div className="comment-content">
                            <div className="">
                              <h3 className="name">Sarah Sneha</h3>
                              <span className="commented-on">26 Mar, 2024 10:30 am</span>
                              <p className="text">
                                I recently purchased the Kitar Baby Care set for my newborn baby, and I couldn't be happier. The quality of the products is outstanding, and they are gentle on my baby's sensitive skin. The diaper cream worked wonders, and the baby lotion has a delightful scent.
                              </p>
                            </div>
                            <div className="reply_and_edit">
                              <a href="blog-details.html" className="reply-btn"><i className="fas fa-reply"></i>Reply</a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div> */}


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
            
            <div className="col-xxl-4 col-lg-5">
              <Departmentaside />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog_page;
