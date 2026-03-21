import React, { Component } from 'react';
import Slider from "react-slick";
import { HomeTestimonial } from '../../../utils/script';

class Review extends Component {
    constructor(props){
        super(props);
        this.state = {
            testimonial: [
                {
                    id: 1,
                    // img: 'assets/images/clients/testimonial-avata-01.jpg',
                    text: 'The pro-degree not only taught me theory but also provided practical training, which got me a job.',
                    name: 'Kunal K',
                    desigantion: 'Client',
                },
                {
                    id:2,
                    // img: 'assets/images/clients/testimonial-avata-02.jpg',
                    text: 'I can\'t thank my mentors enough for their support throughout the digital marketing course',
                    name: 'Akshay',
                    desigantion: 'Digital Marketing Executive',
                },
                {
                    id: 3,
                    // img: 'assets/images/clients/testimonial-avata-03.jpg',
                    text: '"Everything Good ,I am pleasure to get the opportunity to gain a new experience in IOT field . Thank you for everything that u have done for me to gain a new experience.."',
                    name: 'TAAMADA YESWANTH',
                    desigantion: 'IOT',
                },
                {
                    id:4,
                    // img: 'assets/images/clients/testimonial-avata-04.jpg',
                    text: 'The supporting team is actually good, and the members are so friendly.i was feeling free to share my problems that I faced during the internship and they were so supportive and were ready to solve the issues at any time.',
                    name: 'Sharanya',
                    desigantion: 'Data Science',
                },
                {
                    id:5,
                    // img: 'assets/images/clients/testimonial-avata-03.jpg',
                    text: 'Thanks to the amazing training I received, I landed an internship that kickstarted my career!',
                    name: 'Abhinav P',
                    desigantion: 'Electronics Engineer',
                },
                {
                    id:6,
                    // img: 'assets/images/clients/testimonial-avata-03.jpg',
                    text: 'The Java course equipped me with practical skills, helping me secure an job in my desired position',
                    name: 'Rahul N',
                    desigantion: 'Full-Stack Developer',
                },            
            ]
        }
    }

    render() {
        
        return (

            <section className="testimonial-4 section-padding bg-gray">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="section-heading text-center mb-50">
                                <h2 className="font-lg">Our Students Says</h2>
                                <p>Discover Your Perfect Program In Our Courses.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-xl-12">
                            <div className="testimonials-slides">
                                <Slider {...HomeTestimonial} >
                                {
                                    this.state.testimonial.map((data,i) => (
                                        <div class="testimonial-item" key={data.id}>
                                            <div class="testimonial-inner">
                                                <div class="quote-icon"><i class="flaticon-left-quote"></i></div>
                                                
                                                    <div class="testimonial-text mb-30">
                                                        {data.text}
                                                    </div>

                                                    <div class="client-info d-flex align-items-center">
                                                        {/* <div class="client-img">
                                                            <img src={data.img} alt="" class="img-fluid"/>
                                                        </div> */}
                                                        <div class="testimonial-author">
                                                            <h4>{data.name}</h4>
                                                            <span class="meta">{data.desigantion}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        ))
                                    }
                                    
                                </Slider>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
       
        );
    }
}

export default Review;
