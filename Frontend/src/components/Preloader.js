import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
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

// Preloader Component
const Preloader = () => (
    <div id="preloader" className="preloader">
        <div id="loader" className="th-preloader">
            <svg className="pencil" viewBox="0 0 200 200" width="200px" height="200px" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <clipPath id="pencil-eraser">
                        <rect rx="5" ry="5" width="30" height="30"></rect>
                    </clipPath>
                </defs>
                <circle className="pencil__stroke" r="70" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="439.82 439.82" strokeDashoffset="439.82" strokeLinecap="round" transform="rotate(-113,100,100)" />
                <g className="pencil__rotate" transform="translate(100,100)">
                    <g fill="none">
                        <circle className="pencil__body1" r="64" stroke="hsl(223,90%,50%)" strokeWidth="30" strokeDasharray="402.12 402.12" strokeDashoffset="402" transform="rotate(-90)" />
                        <circle className="pencil__body2" r="74" stroke="hsl(223,90%,60%)" strokeWidth="10" strokeDasharray="464.96 464.96" strokeDashoffset="465" transform="rotate(-90)" />
                        <circle className="pencil__body3" r="54" stroke="hsl(223,90%,40%)" strokeWidth="10" strokeDasharray="339.29 339.29" strokeDashoffset="339" transform="rotate(-90)" />
                    </g>
                    <g className="pencil__eraser" transform="rotate(-90) translate(49,0)">
                        <g className="pencil__eraser-skew">
                            <rect fill="hsl(223,90%,70%)" rx="5" ry="5" width="30" height="30" />
                            <rect fill="hsl(223,90%,60%)" width="5" height="30" clipPath="url(#pencil-eraser)" />
                            <rect fill="hsl(223,10%,90%)" width="30" height="20" />
                            <rect fill="hsl(223,10%,70%)" width="15" height="20" />
                            <rect fill="hsl(223,10%,80%)" width="5" height="20" />
                            <rect fill="hsla(223,10%,10%,0.2)" y="6" width="30" height="2" />
                            <rect fill="hsla(223,10%,10%,0.2)" y="13" width="30" height="2" />
                        </g>
                    </g>
                    <g className="pencil__point" transform="rotate(-90) translate(49,-30)">
                        <polygon fill="hsl(33,90%,70%)" points="15 0,30 30,0 30" />
                        <polygon fill="hsl(33,90%,50%)" points="15 0,6 30,0 30" />
                        <polygon fill="hsl(223,10%,10%)" points="15 0,20 10,10 10" />
                    </g>
                </g>
            </svg>
        </div>
    </div>
);

const Root = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleStart = () => setLoading(true);
        const handleComplete = () => setLoading(false);

        // Trigger loading when the route changes
        handleStart();
        
        // This timeout simulates page loading; replace with actual loading logic
        const timer = setTimeout(handleComplete, 1000);

        return () => clearTimeout(timer);
    }, [location]);

    return (
        <div>
            {loading && <Preloader />}
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
                <Route path="/blog-grid" component={Gallery} />
                <Route path="/blog-list" component={BlogList} />
                <Route path="/blog-details" component={BlogDetails} />
                <Route path="/contact" component={Contact} />
                <Route path="/Occupational-Theraphy" component={Occupational_Theraphy} />
                <Route path="/Psycho-Theraphy" component={Psycho_Theraphy} />
                <Route path="/Special-education" component={Special_Education} />
                <Route path="/Speech-Theraphy" component={Speech_Theraphy} />
            </Switch>
        </div>
    );
};

const App = () => (
    <Router>
        <Root />
    </Router>
);

ReactDOM.render(<App />, document.getElementById('bizkar'));
