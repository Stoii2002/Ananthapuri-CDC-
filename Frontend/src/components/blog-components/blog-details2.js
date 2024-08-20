import React, { useState, useEffect } from 'react';
import Departmentaside from '../section-components/Department-aside';
import axios from 'axios';

function Blogdetails2() {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [nextPage, setNextPage] = useState(null);
    const [previousPage, setPreviousPage] = useState(null);

    useEffect(() => {
        axios.get(`https://ananthapuricdc.com/api/fullblogs/?limit=3&offset=${(currentPage - 1) * 3}`)
            .then(response => {
                setBlogs(response.data.results);
                setTotalPages(Math.ceil(response.data.count / 3));
                setNextPage(response.data.next);
                setPreviousPage(response.data.previous);
            })
            .catch(error => {
                console.error('Error fetching blogs:', error);
            });
    }, [currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleNextPage = () => {
        if (nextPage) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (previousPage) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>      
            <section className="th-blog-wrapper blog-details space-top space-extra-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-8 col-lg-7">
                            {blogs.map(blog => (
                                <div className="th-blog blog-single has-post-thumbnail" key={blog.id}>
                                    <div className="blog-img">
                                        <img src={`${process.env.PUBLIC_URL}${blog.image}`} alt={blog.name} />
                                        <a href="blog-details.html" className="blog-date"> 23 <span className="month">May</span> </a>
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-meta">
                                            <a className="author" href="blog.html"><i className="fa-solid fa-user"></i>Admin</a>
                                            <a href="blog.html"><i className="fa-solid fa-comment"></i>Comments (5)</a>
                                        </div>
                                        <h2 className="blog-title"><a href="blog-details.html">{blog.name}</a></h2>
                                        <p className="blog-text">In a pioneering move, kindergartens across the country are embracing virtual learning tools to enhance early education. It's interesting to hear that kindergartens across the country are embracing virtual learning tools to enhance early education.</p>
                                        <a href="blog-details.html" className="th-btn">Read More</a>
                                    </div>
                                </div>
                            ))}
                            
                            {/* Pagination component */}
                            <div className="th-pagination">
                                <ul>
                                    <li>
                                        <a href="#" onClick={handlePreviousPage} className={!previousPage ? 'disabled' : ''}>
                                            <i className="fa-solid fa-arrow-left"></i>
                                        </a>
                                    </li>
                                    {[...Array(totalPages).keys()].map((page) => (
                                        <li key={page}>
                                            <a 
                                                href="#" 
                                                onClick={() => handlePageChange(page + 1)}
                                                className={page + 1 === currentPage ? 'active' : ''}
                                            >
                                                {page + 1}
                                            </a>
                                        </li>
                                    ))}
                                    <li>
                                        <a href="#" onClick={handleNextPage} className={!nextPage ? 'disabled' : ''}>
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </a>
                                    </li>
                                </ul>
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
}

export default Blogdetails2;
