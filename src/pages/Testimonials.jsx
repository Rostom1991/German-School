import { motion } from "framer-motion";
import comment from "../assets/comment.svg";
function Testimonials() {
  return (
    <div className="bg-zinc-100">
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "linear" }}
        className="mt-20 md:mt-[5.5rem] pl-16 md:pl-32 p-6 bg-zinc-200">
        <h1 className="text-gray-600 font-semibold  uppercase">Testimonials</h1>
      </motion.header>
      <section className=" w-9/12 mx-auto  py-12">
        <div className="flex flex-col items-center  mx-auto gap-12">
          {/* <div className="md:h-[60vh] bg-white md:rounded-tr-full md:px-24 px-10 border-2 gap-10 py-6 ">
            <div className="grid place-items-center  md:place-items-start md:gap-0 gap-4">
              <motion.div
                initial={{ x: "+200vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, ease: "linear" }}
                className="w-[10rem] h-[10rem] rounded-full">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src="https://img.freepik.com/premium-photo/young-student-handsome-man-isolated-yellow-background-making-phone-gesture-call-me-back-sign_1368-493699.jpg"
                  alt=""
                />
              </motion.div>
              <div className="flex flex-col items-center justify-center gap-6 ">
                <img className="w-[2rem]" src={comment} alt="" />
                <motion.p
                  initial={{ x: "+200vw" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.8, ease: "linear" }}
                  className="text-xs md:text-sm text-gray-500 text-center font-light leading-relaxed">
                  "Studying A1 level at German School was an enriching
                  experience. The personalized attention from the instructors,
                  interactive lessons, and emphasis on practical language skills
                  made learning German enjoyable and effective. I was pleasantly
                  surprised by how quickly I gained confidence in basic
                  conversations. The warm and inclusive atmosphere at the school
                  made it feel like a second home. I can't wait to continue my
                  language journey with German School!"
                </motion.p>
                <motion.span
                  initial={{ y: "+200vh" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: "linear" }}
                  className="text-cyan-700 font-medium uppercase">
                  John Doe
                </motion.span>
              </div>
            </div>
          </div>
          <div className="md:h-[60vh] bg-white md:rounded-tl-full md:px-24 px-10 gap-10 py-6 border-2 ">
            <div className="grid place-items-center  md:place-items-end md:gap-0 gap-4">
              <div className="w-[10rem] h-[10rem] rounded-full">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src="https://img.freepik.com/premium-photo/young-student-woman-smiling-looking-friendly-showing-number-one_1194-362806.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-6 ">
                <img className="w-[2rem]" src={comment} alt="" />
                <p className="text-xs md:text-sm text-gray-500 text-center font-light leading-relaxed">
                  "Studying A1 level at German School was an enriching
                  experience. The personalized attention from the instructors,
                  interactive lessons, and emphasis on practical language skills
                  made learning German enjoyable and effective. I was pleasantly
                  surprised by how quickly I gained confidence in basic
                  conversations. The warm and inclusive atmosphere at the school
                  made it feel like a second home. I can't wait to continue my
                  language journey with German School!"
                </p>
                <span className="text-cyan-700 font-medium uppercase">
                  Jane Doe
                </span>
              </div>
            </div>
          </div>
          <div className="md:h-[60vh] bg-white md:px-24 px-10 md:rounded-tr-full gap-10 py-6 border-2 ">
            <div className="grid place-items-center  md:place-items-start md:gap-0 gap-4">
              <div className="w-[10rem] h-[10rem] rounded-full">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src="https://img.freepik.com/premium-photo/young-student-person-isolated-background_1368-174554.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-6 ">
                <img className="w-[2rem]" src={comment} alt="" />
                <p className="text-xs md:text-sm text-gray-500 text-center font-light leading-relaxed">
                  "Studying A1 level at German School was an enriching
                  experience. The personalized attention from the instructors,
                  interactive lessons, and emphasis on practical language skills
                  made learning German enjoyable and effective. I was pleasantly
                  surprised by how quickly I gained confidence in basic
                  conversations. The warm and inclusive atmosphere at the school
                  made it feel like a second home. I can't wait to continue my
                  language journey with German School!"
                </p>
                <span className="text-cyan-700 font-medium uppercase">
                  John Doe
                </span>
              </div>
            </div>
          </div> */}

          {/* OTHER DESIGN */}

          <div className="md:h-[40vh] bg-white w-fit grid md:grid-cols-4 md:rounded-tr-full  md:pr-8 px-10 border-2 md:gap-16 rounded py-6 ">
            <div className=" flex flex-col justify-center items-center col-span-1  w-full   gap-4">
              <motion.div
                initial={{ x: "+200vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, ease: "linear" }}
                className="w-[10rem] h-[10rem] rounded-full">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src="https://img.freepik.com/premium-photo/young-student-handsome-man-isolated-yellow-background-making-phone-gesture-call-me-back-sign_1368-493699.jpg"
                  alt=""
                />
              </motion.div>
              <motion.span
                initial={{ y: "+200vh" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: "linear" }}
                className="text-cyan-700 font-medium uppercase">
                John Doe
              </motion.span>
            </div>

            <div className="flex flex-col md:col-span-3  w-full items-start justify-start md:pt-[1.25rem] pt-4 gap-4 ">
              <img className="w-[2rem]" src={comment} alt="" />
              <motion.p
                initial={{ x: "+200vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8, ease: "linear" }}
                className="text-xs md:text-sm max-w-lg text-gray-600 text-center  font-light leading-relaxed">
                "Studying A1 level at German School was an enriching experience.
                The personalized attention from the instructors, interactive
                lessons, and emphasis on practical language skills made learning
                German enjoyable and effective. I was pleasantly surprised by
                how quickly I gained confidence in basic conversations. The warm
                and inclusive atmosphere at the school made it feel like a
                second home. I can't wait to continue my language journey with
                German School!"
              </motion.p>
            </div>
          </div>

          <div className="md:h-[40vh] bg-white w-fit flex md:grid md:grid-cols-4 md:rounded-tl-full flex-col-reverse  md:pl-8 px-10 border-2 md:gap-16 rounded py-6 ">
            <div className="flex flex-col md:col-span-3  w-full items-end justify-start  md:pt-10 pt-4 gap-4 ">
              <img className="w-[2rem]" src={comment} alt="" />
              <motion.p
                initial={{ x: "+200vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8, ease: "linear" }}
                className="text-xs md:text-sm max-w-lg text-gray-700 text-center  font-light leading-relaxed">
                "Advancing to the B2 level at German School has been truly
                fulfilling. The personalized guidance, interactive lessons, and
                practical focus have been instrumental in my progress. The
                inclusive community and warm atmosphere make learning a joy. I'm
                excited to continue my journey towards fluency with German
                School."
              </motion.p>
            </div>
            <div className=" flex flex-col justify-center items-center md:col-span-1  w-full   gap-4">
              <motion.div
                initial={{ x: "+200vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, ease: "linear" }}
                className="w-[10rem] h-[10rem] rounded-full">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src="https://img.freepik.com/premium-photo/young-student-woman-smiling-looking-friendly-showing-number-one_1194-362806.jpg"
                  alt=""
                />
              </motion.div>
              <motion.span
                initial={{ y: "+200vh" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: "linear" }}
                className="text-cyan-700 font-medium uppercase">
                Jane Doe
              </motion.span>
            </div>
          </div>
          {/* <div className="md:h-[40vh] bg-white w-fit grid md:grid-cols-4 md:rounded-tr-full  md:pr-8 px-10 border-2 md:gap-16 rounded py-6 ">
            <div className=" flex flex-col justify-center items-center col-span-1  w-full   gap-4">
              <motion.div
                initial={{ x: "+200vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, ease: "linear" }}
                className="w-[10rem] h-[10rem] rounded-full">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src="https://img.freepik.com/premium-photo/young-student-person-isolated-background_1368-174554.jpg"
                  alt=""
                />
              </motion.div>
              <motion.span
                initial={{ y: "+200vh" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: "linear" }}
                className="text-cyan-700 font-medium uppercase">
                John Doe
              </motion.span>
            </div>

            <div className="flex flex-col md:col-span-3  w-full items-start justify-start md:pt-[1.25rem] pt-4 gap-4 ">
              <img className="w-[2rem]" src={comment} alt="" />
              <motion.p
                initial={{ x: "+200vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8, ease: "linear" }}
                className="text-xs md:text-sm max-w-lg text-gray-500 text-center  font-light leading-relaxed">
                "Studying A1 level at German School was an enriching experience.
                The personalized attention from the instructors, interactive
                lessons, and emphasis on practical language skills made learning
                German enjoyable and effective. I was pleasantly surprised by
                how quickly I gained confidence in basic conversations. The warm
                and inclusive atmosphere at the school made it feel like a
                second home. I can't wait to continue my language journey with
                German School!"
              </motion.p>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
