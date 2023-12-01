import axios from "axios";
import { motion } from "framer-motion";
import { useState } from "react";
import { useSelector } from "react-redux";

const EnrollCourse = () => {
  const course = useSelector((state) => state.school.selectCourse);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    level: course.title,
  });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [disable, setDisable] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      level: course.title,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://viridis-it-api.vercel.app/join", formData)
      .then(() => {
        setFormData({ name: "", email: "", phone: "", level: course.title });
        setError(false);
        setDisable(true);
        setSuccess(`Welcome To ${course.title} Level!`);
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
    // Add your form submission logic here
    console.log(formData);
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
                <span className="bg-cyan-600 rounded-sm shadow-xl animate-pulse px-16 text-white text-sm py-1">
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
                    value={formData.name}
                    className=" focus:border-2 focus:border-zinc-300 caret-slate-500 rounded-full outline-none border-gray-300 bg-gray-50/50 border-[1.5px] p-[0.6rem] pl-4 text-xs "
                    type="text"
                    placeholder="Your Name"
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-rose-700 text-sm">Email</span>
                  <input
                    required
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    className="focus:border-2 focus:border-zinc-300 caret-slate-500 rounded-full outline-none border-gray-300 bg-gray-50/50 border-[1.5px] p-[0.6rem] pl-4 text-xs "
                    type="text"
                    placeholder="Your Email"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-rose-700 text-sm">Phone</span>
                  <input
                    required
                    name="phone"
                    onChange={handleChange}
                    value={formData.phone}
                    className="focus:border-2 focus:border-zinc-300 caret-slate-500 rounded-full outline-none border-gray-300 bg-gray-50/50 border-[1.5px] p-[0.6rem] pl-4 text-xs "
                    type="text"
                    placeholder="Your Phone"
                  />
                </div>
                <div className="flex items-center justify-center pt-6 gap-2">
                  <span className="text-rose-700 text-sm">You Selected:</span>
                  <span className=" text-cyan-700 font-medium uppercase">
                    {course.title}
                  </span>
                </div>
              </section>
              <div className="text-center mt-6">
                <motion.button
                  disabled={disable}
                  initial={{ x: "-100vw" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5, ease: "linear" }}
                  className="bg-rose-600 rounded-full text-sm hover:shadow-2xl transition-colors duration-500 ease-linear uppercase font-light hover:bg-rose-700 text-white w-1/2 py-2 px-10">
                  Enroll Now
                </motion.button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="md:grid md:grid-cols-1 gap-12 md:gap-0 md:py-0 py-8 w-full hidden   bg-white rounded h-[90%] md:w-1/3  ">
        <img className="h-full object-cover rounded" src={course.img2} alt="" />
      </div>
    </div>
  );
};

export default EnrollCourse;
