import { useDispatch, useSelector } from "react-redux";
import { getCourse } from "../redux/courseSlice";
import { useNavigate } from "react-router-dom";
import wink from "../assets/wink.svg";
function Levels() {
  const courses = useSelector((state) => state.school.courses);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCourse = (course) => {
    dispatch(getCourse(course));
    navigate(`/course/${course.title}`);
  };
  return (
    <div className="container  bg-zinc-200/40 md:flex md:flex-col py-16 items-center justify-center gap-4">
      <div className="flex gap-3 items-center justify-center">
        <h1 className="md:text-4xl text-2xl font-semibold text-center text-rose-600">
          Choose Your Level
        </h1>
        <img className="w-[2rem] rotate-smile animate-spin" src={wink} alt="" />
      </div>
      <div className="flex items-center justify-center md:px-0  p-8 gap-4">
        {courses.map((course) => (
          <span
            onClick={() => handleCourse(course)}
            key={course.id}
            className="text-gray-900 text-center text-sm md:text-[1rem] hover:underline underline-offset-4 decoration-[1.5px] hover:text-rose-600 cursor-pointer">
            {course.title}
          </span>
        ))}

        {/* <span className="text-gray-900 text-center hover:text-rose-600 cursor-pointer">
          German A2
        </span>
        <span className="text-gray-900 text-center hover:text-rose-600 cursor-pointer">
          German B1
        </span>
        <span className="text-gray-900 text-center hover:text-rose-600 cursor-pointer">
          German A2
        </span> */}
      </div>

      <div className="grid bg-white/90 p-8 border-2 border-gray-200 lg:grid-cols-2 gap-y-16 lg:gap-y-24 md:mx-48 place-items-center ">
        {courses.map((course) => (
          <div
            className="flex flex-col md:w-4/5 border-[2px] card-shadow rounded border-gray-200  items-center justify-center"
            key={course.id}>
            <div className="w-full relative ">
              <button
                onClick={() => handleCourse(course)}
                className=" hover:bg-rose-600 uppercase left-3 top-3 transition-colors duration-500 ease-linear absolute font-semibold hover:font-normal bg-rose-100/75 hover:text-white border-rose-800 border-[1px] text-rose-600 rounded-full py-2 px-8 text-xs">
                Discover
              </button>
              <img
                className="w-full h-full   "
                src={course.img}
                alt="course image"
              />
            </div>
            <div className=" flex  flex-col gap-2 p-4 bg-zinc-200/40 w-full">
              <div className="flex items-center justify-around">
                <span className="font-normal text-gray-800">
                  {course.title}{" "}
                </span>
                <span className="font-normal text-white bg-teal-600 text-sm rounded-full px-3 py-1">
                  {course.price}{" "}
                </span>
                <span className="font-light text-sm text-gray-700">
                  {course.hours}{" "}
                </span>
              </div>
              <hr className="border-gray-300 " />
              <div className="flex items-center justify-around">
                <span className="text-sm text-rose-700 font-bold">
                  <span className="text-gray-700 font-light mr-4">
                    Instructor:{" "}
                  </span>
                  {course.instructor}
                </span>
                <div className="pt-2">
                  <img
                    className="w-[5rem] border-2 border-gray-300 rounded-full h-[5rem] object-cover"
                    src={course.photo}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Levels;
