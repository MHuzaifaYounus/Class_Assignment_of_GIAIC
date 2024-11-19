import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <div className="header-top h-[54px] w-full border-b-2 border-black">
        <div className="container w-[90.15%] h-full m-auto  flex justify-between items-center ">
          <div className="content h-[30px] flex items-center">
            <p className='text-[14px]'>Phone Number: 956 742 455 678 | Email:info@ddsgnr.com</p>
          </div>
          <div className="iconsBox h-6 w-[132px] flex justify-evenly items-center">
            <Image src={"/fb.svg"} alt='no icon found' height={18} width={10}></Image>
            <Image src={"/insta.svg"} alt='no icon found' height={18} width={18}></Image>
            <Image src={"/x.svg"} alt='no icon found' height={15.3} width={18}></Image>
            <Image src={"/linkedin.svg"} alt='no icon found' height={18} width={18}></Image>
          </div>
        </div>
      </div>
      <div className="header h-[72px] w-full flex justify-evenly items-center  border-b border-black mt-2">
        <div className="logo h-[41px] flex items-center">
          <Image src={"/logo.svg"} alt='no icon found' height={30.38} width={130.6}></Image>
        </div>
        <div className="nav h-11 w-[910px] flex items-center justify-between ">
          <ul className='flex justify-between  w-[687px]'>
            <li className='border-b border-black'><Link href={"/"}>Home</Link></li>
            <li><Link href={"/"}>Courses</Link></li>
            <li><Link href={"/"}>Services</Link></li>
            <li><Link href={"/"}>Achievement</Link></li>
            <li><Link href={"/"}>About Us</Link></li>
            <li><Link href={"/"}>Testimonial</Link></li>
          </ul>
          <div className="btnBox w-[191px] flex justify-between">
            <button className='w-20 h-10 py-2 px-5 rounded-[5px] border border-black'>Login</button>
            <button className='w-[95px] h-10 py-2 px-5 rounded-[5px] border border-black bg-black text-white'>SignUp</button>

          </div>
        </div>
      </div>
      <div className="hero_section h-[800px] w-full flex items-center">
        <div className="left h-[400px] w-[56.25%] flex flex-col justify-evenly items-center">
          <h1 className='text-[56px] font-bold w-[580px]'>Learn new skills online with ease</h1>
          <p className='text-[18px] w-[580px] '>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
          <div className="btn_box w-[580px] mt-[30px] ">
            <button className='h-[48px] border border-black bg-black text-white rounded-[5px] py-3 px-6'>Start learning</button>
            <button className='ml-4 h-[48px] border border-black bg-black text-white rounded-[5px] py-3 px-6'>Explore Courses</button>
          </div>
        </div>
        <div className="right h-full w-[43.75%] overflow-hidden">
          <Image src={"/heroimg.jpg"} alt='no icon found' height={900} width={720}></Image>
        </div>


      </div>
      <div className="section1 h-[228px] w-full flex justify-between items-center">
        <h5 className='text-[24px] w-[320px] font-bold'>Trusted by 2000+ companies worldwide.</h5>
        <div className="logos  w-[880px] flex justify-evenly items-center h-[56px]">
          <Image src={"/logos/logo1.svg"} alt='no icon found' height={38.52} width={123.8}></Image>
          <Image src={"/logos/logo2.svg"} alt='no icon found' height={38.52} width={123.8}></Image>
          <Image src={"/logos/logo3.svg"} alt='no icon found' height={38.52} width={123.8}></Image>
          <Image src={"/logos/logo4.svg"} alt='no icon found' height={38.52} width={123.8}></Image>
          <Image src={"/logos/logo5.svg"} alt='no icon found' height={38.52} width={123.8}></Image>
          <Image src={"/logos/logo6.svg"} alt='no icon found' height={38.52} width={123.8}></Image>

        </div>

      </div>
      <div className="section2 h-[1049px] w-full flex flex-col items-center justify-evenly ">
        <div className="h-[109px] w-[768px] flex flex-col justify-between">
          <h1 className='text-5xl font-bold'>Explore Courses By Category</h1>
          <p>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
        </div>
        <div className="flex justify-between flex-wrap min-h-[636px]">
          <div className="card mt-4 h-[132px] w-[410.6px] flex justify-evenly items-center ">
            <div className="icon h-[100px] w-[100px] flex justify-center items-center ">
              <Image src={"/category/icon1.svg"} alt='no icon found' height={32} width={32}></Image>
            </div>
            <div className="">
              <h2 className='text-xl font-semibold'>Design & Development</h2>
              <p>50+ Courses Available</p>

            </div>
          </div>
          <div className="card mt-4 h-[132px] w-[410.6px] flex justify-evenly items-center ">
            <div className="icon h-[100px] w-[100px] flex justify-center items-center ">
              <Image src={"/category/icon2.svg"} alt='no icon found' height={32} width={32}></Image>
            </div>
            <div className="">
              <h2 className='text-xl font-semibold'>Marketing</h2>
              <p>50+ Courses Available</p>

            </div>
          </div>
          <div className="card mt-4 h-[132px] w-[410.6px] flex justify-evenly items-center ">
            <div className="icon h-[100px] w-[100px] flex justify-center items-center ">
              <Image src={"/category/icon3.svg"} alt='no icon found' height={32} width={32}></Image>
            </div>
            <div className="">
              <h2 className='text-xl font-semibold'>Development</h2>
              <p>50+ Courses Available</p>

            </div>
          </div>
          <div className="card mt-4 h-[132px] w-[410.6px] flex justify-evenly items-center ">
            <div className="icon h-[100px] w-[100px] flex justify-center items-center ">
              <Image src={"/category/icon4.svg"} alt='no icon found' height={32} width={32}></Image>
            </div>
            <div className="">
              <h2 className='text-xl font-semibold'>Communication</h2>
              <p>50+ Courses Available</p>

            </div>
          </div>
          <div className="card mt-4 h-[132px] w-[410.6px] flex justify-evenly items-center ">
            <div className="icon h-[100px] w-[100px] flex justify-center items-center ">
              <Image src={"/category/icon5.svg"} alt='no icon found' height={32} width={32}></Image>
            </div>
            <div className="">
              <h2 className='text-xl font-semibold'>Digital Marketing</h2>
              <p>50+ Courses Available</p>

            </div>
          </div>
          <div className="card mt-4 h-[132px] w-[410.6px] flex justify-evenly items-center ">
            <div className="icon h-[100px] w-[100px] flex justify-center items-center ">
              <Image src={"/category/icon6.svg"} alt='no icon found' height={32} width={32}></Image>
            </div>
            <div className="">
              <h2 className='text-xl font-semibold'>Self Development</h2>
              <p>50+ Courses Available</p>

            </div>
          </div>
          <div className="card mt-4 h-[132px] w-[410.6px] flex justify-evenly items-center ">
            <div className="icon h-[100px] w-[100px] flex justify-center items-center ">
              <Image src={"/category/icon7.svg"} alt='no icon found' height={32} width={32}></Image>
            </div>
            <div className="">
              <h2 className='text-xl font-semibold'>Business</h2>
              <p>50+ Courses Available</p>

            </div>
          </div>
          <div className="card mt-4 h-[132px] w-[410.6px] flex justify-evenly items-center ">
            <div className="icon h-[100px] w-[100px] flex justify-center items-center ">
              <Image src={"/category/icon8.svg"} alt='no icon found' height={32} width={32}></Image>
            </div>
            <div className="">
              <h2 className='text-xl font-semibold'>Finance</h2>
              <p>50+ Courses Available</p>

            </div>
          </div>
          <div className="card mt-4 h-[132px] w-[410.6px] flex justify-evenly items-center ">
            <div className="icon h-[100px] w-[100px] flex justify-center items-center ">
              <Image src={"/category/icon9.svg"} alt='no icon found' height={32} width={32}></Image>
            </div>
            <div className="">
              <h2 className='text-xl font-semibold'>Consulting</h2>
              <p>50+ Courses Available</p>

            </div>
          </div>
          <div className="flex justify-center items-center w-full">

            <button className='border border-black rounded-[5px] py-3 px-6 h-[48px] w-[155px] text-xs'>View All Courses</button>
          </div>


        </div>
      </div>
      <div className="section3 h-[488px] w-full justify-center items-center">
        <div className="container w-[90%] h-[264px] flex flex-col justify-between items-center m-auto">
          <div className="h-[136px] flex flex-col justify-between items-center">
            <h1 className='text-5xl font-bold text-center'>Our Achivements</h1>
            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>

          </div>
          <div className="h-[96px] w-full flex justify-evenly items-center ">
            <div className="h-full flex flex-col justify-evenly items-center ">
              <h1 className='text-4xl font-bold'>+200</h1>
              <p>Courses</p>
            </div>
            <div className="h-full flex flex-col justify-evenly items-center ">
              <h1 className='text-4xl font-bold'>50k</h1>
              <p>Mentors</p>
            </div>
            <div className="h-full flex flex-col justify-evenly items-center ">
              <h1 className='text-4xl font-bold'>370k</h1>
              <p>Students</p>
            </div>
            <div className="h-full flex flex-col justify-evenly items-center ">
              <h1 className='text-4xl font-bold'>100+</h1>
              <p>Recognition</p>
            </div>
          </div>


        </div>
      </div>

    </div>
  )
}
