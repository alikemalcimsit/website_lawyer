import React from 'react'

export default function BlogDetailsBanner({img}) {
  return (
    <div className=" h-[50vh] lg:h-[70vh] bg-cover bg-center brightness-75 " style={{backgroundImage : `url(${img})`}}>
      
    </div>
  )
}
