import React, { useEffect, useState } from 'react'
import AboutPageBanner from './AboutPageBanner'
import HomePageAbout from '../home/HomePageAbout'
import {motion} from "framer-motion"
import { getAboutMe } from '../../firebase/firebaseFunctions';

export default function AboutPage() {
 

 
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
     
      <AboutPageBanner></AboutPageBanner>
     <div className='mt-10 lg:mt-20'>
     <HomePageAbout></HomePageAbout>
     </div>
    </motion.div>
  )
}
