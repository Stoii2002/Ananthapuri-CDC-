import React, { Component } from 'react';


class Get_in_touch extends Component {

    render() {

    return <div class="space-bottom">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div class="">
                    <form action="mail.php" method="POST" class="contact-form style2 ajax-contact">
                        <div class="title-area mb-30">
                            <h3 class="sec-title mt-n3">Get In Touch</h3>
                        </div>
                        <div class="row">
                            <div class="col-12 form-group">
                                <input type="text" placeholder="Your Name" class="form-control"/>
                                <i class="far fa-user"></i>
                            </div>
                            <div class="col-md-6 form-group">
                                <input type="text" placeholder="Your Email" class="form-control"/>
                                <i class="far fa-envelope"></i>
                            </div>
                            <div class="col-md-6 form-group">
                                <input type="tel" class="form-control" name="number" id="number" placeholder="Phone Number"/>
                                <i class="fal fa-phone"></i>
                            </div>
                            <div class="form-group col-12">
                                <select name="subject" id="subject" class="form-select nice-select">
                                    <option value="" disabled selected hidden>Choose Class</option>
                                    <option value="Drawing & Painting">Drawing & Painting</option>
                                    <option value="Kids Letter Match">Kids Letter Match</option>
                                    <option value="Reading & Writing Skill">Reading & Writing Skill</option>
                                </select>
                            </div>
                            <div class="col-12 form-group mb-0">
                                <button class="th-btn btn-fw">Send Message</button>
                            </div>
                        </div>
                        <p class="form-messages mb-0 mt-3"></p>
                    </form>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="contact-image style2">
                    <img src="assets/img/normal/contact-image.png" alt=""/>
                </div>
            </div>
        </div>
    </div>
</div>


        }
}

export default Get_in_touch