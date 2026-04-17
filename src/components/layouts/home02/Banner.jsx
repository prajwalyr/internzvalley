import React, { Component } from "react";
import { Link } from "react-router-dom";
import FsLightbox from "fslightbox-react";


class Banner extends Component {
  state = {
    lightboxToggler: false,
  };

  render() {
    return (
      <>
        <FsLightbox
          toggler={this.state.lightboxToggler}
          sources={[`${process.env.PUBLIC_URL}/assets/images/vid2.mp4`]}
        />
        <section className="banner banner-style-1">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12 col-xl-6 col-lg-6">
                <div className="banner-content">
                  <h4>Transcending Knowledge, Empowering Future!</h4>
                  <h1 style={{ color: "#2a6152" }}>Internzvalley</h1>
                  <p>
                    Whether you’re a student eager to gain hands-on experience, a
                    recent graduate ready to launch your career, or an
                    organization looking to discover fresh, talented minds,
                    Internzvalley is your gateway to growth. Step into a world of
                    opportunities, connect with industry leaders, and unlock your
                    true potential with us. Your journey to success starts here!
                  </p>
                  <div className="btn-container d-flex align-items-center gap-3">
                    <Link
                      to="https://docs.google.com/forms/d/e/1FAIpQLSfY2PklFx3b0bC2TaR-pMAFZozWY4xmBXDbSR75Jkm810JHOQ/viewform"
                      className="btn btn-main rounded"
                    >
                      Register Now
                    </Link>

                    <button
                      type="button"
                      className="video-icon-btn rounded-circle ms-2"
                      onClick={() =>
                        this.setState((prev) => ({
                          lightboxToggler: !prev.lightboxToggler,
                        }))
                      }
                      aria-label="Watch Video"
                    >
                      <i className="ri-play-fill"></i>
                    </button>

                    <Link
                      to="#sym:CourseCat01"
                      className="btn btn-white rounded ms-2 d-none d-md-inline-flex"
                      onClick={(e) => {
                        e.preventDefault();
                        const target = document.getElementById("sym:CourseCat01");
                        if (target) {
                          target.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                      }}
                    >
                      Explore Programs
                    </Link>
                  </div>
                  {/* <div className="banner-form me-5">
                  <form action="#" className="form">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="What do you want to learn?"
                    />
                    <Link to="#">
                      {" "}
                      Search<i className="far fa-search"></i>
                    </Link>
                  </form>
                </div> */}
                  {/* <div className="category-name">
                  <span>Popular:</span>
                  <Link to="#">Design ,</Link>
                  <Link to="#">Development ,</Link>
                  <Link to="#">Marketing ,</Link>
                  <Link to="#">Affiliate</Link>
                </div> */}
                </div>
              </div>

              <div className="col-md-12 col-xl-6 col-lg-6">
                <div className="banner-img-round mt-5 mt-lg-0">
                  <img
                    src="assets/images/banner/2222.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Banner;
