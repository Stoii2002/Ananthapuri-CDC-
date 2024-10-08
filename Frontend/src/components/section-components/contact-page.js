import React, { Component } from 'react';


class Contact extends Component {

    render() {

    return <div className="space">
	<div className="container">
		<div className="row gy-30 gx-30">
			<div className="col-md-6 col-xl-3 contact-info_wrapp">
				<div className="contact-info">
					<div className="contact-info_icon"><img src="assets/img/icon/address.svg" alt="" loading="lazy"/></div>
					<div className="media-body">
						<p className="contact-info_label">Address</p>
						<a href="https://www.google.com/maps" className="contact-info_link">Medical College, Chalakkuzhi,
							<span>TVPM, Kerala 695011.</span></a>
					</div>
				</div>
			</div>
			<div className="col-md-6 col-xl-3 contact-info_wrapp">
				<div className="contact-info">
					<div className="contact-info_icon"><img src="assets/img/icon/call.svg" alt="" loading="lazy"/></div>
					<div className="media-body">
						<p className="contact-info_label">Phone</p>
						<a href="tel:+163-642-2567" className="contact-info_link">(+91) 471 2554990</a>
						<a href="tel:+163-524-4521" className="contact-info_link">+91 94460 64178</a>
					</div>
				</div>
			</div>
			<div className="col-md-6 col-xl-3 contact-info_wrapp">
				<div className="contact-info">
					<div className="contact-info_icon"><img src="assets/img/icon/mail.svg" alt="" loading="lazy"/></div>
					<div className="media-body">
						<p className="contact-info_label">Email</p>
						<a href="mailto:info@kitar.com" className="contact-info_link">cdc.ananthapuri@gmail.com</a>
					</div>
				</div>
			</div>
			<div className="col-md-6 col-xl-3 contact-info_wrapp">
				<div className="contact-info">
					<div className="contact-info_icon"><img src="assets/img/icon/qus.svg" alt="" loading="lazy"/></div>
					<div className="media-body">
						<p className="contact-info_label">Have Questions?</p>
						<span className="contact-info_link">Discover more by visiting us or joining our community</span>
					</div>
				</div>
			</div>
			<div className="">
				<div className="contact-map">

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.755237986164!2d76.92799331478305!3d8.523127993872754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMzEnMjMuMyJOIDc2wrA1NSc0OC43IkU!5e0!3m2!1sen!2sin!4v1537332270133" allowFullScreen="" loading="lazy"></iframe>
				</div>
			</div>
		</div>
	</div>
</div>

        }
}

export default Contact