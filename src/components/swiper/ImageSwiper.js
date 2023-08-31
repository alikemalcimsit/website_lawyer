import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';


import SwipperItem from './SwipperItem';
import aileHukuku from "../../assets/aileHukuku.jpeg"
import cezaHukuku from "../../assets/cezaHukuku.png"
import isHukuku from "../../assets/isHukuku.jpg"
import mirasHukuku from "../../assets/mirasHukuku.jpg"
import ticaretHukuku from "../../assets/ticaretHukuku.png"
import yönetimHukuku from "../../assets/yönetimHukuku.jpg"
import useWindowSize from '../../hooks/useWindowSize';
export default function ImageSwiper() {
  
  const size = useWindowSize().width
  return (

    <div >
         <Swiper
      
           slidesOffsetAfter={200}
      slidesOffsetBefore={size<=768 ? 30 :100}
      spaceBetween={size<=768 ? 50 : 150}
      slidesPerView={size<=768 ? 2:4}
 
    >
      <SwiperSlide><SwipperItem photo={aileHukuku} text={"Aile Hukuku"}></SwipperItem></SwiperSlide>
      <SwiperSlide><SwipperItem photo={cezaHukuku}  text={"Ceza Hukuku"} ></SwipperItem></SwiperSlide>
      <SwiperSlide><SwipperItem photo={isHukuku}  text={"İş Hukuku"} ></SwipperItem></SwiperSlide>
      <SwiperSlide><SwipperItem photo={mirasHukuku}  text={"Miras Hukuku"} ></SwipperItem></SwiperSlide>
      <SwiperSlide><SwipperItem photo={ticaretHukuku}  text={"Ticaret Hukuku"} ></SwipperItem></SwiperSlide>
      <SwiperSlide><SwipperItem photo={yönetimHukuku}  text={"Sözleşmeler Hukuku"} ></SwipperItem></SwiperSlide>

    </Swiper>
    </div>
  )
}
