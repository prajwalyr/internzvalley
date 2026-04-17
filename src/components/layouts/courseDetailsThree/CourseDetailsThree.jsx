import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import FsLightbox from "fslightbox-react";

import { useAccordionButton } from "react-bootstrap/AccordionButton";
import AccordionContext from "react-bootstrap/AccordionContext";
import CourseData from "../../../data/course/CourseData2.json";

import CurriculumTabContent from "../../../data/course/CurriculumTabContent.json";
import LearningOutcomes from "../../../data/course/LearningOutcomes.json";

import RelatedCourses from "../courseDetailsTwo/RelatedCourses";

import CourseInfo from "./CourseInfo";

const CustomToggle = ({ children, eventKey }) => {
    const { activeEventKey } = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton(eventKey);
    const isCurrentEventKey = activeEventKey === eventKey;
    return (
        <button
            type="button"
            onClick={decoratedOnClick}
            aria-expanded={isCurrentEventKey ? true : false}
            className="edu-accordion-button"
        >
            {children}
        </button>
    );
};

const CurriculumContent = () => {
    const [activeId, setActiveId] = useState("0");

    function toggleActive(id) {
        if (activeId === id) {
            setActiveId(null);
        } else {
            setActiveId(id);
        }
    }

    return (
        <Accordion bsPrefix="edu-accordion-02" defaultActiveKey={activeId} flush>
            {CurriculumTabContent.map((accordion, i) => (
                <Accordion.Item
                    eventKey={i.toString()}
                    key={i}
                    onClick={() => toggleActive(i.toString())}
                    bsPrefix={`edu-accordion-item ${activeId === i.toString() ? "bg-active" : ""}`}
                >
                    <div className="edu-accordion-header">
                        <CustomToggle eventKey={i.toString()}>
                            {accordion.title}
                        </CustomToggle>
                    </div>
                    <Accordion.Body bsPrefix="edu-accordion-body">
                        <ul>
                            {accordion.content.map((title, index) => (
                                <li key={index}>
                                    <div className="text">
                                        <i className="ri-draft-line"></i>
                                        {title}
                                    </div>
                                    <div className="icon">
                                        <i className="ri-lock-password-line"></i>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    );
};

const LearningOutcomesContent = ({ courseId }) => {
    const [activeId, setActiveId] = useState("0");
    const outcomes = LearningOutcomes[courseId] || [];

    function toggleActive(id) {
        if (activeId === id) {
            setActiveId(null);
        } else {
            setActiveId(id);
        }
    }

    return (
        <>
            <h5 className="mb-4">What You'll Learn From This Course</h5>
            <Accordion bsPrefix="edu-accordion-02" defaultActiveKey={activeId} flush>
                {outcomes.map((accordion, i) => (
                    <Accordion.Item
                        eventKey={i.toString()}
                        key={i}
                        onClick={() => toggleActive(i.toString())}
                        bsPrefix={`edu-accordion-item ${activeId === i.toString() ? "bg-active" : ""}`}
                    >
                        <div className="edu-accordion-header">
                            <CustomToggle eventKey={i.toString()}>
                                {accordion.title}
                            </CustomToggle>
                        </div>
                        <Accordion.Body bsPrefix="edu-accordion-body">
                            <ul>
                                {accordion.content.map((item, index) => (
                                    <li key={index}>
                                        <div className="text">
                                            <i className="ri-draft-line"></i>
                                            {item}
                                        </div>
                                        <div className="icon">
                                            <i className="ri-lock-password-line"></i>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </>
    );
};

const CourseDetailsThree = () => {
    const { id } = useParams();
    const courseId = parseInt(id, 10);
    const data = CourseData.filter((course) => course.id === courseId);
    const courseItem = data[0];

    const [contentTab, setContentTab] = useState("overview");
    const handleTab = (content) => {
        if (content === "overview") {
            setContentTab("overview");
        } else if (content === "curriculum") {
            setContentTab("curriculum");
        } else if (content === "reviews") {
            setContentTab("reviews");
        }
    };

    const [toggler, setToggler] = useState(false);

    return (
        <>
            <section className="course-page-header page-header-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-xl-7">
                            <div className="course-header-wrapper mb-0 bg-transparent">
                                <h1 className="mb-3">{courseItem.title}</h1>
                                <p>{courseItem.excerpt}</p>

                                <div className="course-header-meta">
                                    <ul className="inline-list list-info">
                                        <li>
                                            <div className="course-author">
                                                Industrial Experts
                                            </div>
                                        </li>

                                        <li>
                                            <div className="list-rating">
                                                <span>
                                                    <i className="fas fa-star"></i>
                                                </span>
                                                <span>
                                                    <i className="fas fa-star"></i>
                                                </span>
                                                <span>
                                                    <i className="fas fa-star"></i>
                                                </span>
                                                <span>
                                                    <i className="fas fa-star"></i>
                                                </span>
                                                <span>
                                                    <i className="fas fa-star"></i>
                                                </span>
                                                <span className="rating-count">
                                                    ({courseItem.rating})
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <i className="fa fa-user me-2"></i>
                                            {courseItem.student} enrolled students
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-5">
                            <div className="video-area">
                                {/* <div className="thumbnail video-popup-wrapper course-thumbnail">
                                    <img
                                        className="radius-small w-100"
                                        src={`${process.env.PUBLIC_URL}/assets/images/course/video-bg/${courseItem.image}`}
                                        alt="Course Video Thumb"
                                    />

                                    <button
                                        onClick={() => setToggler(!toggler)}
                                        className="video-play-btn position-to-top video-popup-activation"
                                    >
                                        <span className="play-icon"></span>
                                    </button>
                                    <FsLightbox
                                        toggler={toggler}
                                        sources={courseItem.videoLink}
                                    />
                                </div> */}
                                <div className="thumbnail video-popup-wrapper course-thumbnail">
                                    <img
                                        className="radius-small w-100"
                                        src={`${process.env.PUBLIC_URL}/assets/images/course/video-bg/${courseItem.image}`}
                                        alt="Course Video Thumb"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="tutori-course-single tutori-course-layout-3 page-wrapper">
                <div className="tutori-course-content ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-xl-8">
                                <nav className="course-single-tabs learn-press-nav-tabs">
                                    <ul className="nav nav-tabs course-nav" role="tablist">
                                        <li className="nav-item">
                                            <a
                                                className={
                                                    contentTab === "overview"
                                                        ? "nav-link active"
                                                        : "nav-link"
                                                }
                                                type="button"
                                                aria-label="Overview"
                                                onClick={() => handleTab("overview")}
                                            >
                                                Overview
                                            </a>
                                        </li>
                                        {/* <li className="nav-item">
                                            <a
                                                className={
                                                    contentTab === "curriculum"
                                                        ? "nav-link active"
                                                        : "nav-link"
                                                }
                                                type="button"
                                                aria-label="Curriculum"
                                                onClick={() => handleTab("curriculum")}
                                            >
                                                Curriculum
                                            </a>
                                        </li> */}
                                        <li className="nav-item">
                                            <a
                                                className={
                                                    contentTab === "reviews"
                                                        ? "nav-link active"
                                                        : "nav-link"
                                                }
                                                type="button"
                                                aria-label="Reviews"
                                                onClick={() => handleTab("reviews")}
                                            >
                                                Reviews
                                            </a>
                                        </li>
                                    </ul>
                                </nav>

                                <div className="tab-content tutori-course-content">
                                    {/* Overview Tab */}
                                    {contentTab === "overview" && (
                                        <div
                                            className={`tab-pane fade show ${contentTab === "overview" ? "active" : ""} `}
                                        >
                                            <div className="single-course-details ">
                                                <div
                                                    className="course-tab-content mb-5"
                                                    dangerouslySetInnerHTML={{
                                                        __html: courseItem.details,
                                                    }}
                                                />
                                                <div className="course-tab-content">
                                                    <LearningOutcomesContent courseId={courseItem.id} />
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/*  Curiculam Tab */}
                                    {contentTab === "curriculum" && (
                                        <div
                                            className={`tab-pane fade show ${contentTab === "curriculum" ? "active" : ""} `}
                                        >
                                            <div className="course-tab-content">
                                                <CurriculumContent />
                                            </div>
                                        </div>
                                    )}

                                    {/*  Review TAb */}

                                    {contentTab === "reviews" && (
                                        <div
                                            className={`tab-pane fade show ${contentTab === "reviews" ? "active" : ""} `}
                                        >
                                            <div className="course-tab-content">
                                                <div id="course-reviews">
                                                    <ul className="course-reviews-list">
                                                        {courseItem && courseItem.reviews && courseItem.reviews.map((review, index) => (
                                                            <li key={index}>
                                                                <div className="course-review">
                                                                    <div className="course-single-review">
                                                                        <div className="user-content user-review-content">
                                                                            <div className="review-header mb-10">
                                                                                <h4 className="user-name">{review.author}</h4>

                                                                                <div className="rating review-stars-rated">
                                                                                    {[...Array(5)].map((_, i) => (
                                                                                        <a href="#" key={i}>
                                                                                            <i className={`fa fa-star${i < Math.floor(review.rating) ? '' : i === Math.floor(review.rating) && review.rating % 1 !== 0 ? '-half' : ''}`}></i>
                                                                                        </a>
                                                                                    ))}
                                                                                    <span className="rating-value">({review.rating})</span>
                                                                                </div>
                                                                            </div>

                                                                            <div className="review-text">
                                                                                <div className="review-content">
                                                                                    {review.text}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="col-lg-5 col-xl-4">
                                <CourseInfo data={courseItem} />
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Related course */}
                {/* <RelatedCourses courseID={courseItem.id} /> */}
            </section>
        </>
    );
};
export default CourseDetailsThree;
