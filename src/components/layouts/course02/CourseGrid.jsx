import React, { Component } from 'react';
import CourseType from '../course02/CourseType';
import CourseData from '../../../data/course/CourseData2.json';

import { slugify } from '../../../utils/index';


class CourseGrid extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchTerm: "",
            // Sticky department bar should sit below the main (sticky) navbar.
            deptStickyTop: 110,
        };
    }

    componentDidMount() {
        this.updateDeptStickyTop();
        window.addEventListener('resize', this.updateDeptStickyTop);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDeptStickyTop);
    }

    updateDeptStickyTop = () => {
        const navbar = document.querySelector('.navbar-sticky');
        if (!navbar) return;
        const height = navbar.getBoundingClientRect().height;
        this.setState({ deptStickyTop: Math.max(0, Math.round(height)) });
    };

    handleSearch = (e) => {
        this.setState({
            searchTerm: e.target.value
        });
    };

    render() {

        const { searchTerm } = this.state;

        const filteredCourses = CourseData.filter(course =>
            course.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        // Group courses into explicit department blocks requested for Certification Program.
        const departmentCourseMap = {
            'Computer Science': [
                'Full-Stack Web Development',
                'Cyber security & Ethical Hacking',
                'Artificial Intelligence',
                'Data Science',
                'Java',
                'Machine Learning',
                'SQL',
            ],
            Management: [
                'Stock Market & Crypto',
                'Finance & Wealth Management',
                'Human Resources',
                'Marketing',
                'Digital Marketing & SEO',
            ],
            'Electronics & Communication': [
                'Electromagnetic Suspension',
                'Robotics & Automation',
                'Embedded Systems',
                'Internet of things',
            ],
            Civil: [
                'AutoCAD',
                'Construction Planning & Management',
                'Structural Analysis',
            ],
            Biotechnology: [
                'Bioinformatics',
                'Genetic Engineering',
                'Nanotechnology',
            ],
            Aeronautical: [
                'Aircraft Design',
            ],
            Medical: [
                'Anatomy and Physiology',
            ],
        };

        const deptPriority = [
            'Computer Science',
            'Management',
            'Electronics & Communication',
            'Civil',
            'Biotechnology',
            'Aeronautical',
            'Medical',
        ];
        const deptOrder = [];
        const groupedCourses = {};

        const titleToDepartment = {};
        Object.entries(departmentCourseMap).forEach(([dept, titles]) => {
            titles.forEach((title) => {
                titleToDepartment[title.toLowerCase()] = dept;
            });
        });

        const getDepartmentForCourse = (course) => {
            const title = (course?.title || '').toLowerCase();
            return titleToDepartment[title] || 'Other';
        };

        filteredCourses.forEach((course) => {
            const dept = getDepartmentForCourse(course);

            if (!groupedCourses[dept]) groupedCourses[dept] = [];
            groupedCourses[dept].push(course);

            if (!deptOrder.includes(dept)) deptOrder.push(dept);
        });

        // Keep the department order stable and predictable.
        deptOrder.sort((a, b) => {
            const ai = deptPriority.indexOf(a);
            const bi = deptPriority.indexOf(b);
            return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
        });

        deptOrder.forEach((dept) => {
            groupedCourses[dept].sort((a, b) => a.title.localeCompare(b.title));
        });

        return (
            <section className="section-padding page" >
                <div className="heading text-center mb-40">
                    <span className="subheading">Our Special</span>
                    <h2 className="font-lg">Certification Program</h2>
                    <p>Kickstart your professional journey with Internzvalley</p>
                </div>
                <div className="course-top-wrap">
                    <div className="container">
                        <div className="row align-items-center">

                            <div className="col-lg-8">
                                <p>
                                    Showing {filteredCourses.length} of {CourseData.length} results
                                </p>
                            </div>

                            <div className="col-lg-4">
                                <div className="topbar-search">
                                    <input
                                        type="text"
                                        placeholder="Search our courses"
                                        className="form-control"
                                        value={this.state.searchTerm}
                                        onChange={this.handleSearch}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div
                    className="dept-sticky-bar"
                    style={{ top: `${this.state.deptStickyTop}px` }}
                >
                    <div className="container">
                        <div className="dept-sticky-inner">
                            {deptOrder.length ? (
                                deptOrder.map((dept) => (
                                    <a
                                        key={dept}
                                        href={`#dept-${slugify(dept)}`}
                                        className="dept-sticky-link"
                                    >
                                        {dept}
                                    </a>
                                ))
                            ) : (
                                <span className="dept-sticky-empty">No departments found</span>
                            )}
                        </div>
                    </div>
                </div>

                <div className="container">
                    {deptOrder.map((dept) => (
                        <div
                            key={dept}
                            id={`dept-${slugify(dept)}`}
                            className="dept-section"
                            style={{ scrollMarginTop: `${this.state.deptStickyTop + 20}px` }}
                        >
                            <div className="dept-section-heading">
                                <h3 className="dept-section-title">{dept}</h3>
                            </div>

                            <div className="row">
                                {groupedCourses[dept].map((item) => (
                                    <div
                                        className="col-xl-4 col-lg-4 col-md-6"
                                        key={item.id}
                                    >
                                        <CourseType data={item} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }
}

export default CourseGrid;