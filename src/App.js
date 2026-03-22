import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ScrollToTop from './common/ScrollToTop';
import HomeTwo from './components/pages/Home02';
import AboutMain from './components/pages/About';
import CourseOne from './components/pages/CourseOne';
import CourseTwo from './components/pages/CourseTwo';
import CourseThree from './components/pages/CourseThree';
import CourseFour from './components/pages/CourseFour';
import CourseList from './components/pages/CourseList';
import CourseDetails from './components/pages/CourseDetails';
import CourseDetailsTwo from './components/pages/CourseDetailsTwo';
import CourseDetailsThree from './components/pages/CourseDetailsThree';
import CourseDetailsFour from './components/pages/CourseDetailsFour';
import ContactPage from './components/pages/ContactPage';


function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>

        <Route exact path={`${process.env.PUBLIC_URL + '/'}`} element={<HomeTwo />} />
        {/* <Route exact path={`${process.env.PUBLIC_URL + '/home-2'}`} element={<HomeTwo/>}/> */}
        <Route exact path={`${process.env.PUBLIC_URL + '/about'}`} element={<AboutMain />} />
        <Route exact path={`${process.env.PUBLIC_URL + '/Certification-Program'}`} element={<CourseOne />} />
        <Route exact path={`${process.env.PUBLIC_URL + '/Pro-Degree-Program'}`} element={<CourseTwo />} />
        <Route exact path={`${process.env.PUBLIC_URL + '/Skill-Development-Program'}`} element={<CourseThree />} />
        <Route exact path={`${process.env.PUBLIC_URL + '/course-4'}`} element={<CourseFour />} />
        <Route exact path={`${process.env.PUBLIC_URL + '/course-list'}`} element={<CourseList />} />
        <Route exact path={`${process.env.PUBLIC_URL + '/course-details/:id'}`} element={<CourseDetails />} />
        <Route exact path={`${process.env.PUBLIC_URL + '/course-details-two/:id'}`} element={<CourseDetailsTwo />} />
        <Route exact path={`${process.env.PUBLIC_URL + '/course-details-three/:id'}`} element={<CourseDetailsThree />} />
        <Route exact path={`${process.env.PUBLIC_URL + '/course-details-four/:id'}`} element={<CourseDetailsFour />} />
        <Route exact path={`${process.env.PUBLIC_URL + '/contact'}`} element={<ContactPage />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;

