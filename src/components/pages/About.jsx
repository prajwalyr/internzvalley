import React from "react";
import {
    PageBanner,
    Features,
} from "../layouts/about/index";
import Layout from "../../common/Layout";
import About from "../layouts/home02/About12";

function AboutMain() {
    return (
        <div className="about">
            <Layout>
                <PageBanner
                    title="About us"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="About" />
                <About />
                <Features />
            </Layout>
        </div>
    );
}

export default AboutMain;
