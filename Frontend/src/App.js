import React, { Component, Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import ScrollToTop from './ScrollToTop';

// Eager load the homepage
import HomeV1 from './components/home-v1'; // Eagerly loaded

// Lazy load other components
const About = lazy(() => import('./components/about'));
const Service = lazy(() => import('./components/School'));
const BlogDetails = lazy(() => import('./components/blog-details'));
const Contact = lazy(() => import('./components/contact'));
const School = lazy(() => import('./components/School'));
const Gallery = lazy(() => import('./components/Gallery'));

// Lazy load departments and other sections
const Occupational_Therapy = lazy(() => import('./components/Occupational-Therapy'));
const Psycho_Therapy = lazy(() => import('./components/Psycho-Theraphy'));
const Special_Education = lazy(() => import('./components/Special-Education'));
const Speech_Therapy = lazy(() => import('./components/Speech-Theraphy'));

// Lazy load disorders
const Adhd = lazy(() => import('./components/ADH'));
const Autism = lazy(() => import('./components/Autism'));
const Cerebral = lazy(() => import('./components/Cerebral-Palsy'));
const Downs = lazy(() => import('./components/Downs-Syndrome'));
const Intellectual = lazy(() => import('./components/Intellectual-disability'));
const Learning_Disability = lazy(() => import('./components/Learning-Disability'));
const Counduct = lazy(() => import('./Counduct-Disorder'));
const Virtual_Autism = lazy(() => import('./components/Virtual-autism'));
const Global_Developmental_Delay = lazy(() => import('./components/Gdd'));
const Adolescent_Counselling = lazy(() => import('./components/Adolescent_councelling'));
const Stuttering_disorder = lazy(() => import('./components/Stuttering'));
const Sensory_Processing_Disorders = lazy(() => import('./components/Senory'));
const Blogs = lazy(() => import('./components/Blogs'));

// Lazy load other components
const Mobile_menu = lazy(() => import('./components/global-components/mobile_menu'));
const Popup_contactform = lazy(() => import('./components/Popup-contactform'));

const App = () => {
    return (
        <Router>
        <ScrollToTop /> {/* Ensure this is inside the Router */}
        <div>
            {/* Lazy load the mobile menu and popup form */}
            <Suspense fallback={null}> {/* No fallback for mobile menu and contact form */}
                <Mobile_menu />
                <Popup_contactform />
            </Suspense>

            <Switch>
                {/* Eagerly render the homepage first */}
                <Route exact path="/" component={HomeV1} /> {/* HomeV1 eagerly loaded */}

                {/* Lazy load the rest of the components */}
                <Suspense fallback={
                    <div id="preloader" className="preloader">
                        <div id="loader"></div>
                    </div>
                }>
                    <Route path="/about" component={About} />
                    <Route path="/our-school" component={School} />
                    <Route path="/service" component={Service} />
                    <Route path="/gallery" component={Gallery} />
                    <Route path="/contact" component={Contact} />

                    {/* Departments */}
                    <Route path="/Occupational-Therapy" component={Occupational_Therapy} />
                    <Route path="/Behavioural-Therapy" component={Psycho_Therapy} />
                    <Route path="/Special-education" component={Special_Education} />
                    <Route path="/Speech-Therapy" component={Speech_Therapy} />

                    {/* Disorders */}
                    <Route path="/ADHD" component={Adhd} />
                    <Route path="/Autism" component={Autism} />
                    <Route path="/Cerebral-Palsy" component={Cerebral} />
                    <Route path="/Downs-Syndrome" component={Downs} />
                    <Route path="/Intellectual-Disability" component={Intellectual} />
                    <Route path="/Learning-Disability" component={Learning_Disability} />
                    <Route path="/ADHD" component={Adhd} />
                    <Route path="/Autism" component={Autism} />
                    <Route path="/Cerebral-Palsy" component={Cerebral} />
                    <Route path="/Downs-Syndrome" component={Downs} />
                    <Route path="/Intellectual-Disability" component={Intellectual} />
                    <Route path="/Learning-Disability" component={Learning_Disability} />
                    <Route path="/Counduct-Disorder" component={Counduct} />
                    <Route path="/Virtual-Autism" component={Virtual_Autism} />
                    <Route path="/Gdd" component={Global_Developmental_Delay} />
                    <Route path="/Adolescent_councelling" component={Adolescent_Counselling} />
                    <Route path="/Stuttering" component={Stuttering_disorder} />
                    <Route path="/Senory" component={Sensory_Processing_Disorders} />

                    <Route path="/blog/:slug" component={BlogDetails} />
                    <Route path="/blogs/" component={Blogs} />
                </Suspense>
            </Switch>
        </div>
    </Router>
    )
}


export default App