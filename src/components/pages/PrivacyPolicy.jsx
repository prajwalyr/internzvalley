import React from 'react';
import Layout from '../../common/Layout';
import PageBanner from '../layouts/common/PageBanner';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page">
      <Layout>
        <PageBanner
          title="Privacy Policy"
          rootUrl="/"
          parentUrl="Home"
          currentUrl="Privacy Policy"
        />

        <section className="pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="policy-content" style={{ paddingTop: '50px', paddingBottom: '50px' }}>

                  <p>
                    We deeply value your trust. To uphold this trust, Internzvalley maintains the highest ethical standards in the collection, utilization, and protection of any information you entrust to us.
                  </p>
                  <p>
                    Operating under the esteemed brand name Internzvalley, we, Internzvalley, are a pioneering edtech company headquartered in India, dedicated to fostering learning.
                  </p>
                  <p>
                    This privacy policy governs your interaction with "Internzvalley - The Learning Platform" (referred to as the "Platform"), our website www.Internzvalley.com (the "Website"), and all associated applications, products, websites, and services managed by our company.
                  </p>
                  <p>
                    Before engaging with the Platform, Website, or our services, please review this comprehensive privacy policy ("Policy") in conjunction with the Terms and Conditions ("T&C") provided on our Platform and Website.
                  </p>
                  <p>
                    Your utilization of the Platform, Website, or associated services, including any product registrations or usage through various mediums indicates your full acceptance of this Policy and your commitment to be legally bound by its terms.
                  </p>
                  <p>
                    If you do not consent to the provisions outlined in this Policy, we kindly ask that you refrain from using the Platform, Website, our products, or accessing any of our services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default PrivacyPolicy;
