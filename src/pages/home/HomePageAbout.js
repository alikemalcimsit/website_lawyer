import React, { useEffect, useState } from "react";
import aboutresim from "../../assets/aboutresim.png";
import { motion } from "framer-motion";
import useWindowSize from "../../hooks/useWindowSize";
import { getAboutMe } from "../../firebase/firebaseFunctions";
export default function HomePageAbout() {
  const size = useWindowSize().width;

  const [aboutMe, setAboutMe] = useState([]);

  useEffect(() => {
  
    const fetchData = async () => {
      const aboutme = await getAboutMe();
      setAboutMe(aboutme);
    };

    fetchData();
  }, []);
  return (
    <div className="flex  m-auto  lg:w-10/12 w-11/12  items-center justify-between">
      {size <= 768 ? (
        <div>
          <div className="w-full text-center">
            <h1 className="text-xl font-bold mb-3 lg:mb-6">
              
              {aboutMe.title||""}
            </h1>
            <div className="border-b-2 border-black mb-7 lg:mb-10"></div>
          </div>

          <div className="w-full  ">
            <img
              alt="ayse"
              className=" object-cover object-center"
              src={aboutresim}
            ></img>
            <h1 className="text-base mt-7  text-justify text-[#2c2f30cf]">
             {aboutMe.content||""}
            </h1>
          </div>
        </div>
      ) : (
        <div className="flex  items-center justify-between">
  <div className="w-1/2 text-justify">
    <h1 className="text-4xl font-bold text-center mb-6"> Avukat Ayşenur Ertan</h1>
    <div className="border-b-2 border-black mb-10"></div>
    <p className="text-xl text-[#2c2f30cf]">
      {aboutMe.content}
    </p>
  </div>
  <div className=" bg-black flex items-center justify-center">
    <img
      alt="ayse"
      className=" object-cover object-center"
      src={aboutresim}
    ></img>
  </div>
</div>

      )}
    </div>
  );
}
