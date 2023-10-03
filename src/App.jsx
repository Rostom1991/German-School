import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { useDispatch } from "react-redux";
import { getCourses } from "./redux/courseSlice";
import db from "./courses.json";
import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import CourseDetails from "./pages/CourseDetails";
import Layout from "./components/Layout";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import JoinForm from "./pages/Join";
import Testimonials from "./pages/Testimonials";
import EnrollCourse from "./pages/EnrollCourse";
import About from "./pages/About";
import Team from "./components/Team";
import Footer from "./components/Footer";
import GoUp from "./components/GoUp";

function App() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  useEffect(() => {
    dispatch(getCourses(db.courses));
  }, [dispatch]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Layout>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join" element={<JoinForm />} />
        <Route path="/enroll" element={<EnrollCourse />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/course/:name" element={<CourseDetails />} />
      </Routes>
      <GoUp />
      <Footer />
    </Layout>
  );
}

export default App;
