import { FaGithub, FaTwitter, FaFacebook, FaLinkedin} from 'react-icons/fa';

import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='h-[200px] w-full border-t shadow-2xl shadow-primary border-primary'>
      <div className='w-80% max-sm:flex-col flex justify-evenly items-center h-full'>
        <div className='max-sm:text-center'>
          <h1 className='text-2xl font-bold'><span>H</span>uzaifa <span>Y</span>ounus</h1>
          <p>Lets Create Something Together</p>
        </div>
        <div className="w-52 text-3xl flex cursor-pointer justify-between">
                <Link className='transition hover:text-primary hover:scale-110' href={"https://github.com/MHuzaifaYounus"}> <FaGithub /></Link>
                <Link className='transition hover:text-primary hover:scale-110' href={"#"}> <FaTwitter /></Link>
                <Link className='transition hover:text-primary hover:scale-110' href={"https://www.facebook.com/profile.php?id=61556341636932"}> <FaFacebook /></Link>
                <Link className='transition hover:text-primary hover:scale-110' href={"https://l.facebook.com/l.php?u=https%3A%2F%2Flinkedin.com%2Fin%2Fhuzaifayounus14%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR17fl5VkxFhFDBUOSSirbKx9sgeJOdkcGdT_WSFrWpAnz4_xHP1k7FgBIg_aem_fN6-DrklAlDSJkU38f4png&h=AT1bNTsSgSI7aH5L4jVb2e8efI-z_A1zwC1yeZOcc28yG5ijpIAPmub6TIQNkuYDGcQ80ZxFNKkm6CH0i_9Kj4BK4LBE0XHHz58-Ai3QDicoVvs2xmEmnS3U_m8TldSP4JqH"}>  <FaLinkedin /></Link>
              </div>

      </div>
    </div>
  )
}

export default Footer