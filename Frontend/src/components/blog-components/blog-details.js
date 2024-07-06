import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Departmentaside from '../section-components/Department-aside';

const Blog_page = () => {
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
    <div>      
      <section className="th-blog-wrapper blog-details space-top space-extra-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-7">
              <div className="th-blog blog-single">
                <div className="blog-img">
                <img src={blog.image} alt={blog.name} />
                  <a href="blog-details.html" className="blog-date"> 26 <span className="month">May</span> </a>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a className="author" href="blog.html">
                      <i className="fa-solid fa-user"></i>Admin
                    </a>
                    <a href="blog.html">
                      <i className="fa-solid fa-comment"></i>Comments (5)
                    </a>
                  </div>
                  <h2 className="blog-title">{blog.name}</h2>
                  <p className="mb-30">
                        {blog.description}
                  </p>
                  <p>
                    Virtual learning tools for the kindergartens often include interactives educational games,
                    multimedia content, and online platforms designed to support early learning objectives.
                    These tools can cater to different learning styles, providing a more dynamic and engaging
                    environment.
                  </p>
                  <blockquote>
                    <p>
                      "<a className="text-theme" href="#">Mrs. Rodriguez,</a> a beacon of warmth and guidance, transforms the kindergarten classroom into a magical garden where each child's potential sprouts, and the seeds of knowledge are sown with care and joy."
                    </p>
                  </blockquote>
                  <div className="row mt-25">
                    <div className="col-md-6 mb-4">
                      <img 
                        className="w-100 rounded-30" 
                        src={`${process.env.PUBLIC_URL}/assets/img/blog/blog_inner_1.jpg`} 
                        alt="Blog Image" 
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <img 
                        className="w-100 rounded-30" 
                        src={`${process.env.PUBLIC_URL}/assets/img/blog/blog_inner_2.jpg`} 
                        alt="Blog Image" 
                      />
                    </div>
                  </div>
                  <p className="blog-text">
                    Indeed, the integration of virtual learning tools in kindergarten settings represents a significant shift in early education. These tools aim to make learning more engaging, interactive, and tailored to individual needs. Some key aspects of virtual learning tools in kindergarten include...
                  </p>

                  <div className="share-links clearfix">
                    <div className="row justify-content-between">
                      <div className="col-md-auto">
                        <span className="share-links-title">Tags:</span>
                        <div className="tagcloud">
                          <a href="blog.html">Babycare</a>
                          <a href="blog.html">Reading</a>
                        </div>
                      </div>
                      <div className="col-md-auto text-xl-end">
                        <span className="share-links-title">Share:</span>
                        <div className="th-social">
                          <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                          <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                          <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
                          <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="blog-navigation">
                <a href="blog-details.html" className="nav-btn prev">
                  <i className="fa-solid fa-angle-left"></i>
                  <span className="nav-text">Explore Adventures in Kindergarten</span>
                </a>
                <a href="blog-details.html" className="nav-btn next">
                  <i className="fa-solid fa-angle-right"></i>
                  <span className="nav-text">Friendship Blooms in Kindergarten</span>
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

              <div className="th-comment-form">
                <div className="row">
                  <h3 className="blog-inner-title h4 mb-2">Leave Your Comment</h3>
                  <div className="col-md-6 form-group">
                    <input type="text" placeholder="Your Name" className="form-control" />
                    <i className="far fa-user"></i>
                  </div>
                  <div className="col-md-6 form-group">
                    <input type="text" placeholder="Your Email" className="form-control" />
                    <i className="far fa-envelope"></i>
                  </div>
                  <div className="col-12 form-group">
                    <input type="text" placeholder="Website" className="form-control" />
                    <i className="far fa-globe"></i>
                  </div>
                  <div className="col-12 form-group">
                    <textarea placeholder="Write a Comment" className="form-control"></textarea>
                    <i className="far fa-pencil"></i>
                  </div>
                  <div className="col-12 form-group mb-0">
                    <button className="th-btn btn-fw">Send Message</button>
                  </div>
                </div>
              </div>
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
