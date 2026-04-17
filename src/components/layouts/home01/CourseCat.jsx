import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

class CourseCat01 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: [
        {
          id: 1,
          title: "Certification program",
          description: "Earn industry-recognized certifications to boost your career prospects and validate your skills.",
          img: "assets/images/icon/test1.jpg",
          extraClassName: "bg-1",
          link: "/Certification-Program",
        },
        {
          id: 2,
          title: "Skill Development",
          description: "Enhance your practical skills with hands-on training in emerging technologies and methodologies.",
          img: "assets/images/icon/test2.jpg",
          extraClassName: "bg-2",
          link: "/Skill-Development-Program",
        },
        {
          id: 3,
          title: "Pro Degree program",
          description: "Pursue professional degrees designed for working professionals to advance their careers.",
          img: "assets/images/icon/test3.jpg",
          extraClassName: "bg-3",
          link: "/Pro-Degree-Program",
        },
        // {
        //     id: 4,
        //     title: 'Web Development',
        //     img :  'assets/images/icon/icon4.png',
        //     extraClassName: 'bg-4',
        // },
        // {
        //     id: 5,
        //     title: 'Digital Marketing & SEO',
        //     img :  'assets/images/icon/icon6.png',
        //     extraClassName: 'bg-5',
        // },
      ],
      logos: [
        { img: "assets/images/clients/ibm.png" },
        { img: "assets/images/clients/intt.png" },
        { img: "assets/images/clients/unit.png" },
        { img: "assets/images/clients/prom.png" },
        // { img: "assets/images/clients/meta.png" },
        { img: "assets/images/clients/cisco.png" },
        // { img: "assets/images/clients/led.png" },
        { img: "assets/images/clients/micro.png" },
        { img: "assets/images/clients/info.png" },
        // { img: "assets/images/clients/iso.jpg" },
      ],
    };
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    };

    // Course category

    return (
      <>

        <section id="sym:CourseCat01" className="course-category-3 section-padding">
          <div className="container">
            <div className="row mb-70 justify-content-center">
              <div className="col-xl-8">
                <div className="section-heading text-center">
                  <h2 className="font-lg">Your Journey to Success Starts Here</h2>
                  <p>
                    Experience transformative learning with our customized
                    programs, designed to build focused expertise and accelerate
                    your professional growth
                  </p>
                </div>
              </div>
            </div>

            <div className="row" >
              {this.state.category.map((data, i) => (
                <div className="col-xl col-lg-4 col-sm-6" key={data.id}>
                  <Link to={data.link} style={{ textDecoration: 'none' }}>
                    <div
                      className="category-card"
                      style={{
                        background: '#fff',
                        borderRadius: '20px',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        cursor: 'pointer',
                        height: '100%',
                        overflow: 'hidden',
                        position: 'relative',
                        border: '1px solid rgba(0,0,0,0.08)',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-10px)';
                        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.25)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
                      }}
                    >
                      <div style={{ width: '100%', height: '360px', overflow: 'hidden' }}>
                        <img
                          src={data.img}
                          alt={data.title}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                            filter: 'brightness(0.95)',
                          }}
                        />
                      </div>

                      <div style={{ padding: '1.75rem 1.5rem', minHeight: '195px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div>
                          <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#15212a', marginBottom: '0.6rem' }}>
                            {data.title}
                          </h3>
                          <p style={{ fontSize: '1rem', color: '#4c4c4c', lineHeight: '1.6', margin: 0 }}>
                            {data.description}
                          </p>
                        </div>
                        <div style={{ marginTop: '1.2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ color: '#2a6152', fontWeight: '700', fontSize: '0.95rem' }}>Explore</span>
                          <span style={{ fontSize: '1.2rem', color: '#2a6152' }}>→</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="logo-carousel section-padding py-5" style={{ marginBottom: '50px', marginTop: '100px' }}>
          <div className="container">
            <div className="row mb-70 justify-content-center">
              <div className="col-xl-8">
                <div className="section-heading text-center">
                  <h2 className="font-lg">Authorized Certification Partner</h2>
                  <p>
                    We collaborate with top-tier companies and renowned colleges worldwide to create impactful learning and career opportunities.
                  </p>
                </div>
              </div>
            </div>
            <Slider {...settings}>
              {this.state.logos.map((logo, i) => (
                <div key={i} className="logo-item">
                  <img src={logo.img} alt="client logo" className="img-fluid" />
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </>
    );
  }
}
export default CourseCat01;
