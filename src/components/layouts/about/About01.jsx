import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AboutComp extends Component {
    constructor(props){
        super(props);
        this.state = {
            process: [
                {
                    id: 1,
                    step: '01',
                    title: 'Explore and Choose Your Program',
                    text: 'Browse our programs and find the perfect fit for your career growth.',
                    extraName: 'bg-1',
                },
                {
                    id: 2,
                    step: '02',
                    title: 'Sign Up by Filling the Form',
                    text: 'Filling out a form with your basic information, academic background, and any relevant work experience.',
                    extraName: 'bg-2',
                },
                {
                    id: 3,
                    step: '03',
                    title: 'Schedule Your 1:1 Online Meeting',
                    text: 'Meeting with our experts to guide you according to your interests ',
                    extraName: 'bg-3',
                },
                {
                    id: 4,
                    step: '04',
                    title: 'Start Your Journey',
                    text: 'Master New Skills and Receive International Accreditation. ',
                    extraName: 'bg-1',
                }
            ]
        }
    }
    render() {
        return (
        //    WOrk process Start
        <section className="work-process section-padding">
            <div className="container">
                <div className="row mb-70 justify-content-between">
                    <div className="col-xl-5 col-lg-6">
                        <div className="section-heading mb-4 mb-xl-0">
                            <span className="subheading">Why Internzvalley?</span>
                            <h2 className="font-lg">Hands-On Learning, Real Career Growth: Internships & Upskilling</h2>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <p>Our platform connects you with highly qualified and experienced professionals who are passionate about nurturing talent. Whether it’s gaining hands-on project experience or mastering new skills, our mentors are committed to providing personalized guidance and support to help students achieve their educational and career goals.</p>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-xl-12 pe-xl-5 col-lg-12">
                        <div className="row">
                            {
                                  this.state.process.map((data,i) => (
                                    <div className="col-xl-6 col-lg-6 col-md-6" key={data.id}>
                                        <div className="step-item ">
                                            <div className={`step-number ${data.extraName}`}>{data.step}</div>
                                            <div className="step-text">
                                                <h5>{data.title}</h5>
                                                <p>{data.text}</p>
                                            </div>
                                        </div>
                                    </div>

                                  ))
                            }
                            
                        </div>
                    </div>

                    {/* <div className="col-xl-5">
                        <div className="video-section mt-3 mt-xl-0">
                            <div className="video-content">
                                <img src="assets/images/bg/office01.jpg" alt="" className="img-fluid"/>
                                <Link to="#" className="video-icon video-popup"><i className="fa fa-play"></i></Link>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
     
        );
    }
}

export default AboutComp;
