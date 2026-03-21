import React from 'react';
import { PageBanner,CourseGrid}  from '../layouts/course03/index';

import Layout from '../../common/Layout';

const CourseTwo = () =>  {
    return (
        <div className="page">       
            <Layout>    
                <PageBanner
                    title="Pro Degree Program"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Pro-Degree-Program"
                    />
                <CourseGrid />
            </Layout>  
        </div>
    );
}
export default CourseTwo;