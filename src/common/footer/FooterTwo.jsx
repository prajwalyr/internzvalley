import React from 'react';
import { Link } from 'react-router-dom';

const FooterTwo = () => {
   
    return (
        <>
            <section className="footer">
                <div className="footer-mid">
                    <div className="container">
                        <div className="row align-items-center footer-top-row">
                            <div className="col-md-3 text-center text-md-start mb-3 mb-md-0">
                                <div className="footer-logo">
                                    <Link to={`${process.env.PUBLIC_URL}/`}>
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/iv-logo.png`} alt="Logo" className="img-fluid"/>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-md-6 text-center">
                                <ul className="list-unstyled footer-menu mb-0">
                                    <li><Link to={`${process.env.PUBLIC_URL}/about`}>About</Link></li>
                                    <li><Link to={`${process.env.PUBLIC_URL}/hire-from-us`}>Hire From Us</Link></li>
                                    <li><Link to={`${process.env.PUBLIC_URL}/campus-ambassador`}>Campus Ambassador</Link></li>
                                    <li><Link to={`${process.env.PUBLIC_URL}/contact`}>Contact</Link></li>
                                </ul>
                            </div>

                            <div className="col-md-3 text-center text-md-end">
                                <div className="footer-socials">
                                    <Link to="https://www.instagram.com/internzvalley?igsh=Mm9xdTV2cjV4bTJi&utm_source=qr" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></Link>
                                    <Link to="https://www.linkedin.com/company/internzvalley/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-divider"></div>

                <div className="footer-btm">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
                                <div className="footer-btm-links">
                                    <Link to={`${process.env.PUBLIC_URL}/privacy-policy`}>Privacy & Policy</Link>
                                    <Link to={`${process.env.PUBLIC_URL}/terms-and-conditions`}>Terms & Condition</Link>
                                </div>
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                <p className="mb-0 copyright">Copyright © 2025. Powered by <Link to="https://www.leadz.site/" rel="nofollow">Leadz.site</Link></p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="fixed-btm-top">
                    <Link to="#top-header" className="js-scroll-trigger scroll-to-top"><i className="fa fa-angle-up"></i></Link>
                </div> */}
            </section>
        </>
    )
}

export default FooterTwo;