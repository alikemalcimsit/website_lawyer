import React from 'react'
import {AiFillInstagram,AiFillMail , AiFillTwitterCircle} from "react-icons/ai"
import { Link } from 'react-router-dom'
import useWindowSize from '../../hooks/useWindowSize'
import { Helmet } from "react-helmet";
export default function Footer() {
  const size = useWindowSize().width
  const email = 'av.aysenurertan@outlook.com';
  const seoDescription = 'Ertan Hukuk & Danışmanlık, çeşitli alanlarda nitelikli hukuki danışmanlık ve avukatlık hizmeti sunar.';

  return (
    <div className='w-11/12 lg:w-10/12 mb-20  m-auto mt-20 lg:mt-28'>
{size<=768 ?     <div className='flex  flex-col'>
<Helmet>
<meta name="description" content={seoDescription} />
</Helmet>
<div className='w-full flex flex-col items-center justify-center text-center  '>
  <h1 className='font-bold text-2xl  mb-3 cursor-pointer'>Avukat Ayşenur Ertan</h1>
  <p className='text-base mb-3'>Introducing Synapse, a sleek and sophisticated<br></br> Ghost theme perfect for tech, science, culture or any other publication</p>
<span className='text-sm'>© 2023 Ali Kemal Cimşit / Doğukan Özgür Yılmaz</span>
</div>
<div className='w-full flex justify-around mt-10  '>
  <div>
      <ul className=' flex flex-col '>
      <Link to="/" className='text-base font-semibold mb-2  hover:underline cursor-pointer '>Anasayfa</Link>
      <Link to="/about"  className='text-base  mb-2 font-semibold  hover:underline cursor-pointer'>Hakkımda</Link>
      <Link to="/date"  className='text-base mb-2  font-semibold  hover:underline cursor-pointer'>Randevu</Link>
      <Link to="/blog"  className='text-base  mb-2 font-semibold  hover:underline cursor-pointer'>Blog</Link>
     
      </ul>
  </div>
 
  <div>
  <ul>
      <li  className='text-lg font-semibold mb-2'>İletişim</li>
      <li className='flex items-center text-base mb-2 hover:underline gap-x-1 cursor-pointer'>
          <AiFillTwitterCircle size={20}></AiFillTwitterCircle>
          Twitter
      </li>
      <li  className='flex items-center  text-base mb-2 hover:underline gap-x-1  cursor-pointer'>
          <AiFillInstagram size={20}></AiFillInstagram>
          Instagram
      </li>
      
      <li  className='flex items-center text-base mb-2 hover:underline gap-x-1  cursor-pointer'>
      <a href={`mailto:${email}`}><AiFillMail size={20}></AiFillMail></a> 
          Mail
        
        
      </li>
      </ul>
  </div>
</div>
    </div>:     <div className='flex'>

<div className='w-2/4   '>
  <h1 className='font-bold text-4xl mb-5 cursor-pointer'>Avukat Ayşenur Ertan</h1>
  <p className='text-lg mb-5 w-4/5'>Ertan Hukuk & Danışmanlık şirketler ve şahıslara hukuku çeşitli alanlarında, kapsamlı ve nitelikli hukuki danışmanlık ve avukatlık hizmeti sunmaktadır.</p>
<span>© 2023 Ali Kemal Cimşit / Doğukan Özgür Yılmaz</span>
</div>
<div className='w-2/4 flex justify-around  '>
  <div>
      <ul className=' flex flex-col '>
      <Link to="/" className='text-xl font-semibold mb-2  hover:underline cursor-pointer '>Anasayfa</Link>
      <Link to="/about"  className='text-xl  mb-2 font-semibold  hover:underline cursor-pointer'>Hakkımda</Link>
      <Link to="/date"  className='text-xl mb-2  font-semibold  hover:underline cursor-pointer'>Randevu</Link>
      <Link to="/blog"  className='text-xl  mb-2 font-semibold  hover:underline cursor-pointer'>Blog</Link>
     
      </ul>
  </div>
 
  <div>
  <ul>
      <li  className='text-2xl font-semibold mb-3'>İletişim</li>
      <li className='flex items-center text-base mb-2 hover:underline gap-x-1 cursor-pointer'>
          <AiFillTwitterCircle size={20}></AiFillTwitterCircle>
          Twitter
      </li>
      <li  className='flex items-center  text-base mb-2 hover:underline gap-x-1  cursor-pointer'>
          <AiFillInstagram size={20}></AiFillInstagram>
          Instagram
      </li>
      <a href={`mailto:${email}`}>
      <li  className='flex items-center text-base mb-2 hover:underline gap-x-1  cursor-pointer'>
    <AiFillMail size={20}></AiFillMail> 
          Mail
        
      </li>
      </a>
     
      </ul>
  </div>
</div>
    </div>}

  </div>
  )
}
