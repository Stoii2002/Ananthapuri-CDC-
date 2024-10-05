import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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

// Lazy Load Component
const LazyLoad = ({ Component }) => (
    <Suspense fallback={
        <div id="preloader" className="preloader">
            <div id="loader"></div>
        </div>
    }>
        <Component />
    </Suspense>
);

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

                <Routes>
                    {/* Eagerly render the homepage first */}
                    <Route path="/" element={<HomeV1 />} /> {/* HomeV1 eagerly loaded */}

                    {/* Lazy load the rest of the components */}
                    <Route path="/about" element={<LazyLoad Component={About} />} />
                    <Route path="/our-school" element={<LazyLoad Component={School} />} />
                    <Route path="/service" element={<LazyLoad Component={Service} />} />
                    <Route path="/gallery" element={<LazyLoad Component={Gallery} />} />
                    <Route path="/contact" element={<LazyLoad Component={Contact} />} />

                    {/* Departments */}
                    <Route path="/Occupational-Therapy" element={<LazyLoad Component={Occupational_Therapy} />} />
                    <Route path="/Behavioural-Therapy" element={<LazyLoad Component={Psycho_Therapy} />} />
                    <Route path="/Special-education" element={<LazyLoad Component={Special_Education} />} />
                    <Route path="/Speech-Therapy" element={<LazyLoad Component={Speech_Therapy} />} />

                    {/* Disorders */}
                    <Route path="/ADHD" element={<LazyLoad Component={Adhd} />} />
                    <Route path="/Autism" element={<LazyLoad Component={Autism} />} />
                    <Route path="/Cerebral-Palsy" element={<LazyLoad Component={Cerebral} />} />
                    <Route path="/Downs-Syndrome" element={<LazyLoad Component={Downs} />} />
                    <Route path="/Intellectual-Disability" element={<LazyLoad Component={Intellectual} />} />
                    <Route path="/Learning-Disability" element={<LazyLoad Component={Learning_Disability} />} />
                    <Route path="/Counduct-Disorder" element={<LazyLoad Component={Counduct} />} />
                    <Route path="/Virtual-Autism" element={<LazyLoad Component={Virtual_Autism} />} />
                    <Route path="/Gdd" element={<LazyLoad Component={Global_Developmental_Delay} />} />
                    <Route path="/Adolescent_councelling" element={<LazyLoad Component={Adolescent_Counselling} />} />
                    <Route path="/Stuttering" element={<LazyLoad Component={Stuttering_disorder} />} />
                    <Route path="/Senory" element={<LazyLoad Component={Sensory_Processing_Disorders} />} />

                    <Route path="/blog/:slug" element={<LazyLoad Component={BlogDetails} />} />
                    <Route path="/blogs" element={<LazyLoad Component={Blogs} />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;
