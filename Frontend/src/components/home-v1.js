import React from 'react';
import { Helmet } from 'react-helmet';

// Import components directly (no lazy loading)
import Navbar from './global-components/navbar';
import Banner from './section-components/banner';
import WhyChooseUs from './section-components/why-choose-us';
import AboutStyleOne from './section-components/about-style-one';
import AboutStyleTwo from './section-components/about-style-two';
import Funfact from './section-components/funfact';
import PostSlider from './section-components/post-slider';
import Ourgallery from './ourgallery';
import Testimonial from './section-components/Testominials';
import Child_disorders from './section-components/Child-disorders';
import Theraphy_Sections from './section-components/Theraphy-Sections';
import Newsletter from './section-components/Newsletter';
import Footer_v1 from './global-components/footer';

const Home_V1 = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Ananthapuri CDC</title>
            </Helmet>
            {/* No Suspense needed since we're not lazy loading */}
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
        </div>
    );
};

export default Home_V1;
