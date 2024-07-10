import React, { Component } from 'react';
import parse from 'html-react-parser';

class Funfact extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="counter-area">
	<div className="counter-shape" data-mask-src="assets/img/shape/counter_shape.png"></div>
	<div className="counter-sec overflow-hidden">
		<div className="container">
			<div className="row g-0 g-lg-1 justify-content-between">
				<div className="col-sm-6 col-xl-auto counter-card-wrap">
					<div className="counter-card">
						<div className="icon">
							<svg xmlns="http://www.w3.org/2000/svg" width="63" height="63" viewBox="0 0 64 64" fill="none" class="svg-img">
                                <path d="M32 2C29.2 2 27 4.2 27 7C27 9.8 29.2 12 32 12C34.8 12 37 9.8 37 7C37 4.2 34.8 2 32 2ZM43 16C38.6 16 34.5 18.7 32 22.6C29.5 18.7 25.4 16 21 16C14.9 16 10 20.9 10 27C10 30.5 11.7 33.5 14.4 35.2L13 62H51L49.6 35.2C52.3 33.5 54 30.5 54 27C54 20.9 49.1 16 43 16ZM21 18C24.7 18 28.1 20.6 30.1 24.5L32 28L33.9 24.5C35.9 20.6 39.3 18 43 18C48 18 52 22 52 27C52 30 50.1 32.6 47.3 33.8L45.8 60H18.2L16.7 33.8C13.9 32.6 12 30 12 27C12 22 16 18 21 18Z" fill="#FFC107"/>
                            </svg>
                        </div>
						<div className="media-body">
							<h2 className="box-number text-white"><span className="counter-number">750</span>+</h2>
							<p className="box-text text-white">Total Children Supported</p>
						</div>
					</div>
				</div>
				<div className="col-sm-6 col-xl-auto counter-card-wrap">
					<div className="counter-card">
						<div className="icon">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="70" height="70" fill="#FFFFFF" class="svg-img">
  
                                <path d="M32 4L37.09 20.26L54 20.26L40 32L45.09 48.26L32 36L18.91 48.26L24 32L10 20.26L26.91 20.26L32 4Z" fill="none"/>
                            </svg>
                        </div>
						<div className="media-body">
							<h2 className="box-number text-white"><span className="counter-number">28</span></h2>
							<p className="box-text text-white">Years of Service</p>
						</div>
					</div>
				</div>
				<div className="col-sm-6 col-xl-auto counter-card-wrap">
					<div className="counter-card">
						<div className="icon"><img className="svg-img" src="assets/img/icon/counter_card_1_3.svg" alt=""/> </div>
						<div className="media-body">
							<h2 className="box-number text-white"><span className="counter-number">120</span>+</h2>
							<p className="box-text text-white">Qualified Teacher</p>
						</div>
					</div>
				</div>
				<div className="col-sm-6 col-xl-auto counter-card-wrap">
					<div className="counter-card">
						<div className="icon"><img className="svg-img" src="assets/img/icon/counter_card_1_4.svg" alt=""/> </div>
						<div className="media-body">
							<h2 className="box-number text-white"><span className="counter-number">50</span></h2>
							<p className="box-text text-white">Programs & Therapies Offered</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="shape-mockup anim01 d-none d-lg-block" data-top="15%" data-left="2%"><img src="assets/img/shape/shape_14.png" alt="shape"/>
		</div>
		<div className="shape-mockup anim01 d-none d-lg-block" data-top="30%" data-right="6%"><img src="assets/img/shape/shape_15.png" alt="shape"/>
		</div>
		<div className="shape-mockup anim02 d-none d-lg-block" data-bottom="15%" data-left="7%"><img src="assets/img/shape/shape_16.png" alt="shape"/>
		</div>
		<div className="shape-mockup anim03 d-none d-lg-block" data-bottom="15%" data-right="1%"><img src="assets/img/shape/shape_17.png" alt="shape"/>
		</div>
	</div>
</div>


        }
}

export default Funfact