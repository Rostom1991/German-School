import { useSelector } from "react-redux";
import money from "../assets/money.svg";
import watch from "../assets/watch.svg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function CourseDetails() {
  const navigate = useNavigate();
  const course = useSelector((state) => state.school.selectCourse);
  console.log(course);
  const enrollToCourse = () => {
    navigate("/enroll");
  };

  return (
    <div className=" md:h-screen md:grid place-content-center p-8 pt-24 pb-24 bg-zinc-200/40">
      <div className="border-2 rounded grid relative md:gap-0 gap-8 lg:grid-cols-2 place-items-center  p-4 bg-white/90 w-11/12 mx-auto md:pl-10 md:py-10 py-4 ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "linear" }}
          className="col-span-1 shadow-lg rounded-sm">
          <img className="rounded-sm" src={`../${course.img2}`} alt="" />
        </motion.div>
        <div className="flex flex-col max-w-2xl px-4 md:px-0  justify-start items-start">
          <div className="gap-2 flex flex-col">
            <h1 className="text-3xl text-rose-700">{course.title}</h1>
            <p className="max-w-md text-sm text-gray-500 leading-7">
              {course.intro}
            </p>
            <div className="flex gap-16">
              <div className="flex justify-center items-center gap-1">
                <img className="w-[1.7rem]" src={money} alt="price" />
                <span className="md:text-sm text-xs font-light text-gray-800">
                  {course.price}
                </span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <img className="w-[1.5rem]" src={watch} alt="price" />
                <span className="md:text-sm text-xs font-light text-gray-800">
                  {course.hours}
                </span>
              </div>
              <div className="flex justify-center items-center gap-4">
                <span className="md:text-sm text-xs font-light text-gray-800">
                  {course.instructor}
                </span>
                <img
                  className="w-[5rem] h-[5rem] object-cover rounded-full border-2"
                  src={course.photo}
                  alt=""
                />
              </div>
            </div>
            <div className="flex justify-center">
              <motion.button
                onClick={enrollToCourse}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "linear" }}
                className=" bg-rose-600 transition-all duration-500 uppercase text-sm  ease-linear hover:bg-rose-700 hover:shadow-2xl shadow-rose-900 p-2 rounded-full text-white w-1/2 ">
                Enroll
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
