import React from 'react';
import {PageBanner,CourseGrid}  from '../layouts/course02/index';

import Layout from '../../common/Layout';

const CourseOne = () =>  {
    return (
        <div className="page">       
            <Layout>    
                <PageBanner
                    title="Certification Program"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Certification-Program"
                    />
                <CourseGrid />
            </Layout>  
        </div>
    );
}

export default CourseOne;