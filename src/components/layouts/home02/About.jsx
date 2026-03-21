import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class About extends Component {

    render() {
        return (
            <section className="be-instructor section-padding-btm">
                <div className="container">
                    <div className="row align-items-center" style={{marginTop:'50px'}}>
                        <div className="col-xl-6 col-lg-6">
                            <img src="assets/images/about/qwer.png" alt="" className="img-fluid" />
                        </div>

                        <div className="col-xl-6 col-lg-6 ">
                            <div className="section-heading mt-4 mt-lg-0">
                                <span className="subheading">Start Today</span>
                                <h2 className="font-lg mb-20">About Us </h2>
                                <p className="mb-10">At Internzvalley, we are committed to delivering exceptional internship and upskilling opportunities for aspiring professionals and students. Our programs provide hands-on experiences that foster both personal and career growth, equipping participants with the skills needed to thrive in today’s competitive industry.</p>
                                <p className="mb-10">We strive to create a mutually beneficial ecosystem, where students gain practical knowledge and industry exposure, while organizations benefit from the innovative ideas and fresh perspectives of emerging talent.</p>
                                {/* <p className="mb-10">Our mission is to bridge the gap between academic learning and industry expectations, providing tailored experiences that enhance employability and make students job-ready. By empowering talent and connecting them with opportunities, we aim to shape the next generation of skilled professionals.</p> */}
                                <Link to="about" className="btn btn-main rounded" >Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

                    
        );
    }
}

export default About;
