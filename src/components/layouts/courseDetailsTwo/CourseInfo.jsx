import React from 'react';
import { Link } from 'react-router-dom';

const CourseInfo = ({ data }) => {

    const price = parseFloat(data.price);
    const oldPrice = parseFloat(data.oldPrice);

    let discount = 0;

    if (oldPrice && price && oldPrice > price) {
        discount = Math.round(((oldPrice - price) / oldPrice) * 100);
    }

    return (

        <div className="course-sidebar course-sidebar-2 mt-5 mt-lg-0">
            <div className="course-widget course-details-info">

                {/* <div className="price-header">
                    <h2 className="course-price">
                        ₹{data.price === '0' ? 'Free' : data.price} 
                        <span>{data.oldPrice}</span>
                    </h2>

                    {discount > 0 && (
                        <span className="course-price-badge onsale">
                            {discount}% off
                        </span>
                    )}
                </div> */}

                <ul className="course-sidebar-list">

                    {data.level &&
                        <li>
                            <div className="d-flex justify-content-between align-items-center">
                                <span><i className="ri-bar-chart-2-line"></i>Level</span>
                                {data.level}
                            </div>
                        </li>
                    }

                    {data.certificate &&
                        <li>
                            <div className="d-flex justify-content-between align-items-center">
                                <span><i className="ri-medal-line"></i>Certificate</span>
                                {data.certificate}
                            </div>
                        </li>
                    }

                    {data.lesson &&
                        <li>
                            <div className="d-flex justify-content-between align-items-center">
                                <span><i className="ri-draft-line"></i>Lectures</span>
                                {data.lesson}
                            </div>
                        </li>
                    }

                    <li>
                        <div className="d-flex justify-content-between align-items-center">
                            <span><i className="ri-user-2-line"></i>Students</span>
                            {data.student}
                        </div>
                    </li>

                    <li>
                        <div className="d-flex justify-content-between align-items-center">
                            <span><i className="ri-time-line"></i>Duration</span>
                            {data.duration}
                        </div>
                    </li>

                    <li>
                        <div className="d-flex justify-content-between align-items-center">
                            <span><i className="ri-translate"></i>Language</span>
                            {data.language}
                        </div>
                    </li>

                    <li>
                        <div className="d-flex justify-content-between align-items-center">
                            <span><i className="ri-calendar-2-line"></i>Updated</span>
                            {data.deadline}
                        </div>
                    </li>

                </ul>

                <div className="buy-btn">
                    <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfY2PklFx3b0bC2TaR-pMAFZozWY4xmBXDbSR75Jkm810JHOQ/viewform" >
                        <button className="button button-enroll-course btn btn-main-2 rounded">
                            <i className="ri-shopping-cart-2-line me-2"></i> Enroll Course
                        </button>
                    </Link>
                </div>

                <div className="course-meterial">
                    <h4 className="mb-3">Material Includes</h4>
                    <ul className="course-meterial-list">
                        <li><i className="fal fa-long-arrow-right"></i>Videos</li>
                        <li><i className="fal fa-long-arrow-right"></i>Files For Development</li>
                        <li><i className="fal fa-long-arrow-right"></i>Documentation Files</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default CourseInfo;