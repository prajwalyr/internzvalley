import React from 'react';
import Layout from '../../common/Layout';

import {CourseDetailsFour}  from '../layouts/courseDetailsFour/index';


const CourseDetailsFourPage = () => {
    return (
        <div className="course-page">       
            <Layout>       
                <CourseDetailsFour />
            </Layout>
        </div>
    );
}

export default CourseDetailsFourPage;