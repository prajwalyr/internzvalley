import React, { Component } from "react";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            features: [
                {
                    id: 1,
                    icon: "fa fa-video",
                    title: "Industry-Driven Curriculum",
                    extraClassName: "icon-bg-3",
                    text: "Our curriculum is carefully crafted to align with the latest industry trends and demands, with the skills and knowledge needed to excel in your chosen field.",
                },
                {
                    id: 2,
                    icon: "far fa-file-certificate",
                    title: "Expert Mentorship",
                    extraClassName: "icon-bg-2",
                    text: "Benefit from personalized training and mentorship from industry experts, guiding you through every step of your internship journey.",
                },
                {
                    id: 3,
                    icon: "fad fa-users",
                    title: "Placement Opportunities",
                    extraClassName: "icon-bg-1",
                    text: "We work closely with our network of partner companies to ensure a wide range of placement opportunities upon completing your internship.",
                },
            ],
        };
    }
    render() {
        return (
            <section className="about-3 section-padding">
                <div className="container">
                    <div className="row align-items-center justify-content-between">

                        <div className="col-xl-6 col-lg-6">
                            <div className="about-content mt-5 mt-lg-0">
                                <div className="heading mb-50">
                                    <span className="subheading">10 years Glory of success</span>
                                    <h2 className="font-lg">
                                        Some reasons why Start Your Online Learning with Us
                                    </h2>
                                </div>

                                <div className="about-features">
                                    {this.state.features.map((data, i) => (
                                        <div
                                            className="feature-item feature-style-left"
                                            key={data.id}
                                        >
                                            <div
                                                className={`feature-icon icon-radius ${data.extraClassName}`}
                                            >
                                                <i className={data.icon}></i>
                                            </div>
                                            <div className="feature-text">
                                                <h4>{data.title}</h4>
                                                <p>{data.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className=" col-lg-6">
                            {/* <div className="about-img">   
                                <img src={`${process.env.PUBLIC_URL}/assets/images/banner/123.jpg`} alt="" className="img-fluid"  />
                            </div> */}
                            <div className="about-img">
                                <img
                                    src="assets/images/about/1122.jpg"
                                    alt="Banner"
                                    className="img-fluid"
                                    style={{ borderRadius: '10px' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
