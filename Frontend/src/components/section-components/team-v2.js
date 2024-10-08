import React, { useState, useEffect } from 'react';

const TeamV2 = () => {
	const [teachers, setTeachers] = useState([]);
  
	useEffect(() => {
	  fetch('https://ananthapuricdc.com/api/Teachers/')
	   .then(response => response.json())
	   .then(data => setTeachers(data));
	}, []);
    return (
	
	<section className="team-area2">
		    <div className="shape-top" data-mask-src="assets/img/shape/shape.png"></div>
			<div className="shape-bottom" data-mask-src="assets/img/shape/shape2.png" style={{marginBottom:'-25px'}}></div>
	<div className="container z-index-common">
		<div className="title-area text-center">
			<span className="sub-title">Our Honorable Teacher</span>
			<h2 className="sec-title">Greet our instructor</h2>
		</div>
		<div className="slider-area">
			<div className="swiper th-slider teamSlider2 has-shadow" id="teamSlider2" data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"}}}'>
				<div className="swiper-wrapper">



				{teachers.map((teachers, index) => (
					<div key={index} className="swiper-slide">
						<div className="team-box">
							<div className="team-img-wrap">
								<div className="team-img">
									<img src={teachers.Image} alt="Team" loading="lazy"/>
								</div>
							</div>
							<div className="team-content">
								<h3 className="box-title">{teachers.Name}</h3>
								<span className="team-desig">{teachers.Designation}</span>
							</div>
						</div>
					</div>

				))}



				</div>
			</div>
			<button data-slider-prev="#teamSlider2" className="slider-arrow slider-prev"><i className="fa fa-arrow-left"></i></button>
			<button data-slider-next="#teamSlider2" className="slider-arrow slider-next"><i className="fa fa-arrow-right"></i></button>
		</div>
	</div>
	<div className="shape-mockup anim02 d-none d-xxl-block" data-top="30%" data-left="5%"><img src="assets/img/shape/star3-1.png" alt="shape"/>
	</div>
	<div className="shape-mockup jump d-none d-xxl-block" data-top="30%" data-right="4%"><img src="assets/img/shape/shape_18.png" alt="shape"/>
	</div>
</section>
	)
        
}

export default TeamV2