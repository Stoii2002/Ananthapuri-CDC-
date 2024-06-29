import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Contact extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div class="space">
	<div class="container">
		<div class="row gy-30 gx-30">
			<div class="col-md-6 col-xl-3 contact-info_wrapp">
				<div class="contact-info">
					<div class="contact-info_icon"><img src="assets/img/icon/address.svg" alt=""/></div>
					<div class="media-body">
						<p class="contact-info_label">Address</p>
						<a href="https://www.google.com/maps" class="contact-info_link">936 Kiehn Route West,
							<span>United States</span></a>
					</div>
				</div>
			</div>
			<div class="col-md-6 col-xl-3 contact-info_wrapp">
				<div class="contact-info">
					<div class="contact-info_icon"><img src="assets/img/icon/call.svg" alt=""/></div>
					<div class="media-body">
						<p class="contact-info_label">Phone</p>
						<a href="tel:+163-642-2567" class="contact-info_link">+163-642-2567</a>
						<a href="tel:+163-524-4521" class="contact-info_link">+163-524-4521</a>
					</div>
				</div>
			</div>
			<div class="col-md-6 col-xl-3 contact-info_wrapp">
				<div class="contact-info">
					<div class="contact-info_icon"><img src="assets/img/icon/mail.svg" alt=""/></div>
					<div class="media-body">
						<p class="contact-info_label">Email</p>
						<a href="mailto:info@kitar.com" class="contact-info_link">info@kitar.com</a>
						<a href="mailto:info2@kitar.com" class="contact-info_link">info2@kitar.com</a>
					</div>
				</div>
			</div>
			<div class="col-md-6 col-xl-3 contact-info_wrapp">
				<div class="contact-info">
					<div class="contact-info_icon"><img src="assets/img/icon/qus.svg" alt=""/></div>
					<div class="media-body">
						<p class="contact-info_label">Have Questions?</p>
						<span class="contact-info_link">Discover more by visiting us or joining our community</span>
					</div>
				</div>
			</div>
			<div class="">
				<div class="contact-map">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.7310056272386!2d89.2286059153658!3d24.00527418490799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b97badc6151%3A0x30b048c9fb2129bc!2sAngfuztheme!5e0!3m2!1sen!2sbd!4v1651028958211!5m2!1sen!2sbd" allowfullscreen="" loading="lazy"></iframe>

				</div>
			</div>
		</div>
	</div>
</div>

        }
}

export default Contact