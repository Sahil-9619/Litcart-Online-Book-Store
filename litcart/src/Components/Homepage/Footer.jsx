import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div>
        <div id="footer" className=' w-full h-100 bg-black text-white relative bottom-0 '>
            <div id="logo-sec" className='p-5 pb-0'>
        <div id="logo-bt" className='h-20 w-30 '></div>
        
        </div>
        <p className='w-full mb-1 mt-0 text-zinc-400'>Cart it. Read it. Love it</p>
        
        <div id="line"className=' bg-white w-full h-0.5'></div>
        <div id="blocks" className='flex items-center place-content-evenly w-full mt-5'>

        <div id="block1" className=' h-50 w-30 text-gray-400'>
            <p  className='text-white font-semibold'>About</p>
            <p className='pt-2'>About Us</p>
            <p>Careers</p>
            <p>F&Qs</p>
        </div>
        <div id="block2" className=' h-50 w-40 text-gray-400'>
          <p className='text-white font-semibold' >Contact US</p>
          <p className='pt-2'>+91 12321434</p>
          <p>litcart1@gmail.com</p>
        </div>
        <div id="block3" className=' h-50 w-30'></div>

        <div id="block4" className=' h-50 w-30 text-gray-400'>
          <p className='text-white font-semibold'>Connect with Us</p>
              <p className='pt-2'>Facebook</p>
              <p>Twitter</p>
              <p>Instagram</p>
        </div>

        <div id="block5" className=' h-50 w-30 text-gray-400'>
          <p className='text-white font-semibold'>Help</p>
          <p className='pt-2'>Your Account</p>
          <p>Returns </p>
          <p>Recalls and Product Safety Alerts</p>
          <p>Help</p>
        </div>
        </div>
        
        </div>
    </div>
  )
}

export default Footer
