import { motion } from "framer-motion";
import book from "../assets/book.svg";
import mission from "../assets/mission.svg";
import think from "../assets/think.svg";
import book2 from "../assets/book2.svg";
import groupp from "../assets/groupp.svg";
import exam from "../assets/exam.svg";
import graduate from "../assets/graduate.svg";
import telcIMG from "../assets/telcIMG.jpg";

function About() {
  return (
    <div>
      <div className="h-[70vh] bg-blend-multiply bg-blue-950/60 grid place-items-center bg-[url('./assets/aboutCover.jpg')] bg-no-repeat bg-cover">
        <div className="flex flex-col w-full md:pl-48 items-center md:items-start gap-0">
          <motion.h1
            initial={{ x: "+200vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, ease: "linear" }}
            className="text-white  md:text-6xl text-5xl font-light">
            About Us
          </motion.h1>
          <motion.span
            initial={{ x: "+200vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.7, ease: "linear" }}
            className="text-gray-200 font-thin md:text-2xl md:text-md px-8 text-sm py-1 bg-black/60 w-full md:w-[85%] text-center shadow-white shadow-2xl  ">
            Unbelievable but true! German courses from{" "}
            <span className="text-rose-600 font-medium">700TND!</span>
          </motion.span>
        </div>
      </div>
      <section className="bg-zinc-200/40 py-16 ">
        <div className="container w-3/4 mx-auto gap-12 md:gap-8 grid  py-6 md:grid-cols-3 place-content-center">
          <div className="flex flex-col gap-4 items-center bg-white p-8 border-2 rounded-lg ">
            <img src={book} className="w-[3rem]" alt="book" />

            <h1 className="text-2xl text-gray-800">Introduction</h1>
            <p className="text-sm text-gray-700 font-light leading-relaxed">
              The Viridis language school is known for its many language course
              offerings. Whether you are beginners or advanced, from A1 to B2,
              you will find a course adapted to your needs. This will allow you
              to have an optimal result. Language teachers care about each
              student and can help you quickly.
            </p>
          </div>
          <div className="flex text-rose-600 flex-col gap-4 bg-white p-8 rounded-lg border-2 items-center ">
            <img src={mission} className="w-[3rem]" alt="book" />
            <h1 className="text-2xl text-gray-800">Mission</h1>
            <p className="text-sm text-gray-700 font-light leading-relaxed">
              Do you want to study or work in Germany and need a certain level
              of German? Then you've come to the right place with Viridis. Here
              we offer specific and recognized German courses such as the
              Test-Daf preparation course or the TELC, test of German as a
              foreign language.
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center bg-white p-8 border-2 rounded-lg  ">
            <img src={think} className="w-[3rem]" alt="book" />
            <h1 className="text-2xl text-gray-800">Philosophy</h1>
            <p className="text-sm text-gray-700 font-light leading-relaxed">
              Choosing the right course is not always easy. If you are not sure,
              we recommend taking a free placement test. You can do this in one
              of our language schools or on the Internet. Based on these tests,
              we determine your current level of knowledge and assign you the
              optimal course.
            </p>
          </div>
        </div>
      </section>
      <section className="py-24 bg-gray-50/50">
        <div className="grid md:grid-cols-2 w-10/12 mx-auto border-2 bg-white rounded">
          <div className="md:p-16 p-10 flex flex-col items-center justify-start gap-8">
            <motion.h1
              initial={{ x: "-200vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.7, ease: "linear" }}
              className="text-4xl text-rose-600 font-light ">
              Our Approach
            </motion.h1>

            <h2 className="text-cyan-800 text-2xl text-center">
              "Intensive German courses for beginners and advanced learners"
            </h2>
            <img className="w-[3rem]" src={book2} alt="" />
            <p className="text-sm leading-relaxed text-gray-500">
              "In our language school, you can enroll in language courses for
              all levels. If you are a beginner, then the A1 course is optimal.
              With more knowledge, you can enroll in the A2 course.
              Advanced-level students have the choice between B1 or B2 courses."
            </p>

            <p className="text-sm leading-relaxed text-gray-500">
              "If you are not a beginner, choosing the right course is not
              always easy. If you are unsure, we recommend taking a free
              placement test. You can do this at one of our language schools or
              online. Based on these tests, we determine your current level of
              knowledge and assign you the optimal course."
            </p>
          </div>
          <div className="rounded-r ">
            <img
              className="rounded-r"
              src="https://img.freepik.com/free-photo/cheerful-friends-studying-table_23-2147850717.jpg?w=740&t=st=1695844842~exp=1695845442~hmac=f02e909dedae91f6a850ffd63753a593e56f147fb5d60599eec0c9bce08bcf3a"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="py-24 gap-24 flex flex-col">
        <div className="w-10/12 mx-auto flex flex-col gap-8 items-center justify-center">
          <h1 className="font-light text-rose-800 md:text-4xl text-2xl">
            Are you looking for a well-known language school to learn German?
          </h1>
          <p className="text-gray-500 text-center max-w-[50rem] font-light leading-relaxed md:text-sm text-xs">
            The Viridis language school is known for its many language course
            offerings. Whether you are beginners or advanced, from A1 to B2, you
            will find a course adapted to your needs. This will allow you to
            have an optimal result. Language teachers care about each student
            and can help you quickly.
          </p>
        </div>
        <div className="sm:flex justify-center items-center w-11/12 mx-auto ">
          <div className="w-2/3 bg-gray-200 shadow-lg">
            <img className="w-full" src={telcIMG} alt="" />
          </div>
          <div className="w-full bg-yellow-50 flex flex-col gap-6 justify-center p-16 border-2 items-center">
            <div className="flex items-center gap-4">
              <img className="w-[2.5rem]" src={groupp} alt="" />
              <h1 className="text-xl text-rose-800">
                Intensive Courses In Small Groups
              </h1>
            </div>
            <p className="text-gray-600 text-sm font-light leading-relaxed">
              In order to facilitate language learning, the size of the group is
              a determining factor. We ensure that groups never exceed ten
              participants. So everyone has the opportunity to practice the
              language well. In addition, group classes allow participants to
              practice German communication. Our teachers will help you build
              your dialogue. Thus, it is often unnecessary to spend a lot of
              time learning vocabulary and grammar because students internalize
              structures by practicing the language.
            </p>
            <div className="flex items-center gap-2">
              <img className="w-[2.5rem]" src={exam} alt="" />
              <h1 className="text-xl text-rose-800">
                German Telc Exam Preparation Course
              </h1>
            </div>
            <p className="text-gray-600 text-sm font-light leading-relaxed">
              To be able to live and work in Germany, knowledge of the language
              is essential. You will learn a lot from other people, but you will
              progress much faster with a course at Viridis. Of course, you will
              also receive a certificate of your abilities from us. However, if
              you need to prove your German skills to employers and educational
              institutions, a Telc certificate is preferred.
            </p>
          </div>
        </div>
      </section>
      <section className="py-24 gap-24 flex flex-col bg-pink-50/50">
        <div className="sm:flex justify-center items-center w-11/12 mx-auto ">
          <div className="sm:w-2/3 bg-rose-100 rounded-r-full flex items-center justify-center shadow-lg">
            <h1 className="sm:text-3xl text-xl sm:py-8 py-6   text-pink-900 leading-[3rem]">
              What is a{" "}
              <span className="text-pink-600 text-3xl sm:text-4xl">TELC</span>{" "}
              test used for?
            </h1>
          </div>
          <div className="w-full bg-white flex flex-col gap-4 justify-start pb-16 pt-10 px-16 border-2 items-center">
            <div className="flex items-center ">
              <img className="w-[5rem]" src={graduate} alt="" />
            </div>
            <p className="text-gray-700 text-xs font-light leading-relaxed mb-4">
              "With a successful German Telc test, you demonstrate that you have
              a certain level of language. You've passed a demanding test and
              your employer will know they can count on your language skills
              when needed. This also applies to universities, which often
              require a high-level knowledge of German at the outset. Only then
              will you be able to successfully follow conferences and
              participate in seminars. Overall, it's important to consider a
              Telc preparation course, as exams have a good reputation and will
              come in handy no matter what happens in your future job and school
              life."
            </p>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl text-pink-700">
                TELC Preparation Courses Are Available For All Levels{" "}
              </h1>
            </div>
            <p className="text-gray-600 text-center text-sm font-light leading-relaxed">
              To be able to live and work in Germany, knowledge of the language
              is essential. You will learn a lot from other people, but you will
              progress much faster with a course at Viridis. Of course, you will
              also receive a certificate of your abilities from us. However, if
              you need to prove your German skills to employers and educational
              institutions, a Telc certificate is preferred.
            </p>
          </div>
        </div>
      </section>
      <hr />
    </div>
  );
}

export default About;
