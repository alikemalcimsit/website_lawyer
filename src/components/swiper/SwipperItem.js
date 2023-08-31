import React from 'react'

export default function SwipperItem({photo,text}) {
  return (
    <div  style={{ backgroundImage: `url(${photo})` }} className='relative h-[200px] w-[190px] lg:h-[400px] lg:w-[380px]  flex flex-col text-center items-center justify-center rounded-xl bg-cover bg-center  '>
<div className='absolute w-full h-full rounded-xl bg-black/50'>

</div>
<span className='text-xl lg:text-4xl text-white  font-bold absolute '>{text}</span>
        </div>
   

  )
}
