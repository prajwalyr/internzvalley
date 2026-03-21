import React, { Component } from 'react';
import CourseType from '../course03/CourseType';
import CourseData from '../../../data/course/CourseData.json';

class CourseGrid extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchTerm: ""
        };
    }

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

        return (
            <section className="section-padding page">

                <div className="heading text-center mb-40">
                    <span className="subheading">Our Special</span>
                    <h2 className="font-lg">Pro Degree Program</h2>
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

                <div className="container">
                    <div className="row">

                        {filteredCourses.map((item) => (
                            <div className="col-xl-4 col-lg-4 col-md-6" key={item.id}>
                                <CourseType data={item} />
                            </div>
                        ))}

                    </div>
                </div>

            </section>
        );
    }
}

export default CourseGrid;