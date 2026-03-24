import React from 'react';
import Layout from '../../common/Layout';
import PageBanner from '../layouts/common/PageBanner';

const TermsConditions = () => {
  return (
    <div className="terms-conditions-page">
      <Layout>
        <PageBanner
          title="Terms & Conditions"
          rootUrl="/"
          parentUrl="Home"
          currentUrl="Terms & Conditions"
        />

        <section className="pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="policy-content" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
                  <p>
                    Welcome to Internzvalley! As stewards of this digital platform, we offer you, the User, access to our website under the Terms and Conditions outlined in this Agreement, also known as our Terms of Use.
                  </p>
                  <p>
                    Our Privacy Policy, available for your review on our website, governs how we collect and employ information from our esteemed visitors like yourself.
                  </p>
                  <p>
                    By entering our Site or sharing any information with us, you not only acknowledge but also willingly bind yourself to these Terms of Use and our Privacy Policy.
                  </p>
                  <p>
                    Your interaction with our platform, whether through browsing or any other means, signifies your acceptance of this Agreement, the Privacy Policy, and any future operational guidelines or policies that we may introduce on the Site.
                  </p>
                  <p>
                    These regulations, ever-evolving to serve you better, are integral to your experience here. Remember, your use of the Site is subject to the prevailing version of this Agreement at the time of your visit. Let's embark on this digital journey together!
                  </p>
                  <br/>
                  <h5>1. Product Purchase</h5>
                  <ul>
                    <li>The Customer acknowledges that all purchases made from Internzvalley are subject to availability.</li>
                    <li>The Customer agrees to provide accurate and complete information for the purchase process.</li>
                    <li>Internzvalley reserves the right to refuse or cancel any order placed for products listed at an incorrect price or containing any other incorrect information, whether or not the order has been confirmed.</li>
                  </ul>
                  <br/>
                  <h5>2. User Accounts</h5>
                  <ul>
                    <li>Users must create an account to access certain features.</li>
                    <li>Users are responsible for maintaining the confidentiality of their account information.</li>
                    <li>Users must provide accurate and complete information during registration.</li>
                    <li>You have to use your registered email id to get access to your LMS portal.</li>
                  </ul>
                  <br/>
                  <h5>3. Payment and Fees</h5>
                  <ul>
                    <li>Users may be required to pay fees for certain courses or services.</li>
                    <li>Payment details and transactions are processed securely. Refer to our privacy policy for more information.</li>
                  </ul>
                  <br/>
                  <h5>4. Intellectual Property</h5>
                  <ul>
                    <li>All content, materials, and intellectual property on the platform are owned by Internzvalley.</li>
                    <li>Users are granted a limited, non-exclusive, and non-transferable license to access and use the content for personal, non-commercial purposes.</li>
                  </ul>
                  <br/>
                  <h5>5. Compliance with Government Regulations</h5>
                  <ul>
                    <li>The Customer agrees to comply with all applicable laws, regulations, and government directives regarding the purchase and use of products from Internzvalley.</li>
                    <li>Internzvalley reserves the right to refuse or cancel any order if it determines, in its sole discretion, that the purchase or use of the products may violate any applicable laws or regulations.</li>
                  </ul>
                  <br/>
                  <h5>6. Disclaimer</h5>
                  <ul>
                    <li>Internzvalley makes no warranties, express or implied, regarding the products sold, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.</li>
                    <li>The Customer agrees that the use of products purchased from Internzvalley is at their own risk, and Internzvalley shall not be liable for any damages, whether direct, indirect, incidental, or consequential, arising out of or in connection with the purchase, use, or inability to use the products.</li>
                  </ul>
                  <br/>
                  <h5>7. No Cancellation Policy</h5>
                  <ul>
                    <li>Once an order is confirmed and payment has been processed, it cannot be cancelled, except where prohibited by law.</li>
                    <li>The Customer acknowledges and accepts that all sales are final, and refunds or cancellations are not permitted except as required by applicable law.</li>
                  </ul>
                  <br/>
                  <h5>8. Governing Law and Dispute Resolution</h5>
                  <ul>
                    <li>These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where Internzvalley operates.</li>
                    <li>Any dispute arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in the jurisdiction where Internzvalley operates.</li>
                  </ul>
                  <br/>
                  <h5>9. Changes to Terms</h5>
                  <ul>
                    <li>Internzvalley may update these terms from time to time. Users will be notified of significant changes.</li>
                    <li>By making a purchase from Internzvalley, the Customer acknowledges that they have read, understood, and agreed to be bound by these Terms and Conditions.</li>
                    <li>These Terms may be updated or amended by Internzvalley from time to time without prior notice. It is the Customer's responsibility to review these Terms periodically for any changes.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default TermsConditions;
