import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="bg-orange-50 h-[90vh] mt-20">
      <div className="h-full bg-center grid place-content-center bg-lazy bg-blend-multiply bg-black/30 bg-cover bg-no-repeat bg-[url('./assets/hero-bg.jpg')] ">
        <div className="flex md:gap-8  md:items-end px-12 items-center justify-center mb-20">
          <motion.h1
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, ease: "linear" }}
            className=" text-white max-w-lg md:text-5xl text-4xl font-thin leading-[4rem] ">
            Discover the Beauty Of The{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.5, ease: "linear" }}
              className="md:text-6xl text-5xl font-light">
              German Language.
            </motion.span>
          </motion.h1>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1, ease: "linear" }}
            className="md:w-[10%] w-[25%]"
            src="https://www.freeiconspng.com/uploads/flag-of-germany-flag-vector-graphics-flagpole-stock-illustration-22.png"
            alt="germany"
          />
        </div>
        <motion.div
          initial={{ x: "+100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, ease: "linear" }}
          className="flex gap-6 justify-center md:px-0 px-12">
          <Link
            to="join"
            className="border-rose-800 flex items-center border-[1px] hover:bg-rose-700 rounded-full py-2 px-16 text-white bg-rose-600 font-normal">
            Join
          </Link>
          <Link
            to="testimonials"
            className="border-white/75 text-xs flex items-center border-[1px] uppercase hover:bg-black/50 rounded-full py-2 px-12 text-white bg-white/20 font-normal">
            Testimonials
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
