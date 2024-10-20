import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { FaFacebookF , FaPinterestP , FaTwitter , FaLinkedin } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
import { Link } from 'react-router-dom';


function Tail() {
  return (
    <div className='bg-slate-800 text-white font-afacad'> 
   <div className='flex text-sm  py-8   justify-around'>
      <div>
        <img className='h-[70px]' src="../src/assert/Main_page/logo1.png" alt="" />
      </div>
      <div className='space-y-2'>
        <div className='text-base font-semibold'>Information</div>
        <div>Main</div>
        <div>Gallery</div>
        <div>Projects</div>
        <div>Certifications</div>
        <div>Contacts</div>
      </div>
      <div className='space-y-2'>
        <div className='text-base font-semibold'>Contacts</div>
        <div className='flex '>
         <CiLocationOn className='mt-[5px] mr-1' />
        1234 Sample Street <br/> Austin Texas 78704
        </div>
        <div className='flex items-center'>
          <FiPhone className='mr-1' />
          <div>512.333.222</div>
        </div>
        <div className='flex items-center'>
          <CiMail className='mr-1' />
          <div>samplemail.com</div>
        </div>
      </div>
      <div className='space-y-2'>
        <div className='text-base font-semibold'>Social Media</div>
        <div className='flex items-center space-x-7'>
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedin />
          <FaPinterestP />
        </div>
      </div>
    </div>
    <hr className='border-gray-500' />
    <div className='flex text-gray-500 py-5 text-xs space-x-1 justify-center items-center' >
    <FaRegCopyright />
      <div className='text-gray-500'> 2024 All Rights Reserved
      </div>
    </div>
    </div>
 
  )
}

export default Tail