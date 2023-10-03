/* eslint-disable react/jsx-no-target-blank */
import { motion } from "framer-motion";
import linkedin from "../assets/linkedin.svg";

function Team() {
  return (
    <div className=" flex justify-center items-center py-16 mt-16 bg-white">
      <div className="flex flex-col gap-16 w-10/12 mx-auto ">
        <div className="flex flex-col items-center justify-center gap-8">
          <motion.h1
            initial={{ x: "+200vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, ease: "linear" }}
            className="text-rose-600 text-4xl font-normal ">
            {" "}
            Meet Our Team{" "}
          </motion.h1>
          <motion.p
            initial={{ x: "+200vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "linear" }}
            className="text-gray-600 text-sm px-6 md:px-16 text-center font-light leading-relaxed">
            "Meet our skilled team of German instructors, dedicated to guiding
            you on your language learning journey. With expertise in both
            language and culture, our teachers create engaging lessons tailored
            to your needs. Their passion for teaching ensures you'll gain a
            solid foundation in German, helping you reach your language goals
            efficiently and with confidence."
          </motion.p>
        </div>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "linear" }}
          className="grid md:grid-cols-3 gap-8 w-11/12 mx-auto">
          <div className="flex flex-col items-center justify-center gap-6 border-2 rounded bg-[#fbfbfb] py-8">
            <div className="flex flex-col items-center gap-2">
              <div className="h-[12rem] overflow-hidden w-[12rem] rounded-full border-[1px] border-gray-300">
                <img
                  className="hover:scale-95 transition-all cursor-pointer duration-500 ease-linear w-full h-full object-cover rounded-full "
                  src="https://st.depositphotos.com/1003989/60649/i/450/depositphotos_606497998-stock-photo-smiling-teacher-woman-holding-book.jpg"
                  alt="instructor"
                />
              </div>
              <span className="text-black text-xl font-light">Jane Doe</span>
              <span className="text-xs uppercase text-cyan-600 font-semibold">
                German Teacher
              </span>
            </div>
            <p className="text-xs max-w-xs px-8 md:px-2 text-center text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              sequi itaque qui sunt incidunt, quia cupiditate expedita voluptate
            </p>

            <a
              className="flex items-center justify-center"
              href="https://www.linkedin.com"
              target="_blank">
              <img
                className="w-1/6 cursor-pointer"
                src={linkedin}
                alt="linkedin"
              />
            </a>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 border-2 rounded bg-[#fbfbfb] py-8">
            <div className="flex flex-col items-center gap-2">
              <div className="h-[12rem] overflow-hidden w-[12rem] rounded-full border-[1px] border-gray-300">
                <img
                  className="w-full h-full hover:scale-95 transition-all cursor-pointer duration-500 ease-linear object-cover rounded-full "
                  src="https://img.freepik.com/free-photo/elegant-young-teacher-with-brunette-hair-stylish-light-shirt-black-striped-suit-glasses-holding-writings-pen-giving-lecture_197531-24666.jpg"
                  alt="instructor"
                />
              </div>
              <span className="text-black text-xl font-light">John Doe</span>
              <span className="text-xs uppercase text-cyan-600 font-semibold">
                German Teacher
              </span>
            </div>
            <p className="text-xs px-8 md:px-2 max-w-xs text-center text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              sequi itaque qui sunt incidunt, quia cupiditate expedita voluptate
            </p>
            <a
              className="flex items-center justify-center"
              href="https://www.linkedin.com"
              target="_blank">
              <img
                className="w-1/6 cursor-pointer"
                src={linkedin}
                alt="linkedin"
              />
            </a>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 border-2 rounded bg-[#fbfbfb] py-8">
            <div className="flex flex-col items-center gap-2">
              <div className="h-[12rem] overflow-hidden w-[12rem] rounded-full border-[1px] border-gray-300">
                <img
                  className="w-full h-full hover:scale-95 transition-all cursor-pointer duration-500 ease-linear object-cover rounded-full "
                  src="https://img.freepik.com/premium-photo/attractive-school-teacher-isolated_115919-22900.jpg?w=2000"
                  alt="instructor"
                />
              </div>
              <span className="text-black text-xl font-light">Jane Doe</span>
              <span className="text-xs uppercase text-cyan-600 font-semibold">
                Manager
              </span>
            </div>
            <p className="text-xs px-8 md:px-2 max-w-xs text-center text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              sequi itaque qui sunt incidunt, quia cupiditate expedita voluptate
            </p>
            <a
              className="flex items-center justify-center"
              href="https://www.linkedin.com"
              target="_blank">
              <img
                className="w-1/6 cursor-pointer "
                src={linkedin}
                alt="linkedin"
              />
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export default Team;
