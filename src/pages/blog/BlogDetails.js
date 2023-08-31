import React, { useEffect, } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BlogDetailsBanner from "./BlogDetailsBanner";
import { getBlogsById } from "../../firebase/firebaseFunctions";
import ReactQuill from "react-quill";
import { format } from "date-fns";
import { Helmet } from "react-helmet";
import "react-quill/dist/quill.snow.css"; // or any other theme you prefer


export default function BlogDetails() {
   
  const {id} = useParams();
 
console.log(id, "url")
const dispatch = useDispatch()
  useEffect(() => {
   dispatch(getBlogsById(id))
 
   window.scrollTo(0, 0);
  }, [dispatch, id]);


    const quillModules = {
      toolbar: false, // toolbarı kladırmak için 
    };
  const blog = useSelector(state => state.blogById);
console.log(blog)
const formatDate = (timestamp) => {
  if (timestamp && timestamp.seconds) {
    const date = new Date(timestamp.seconds * 1000);
    return format(date, "dd.MM.yyyy HH:mm");
  }
  return ""; 
};


  return (
    <div className=" ">
        <Helmet>
          <title>Avukat Ayşenur Ertan</title>
          <meta  name="description"
          content="Avukat Ayşenur Ertan Blog"
          >
          
          </meta>
          <meta name="keywords" content={`Avukat, Ayşenur Ertan, AyşenurErtan, Avukat Ayşenur Ertan, Avukat Sayfası , Randevu, Blog, Hakkımda, Ertan Hukuk, Hukuk, ${blog.title}, ${blog.content}`}></meta>
        </Helmet>
      <BlogDetailsBanner img={blog.photoUrls?.[0] || ""} />
      <div className="w-10/12 m-auto">
        <h1 className="text-3xl lg:text-6xl text-black/80 mb-5 mt-10 leading-[40px] lg:leading-[65px]">
          {blog.title}
        </h1>
        <p className="text-black/50 font-light mb-3">  {formatDate(blog.created_at)}</p>
        <hr className="w-full border mb-3" />
        <ReactQuill value={blog.content2} modules={quillModules} readOnly={true} />
        {blog.photoUrls?.[1] && (
          <img
            className="h-[500px] w-10/12 m-auto"
            src={blog.photoUrls[1]}
            alt="blog-img"
          />
        )}
      </div>
    </div>
  );
}
