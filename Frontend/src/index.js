import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

import HomeV1 from './components/home-v1';
import HomeV3 from './components/home-v3';
import HomeV4 from './components/home-v4';
import About from './components/about';
import Service from './components/School';
import ServiceV2 from './components/service-v2';
import ServiceDetails from './components/service-details';
import PortfolioStandard from './components/portfolio-standard';
import PortfolioFull from './components/portfolio-full';
import PortfolioMasonary from './components/portfolio-masonary';
import PortfolioDetails from './components/portfolio-details';
import Pricing from './components/pricing';
import Faq from './components/faq';
import Testimonial from './components/testimonial';
import Team from './components/team';
import BlogList from './components/blog-list';
import BlogDetails from './components/blog-details';
import Contact from './components/contact';
import School from './components/School';
import Gallery from './components/Gallery';
import Occupational_Theraphy from './components/Occupational-Therapy';
import Psycho_Theraphy from './components/Psycho-Theraphy';
import Special_Education from './components/Special-Education';
import Speech_Theraphy from './components/Speech-Theraphy';
import Adhd from './components/ADH';
import Autism from './components/Autism';
import Cerebral from './components/Cerebral-Palsy';
import Downs from './components/Downs-Syndrome';
import Intellectual from './components/Intellectual-disability';
import Learning_Disability from './components/Learning-Disability';



class Root extends Component {
    render() {
        return(
                <Router>
	                <div>
	                <Switch>
	                    <Route exact path="/" component={HomeV1} />
	                    <Route exact path="/home-v3" component={HomeV3} />
	                    <Route exact path="/home-v4" component={HomeV4} />
	                    <Route path="/about" component={About} />
						<Route path="/our-school" component={School} />
	                    <Route path="/service" component={Service} />
	                    <Route path="/service-v2" component={ServiceV2} />
	                    <Route path="/service-details" component={ServiceDetails} />
	                    <Route path="/portfolio-standard" component={PortfolioStandard} />
	                    <Route path="/portfolio-full" component={PortfolioFull} />
	                    <Route path="/portfolio-masonary" component={PortfolioMasonary} />
	                    <Route path="/portfolio-details" component={PortfolioDetails} />
	                    <Route path="/pricing" component={Pricing} />
	                    <Route path="/faq" component={Faq} />
	                    <Route path="/testimonial" component={Testimonial} />
	                    <Route path="/team" component={Team} />
	                    <Route path="/Gallery" component={Gallery} />
	                    <Route path="/blog-list" component={BlogList} />
	                    <Route path="/contact" component={Contact} />

						{/* Departments */}
						<Route path="/Occupational-Theraphy" component={Occupational_Theraphy} />
						<Route path="/Psycho-Theraphy" component={Psycho_Theraphy} />
						<Route path="/Special-education" component={Special_Education} />
						<Route path="/Speech-Theraphy" component={Speech_Theraphy} />

						{/* Desorders */}
						<Route path="/ADHD" component={Adhd} />
						<Route path="/Autism" component={Autism} />
						<Route path="/Cerebral-Palsy" component={Cerebral} />
						<Route path="/Downs-Syndrome" component={Downs} />
						<Route path="/Intellectual-Disability" component={Intellectual} />
						<Route path="/Learning-Disability" component={Learning_Disability} />

						<Route path="/blog/:slug" component={BlogDetails} />
	                </Switch>
	                </div>
                </Router>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('bizkar'));
