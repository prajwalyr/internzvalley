import React from 'react';
import Layout from '../../common/Layout';

import {CourseDetailsThree}  from '../layouts/courseDetailsThree/index';


const CourseDetailsThreePage = () => {
    return (
        <div className="course-page">       
            <Layout>       
                <CourseDetailsThree />
            </Layout>
        </div>
    );
}

export default CourseDetailsThreePage;