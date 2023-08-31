import React from 'react';
import NavbarLeft from './NavbarLeft';
import NavbarRight from './NavbarRight';

export default function Navbar() {
  return (
    <div
    
  
    className='absolute top-0 left-0 right-0 h-20 items-center pt-10 z-50 flex bg-transparent justify-between px-8 lg:px-32'>

<NavbarLeft />

<NavbarRight />

     
    </div>
  );
}

