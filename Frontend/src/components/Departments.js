import React from 'react';
import Navbar from './global-components/navbar';
import Footer from './global-components/footer';
import Departmentsbanner from './section-components/Departments-banner';
import Departmentscontent from './section-components/Departments-content';

const Departments = () => {
    return <div>
        <Navbar />
        <Departmentsbanner/>
        <Departmentscontent/>
        <Footer/>
    </div>
}

export default Departments 

