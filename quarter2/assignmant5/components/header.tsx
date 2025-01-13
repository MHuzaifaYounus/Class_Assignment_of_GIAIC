import Image from 'next/image'
import React from 'react'
import {Rye} from "next/font/google";



const logoFont = Rye({
  weight: "400",
  subsets:["latin"]
});


const Header = () => {
  return (
    <div className="header items-center justify-evenly w-full h-[135px] bg-primary flex ">
        <div className="logo w-[242.56px] h-[87.45px] flex">
          <Image src="/logo.svg" alt="no img found" width={63.52} height={70.35} />
          <h1 className={`${logoFont.className} text-[66.78px] text-white`}>urity</h1>
        </div>
        <div className="searchbar flex justify-evenly items-center h-[56.24px] w-[769.89px] bg-white rounded-[13.83px]">
          <input className="w-[90%] h-[80%]" type="search" placeholder="Search for Gold Jewellery, Diamond Jewellery and more…" />
          <Image src="/search.svg" alt="no img found" width={21.5} height={21.5} />

        </div>
        <div className="icons h-[30.08px] w-[177.8px] flex justify-between items-center">
          <Image src="/heart.svg" alt="no img found" width={33.42} height={29.71} />
          <Image src="/profile.svg" alt="no img found" width={28.97} height={29.28} />
          <Image src="/cart.svg" alt="no img found" width={38.01} height={38.08} />

        </div>

      </div>
  )
}

export default Header