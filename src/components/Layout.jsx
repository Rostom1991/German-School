/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import spinner from "../assets/loading.svg";

function Layout({ children }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className=" grid h-screen place-content-center">
          {" "}
          <img className="w-1/2" src={spinner} alt="loading.." />{" "}
        </div>
      ) : (
        <div> {children} </div>
      )}
    </div>
  );
}

export default Layout;
