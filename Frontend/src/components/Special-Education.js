import React from 'react';
import Navbar from './global-components/navbar';
import Footer from './global-components/footer';
import Special_Education_banner from './section-components/Department/SpecialEducation-banner';
import Special_Education_content from './section-components/Department/SpecialEducation-content';
import { Helmet } from 'react-helmet';


const Special_Education = () => {
    return <div>
                    <Helmet>
                <title>Special schools in Trivandrum | Ananthapuricdc</title>
                <meta name="description" content="Looking for special schools in Trivandrum ? Ananthapuri CDC offers personaized education plans and therapeutic care for children with autism, ADHD and more. " />
                <meta name="keywords" content="special school, special education, inclusive education, learning disabilities, autism support, developmental disabilities, ADHD, individualized education plans, speech therapy, occupational therapy, behavioral therapy, special needs children, special education teachers, Trivandrum, special needs support, early intervention, sensory processing disorders, developmental delays, special education curriculum, special education services" />
            </Helmet>
        <Navbar />
        <div id="smooth-wrapper style2">
        <div id="smooth-content">
            <Special_Education_banner/>
            <Special_Education_content/>
            <Footer/>
        </div>
        </div>
    </div>
}   
 ;
export default Special_Education

