import React, { Component } from "react";
import { Link } from "react-router-dom";


class Banner extends Component {
  render() {
    return (
      <section className="banner banner-style-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 col-xl-6 col-lg-6">
              <div className="banner-content">
                <h4>Transcending Knowledge, Empowering Future!</h4>
                <h1 style={{color: "#2a6152"}}>Internzvalley</h1>
                <p>
                  Whether you’re a student eager to gain hands-on experience, a
                  recent graduate ready to launch your career, or an
                  organization looking to discover fresh, talented minds,
                  Internzvalley is your gateway to growth. Step into a world of
                  opportunities, connect with industry leaders, and unlock your
                  true potential with us. Your journey to success starts here!
                </p>
                <div className="btn-container">
                                                <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfY2PklFx3b0bC2TaR-pMAFZozWY4xmBXDbSR75Jkm810JHOQ/viewform" className="btn btn-main rounded">Register Now</Link>
                                                <Link to="#" className="btn btn-white rounded ms-2">Explore Programs </Link>
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
    );
  }
}

export default Banner;
