import React from 'react'
import {AiFillInstagram,AiFillMail , AiFillTwitterCircle} from "react-icons/ai"
import { Link } from 'react-router-dom'
export default function NavbarRight() {
  const email = 'av.aysenurertan@outlook.com';
  return (
    <div>
<ul className='flex items-center text-lg gap-7  text-white  font-semibold'>
    <Link to="/" className='hover:underline cursor-pointer'>Anasayfa</Link>
    <Link to="/about" className='hover:underline cursor-pointer'>Hakkımda</Link>
    <Link to="/date" className='hover:underline cursor-pointer'>Randevu</Link>
    <Link to="/blog" className='hover:underline cursor-pointer'>Blog</Link>
    <a href='https://www.instagram.com/aysenur.ertann/' target='_blank' about='instagram' rel="noreferrer"><AiFillInstagram size={25}></AiFillInstagram></a>
    <a><AiFillTwitterCircle size={25}></AiFillTwitterCircle></a>
    <a href={`mailto:${email}`}><AiFillMail size={25}></AiFillMail></a>


</ul>
    </div>
  )
}
