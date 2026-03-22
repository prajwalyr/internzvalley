import React, { useState, useEffect, useMemo } from 'react';
import CourseData from '../../../data/course/CourseData.json';
import CourseTypeOne from '../home02/CourseTypeOne';

const CourseTypeFilter = ({ itemToShow }) => {

    // ✅ FIXED: memoized
    const FilterControls = useMemo(() => {
        const controls = [...new Set(CourseData.map(item => item.filterParam))];
        controls.unshift('All');
        return controls;
    }, []);

    const numberOfCourses = itemToShow || 8;
    const [dataVisibleCount] = useState(numberOfCourses);

    const [activeFilter, setActiveFilter] = useState('');
    const [visibleItems, setVisibleItems] = useState([]);

    useEffect(() => {
        setActiveFilter(FilterControls[0].toLowerCase());
        setVisibleItems(
            CourseData.filter((item) => item.id <= dataVisibleCount)
        );
    }, [FilterControls, dataVisibleCount]);

    const handleChange = (e) => {
        e.preventDefault();
        const selected = e.target.textContent.toLowerCase();

        setActiveFilter(selected);

        let tempData;
        if (selected === FilterControls[0].toLowerCase()) {
            tempData = CourseData.filter((data) => data.id <= dataVisibleCount);
        } else {
            tempData = CourseData.filter(
                (data) =>
                    data.filterParam.toLowerCase() === selected &&
                    data.id <= dataVisibleCount
            );
        }

        setVisibleItems(tempData);
    };


    return (
        <>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-12">
                        <div className="heading text-center mb-40">
                            <span className="subheading">Course Trending</span>
                            <h2 className="font-lg">Explore popular courses</h2>
                        </div>

                        <div className="course-filter button-group isotop-filter filters-button-group d-flex justify-content-center">
                            {FilterControls.map((filter) => (
                                <button
                                    onClick={handleChange}
                                    key={filter}
                                    className={
                                        filter.toLowerCase() === activeFilter
                                            ? "is-checked"
                                            : ""
                                    }
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="row">
                    {visibleItems.map((item) => (
                        <div className="col-lg-3 col-md-6 col-sm-6" key={item.id}>
                            <CourseTypeOne data={item} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CourseTypeFilter;