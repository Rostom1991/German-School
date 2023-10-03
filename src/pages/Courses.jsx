import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCourse } from "../redux/courseSlice";

function Courses() {
  const courses = useSelector((state) => state.school.courses);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCourse = (course) => {
    dispatch(getCourse(course));
    navigate(`/course/${course.title}`);
  };
  return (
    <div className="bg-zinc-200/30">
      <div className="bg-orange-50 h-[60vh] mt-20">
        <div className="h-full relative flex flex-col items-center justify-center  gap-2  bg-lazy bg-blend-multiply bg-blue-800/40 bg-cover bg-no-repeat bg-[url('src/assets/cover.avif')] ">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: "linear" }}
            className="text-white uppercase font-normal md:pt-8 md:py-6 md:text-sm  absolute top-0 left-0 pl-32 bg-black/40 p-4  w-full  text-sm ">
            Courses
          </motion.h1>
          <motion.h1
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, ease: "linear" }}
            className=" text-white  md:text-4xl px-8 text-2xl text-center font-thin leading-[4rem] ">
            We Have The Right Course For You From
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: "linear" }}
            className="text-white bg-rose-700 px-8 py-2 md:text-6xl text-5xl  font-light">
            A1 <span className="text-3xl">to</span> B2
          </motion.h1>
        </div>
      </div>

      <section className="container py-12 w-10/12 flex flex-col gap-16 mx-auto">
        <div className=" flex flex-col items-center justify-center p-8 gap-8 ">
          <h1 className="text-rose-600 font-normal text-xl text-center md:text-3xl">
            You Want To Study or Work in Germany and Need a Certain Level of
            German?
          </h1>
          <p className="max-w-3xl text-gray-600 text-sm md:text-md text-center">
            Then you're in the right place with Viridis. Here, we offer specific
            and recognized German courses such as the preparation course for
            Test-DaF or the TELC, a test for German as a foreign language.
          </p>
        </div>
        <div className=" grid md:grid-cols-2 gap-4 lg:grid-cols-4">
          {courses.map((course) => (
            <div className="overflow-hidden rounded" key={course.id}>
              <img
                className="hover:scale-105 cursor-pointer transition-all duration-500 ease-linear"
                src={course.img2}
                alt="course image"
              />
              <div className="border-2 flex flex-col items-center justify-center gap-6 p-4 ">
                <div className="flex gap-6 pt-2 items-center justify-center text-xs ">
                  <span className="font-medium text-sm text-rose-700 ">
                    {course.title}
                  </span>
                  <span className="bg-rose-200 px-3  py-2 rounded-full">
                    {course.price}
                  </span>
                  <span>{course.hours}</span>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => handleCourse(course)}
                    className="bg-rose-700 uppercase hover:shadow-2xl hover:bg-rose-600 transition-colors duration-500 ease-linear px-8 py-2 text-xs rounded-full text-white">
                    Discover
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Courses;
