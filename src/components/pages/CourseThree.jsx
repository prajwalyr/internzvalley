import React from 'react';
import { PageBanner,CourseGrid}  from '../layouts/course04/index';

import Layout from '../../common/Layout';

const CourseThree = () =>  {
    return (
        <div className="page">       
            <Layout>    
            <PageBanner
                            title="Skill Development Program"
                            rootUrl="/"
                            parentUrl="Home"
                            currentUrl="Skill-Development-Program"
                            />
                <CourseGrid />
            </Layout>  
        </div>
    );
}
export default CourseThree;