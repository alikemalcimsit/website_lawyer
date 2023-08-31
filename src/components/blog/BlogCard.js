import React from "react";
import isHukuku from "../../assets/isHukuku.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Helmet } from "react-helmet";
import { format } from "date-fns";
export default function BlogCard({
  id,
  url,
  title,
  content1,
  content2,
  created_at,
  photoUrls,
}) {
  const quillModules = {
    toolbar: false, // Toolbar'ı kaldırmak için
  };
 
  const formatDate = (timestamp) => {
    const date = new Date(timestamp.seconds * 1000); // Timestamp'i milisaniyeye çevirerek Date nesnesine dönüştürün
    return format(date, "dd.MM.yyyy HH:mm"); // Tarih formatını istediğiniz şekilde belirleyin
  };

 
  return (
    <Link to={`/blog/${url}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 100 }}
        className=" w-[300px] m-auto lg:w-[390px] cursor-pointer shadow-md p-4 border-2 border-gray-100"
      >
         
        <div className="relative">
          <img
            src={photoUrls[0] || null}
            className="h-52 lg:h-64 cursor-pointer rounded-xl relative w-full  lg:w-[390px] object-cover object-center"
            alt="blog"
          ></img>
        </div>
        <p className="line-cl  hover:underline cursor-pointer text-black font-medium text-lg lg:text-xl mt-3">
          {title}
        </p>
        <p className="line-clamp-5 mb-2 mt-2">
         {content1}
        </p>

        <span className="text-gray-500 text-sm lg:text-base">   {formatDate(created_at)} </span>
      </motion.div>
    </Link>
  );
}
