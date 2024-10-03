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
                    <Route path="/about" element={<Suspense fallback={
                        <div id="preloader" className="preloader">
                            <div id="loader"></div>
                        </div>
                    }><About /></Suspense>} />
                    <Route path="/our-school" element={<Suspense fallback={
                        <div id="preloader" className="preloader">
                            <div id="loader"></div>
                        </div>
                    }><School /></Suspense>} />
                    <Route path="/service" element={<Suspense fallback={
                        <div id="preloader" className="preloader">
                            <div id="loader"></div>
                        </div>
                    }><Service /></Suspense>} />
                    <Route path="/gallery" element={<Suspense fallback={
                        <div id="preloader" className="preloader">
                            <div id="loader"></div>
                        </div>
                    }><Gallery /></Suspense>} />
                    <Route path="/contact" element={<Suspense fallback={
                        <div id="preloader" className="preloader">
                            <div id="loader"></div>
                        </div>
                    }><Contact /></Suspense>} />

                    {/* Departments */}
                    <Route path="/Occupational-Therapy" element={<Suspense fallback={
                        <div id="preloader" className="preloader">
                            <div id="loader"></div>
                        </div>
                    }><Occupational_Therapy /></Suspense>} />
                    <Route path="/Behavioural-Therapy" element={<Suspense fallback={
                        <div id="preloader" className="preloader">
                            <div id="loader"></div>
                        </div>
                    }><Psycho_Therapy /></Suspense>} />
                    <Route path="/Special-education" element={<Suspense fallback={
                        <div id="preloader" className="preloader">
                            <div id="loader"></div>
                        </div>
                    }><Special_Education /></Suspense>} />
                    <Route path="/Speech-Therapy" element={<Suspense fallback={
                        <div id="preloader" className="preloader">
                            <div id="loader"></div>
                        </div>
                    }><Speech_Therapy /></Suspense>} />

                    {/* Disorders */}
                    <Route path="/ADHD" element={<Suspense fallback={
                        <div id="preloader" className="preloader">
                            <div id="loader"></div>
                        </div>
                    }><Adhd /></Suspense>} />
                    <Route path="/Autism" element={<Suspense fallback={
                        <div id="preloader" className="preloader">
                            <div id="loader"></div>
                        </div>
                    }><Autism /></Suspense>} />
                    <Route path="/Cerebral-Palsy" element={<Suspense fallback={
                        <div id="preloader" className="preloader">
                            <div id="loader"></div>
                        </div>
                    }><Cerebral /></Suspense>} />
                    <Route path="/Downs-Syndrome" element={<Suspense fallback={
                        <div id="preloader" className="preloader">
                            <div id="loader"></div>
                        </div>
                    }><Downs /></Suspense>} />
                    <Route path="/Intellectual-Disability" element={<Suspense fallback={
                        <div id="preloader" className="preloader">
                            <div id="loader"></div>
                        </div>
                    }><Intellectual /></Suspense>} />
                    <Route path="/Learning-Disability" element={<Suspense fallback={
                        <div id="preloader" className="preloader">
                            <div id="loader"></div>
                        </div>
                    }><Learning_Disability /></Suspense>} />
                    <Route path="/Counduct-Disorder" element={<Suspense fallback={
                        <div id="preloader" className="preloader">
                            <div id="loader"></div>
                        </div>
                    }><Counduct /></Suspense>} />
                    <Route path="/Virtual-Autism" element={<Suspense fallback={
                        <div id="preloader" className="preloader">
                            <div id="loader"></div>
                        </div>
                    }><Virtual_Autism /></Suspense>} />
                    <Route path="/Gdd" element={<Suspense fallback={
                        <div id="preloader" className="preloader">
                            <div id="loader"></div>
                        </div>
                    }><Global_Developmental_Delay /></Suspense>} />
                    <Route path="/Adolescent_councelling" element={<Suspense fallback={
                        <div id="preloader" className="preloader">
                            <div id="loader"></div>
                        </div>
                    }><Adolescent_Counselling /></Suspense>} />
                    <Route path="/Stuttering" element={<Suspense fallback={
                        <div id="preloader" className="preloader">
                            <div id="loader"></div>
                        </div>
                    }><Stuttering_disorder /></Suspense>} />
                    <Route path="/Senory" element={<Suspense fallback={
                        <div id="preloader" className="preloader">
                            <div id="loader"></div>
                        </div>
                    }><Sensory_Processing_Disorders /></Suspense>} />

                    <Route path="/blog/:slug" element={<Suspense fallback={
                        <div id="preloader" className="preloader">
                            <div id="loader"></div>
                        </div>
                    }><BlogDetails /></Suspense>} />
                    <Route path="/blogs" element={<Suspense fallback={
                        <div id="preloader" className="preloader">
                            <div id="loader"></div>
                        </div>
                    }><Blogs /></Suspense>} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;
