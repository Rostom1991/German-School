/* eslint-disable react/jsx-no-target-blank */
import phone from "../assets/phone-bold.svg";
import email from "../assets/email.svg";
import facebook from "../assets/facebook.svg";
import x from "../assets/x.svg";
import instagram from "../assets/instagram.svg";
import burger from "../assets/burger.svg";
import logo from "../assets/logo-no-bg.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCourse } from "../redux/courseSlice";
function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [coursesMenu, setCoursesMenu] = useState(false);
  const courses = useSelector((state) => state.school.courses);
  const goToCourse = (course) => {
    dispatch(getCourse(course));
    navigate(`course/${course.title}`);
  };
  return (
    <header className="top-0 w-full  fixed z-10 ">
      <div className="flex items-center  md:px-8 justify-around lg:justify-evenly lg:h-[5.5rem] h-[5rem]  bg-black bg-opacity-[0.95] text-gray-50">
        <div className="w-[7rem]  h-[7rem] flex items-center lg:absolute pt-3 lg:left-36  ">
          <Link to="/">
            <img className="" src={logo} alt="logo" />
          </Link>
        </div>
        {/* NAVBAR */}
        <div className="hidden lg:flex lg:flex-row lg:ml-48 lg:items-center lg:gap-28">
          <nav>
            <ul className=" text-sm font-light flex md:gap-8 lg:gap-10 text-gray-50">
              <Link className="hover:text-rose-500 cursor-pointer" to="/">
                Home
              </Link>
              <Link to="about" className="hover:text-rose-500 cursor-pointer">
                About
              </Link>
              <li
                onMouseEnter={() => setCoursesMenu(true)}
                onMouseLeave={() => setCoursesMenu(false)}
                className={`
               relative hover:text-rose-500 cursor-pointer`}>
                <Link to="courses">Courses</Link>
                <div
                  className={` ${
                    coursesMenu
                      ? "block absolute bg-black/90 pt-4 right-[-50%] z-20"
                      : "hidden"
                  }`}>
                  <ul className=" text-sm w-max border-gray-900 border-2 flex flex-col  text-gray-50">
                    {courses.map((course) => (
                      <li
                        onClick={() => goToCourse(course)}
                        className=" hover:bg-rose-700   px-6 py-3 text-xs italic cursor-pointer"
                        key={course.id}>
                        {" "}
                        {course.title}{" "}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <Link
                className="hover:text-rose-500 cursor-pointer"
                to="/contact">
                Contact
              </Link>
              <Link to="team" className="hover:text-rose-500 cursor-pointer">
                Team
              </Link>
            </ul>
          </nav>
          {/* <button className="rounded-full px-12 py-2 bg-yellow-400 text-sm font-bold text-white">
            Join
          </button> */}
          <div className="flex gap-12">
            <div className="flex  gap-4  ">
              <div className="flex items-center gap-2">
                <img className="w-[2rem]" src={phone} alt="phone" />
                <span className="text-xs font-light">+216-96-855-131</span>
              </div>
              <div className="flex items-center gap-2">
                <img className="w-[2rem]" src={email} alt="email" />
                <span className="text-xs font-light">
                  careers@viridis-it.com
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com" target="_blank">
                <img className="w-[1.1rem]" src={facebook} alt="email" />
              </a>
              <a href="https://www.x.com" target="_blank">
                <img
                  className="hover:text-rose-500 w-[0.8rem]"
                  src={x}
                  alt="email"
                />
              </a>
              <a href="https://www.instagram.com" target="_blank">
                <img className="w-[0.9rem]" src={instagram} alt="email" />
              </a>
            </div>
          </div>
        </div>
        {/* BurgerMenu Navbar */}
        <div className="w-[1.5rem] lg:hidden relative  ">
          <img
            onClick={() => setBurgerMenu(!burgerMenu)}
            className="opacity-95 ring-1 ring-gray-800 hover:ring-rose-800 p-1 rounded-full cursor-pointer"
            src={burger}
            alt=""
          />
          <div
            className={`${
              burgerMenu
                ? "absolute bg-black/90  rounded-xl  border-gray-900 py-2 border-2 right-0 z-20"
                : "hidden"
            }`}>
            <nav>
              <ul className=" text-sm   flex flex-col text-gray-50">
                <Link
                  to="/"
                  className="hover:text-rose-500 px-6 py-3 cursor-pointer">
                  Home
                </Link>
                <Link
                  to="/about"
                  className="hover:text-rose-500 px-6 py-3 cursor-pointer">
                  About
                </Link>
                <li
                  onMouseEnter={() => setCoursesMenu(true)}
                  onMouseLeave={() => setCoursesMenu(false)}
                  className={`
               relative cursor-pointer hover:text-rose-500 px-6 py-3`}>
                  <Link to="courses">Courses</Link>
                  <div
                    className={` ${
                      coursesMenu
                        ? "block absolute bg-black/90 top-1 rounded-sm border-gray-950 border-2  right-[9.6rem] z-20"
                        : "hidden"
                    }`}>
                    <ul className=" text-sm w-max  flex flex-col  text-gray-50">
                      {courses.map((course) => (
                        <li
                          onClick={() => goToCourse(course)}
                          className=" hover:bg-rose-700   px-6 py-3 text-xs italic cursor-pointer"
                          key={course.id}>
                          {" "}
                          {course.title}{" "}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
                <Link
                  to="contact"
                  className="hover:text-rose-500 px-6 py-3 cursor-pointer">
                  Contact
                </Link>
                <Link
                  to="team"
                  className="hover:text-rose-500 px-6 py-3 cursor-pointer">
                  Team
                </Link>
                <Link
                  to="join"
                  className="hover:text-rose-500  rounded-full px-6 py-3 cursor-pointer">
                  Join
                </Link>
              </ul>
            </nav>
            <div className="flex flex-col items-start gap-4 py-3 px-6">
              <div className="flex flex-col  gap-4  ">
                <div className="flex items-center gap-2">
                  {/* <img className="w-[2rem]" src={phone} alt="phone" /> */}
                  <span className="text-xs font-medium text-rose-300">
                    +216-96-855-131
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {/* <img className="w-[2rem]" src={email} alt="email" /> */}
                  <span className="text-xs text-rose-300 font-medium">
                    careers@viridis-it.com
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <a href="https://www.facebook.com" target="_blank">
                  <img className="w-[1.1rem]" src={facebook} alt="email" />
                </a>
                <a href="https://www.x.com" target="_blank">
                  <img
                    className="hover:text-rose-500 w-[0.8rem]"
                    src={x}
                    alt="email"
                  />
                </a>
                <a href="https://www.instagram.com" target="_blank">
                  <img className="w-[0.9rem]" src={instagram} alt="email" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
