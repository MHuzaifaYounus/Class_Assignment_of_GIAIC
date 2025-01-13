import React from 'react'
import Image from "next/image";
const Footer = () => {
  return (
    <div className="footer min-h-[440px] flex w-full bg-black">
    <div className="container  w-[90%] grid grid-cols-5 grid-rows-1 gap-6 pt-20 pb-20  m-auto max-xl:grid-rows-2 max-xl:grid-cols-3 max-md:grid-cols-2 max-md:grid-rows-3 max-sm:grid-cols-1 max-sm:grid-rows-5 max-sm:text-center" >
      <div className="h-[188px] flex flex-col justify-between text-white max-sm:items-center">
        <h1 className="font-bold text-2xl">Exclusive</h1>
        <h2 className="font-medium text-xl">Subscribe</h2>
        <p>Get 10% off your first order</p>
        <div className="w-[217px] h-[48px] flex justify-evenly items-center border-2 border-white rounded-sm">
          <input type="email" placeholder="Enter Your Email" className="bg-transparent w-[70%] border-none outline-none" />
          <Image src={"/icons/icon-send.svg"} alt="no icon found" width={24} height={24}></Image>
        </div>
      </div>
      <div className="h-[180px] flex flex-col justify-between text-white max-sm:items-center">
        <h1 className="font-bold text-2xl">Suppot</h1>

        <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
        <p>exclusive@gmail.com</p>
        <p>+88015-88888-9999</p>

      </div>
      <div className="h-[236px] flex flex-col justify-between text-white max-sm:items-center">
        <h1 className="font-bold text-2xl">Account</h1>

        <ul className="h-[190px] flex flex-col justify-between">
          <li>My Account</li>
          <li>Login / Register</li>
          <li>Cart</li>
          <li>Wishlist</li>
          <li>Shop</li>
        </ul>

      </div>
      <div className="h-[236px] flex flex-col justify-between text-white max-sm:items-center">
        <h1 className="font-bold text-2xl">Quixk Link</h1>

        <ul className="h-[190px] flex flex-col justify-between">
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>FAQ</li>
          <li>Contact</li>

        </ul>

      </div>
      <div className="h-[236px] flex flex-col justify-between text-white max-sm:items-center ">
        <h1 className="font-bold text-2xl">Download App</h1>
        <p className="font-medium text-xs">Save $3 with App New User Only</p>
        <div className="flex justify-between">
          <Image src={"/img/qrcode.svg"} alt="no img found" width={80} height={80}></Image>
          <div className="flex flex-col justify-between">
            <Image src={"/img/AppStore.svg"} alt="no img found" width={110} height={40}></Image>
            <Image src={"/img/GooglePlay.svg"} alt="no img found" width={110} height={40}></Image>
          </div>
        </div>
        <div className="icons flex justify-between w-[80%] ">
            <Image src={"/icons/fb.svg"} alt="no img found" width={24} height={24}></Image>
            <Image src={"/icons/x.svg"} alt="no img found" width={24} height={24}></Image>
            <Image src={"/icons/insta.svg"} alt="no img found" width={24} height={24}></Image>
            <Image src={"/icons/linkedin.svg"} alt="no img found" width={24} height={24}></Image>
          </div>



      </div>
    </div>
  </div>
  )
}

export default Footer