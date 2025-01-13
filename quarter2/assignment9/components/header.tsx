"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from './ui/button'

const Header = () => {
  const [isNavBar, setisNavBar] = useState<boolean>(false)
  function menuBtnHandler() {
    setisNavBar(!isNavBar)
  }
  return (
    <div>
      <div className="header-top bg-black h-12 w-full flex justify-center items-center max-md:h-24">

        <div className=" flex w-[79%] justify-center items-center relative max-lg:w-full max-md:flex-col max-md:justify-evenly">
          <h1 className="text-sm font-normal text-white max-md:w-[300px] text-center">Winter Sale For Products And Free  Delivery - OFF 50%!</h1>
          <div className="h-full absolute right-0 w-[78px] flex justify-between text-white max-md:relative  " >
            <h1 className="text-sm ">English</h1>
            <Image src={"/icons/DropDown.svg"} alt="no icon found" width={24} height={24}></Image>

          </div>

        </div>
      </div>

      <div className="header w-full border-b-[0.5px] border-gray-500 ">

        <div className="container h-[38px] w-[79%] mt-10 mb-[13px] m-auto flex justify-between items-center max-lg:min-w-[90%]">
          <h1 className="text-2xl font-bold "><span>S</span>OLO<span>V</span>ERA.</h1>
          <ul className="flex justify-between w-[33.3%] h-6 max-xl:hidden">
            <li className="active"><Link href={"/"}>Home</Link></li>
            <li><Link href={"/products"}>Products</Link></li>
            <li><Link href={"/"}>Contact</Link></li>
            <Button className='bg-myPrimary' variant={"destructive"} color='black'>Sign Up</Button>
          </ul>

          <div className="w-[400px] h-[38px] flex justify-between items-center max-sm:w-[120px]">
            <div className="h-full w-[243px] flex justify-evenly bg-[#F5F5F5] py-[7px] pr-[12px] pl-[20px] max-sm:hidden">
              <input type="search" className="w-[90%] h-full bg-transparent text-sm border-none outline-none" placeholder="What are you looking for?" />
              <Image src={"/icons/search.svg"} alt="no icon found" width={24} height={24}></Image>

            </div>
            <Link href={"/wishlist"}><Image src={"/icons/wishlist.svg"} alt="no icon found" width={32} height={32}></Image></Link>
            <Link href={"/cart"}><Image src={"/icons/cart.svg"} alt="no icon found" width={32} height={32}></Image></Link>
            <Image className='xl:hidden' onClick={menuBtnHandler} src={"/icons/menubtn.svg"} alt="no icon found" width={24} height={24}></Image>
          </div>

        </div>

      </div>
      <div className={`mobileNav ${isNavBar ? "flex" : "hidden"}  xl:hidden`}>
        <ul className="flex flex-col justify-evenly bg-black text-white w-full items-center h-[300px] ">
          <li className="active"><Link href={"/"}>Home</Link></li>
          <li><Link href={"/products"}>Products</Link></li>
          <li><Link href={"/"}>Contact</Link></li>
          <Button className='bg-myPrimary' variant={"destructive"} color='black'>Sign Up</Button>
        </ul>
      </div>

    </div>
  )
}

export default Header