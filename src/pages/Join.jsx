import axios from "axios";
import { motion } from "framer-motion";
import { useState } from "react";
import joinIMG from "../assets/joinStudent.jpg";
import { useSelector } from "react-redux";

const JoinForm = () => {
  const courses = useSelector((state) => state.school.courses);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [disable, setDisable] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    level: "German A1",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    axios
      .post("https://german-school-api.vercel.app/join", formData)
      .then((response) => {
        setFormData({ name: "", email: "", phone: "", level: "German A1" });
        setError(false);
        setDisable(true);
        setSuccess(response.data.message);
        setTimeout(() => {
          setDisable(false);
          setSuccess(false);
        }, 5000);
      })
      .catch((error) => {
        setSuccess(false);
        setDisable(true);
        setError(error.response.data.error);
        setTimeout(() => {
          setDisable(false);
        }, 5000);
      });
    // console.log(formData);
  };

  return (
    <div className=" bg-zinc-200/40 md:h-screen flex justify-center items-center pt-20 md:pt-28 ">
      <div className="grid md:grid-cols-1 gap-12 md:gap-0 md:py-0 py-8 w-full md:place-content-start shadow-xl bg-white rounded h-[90%] md:w-1/3   ">
        <div className="col-span-1 flex items-start justify-center py-12">
          <section className="grid place-content-center md:top-36 top-28 absolute">
            <>
              {error && (
                <span className="bg-red-600 text-white shadow-xl text-sm px-16 animate-bounce py-1">
                  {" "}
                  {error}{" "}
                </span>
              )}
              {success && (
                <span className=" bg-teal-500   rounded-sm shadow-xl animate-pulse px-16 text-white text-sm py-1">
                  {" "}
                  {success}{" "}
                </span>
              )}
            </>
          </section>
          <form onSubmit={handleSubmit} className="w-3/4 flex flex-col gap-4">
            <div>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, ease: "linear" }}
                className="text-center text-4xl text-rose-700 font-light ">
                Welcome!
              </motion.h1>
              <h1 className="text-center  text-md   rounded   p-2 text-gray-700  font-light ">
                Join Us
              </h1>
            </div>
            <div className="grid md:grid-cols-1  gap-4">
              <section className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-rose-700 text-sm">Name</span>
                  <input
                    required
                    name="name"
                    className=" focus:border-2 focus:border-zinc-300 caret-slate-500 rounded-full outline-none border-gray-300 bg-gray-50/50 border-[1.5px] p-[0.6rem] pl-4 text-xs "
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-rose-700 text-sm">Email</span>
                  <input
                    required
                    name="email"
                    className="focus:border-2 focus:border-zinc-300 caret-slate-500 rounded-full outline-none border-gray-300 bg-gray-50/50 border-[1.5px] p-[0.6rem] pl-4 text-xs "
                    type="text"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-rose-700 text-sm">Phone</span>
                  <input
                    required
                    name="phone"
                    className="focus:border-2 focus:border-zinc-300 caret-slate-500 rounded-full outline-none border-gray-300 bg-gray-50/50 border-[1.5px] p-[0.6rem] pl-4 text-xs "
                    type="text"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-rose-700 text-sm">
                    Level You Want To Learn
                  </span>
                  <select
                    onChange={handleChange}
                    value={formData.level}
                    name="level"
                    className=" focus:border-2 text-gray-700 focus:border-zinc-300  rounded-full outline-none border-gray-300 bg-gray-50/50 border-[1.5px] p-[0.6rem] pl-4 text-xs "
                    type="text"
                    placeholder="Subject">
                    {courses.map((course) => (
                      <option className=" flex flex-col gap-4" key={course.id}>
                        {" "}
                        {course.title}{" "}
                      </option>
                    ))}
                  </select>
                </div>
              </section>
              <div className="text-center mt-6">
                <motion.button
                  disabled={disable}
                  initial={{ x: "-100vw" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5, ease: "linear" }}
                  className="bg-rose-600 cursor-pointer  rounded-full text-sm hover:shadow-2xl transition-all duration-500 ease-linear uppercase font-light hover:bg-rose-700 text-white md:w-1/2 py-2 px-10">
                  Enroll Now
                </motion.button>
              </div>
            </div>
            {/* <div className="flex flex-col gap-1">
              <span className="text-rose-700 text-sm">Message</span>
              <div className="rounded-xl">
                <textarea
                  className=" focus:border-2 focus:border-zinc-300 caret-slate-500 w-full h-full bg-gray-50/50 text-xs p-3 outline-none border-2 rounded-xl"
                  name=""
                  rows="15"
                  id=""></textarea>
              </div>
              <div className="mt-2">
                <button className=" hover:shadow-rose-500/30 shadow-lg rounded-full px-6 font-semibold text-gray-600 bg-gray-100 py-2 text-[0.7rem] hover:text-rose-700 hover:bg-gray-50 transition-colors duration-500 ease-linear hover:border-rose-500  border-2 border-gray-300 uppercase">
                  Send Message
                </button>
              </div>
            </div> */}
          </form>
        </div>
      </div>
      {/* <div>
        <img
          src="https://d2jyir0m79gs60.cloudfront.net/news/images/successful-college-student-lg.png"
          alt=""
        />
      </div> */}
      <div className="md:grid md:grid-cols-1 gap-12 md:gap-0 md:py-0 py-8 w-full hidden   bg-white rounded h-[90%] md:w-1/3  ">
        <img className="h-full object-cover rounded" src={joinIMG} alt="" />
      </div>
    </div>
  );
};

export default JoinForm;
