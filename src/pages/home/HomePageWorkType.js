import React from 'react'
import ImageSwiper from '../../components/swiper/ImageSwiper'

export default function HomePageWorkType() {
  return (
    <div className='bg-[#1B242D]   flex flex-col text-center  justify-center '>
      <h1 className='text-center lg:text-3xl text-xl lg:mt-20 mt-10 font-semibold text-white'>Çalışma Alanlarım</h1>
      <div className='border-b-2 w-11/12 lg:w-5/12 m-auto  mt-4 border-white mb-10'></div>
  <div className='mb-14 lg:mb-28'>
  <ImageSwiper></ImageSwiper>
  </div>
    </div>
  )
}
