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
      <h1>{blog.name}</h1>
      <p>{blog.description}</p>


	  <section class="th-blog-wrapper blog-details space-top space-extra-bottom">
                <div class="container">
                    <div class="row">
                        <div class="col-xxl-8 col-lg-7">
                            <div class="th-blog blog-single">
                                <div class="blog-img">
                                    <img src="assets/img/blog/blog-s-1-1.jpg" alt="Blog Image"/>
                                    <a href="blog-details.html" class="blog-date"> 26 <span class="month">May</span> </a>
                                </div>
                                <div class="blog-content">
                                    <div class="blog-meta">
                                        <a class="author" href="blog.html"><i class="fa-solid fa-user"></i>Admin</a>
                                        <a href="blog.html"><i class="fa-solid fa-comment"></i>Comments (5)</a>
                                    </div>
                                    <h2 class="blog-title">Friendship Blooms in Kindergarten</h2>
                                    <p class="mb-30">In a pioneering’s moves, kindergarten’s across the countrys are embracings
                                        virtual’s learning tools to enhance early education.It's interesting to hear that
                                        kindergartens across the country are embracing virtual learning tools to enhance early
                                        education.</p>
                                    <p> Virtual learning tools for the kindergartens often include interactives educationals games,
                                        multimedia content, and online platforms designed to supports early learning objectives.
                                        These tools can cater to different learning styles, providing a more dynamic and engaging
                                        environment.</p>
                                    <blockquote>
                                        <p>"<a class="text-theme" href="#">Mrs. Rodriguez,</a> a beacon of the warmth and guidance, transforms for the kindergarten classroom into the magical garden where each child's a potential sprouts, and the seeds of knowledge are sown with care and joy."</p>
                                    </blockquote>
                                    <div class="row mt-25">
                                        <div class="col-md-6 mb-4">
                                            <img class="w-100 rounded-30" src="assets/img/blog/blog_inner_1.jpg" alt="Blog Image"/>
                                        </div>
                                        <div class="col-md-6 mb-4">
                                            <img class="w-100 rounded-30" src="assets/img/blog/blog_inner_2.jpg" alt="Blog Image"/>
                                        </div>
                                    </div>

                                    <p class="blog-text">Indeed, the integration of virtual learning tools in kindergartens settings represent’s a significant shift in early educations. These tools aim to the make learning more engagings, interactive, and tailored to individual needs. Some key aspects of virtual learning tools in kindergarten include.</p>


                                    <div class="share-links clearfix ">
                                        <div class="row justify-content-between">
                                            <div class="col-md-auto">
                                                <span class="share-links-title">Tags:</span>
                                                <div class="tagcloud">
                                                    <a href="blog.html">Babycare</a>
                                                    <a href="blog.html">Reading</a>
                                                </div>
                                            </div>
                                            <div class="col-md-auto text-xl-end">
                                                <span class="share-links-title">Share:</span>
                                                <div class="th-social">
                                                    <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                                                    <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
                                                    <a href="https://www.twitter.com/"><i class="fab fa-twitter"></i></a>
                                                    <a href="https://www.linkedin.com/"><i class="fab fa-linkedin-in"></i></a>
                                                </div>
                                            </div>{/* <!-- Share Links Area end --> */}
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div class="blog-navigation">
                                <a href="blog-details.html" class="nav-btn prev">
                                    <i class="fa-solid fa-angle-left"></i>
                                    <span class="nav-text">Explore Adventures in Kindergarten</span>
                                </a>
                                <a href="blog-details.html" class="nav-btn next">
                                    <i class="fa-solid fa-angle-right"></i>
                                    <span class="nav-text">Friendship Blooms in Kindergarten</span>
                                </a>
                            </div>
                            <div class="th-comments-wrap ">
                                <h2 class="blog-inner-title h4"> <i class="fa-solid fa-comments"></i>Comments (02)</h2>
                                <ul class="comment-list">
                                    <li class="th-comment-item">
                                        <div class="th-post-comment">
                                            <div class="comment-avater">
                                                <img src="assets/img/blog/comment-author-1.jpg" alt="Comment Author"/>
                                            </div>
                                            <div class="comment-content">
                                                <h3 class="name">Rita Hirwat Michel</h3>
                                                <span class="commented-on">26 Mar,2024 10:30 am</span>
                                                <p class="text">I recently purchased the Kitar Baby Cares set for my newborns baby, and I couldn't be happier. The quality of the products is outstandings kids , and they are gentles on my baby's sensitived skin. The diaper cream worked wonders, and the baby lotion has a delightful scent.</p>
                                                <div class="reply_and_edit">
                                                    <a href="blog-details.html" class="reply-btn"><i class="fas fa-reply"></i>Reply</a>
                                                </div>
                                            </div>
                                        </div>
                                        <ul class="children">
                                            <li class="th-comment-item">
                                                <div class="th-post-comment">
                                                    <div class="comment-avater">
                                                        <img src="assets/img/blog/comment-author-2.jpg" alt="Comment Author"/>
                                                    </div>
                                                    <div class="comment-content">
                                                        <div class="">
                                                            <h3 class="name">Sarah Sneha</h3>
                                                            <span class="commented-on">26 Mar,2024 10:30 am</span>
                                                            <p class="text">I recently purchased the Kitar Baby Cares set for my newborns baby, and I couldn't be happier. The quality of the products is outstandings kids , and they are gentles on my baby's sensitived skin. The diaper cream worked wonders, and the baby.</p>
                                                        </div>
                                                        <div class="reply_and_edit">
                                                            <a href="blog-details.html" class="reply-btn"><i class="fas fa-reply"></i>Reply</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div> {/* <!-- Comment end --> <!-- Comment Form --> */}
                            <div class="th-comment-form ">
                                <div class="row">
                                    <h3 class="blog-inner-title h4 mb-2">Leave Your Comment</h3>
                                    <div class="col-md-6 form-group">
                                        <input type="text" placeholder="Your Name" class="form-control"/>
                                        <i class="far fa-user"></i>
                                    </div>
                                    <div class="col-md-6 form-group">
                                        <input type="text" placeholder="Your Email" class="form-control"/>
                                        <i class="far fa-envelope"></i>
                                    </div>
                                    <div class="col-12 form-group">
                                        <input type="text" placeholder="Website" class="form-control"/>
                                        <i class="far fa-globe"></i>
                                    </div>
                                    <div class="col-12 form-group">
                                        <textarea placeholder="Write a Comment" class="form-control"></textarea>
                                        <i class="far fa-pencil"></i>
                                    </div>
                                    <div class="col-12 form-group mb-0">
                                        <button class="th-btn btn-fw">Send Message</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-lg-5">	
                            <Departmentaside/>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  );
};

export default Blog_page;