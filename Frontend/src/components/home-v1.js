import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
const Navbar = lazy(() => import('./global-components/navbar'));
const Banner = lazy(() => import('./section-components/banner'));
const WhyChooseUs = lazy(() => import('./section-components/why-choose-us'));
const AboutStyleOne = lazy(() => import('./section-components/about-style-one'));
const AboutStyleTwo = lazy(() => import('./section-components/about-style-two'));
const Funfact = lazy(() => import('./section-components/funfact'));
const PostSlider = lazy(() => import('./section-components/post-slider'));
const Ourgallery = lazy(() => import('./ourgallery'));
const Testimonial = lazy(() => import('./section-components/Testominials'));
const Child_disorders = lazy(() => import('./section-components/Child-disorders'));
const Theraphy_Sections = lazy(() => import('./section-components/Theraphy-Sections'));
const Newsletter = lazy(() => import('./section-components/Newsletter'));
const Footer_v1 = lazy(() => import('./global-components/footer'));

const Home_V1 = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Ananthapuri CDC</title>
            </Helmet>
            <Suspense fallback={<div>Loading...</div>}>
                <Navbar />
                <div id="smooth-wrapper style2">
                    <div id="smooth-content">
                        <Banner />
                        <Theraphy_Sections />
                        <WhyChooseUs />
                        <AboutStyleOne />
                        <AboutStyleTwo />
                        <Child_disorders />
                        <Funfact />
                        <Ourgallery />
                        <PostSlider />
                        <Testimonial />
                        <Newsletter />
                        <Footer_v1 />
                    </div>
                </div>
            </Suspense>
        </div>
    );
};

export default Home_V1;
