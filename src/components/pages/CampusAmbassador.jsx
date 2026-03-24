import React from "react";
import Layout from "../../common/Layout";
import PageBanner from "../layouts/common/PageBanner";

const CampusAmbassador = () => {
  return (
    <div className="hire-from-us-page">
      <Layout>
        <PageBanner
          title="Campus Ambassador"
          rootUrl="/"
          parentUrl="Home"
          currentUrl="Campus Ambassador"
        />

        <section className="section-padding page">
          <div className="container">
            <div
              className="horizontal-accordion"
              style={{
                display: "flex",
                alignItems: "stretch",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              <div className="top-section">
              <div className="images">
                <img src={`${process.env.PUBLIC_URL}/assets/images///about/lee.jpg`} alt="Logo" className="img-fluid"/>
                <img src={`${process.env.PUBLIC_URL}/assets/images/about/ree.jpg`} alt="Logo" className="img-fluid"/>
              </div>
              <div className="content">
                <h1>Lead, Learn, and Earn</h1>
                <h4>Apply Now to Be an Internzvalley Ambassador!</h4>

                <p>
                  Internzvalley is a leading ed-tech company with the quest to
                  upskill the students and make them future-ready in the areas
                  of data technology and management.
                </p>

                <p>
                  We also instill a sense of accountability, passion, and
                  excellence through our programs so that the students are
                  up-to-date and move on the right career pathway.
                </p>
              </div>
              </div>
              <div className="bottom-section">
                <h2>Who can apply</h2>

                <p>
                  Anyone except for final year students (both graduate and
                  post-graduate) Strong communicator with interpersonal and
                  networking skills Active on social media platforms.
                </p>

                <p>
                  <strong>Benefits of being a College Ambassador:</strong>{" "}
                  Opportunity to earn side income, Experience certificate,
                  Extensive learning opportunities, Goodies, PPO, LOR.
                </p>

                <p>
                  <strong>Responsibilities of the Candidate:</strong> Promote
                  various events being conducted by Internzvalley on your campus
                  Spread awareness about Internzvalley courses in your network.
                </p>

                <p>
                  Act as an interface between Internzvalley and your college to
                  conduct various student development activities
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default CampusAmbassador;
