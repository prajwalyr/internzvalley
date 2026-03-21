import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Cta extends Component {
    render() {
        return (
            <section className="cta-5 mb--120 bg-gray">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-12">
                            <div className="cta-inner4">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-xl-4 col-lg-5">
                                        <div className="cta-img mb-4 mb-lg-0">
                                            <img src="assets/images/about/123456.png" alt="" className="img-fluid"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="cta-content ps-lg-4">
                                            <span className="subheading mb-10">Not sure where to start?</span>
                                            <h2 className="mb-20"> Start Your Growth Journey with Internzvalley</h2>
                                            <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfY2PklFx3b0bC2TaR-pMAFZozWY4xmBXDbSR75Jkm810JHOQ/viewform" className="btn btn-main rounded"> Join NOw</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Cta;
