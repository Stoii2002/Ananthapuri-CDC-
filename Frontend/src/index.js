import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

import HomeV1 from './components/home-v1';

import About from './components/about';
import Service from './components/School';


import Team from './components/team';
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
import Mobile_menu from './components/global-components/mobile_menu';
import Popup_contactform from './components/Popup-contactform';
import Blogs from './components/Blogs';
import Counduct from './Counduct-Disorder';
import Virtual_Autism from './components/Virtual-autism';



class Root extends Component {
    render() {
        return(
				<Router forceRefresh={true}>
	                <div>
					<Mobile_menu/>
					<Popup_contactform/>
	                <Switch>
	                    <Route exact path="/" component={HomeV1} />
	                    <Route path="/about" component={About} />
						<Route path="/our-school" component={School} />
	                    <Route path="/service" component={Service} />
	               
	                    <Route path="/Gallery" component={Gallery} />
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
						<Route path="/Counduct-Disorder" component={Counduct} />
						<Route path="/Virtual-Autism" component={Virtual_Autism} />

						<Route path="/blog/:slug" component={BlogDetails} />
						<Route path="/blogs/" component={Blogs} />
	                </Switch>
	                </div>
                </Router>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('bizkar'));
