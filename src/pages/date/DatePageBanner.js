import React from 'react'
import date from "../../assets/randevu.jpg"
export default function DatePageBanner() {
  return (
    <div className="lg:h-[70vh] h-[50vh] flex items-center   justify-center bg-cover bg-center brightness-75 mb-10 lg:mb-20" style={{backgroundImage : `url(${date})`}}>
         <div className='absolute'>
         <h1 className='text-5xl lg:text-8xl text-[#567483] '>Randevu Al</h1>
         </div>
    </div>
  )
}
