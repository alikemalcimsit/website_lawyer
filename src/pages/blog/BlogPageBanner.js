import React from 'react'
import blog from "../../assets/blog.jpeg"
export default function BlogPageBanner() {
  return (
    <div className=" h-[50vh] lg:h-[70vh] bg-cover bg-center brightness-75 " style={{backgroundImage : `url(${blog})`}}>
      
    </div>
  )
}
