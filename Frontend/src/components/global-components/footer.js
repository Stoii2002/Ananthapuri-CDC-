import React, { Component } from 'react';

class Footer_v1 extends Component {
    componentDidMount() {
        const $ = window.$;
        let publicUrl = process.env.PUBLIC_URL + '/';
        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/theme.js";
        document.body.appendChild(minscript);

        $('.go-top').find('a').on('click', function () {
            $(window).scrollTop(0);
        });
    }

    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';
        return (
            <div>
                <footer className="footer-wrapper footer-layout1">
                    <div className="container">
                        <div className="widget-area">
                            <div className="row justify-content-between">
                                <div className="col-md-6 col-lg-6 col-xl-auto">
                                    <div className="widget footer-widget">
                                        <div className="th-widget-about">
                                            <div className="about-logo">
                                                <a href="home-kindergarten-school.html"><img src={publicUrl + "assets/img/logocdc.png"} alt="kitar"/></a>
                                            </div>
                                            <p className="about-text">Welcome To Ananthapuri Centre For Child Development & Early Intervention! .</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-auto">
                                    <div className="widget widget_nav_menu footer-widget">
                                        <h3 className="widget_title">Quick Links</h3>
                                        <div className="menu-all-pages-container">
                                            <ul className="menu">
                                                <li><a href="about.html">Home</a></li>
                                                <li><a href="classNamees.html">About</a></li>
                                                <li><a href="contact.html">Our school</a></li>
                                                <li><a href="team.html">Disorder</a></li>
                                                <li><a href="contact.html">Gallery</a></li>
                                                <li><a href="service.html">Contact</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-auto">
                                    <div className="widget widget_nav_menu footer-widget">
                                        <h3 className="widget_title">Blog</h3>
                                        <div className="menu-all-pages-container">
                                            <ul className="menu">
                                                <li><a href="classNamees.html">Parents Role</a></li>
                                                <li><a href="classNamees.html">Stuttering</a></li>
                                                <li><a href="classNamees.html">Autism</a></li>
                                                <li><a href="classNamees.html">Sign and Symptoms</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-auto">
                                    <div className="widget footer-widget">
                                        <h3 className="widget_title">Contact Us!</h3>
                                        <div className="th-widget-contact">
                                            <p className="footer-info"><i className="fas fa-map-marker-alt"></i>Medical College, Chalakkuzhi, Trivandrum, Kerala 695011</p>
                                            <p className="footer-info"><i className="fas fa-envelope"></i>Email:<a className="text-inherit" href="cdc.ananthapuri@gmail.com"> cdc.ananthapuri@gmail.com</a></p>
                                            <p className="footer-info"><i className="fas fa-phone-alt"></i>Phone:<a className="text-inherit" href="tel:0471 2554990"> 0471 2554990</a>&nbsp;<a className="text-inherit" href="tel:+91 94460 64178">+91 94460 64178</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright-wrap text-center">
                        <p className="copyright-text">Copyright <i className="fa fa-copyright"></i> 2024 <a href="home-kindergarten-school.html">Misc Archive</a>. All Rights Reserved.</p>
                    </div>
                    <div className="shape-mockup shape1 movingX d-none d-xxl-block" data-top="32%" data-left="2%"><img src={publicUrl + "assets/img/shape/shape_4.png"} alt="shape"/></div>
                    <div className="shape-mockup shape1 movingX d-none d-xxl-block" data-top="0%" data-right="4%"><img src={publicUrl + "assets/img/shape/shape_5.png"} alt="shape"/></div>
                </footer>
            </div>
        );
    }
}

export default Footer_v1;
