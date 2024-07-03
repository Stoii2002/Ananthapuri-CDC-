import React, { Component } from 'react';


class Get_in_touch extends Component {

    render() {

    return <div className="space-bottom">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="">
                    <form action="mail.php" method="POST" className="contact-form style2 ajax-contact">
                        <div className="title-area mb-30">
                            <h3 className="sec-title mt-n3">Get In Touch</h3>
                        </div>
                        <div className="row">
                            <div className="col-12 form-group">
                                <input type="text" placeholder="Your Name" className="form-control"/>
                                <i className="far fa-user"></i>
                            </div>
                            <div className="col-md-6 form-group">
                                <input type="text" placeholder="Your Email" className="form-control"/>
                                <i className="far fa-envelope"></i>
                            </div>
                            <div className="col-md-6 form-group">
                                <input type="tel" className="form-control" name="number" id="number" placeholder="Phone Number"/>
                                <i className="fal fa-phone"></i>
                            </div>
                            <div className="form-group col-12">
                                <select name="subject" id="subject" className="form-select nice-select">
                                    <option value="" disabled selected hidden>Choose className</option>
                                    <option value="Drawing & Painting">Drawing & Painting</option>
                                    <option value="Kids Letter Match">Kids Letter Match</option>
                                    <option value="Reading & Writing Skill">Reading & Writing Skill</option>
                                </select>
                            </div>
                            <div className="col-12 form-group mb-0">
                                <button className="th-btn btn-fw">Send Message</button>
                            </div>
                        </div>
                        <p className="form-messages mb-0 mt-3"></p>
                    </form>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="contact-image style2">
                    <img src="assets/img/normal/get-in-touch-img.png" alt=""/>
                </div>
            </div>
        </div>
    </div>
</div>


        }
}

export default Get_in_touch