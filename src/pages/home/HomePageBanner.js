import React from 'react'
import resim2 from "../../assets/resim2.jpg";
import {motion} from "framer-motion"
import { useNavigate } from 'react-router-dom';
export default function HomePageBanner() {

    const navigate  = useNavigate()
  return (
    <div
      className="h-[100vh] bg-cover bg-center  bg-blend-color-dodge "
      style={{ backgroundImage: `url(${resim2})` }}
    >

      <div className='h-[100vh] w-full absolute bg-black/50 z-40'>
        
      </div>
    <div className='absolute w-full z-50  top-0 mt-20  '>
    <div className="w-12/12  lg:w-12/12 m-auto flex-col flex  ">
<motion.div 

initial={{ x: -500 }}
animate={{ x: 0 }}
  transition={{ ease: "easeOut", duration: 0.5 }}
className=" lg:w-full  h-[80vh]  items-center  flex flex-col justify-center ">
<div className=' flex items-center justify-center text-center'>
  <h1 className="text-2xl lg:text-5xl mb-5 w-full text-white font-bold">HUKUK & DANIŞMANLIK</h1>

</div>
<motion.button
onClick={()=>navigate("/date")}
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.9 }}
transition={{ type: "spring", stiffness: 400, damping: 17 }}
className="bg-[#8e563c] w-2/3 mt-5 lg:w-1/3 p-4 font-semibold hover:brightness-125 rounded-md text-white">Randevu Al</motion.button>
</motion.div>

      </div>
    </div>
    </div>
  )
}
