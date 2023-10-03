import { useEffect, useState } from "react";
import goUp from "../assets/goUp.svg";
function GoUp() {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    window.scrollY > 1000 ? setVisible(true) : setVisible(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      onClick={scrollToTop}
      className={`${
        visible
          ? "fixed bottom-10 w-[2rem] shadow-2xl  cursor-pointer opacity-100 transition-opacity duration-700 ease-in-out shadow-rose-700 bg-pink-700 rounded-full p-1 right-6"
          : "hidden"
      }  `}>
      <img className="" src={goUp} alt="go up" />
    </div>
  );
}

export default GoUp;
