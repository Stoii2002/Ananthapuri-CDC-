import React, { Component } from 'react';


class Funfact extends Component {

    render() {


    return <div className="counter-area"><div className="shape-bottom" data-mask-src="assets/img/shape/shape2.png" style={{marginBottom:'-22px'}}></div>
	<div className="counter-shape" data-mask-src="assets/img/shape/counter_shape.png"></div>
	<div className="counter-sec overflow-hidden">
		<div className="container">
			<div className="row g-0 g-lg-1 justify-content-between">
				<div className="col-sm-6 col-xl-auto counter-card-wrap">
					<div className="counter-card">
						<div className="icon">
						<img className="svg-img" src="assets/img/icon/counter_card_1_1.svg" alt=""/>
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
						<img className="svg-img" src="assets/img/icon/counter_card_1_2.svg" alt=""/>
                        </div>
						<div className="media-body">
							<h2 className="box-number text-white"><span className="counter-number">28</span></h2>
							<p className="box-text text-white">Years of Service</p>
						</div>
					</div>
				</div>
				<div className="col-sm-6 col-xl-auto counter-card-wrap">
					<div className="counter-card">
						<div className="icon">
							<img className="svg-img" src="assets/img/icon/counter_card_1_3.svg" alt=""/> </div>
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