import React, { useEffect } from 'react';
import BlogCard from '../../components/blog/BlogCard';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs } from '../../firebase/firebaseFunctions';

export default function HomePageBlog() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBlogs());
    }, []);
  
    // blogs dizisini useSelector ile alıyoruz. Başlangıçta boş bir dizi olarak tanımlıyoruz.
    const blogs = useSelector(state => state.blogs);
    console.log("benim blogs",blogs);
  
    // Tarihleri dikkate alarak blogları sıralama işlemi
    const sortedBlogs = blogs.slice().sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
console.log("sorted",sortedBlogs)
    return (
        <div className='w-11/12 lg:w-10/12 m-auto flex-col flex justify-center items-center mt-10 lg:mt-20 mb-10 lg:mb-20'>
            <p className='text-xl lg:text-4xl font-semibold text-black'>Blog Yazılarım</p>
            <div className='border-b-2 w-11/12 lg:w-6/12 mt-4 mb-6 lg:mb-10 border-black'></div>
            <div className='flex flex-wrap gap-5 items-center justify-center lg:gap-12'>
                {sortedBlogs.slice(0, 3).map((blog) => (
                    <BlogCard key={blog.id} id={blog.id} url={blog.url} content1={blog.content1} content2={blog.content2} created_at={blog.created_at} title={blog.title} photoUrls={blog.photoUrls || null}></BlogCard>
                ))}
            </div>
            <motion.button
                onClick={() => navigate("/blog")}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className='bg-[#1B242D] rounded-full py-4  px-7 lg:px-12 text-white font-bold text-base mt-16'
            >
                Daha Fazla
            </motion.button>
        </div>
    );
}
