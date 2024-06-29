import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class PostSlider extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <section className="blog-area bg-smoke overflow-hidden " id="blog-sec">
				<div className="shape-top" data-mask-src="assets/img/shape/shape.png"></div>
				<div className="container">
					<div className="blog-title-area">
						<div className="title-area text-center">
							<span className="sub-title">Beyond the Headlines</span>
							<h2 className="sec-title">Blogs</h2>
						</div>
					</div>
					<div className="slider-area">
						<div className="swiper th-slider has-shadow" id="blogSlider1" data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"}}}'>
							<div className="swiper-wrapper">
								<div className="swiper-slide">

									<div className="blog-box" data-mask-src="assets/img/shape/blog-shape.png">
										<div className="blog-img" data-mask-src="assets/img/shape/blog-img-shape.png">
											<img src="assets/img/blog/blog-img-1.png" alt="blog image"/>
										</div>
										<div className="blog-box_content">
											
											<h3 className="box-title"><a href="blog-details.html">SIGNS AND SYMPTOMS OF DEVELOPMENTAL DELAYS IN CHILDREN</a></h3>
											<a href="blog-details.html" className="line-btn">Read More<i className="fas fa-arrow-right ms-2"></i></a>
										</div>
									</div>
								</div>

								<div className="swiper-slide">

									<div className="blog-box" data-mask-src="assets/img/shape/blog-shape.png">
										<div className="blog-img" data-mask-src="assets/img/shape/blog-img-shape.png">
											<img src="assets/img/blog/blog-img-2.png" alt="blog image"/>
										</div>
										<div className="blog-box_content">
											
											<h3 className="box-title"><a href="blog-details.html">EDUCATING CHILDREN WITH AUTISM</a></h3>
											<a href="blog-details.html" className="line-btn">Read More<i className="fas fa-arrow-right ms-2"></i></a>
										</div>
									</div>
								</div>

								<div className="swiper-slide">

									<div className="blog-box" data-mask-src="assets/img/shape/blog-shape.png">
										<div className="blog-img" data-mask-src="assets/img/shape/blog-img-shape.png">
											<img src="assets/img/blog/blog-img-3.png" alt="blog image"/>
										</div>
										<div className="blog-box_content">
											
											<h3 className="box-title"><a href="blog-details.html">PARENTS’ ROLE IN HELPING CHILDREN WITH DEVELOPMENTAL DELAYS</a></h3>
											<a href="blog-details.html" className="line-btn">Read More<i className="fas fa-arrow-right ms-2"></i></a>
										</div>
									</div>
								</div>

								<div className="swiper-slide">

									<div className="blog-box" data-mask-src="assets/img/shape/blog-shape.png">
										<div className="blog-img" data-mask-src="assets/img/shape/blog-img-shape.png">
											<img src="assets/img/blog/blog-img-4.png" alt="blog image"/>
										</div>
										<div className="blog-box_content">
											
											<h3 className="box-title"><a href="blog-details.html">IS STUTTERING PSYCHOLOGICAL OR BIOLOGICAL?</a></h3>
											<a href="blog-details.html" className="line-btn">Read More<i className="fas fa-arrow-right ms-2"></i></a>
										</div>
									</div>
								</div>

								

							</div>
						</div>
						<button data-slider-prev="#blogSlider1" className="slider-arrow slider-prev"><i className="far fa-arrow-left"></i></button>
						<button data-slider-next="#blogSlider1" className="slider-arrow slider-next"><i className="far fa-arrow-right"></i></button>
					</div>
				</div>
				<div className="shape-mockup movingX d-none d-xl-block" data-top="18%" data-left="0%"><img src="assets/img/shape/shape_6.png" alt="shape"/>
				</div>
				<div className="shape-mockup pulse d-none d-xl-block" data-top="18%" data-right="4%">
					<img src="assets/img/shape/shape_7.png" alt="shape"/>
				</div>
				<div className="shape-mockup jump-reverse d-none d-xl-block" data-bottom="24%" data-left="4%"><img src="assets/img/shape/shape_8.png" alt="shape"/>
				</div>
				<div className="shape-mockup movingX  d-none d-xl-block" data-bottom="19%" data-right="4%"><img src="assets/img/shape/shape_9.png" alt="shape"/>
				</div>
			</section>


        }
}

export default PostSlider