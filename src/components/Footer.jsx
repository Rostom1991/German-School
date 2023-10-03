/* eslint-disable react/jsx-no-target-blank */
import logo from "../assets/logo-no-bg.png";
import facebook from "../assets/facebook.svg";
import x from "../assets/x.svg";
import instagram from "../assets/instagram.svg";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className=" bg-gradient-to-r from-black to-zinc-700 text-white p-4 text-center">
      <div className="container flex items-center justify-center md:grid-cols-1 gap-8 md:gap-24 py-8 md:px-48 px-10 ">
        <div className="flex flex-col md:flex-row  grid-cols-1  items-center gap-4 justify-start ">
          <div className="relative  md:h-[8rem] h-[3rem] mb-10 md:mb-0">
            <img className="h-[8rem]  " src={logo} alt="" />
          </div>
          <div className="gap-2 flex flex-col">
            <p className="text-xs">
              &copy; 2023 German School. All rights reserved.
            </p>
            <p className="text-xs">123 Main Street, Monplaisir, Tunis 12345</p>
          </div>
        </div>
        <section className="grid grid-cols-2 md:gap-32 gap-16 md:mt-2 mt-8   ">
          <div className=" flex flex-col items-center justify-start  ">
            <ul className="flex flex-col underline underline-offset-4 decoration-slate-600  text-sm font-extralight items-start gap-3">
              <Link to="/" className="hover:text-rose-500 cursor-pointer">
                Home
              </Link>
              <Link to="/about" className="hover:text-rose-500 cursor-pointer">
                About
              </Link>
              <Link
                to="/contact"
                className="hover:text-rose-500 cursor-pointer">
                Contact
              </Link>
              <Link
                to="/courses"
                className="hover:text-rose-500 cursor-pointer">
                Courses
              </Link>
              <Link to="/team" className="hover:text-rose-500 cursor-pointer">
                Team
              </Link>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-start">
            <ul className="flex flex-col  text-sm font-extralight items-start gap-3">
              <Link
                to="/join"
                className="hover:text-rose-500 cursor-pointer underline underline-offset-4 decoration-slate-600">
                Join
              </Link>
              <Link
                to="/testimonials"
                className="hover:text-rose-500 cursor-pointer underline underline-offset-4 decoration-slate-600">
                Testimonials
              </Link>
              <li className=" text-rose-300  font-bold">+216-96-855-131</li>
              <li className="text-rose-300 font-bold">
                careers@viridis-it.com
              </li>
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
            </ul>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
