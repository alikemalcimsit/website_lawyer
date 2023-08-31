import React from 'react'
import about from "../../assets/aboutme.jpg"
export default function AboutPageBanner() {
  return (
    <div className="h-[50vh] lg:h-[70vh]  bg-cover bg-center brightness-75 " style={{backgroundImage : `url(${about})`}}>
      
    </div>
  )
}
