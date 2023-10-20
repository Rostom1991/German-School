import locationIcon from "../assets/location-icon.svg";
import phoneIcon from "../assets/phone-icon.svg";
import emailIcon from "../assets/email-icon.svg";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
function Contact() {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [disable, setDisable] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/contact", formData)
      .then((response) => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setDisable(true);
        setError(false);
        setSuccess(response.data.message);
        setTimeout(() => {
          setDisable(false);
          setSuccess(false);
        }, 5000);
      })
      .catch((error) => {
        setDisable(true);
        setSuccess(false);
        setError(error.response.data.error);
        setTimeout(() => {
          setDisable(false);
        }, 5000);
      });
  };
  return (
    <div className=" bg-zinc-200/40 relative  md:h-screen pt-20 md:pt-16 ">
      <div className="grid md:grid-cols-3  gap-12 md:gap-0 md:py-0 py-8 w-full place-content-center bg-white rounded h-full md:w-10/12 mx-auto  ">
        <div className="col-span-2  flex items-start justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-3/4 flex relative flex-col gap-2">
            {error && (
              <div className=" md:bottom-0 shadow-2xl  bottom-10 animate-bounce w-full md:w-auto   md:right-0 absolute">
                <h1 className=" text-center bg-red-600 rounded-sm text-sm py-1 md:px-8 text-white">
                  {error}
                </h1>
              </div>
            )}
            {success && (
              <div className=" md:bottom-0 shadow-2xl  bottom-10 w-full md:w-auto   md:right-0 absolute">
                <h1 className=" text-center bg-cyan-600 rounded-sm text-sm py-2 md:px-8 text-white">
                  {success}
                </h1>
              </div>
            )}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.5, ease: "linear" }}
              className="text-cyan-800  text-center uppercase font-light md:text-3xl     p-6  w-full  text-2xl ">
              Connect
              <span className="text-sm font-normal lowercase">With Us</span>
            </motion.h1>
            <div className="grid md:grid-cols-2 gap-x-8 gap-4">
              <motion.section
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "linear" }}
                className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-rose-700 text-sm">Name</span>
                  <input
                    required
                    onChange={handleChange}
                    name="name"
                    value={formData.name}
                    className=" focus:border-2 focus:border-zinc-300 caret-slate-500 rounded-full outline-none border-gray-300 bg-gray-50/50 border-[1.5px] p-[0.6rem] pl-4 text-xs "
                    type="text"
                    placeholder="Your Name"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-rose-700 text-sm">Phone</span>
                  <input
                    required
                    onChange={handleChange}
                    name="phone"
                    value={formData.phone}
                    className="focus:border-2 focus:border-zinc-300 caret-slate-500 rounded-full outline-none border-gray-300 bg-gray-50/50 border-[1.5px] p-[0.6rem] pl-4 text-xs "
                    type="text"
                    placeholder="Your Phone"
                  />
                </div>
              </motion.section>
              <motion.section
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, ease: "linear" }}
                className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-rose-700 text-sm">Email</span>
                  <input
                    required
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                    className="focus:border-2 focus:border-zinc-300 caret-slate-500 rounded-full outline-none border-gray-300 bg-gray-50/50 border-[1.5px] p-[0.6rem] pl-4 text-xs "
                    type="text"
                    placeholder="Your Email"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-rose-700 text-sm">Subject</span>
                  <input
                    required
                    onChange={handleChange}
                    name="subject"
                    value={formData.subject}
                    className="focus:border-2 focus:border-zinc-300 caret-slate-500 rounded-full outline-none border-gray-300 bg-gray-50/50 border-[1.5px] p-[0.6rem] pl-4 text-xs "
                    type="text"
                    placeholder="Subject"
                  />
                </div>
              </motion.section>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <span className="text-rose-700 text-sm">Message</span>
              <div className="rounded-xl">
                <textarea
                  required
                  onChange={handleChange}
                  value={formData.message}
                  className=" focus:border-2 focus:border-zinc-300 caret-slate-500 w-full h-full bg-gray-50/50 text-xs p-3 outline-none border-2 rounded-xl"
                  name="message"
                  rows="15"
                  id=""></textarea>
              </div>
              <div className="mt-2">
                <motion.button
                  disabled={disable}
                  type="submit"
                  initial={{ x: "-100vw" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4, ease: "linear" }}
                  className=" hover:shadow-rose-500/30 shadow-lg rounded-full px-6 font-semibold text-gray-600 bg-gray-100 py-2 text-[0.7rem] hover:text-rose-700 hover:bg-gray-50 transition-colors duration-500 ease-linear hover:border-rose-500  border-2 border-gray-300 uppercase">
                  Send Message
                </motion.button>
              </div>
            </div>
          </form>
        </div>
        <div className=" col-span-1 pt-2  md:pt-[5.2rem]  ">
          <div className="flex flex-col md:items-start md:pl-0 items-center pl-8   gap-2">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1, ease: "linear" }}
              className="font-normal mb-6 md:text-2xl text-xl text-rose-600">
              Contact Information
            </motion.h1>

            <div className="flex items-center gap-3">
              <img className="w-[1.4rem]" src={locationIcon} alt="location" />
              <span className="font-light text-sm">
                123 Main Street, Monplaisir, Tunis
              </span>
            </div>
            <div className="flex items-center gap-3">
              <img className="w-[1.6rem]" src={phoneIcon} alt="phone" />
              <span className="font-light text-sm">+216-96-855-131</span>
            </div>
            <div className="flex items-center gap-3">
              <img className="w-[1.4rem]" src={emailIcon} alt="email" />
              <span className="font-light text-sm">careers@viridis-it.com</span>
            </div>
          </div>
          <section className="mt-8 ml-12 md:ml-0  md:w-full">
            <iframe
              className="rounded"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51093.97540425134!2d10.152793258596377!3d36.83353089135565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd359767d3df4f%3A0x43043542f14936f3!2sTunis!5e0!3m2!1sen!2stn!4v1695486056843!5m2!1sen!2stn"
              width="300"
              height="280"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Contact;
