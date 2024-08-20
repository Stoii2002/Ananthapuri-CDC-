import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostSlider = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get('https://ananthapuricdc.com/api/blogs/')
            .then(response => {
                setBlogs(response.data);
            })
            .catch(error => {
                console.error('Error fetching blogs:', error);
            });
    }, []);

    return (
        <section className="blog-area bg-smoke overflow-hidden" id="blog-sec">
            <div className="shape-top" data-mask-src={`${process.env.PUBLIC_URL}/assets/img/shape/shape.png`}></div>
            <div className="container">
                <div className="blog-title-area">
                    <div className="title-area text-center">
                        <span className="sub-title">Beyond the Headlines</span>
                        <h2 className="sec-title">Blogs</h2>
                    </div>
                </div>
                <div className="slider-area">
                    <div className="swiper th-slider has-shadow" id="blogSlider1" data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":1},"768":{"slidesPerView":2},"992":{"slidesPerView":2},"1200":{"slidesPerView":3}}}'>
                        <div className="swiper-wrapper">
                            {blogs.map(blog => (
                                <div className="swiper-slide" key={blog.id}>
                                    <div className="blog-box" data-mask-src={`${process.env.PUBLIC_URL}/assets/img/shape/blog-shape.png`}>
                                        <div className="blog-img" data-mask-src={`${process.env.PUBLIC_URL}/assets/img/shape/blog-img-shape.png`}>
                                            <img src={`${process.env.PUBLIC_URL}${blog.image}`} alt={blog.name} />
                                        </div>
                                        <div className="blog-box_content">
                                            <h3 className="box-title">
                                                <a href={`/blog/${blog.slug}`}>{blog.name}</a>
                                            </h3>
                                            <a href={`/blog/${blog.slug}`} className="line-btn">Read More<i className="fas fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button data-slider-prev="#blogSlider1" className="slider-arrow slider-prev"><i className="fa fa-arrow-left"></i></button>
                    <button data-slider-next="#blogSlider1" className="slider-arrow slider-next"><i className="fa fa-arrow-right"></i></button>
                </div>
            </div>
            <div className="shape-mockup movingX d-none d-xl-block" data-top="18%" data-left="0%">
                <img src={`${process.env.PUBLIC_URL}/assets/img/shape/shape_6.png`} alt="shape"/>
            </div>
            <div className="shape-mockup pulse d-none d-xl-block" data-top="18%" data-right="4%">
                <img src={`${process.env.PUBLIC_URL}/assets/img/shape/shape_7.png`} alt="shape"/>
            </div>
            <div className="shape-mockup jump-reverse d-none d-xl-block" data-bottom="24%" data-left="4%">
                <img src={`${process.env.PUBLIC_URL}/assets/img/shape/shape_8.png`} alt="shape"/>
            </div>
            <div className="shape-mockup movingX d-none d-xl-block" data-bottom="19%" data-right="4%">
                <img src={`${process.env.PUBLIC_URL}/assets/img/shape/shape_9.png`} alt="shape"/>
            </div>
        </section>
    );
};

export default PostSlider;
