import React, { useEffect, useState } from 'react'
import BlogPageBanner from './BlogPageBanner'
import BlogCard from '../../components/blog/BlogCard'
import {motion} from "framer-motion"
import { useDispatch, useSelector } from 'react-redux'
import { getBlogs, getBlogsbyDate } from '../../firebase/firebaseFunctions'
import { useNavigate } from 'react-router-dom'
import { Helmet } from "react-helmet";
export default function BlogPage() {

  const dispatch = useDispatch();
  useEffect(() => {
    // getBlogs fonksiyonundan verileri çekip Redux store'a kaydediyoruz.
    dispatch(getBlogs());
   
  }, [dispatch]); // dispatch bağımlılığını useEffect içinde belirtmeyi unutmayın.


  // useSelector ile Redux store'dan blogs verilerini alın.
  const blogs = useSelector((state) => state.blogs) ;
console.log(blogs)



  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
        <Helmet>
          <title>Avukat Ayşenur Ertan Blog</title>
          <meta  name="description"
          content="Avukat Ayşenur Ertan Blog"
          >
          
          </meta>
          <meta name="keywords" content="Avukat, Ayşenur Ertan, AyşenurErtan, Avukat Ayşenur Ertan, Avukat Sayfası , Randevu, Blog, Hakkımda, Ertan Hukuk , Hukuk, Blog sayfası  "></meta>
        </Helmet>
      <BlogPageBanner></BlogPageBanner>
      <div className='flex w-10/12 m-auto gap-12 mt-10 lg:mt-20 flex-wrap'>
        {blogs.map(blog => (
          <BlogCard
          url={blog.url}
          id={blog.id}
          key={blog.id} // Her öğe için benzersiz bir key eklemeyi unutmayın.
          title={blog.title}
          content1={blog.content1}
          content2={blog.content2}
          created_at={blog.created_at}
          photoUrls={blog.photoUrls}
        />
        ))}

      </div>
    </motion.div>
  );
}
