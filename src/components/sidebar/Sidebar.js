import React from 'react';
import {AiOutlineClose} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { setSidebarState } from '../../redux/sidebar/sidebarSlice';
import NavbarLeft from '../navbar/NavbarLeft';
import {RxHamburgerMenu} from "react-icons/rx"
export default function Sidebar () {
const dispatch = useDispatch();
  const sidebar = useSelector((state)=>state.sidebarstate.sidebarstate)


    return (

sidebar  ? (
    <motion.div className="box fixed inset-0 bg-[#0F0F0F] z-[99] text-white"
 

      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        delay: 0.1,
        ease: [0, 0.1, 0.6, 0.6]
      }}
>
   
      <ul className="flex flex-col items-center justify-center text-2xl md:text-5xl h-full">
      <AiOutlineClose className='scale-110 md:scale-140 hover:text-[]'  onClick={()=>dispatch(setSidebarState())}></AiOutlineClose>
        <Link to="/"  onClick={()=>dispatch(setSidebarState())} className="px-4 md:px-8 md:py-5  mt-5 m-2 md:mt-10 py-2 hover:bg-[#1B242D]  rounded-full duration-300 text-white ">Anasayfa</Link>
        <Link to="/about"  onClick={()=>dispatch(setSidebarState())} className="px-4 md:px-8 md:py-5  m-2 py-2 hover:bg-[#1B242D] rounded-full duration-300 text-white ">Hakkımda</Link>
        <Link to="/blog"  onClick={()=>dispatch(setSidebarState())} className="px-4 md:px-8 md:py-5  m-2 py-2 hover:bg-[#1B242D] rounded-full duration-300 text-white ">Blog</Link>
        <Link to="/date"  onClick={()=>dispatch(setSidebarState())} className="px-4 md:px-8 md:py-5 m-2 py-2 hover:bg-[#1B242D] rounded-full duration-300 text-white ">Randevu</Link>

      
      </ul>
    </motion.div> ) : (<div className='absolute top-0 left-0 right-0 h-20 items-center  z-50 flex bg-transparent justify-between px-8 lg:px-32'>
        <NavbarLeft></NavbarLeft>
<RxHamburgerMenu onClick={()=>dispatch(setSidebarState())} size={25} color='white'></RxHamburgerMenu>
    </div>)


  );
};


