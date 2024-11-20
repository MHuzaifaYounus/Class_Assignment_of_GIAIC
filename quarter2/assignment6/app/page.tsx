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
      <div className="sectionn4 h-[1742px] w-full flex flex-col justify-evenly items-center">
        <div className="h-[118px] w-[768px] flex flex-col justify-between items-center">
          <h1 className='text-[56px] font-bold'>Courses</h1>
          <p className=''>Your Ultimate Guide to learning</p>
        </div>
        <ul className="h-[40px] w-[336px] flex justify-evenly items-center ">
          <li className='border-b border-black'>Popular</li>
          <li>Recommended</li>
          <li>Best Price</li>
        </ul>
        <div className="flex w-full h-[1132px] flex-wrap justify-between ">

          <div className="card flex flex-col justify-between  h-[534px] w-[416px]">

            <div className="h-[300px] w-full bg-gray-500 overflow-hidden">
              <Image src={"courses/image1.svg"} alt='no  img found' height={300} width={416}></Image>
            </div>

            <div className="h-[210px] w-full flex flex-col justify-evenly">

              <div className="h-6 w-full flex justify-between">
                <p className='text-sm font-semibold'>Design</p>
                <p className='flex font-semibold justify-between items-center text-sm w-[48px]'><Image src={"/star.svg"} alt='no icon found' height={20} width={20}></Image> 5.0</p>
              </div>

              <h1 className='text-2xl font-bold'>UX/UI Design 201</h1>
              <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>

              <div className="flex items-center">
                <button className='h-[40px] text-sm  w-[117px] py-2 px-5 border border-black rounded-[5px] '>Enroll Now</button>
                <p className='font-medium ml-6'>$400</p>
              </div>


            </div>
          </div>

          <div className="card flex flex-col justify-between  h-[534px] w-[416px]">

            <div className="h-[300px] w-full bg-gray-500 overflow-hidden">
              <Image src={"courses/image2.svg"} alt='no  img found' height={300} width={416}></Image>
            </div>

            <div className="h-[210px] w-full flex flex-col justify-evenly">

              <div className="h-6 w-full flex justify-between">
                <p className='text-sm font-semibold'>Programming</p>
                <p className='flex font-semibold justify-between items-center text-sm w-[48px]'><Image src={"/star.svg"} alt='no icon found' height={20} width={20}></Image> 5.0</p>
              </div>

              <h1 className='text-2xl font-bold'>Introduction to Programming</h1>
              <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>

              <div className="flex items-center">
                <button className='h-[40px] text-sm  w-[117px] py-2 px-5 border border-black rounded-[5px] '>Enroll Now</button>
                <p className='font-medium ml-6'>$400</p>
              </div>


            </div>
          </div>

          <div className="card flex flex-col justify-between  h-[534px] w-[416px]">

            <div className="h-[300px] w-full bg-gray-500 overflow-hidden">
              <Image src={"courses/image3.svg"} alt='no  img found' height={300} width={416}></Image>
            </div>

            <div className="h-[210px] w-full flex flex-col justify-evenly">

              <div className="h-6 w-full flex justify-between">
                <p className='text-sm font-semibold'>Business</p>
                <p className='flex font-semibold justify-between items-center text-sm w-[48px]'><Image src={"/star.svg"} alt='no icon found' height={20} width={20}></Image> 5.0</p>
              </div>

              <h1 className='text-2xl font-bold'>Data Analysis for Beginners</h1>
              <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>

              <div className="flex items-center">
                <button className='h-[40px] text-sm  w-[117px] py-2 px-5 border border-black rounded-[5px] '>Enroll Now</button>
                <p className='font-medium ml-6'>$400</p>
              </div>


            </div>
          </div>

          <div className="card flex flex-col justify-between  h-[534px] w-[416px]">

            <div className="h-[300px] w-full bg-gray-500 overflow-hidden">
              <Image src={"courses/image4.svg"} alt='no  img found' height={300} width={416}></Image>
            </div>

            <div className="h-[210px] w-full flex flex-col justify-evenly">

              <div className="h-6 w-full flex justify-between">
                <p className='text-sm font-semibold'>Art</p>
                <p className='flex font-semibold justify-between items-center text-sm w-[48px]'><Image src={"/star.svg"} alt='no icon found' height={20} width={20}></Image> 5.0</p>
              </div>

              <h1 className='text-2xl font-bold'>Art Specialization</h1>
              <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>

              <div className="flex items-center">
                <button className='h-[40px] text-sm  w-[117px] py-2 px-5 border border-black rounded-[5px] '>Enroll Now</button>
                <p className='font-medium ml-6'>$400</p>
              </div>


            </div>
          </div>

          <div className="card flex flex-col justify-between  h-[534px] w-[416px]">

            <div className="h-[300px] w-full bg-gray-500 overflow-hidden">
              <Image src={"courses/image5.svg"} alt='no  img found' height={300} width={416}></Image>
            </div>

            <div className="h-[210px] w-full flex flex-col justify-evenly">

              <div className="h-6 w-full flex justify-between">
                <p className='text-sm font-semibold'>Law</p>
                <p className='flex font-semibold justify-between items-center text-sm w-[48px]'><Image src={"/star.svg"} alt='no icon found' height={20} width={20}></Image> 5.0</p>
              </div>

              <h1 className='text-2xl font-bold'>Rule of Law</h1>
              <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>

              <div className="flex items-center">
                <button className='h-[40px] text-sm  w-[117px] py-2 px-5 border border-black rounded-[5px] '>Enroll Now</button>
                <p className='font-medium ml-6'>$400</p>
              </div>


            </div>
          </div>

          <div className="card flex flex-col justify-between  h-[534px] w-[416px]">

            <div className="h-[300px] w-full bg-gray-500 overflow-hidden">
              <Image src={"courses/image6.svg"} alt='no  img found' height={300} width={416}></Image>
            </div>

            <div className="h-[210px] w-full flex flex-col justify-evenly">

              <div className="h-6 w-full flex justify-between">
                <p className='text-sm font-semibold'>Tech</p>
                <p className='flex font-semibold justify-between items-center text-sm w-[48px]'><Image src={"/star.svg"} alt='no icon found' height={20} width={20}></Image> 5.0</p>
              </div>

              <h1 className='text-2xl font-bold'>Introduction to webflow</h1>
              <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>

              <div className="flex items-center">
                <button className='h-[40px] text-sm  w-[117px] py-2 px-5 border border-black rounded-[5px] '>Enroll Now</button>
                <p className='font-medium ml-6'>$400</p>
              </div>


            </div>
          </div>

        </div>
        <div className="w-full flex justify-center">
          <button className='w-[152px] h-10 text-base border border-black rounded-[5px]'>View All Courses</button>
        </div>




      </div>
      <div className="section5 w-full h-[995px] flex flex-col justify-evenly items-center">

        <div className="h-[109px] w-[768px] flex flex-col justify-between items-center">
          <h1 className='text-5xl font-bold'>Our Team</h1>
          <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>

        <div className="w-full h-[610px] flex flex-wrap justify-around ">

          <div className="card w-[394.67px] h-[272px] flex flex-col justify-between items-center">
            <Image src={"/team/image1.svg"} alt='no icon found' width={80} height={80}></Image>


            <div className="h-[121px] flex flex-col  items-center">
              <h1 className='font-semibold text-xl'>James Nduku</h1>
              <p className='text-lg'>Marketing Coordinator</p>
            </div>

            <div className="w-[100px] h-[24px] flex justify-between">
              <Image src={"/linkedin.svg"} alt='no icon found' width={24} height={24}></Image>
              <Image src={"/x.svg"} alt='no icon found' width={24} height={24}></Image>
              <Image src={"/dribble.svg"} alt='no icon found' width={24} height={24}></Image>
            </div>

          </div>

          <div className="card w-[394.67px] h-[272px] flex flex-col justify-between items-center">
            <Image src={"/team/image2.svg"} alt='no icon found' width={80} height={80}></Image>


            <div className="h-[121px] flex flex-col  items-center">
              <h1 className='font-semibold text-xl'>Joseph Munyambu</h1>
              <p className='text-lg'>Nursing Assistant</p>
            </div>

            <div className="w-[100px] h-[24px] flex justify-between">
              <Image src={"/linkedin.svg"} alt='no icon found' width={24} height={24}></Image>
              <Image src={"/x.svg"} alt='no icon found' width={24} height={24}></Image>
              <Image src={"/dribble.svg"} alt='no icon found' width={24} height={24}></Image>
            </div>

          </div>

          <div className="card w-[394.67px] h-[272px] flex flex-col justify-between items-center">
            <Image src={"/team/image3.svg"} alt='no icon found' width={80} height={80}></Image>


            <div className="h-[121px] flex flex-col  items-center">
              <h1 className='font-semibold text-xl'>Joseph Ngumbau</h1>
              <p className='text-lg'>Medical Assistant</p>
            </div>

            <div className="w-[100px] h-[24px] flex justify-between">
              <Image src={"/linkedin.svg"} alt='no icon found' width={24} height={24}></Image>
              <Image src={"/x.svg"} alt='no icon found' width={24} height={24}></Image>
              <Image src={"/dribble.svg"} alt='no icon found' width={24} height={24}></Image>
            </div>

          </div>

          <div className="card mt-4 w-[394.67px] h-[272px] flex flex-col justify-between items-center">
            <Image src={"/team/image4.svg"} alt='no icon found' width={80} height={80}></Image>


            <div className="h-[121px] flex flex-col  items-center">
              <h1 className='font-semibold text-xl'>Erick Kipkemboi</h1>
              <p className='text-lg'>Web Designer</p>
            </div>

            <div className="w-[100px] h-[24px] flex justify-between">
              <Image src={"/linkedin.svg"} alt='no icon found' width={24} height={24}></Image>
              <Image src={"/x.svg"} alt='no icon found' width={24} height={24}></Image>
              <Image src={"/dribble.svg"} alt='no icon found' width={24} height={24}></Image>
            </div>

          </div>

          <div className="card mt-4 w-[394.67px] h-[272px] flex flex-col justify-between items-center">
            <Image src={"/team/image5.svg"} alt='no icon found' width={80} height={80}></Image>


            <div className="h-[121px] flex flex-col  items-center">
              <h1 className='font-semibold text-xl'>Stephen Kerubo</h1>
              <p className='text-lg'>President of Sales</p>
            </div>

            <div className="w-[100px] h-[24px] flex justify-between">
              <Image src={"/linkedin.svg"} alt='no icon found' width={24} height={24}></Image>
              <Image src={"/x.svg"} alt='no icon found' width={24} height={24}></Image>
              <Image src={"/dribble.svg"} alt='no icon found' width={24} height={24}></Image>
            </div>

          </div>

          <div className="card mt-4 w-[394.67px] h-[272px] flex flex-col justify-between items-center">
            <Image src={"/team/image6.svg"} alt='no icon found' width={80} height={80}></Image>


            <div className="h-[121px] flex flex-col  items-center">
              <h1 className='font-semibold text-xl'>John Leboo</h1>
              <p className='text-lg'>Dog Trainer</p>
            </div>

            <div className="w-[100px] h-[24px] flex justify-between">
              <Image src={"/linkedin.svg"} alt='no icon found' width={24} height={24}></Image>
              <Image src={"/x.svg"} alt='no icon found' width={24} height={24}></Image>
              <Image src={"/dribble.svg"} alt='no icon found' width={24} height={24}></Image>
            </div>

          </div>

        </div>


      </div>
      <div className="section6 h-[830px] w-full flex flex-col items-center justify-evenly" >

        <div className="w-[90%] flex flex-col justify-between">
          <h1 className='text-5xl font-bold'>Customer testimonals</h1>
          <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="h-[417px] w-[90%] flex flex-col justify-between">

          <div className="w-full flex justify-between">

            <div className="card h-[321px] w-[362px]  border border-black flex flex-col p-[32px] justify-between">

              <div className="flex">
                <Image src={"/filledStar.svg"} alt='no icon found' width={20} height={18}></Image>
                <Image src={"/filledStar.svg"} alt='no icon found' width={20} height={18}></Image>
                <Image src={"/filledStar.svg"} alt='no icon found' width={20} height={18}></Image>
                <Image src={"/filledStar.svg"} alt='no icon found' width={20} height={18}></Image>
                <Image src={"/filledStar.svg"} alt='no icon found' width={20} height={18}></Image>

              </div>

              <p className='text-lg w-[90%]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>

              <div className="w-[215px] h-[56px] flex justify-between items-center">
                <div className="w-[56px] h-[56px] rounded-full overflow-hidden">
                  <Image src={"/team/image3.svg"} alt='no icon found' width={56} height={56}></Image>

                </div>
                <div className="">
                  <h2 className='font-semibold text-base'>James Nduku</h2>
                  <p>Software developer</p>
                </div>
              </div>


            </div>

            <div className="card h-[321px] w-[362px]  border border-black flex flex-col p-[32px] justify-between">

              <div className="flex">
                <Image src={"/filledStar.svg"} alt='no icon found' width={20} height={18}></Image>
                <Image src={"/filledStar.svg"} alt='no icon found' width={20} height={18}></Image>
                <Image src={"/filledStar.svg"} alt='no icon found' width={20} height={18}></Image>
                <Image src={"/filledStar.svg"} alt='no icon found' width={20} height={18}></Image>
                <Image src={"/filledStar.svg"} alt='no icon found' width={20} height={18}></Image>

              </div>

              <p className='text-lg w-[90%]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>

              <div className="w-[215px] h-[56px] flex justify-between items-center">
                <div className="w-[56px] h-[56px] rounded-full overflow-hidden">
                  <Image src={"/team/image1.svg"} alt='no icon found' width={56} height={56}></Image>

                </div>
                <div className="">
                  <h2 className='font-semibold text-base'>Erick Kipkemboi</h2>
                  <p>scrum Master</p>
                </div>
              </div>


            </div>

            <div className="card h-[321px] w-[362px]  border border-black flex flex-col p-[32px] justify-between">

              <div className="flex">
                <Image src={"/filledStar.svg"} alt='no icon found' width={20} height={18}></Image>
                <Image src={"/filledStar.svg"} alt='no icon found' width={20} height={18}></Image>
                <Image src={"/filledStar.svg"} alt='no icon found' width={20} height={18}></Image>
                <Image src={"/filledStar.svg"} alt='no icon found' width={20} height={18}></Image>
                <Image src={"/filledStar.svg"} alt='no icon found' width={20} height={18}></Image>

              </div>

              <p className='text-lg w-[90%]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>

              <div className="w-[215px] h-[56px] flex justify-between items-center">
                <div className="w-[56px] h-[56px] rounded-full overflow-hidden">
                  <Image src={"/team/image6.svg"} alt='no icon found' width={56} height={56}></Image>

                </div>
                <div className="">
                  <h2 className='font-semibold text-base'>Stephen Kerubo</h2>
                  <p>UI/UX Designer</p>
                </div>
              </div>


            </div>



          </div>

          <div className="h-[48px] w-full items-center flex justify-between">
            <div className="w-[72px] flex justify-between">
              <div className="w-2 h-2 rounded-full bg-black"></div>
              <div className="w-2 h-2 rounded-full bg-gray-500 "></div>
              <div className="w-2 h-2 rounded-full bg-gray-500 "></div>
              <div className="w-2 h-2 rounded-full bg-gray-500 "></div>
              <div className="w-2 h-2 rounded-full bg-gray-500 "></div>
            </div>

            <div className="w-[111px] flex justify-between">
              <div className="w-12 h-12 rounded-full border border-black flex justify-center items-center">
                <Image src={"/leftarrow.svg"} alt='no icon found' width={24} height={24}></Image>

              </div>
              <div className="w-12 h-12 rounded-full border border-black flex justify-center items-center">
                <Image src={"/rightarrow.svg"} alt='no icon found' width={24} height={24}></Image>

              </div>
            </div>


          </div>

        </div>



      </div>
      <div className="section7 h-[684px] w-[full] p-20 flex flex-col justify-between">

        <div className="flex justify-between h-[82px]">
          <div className="">
            <h1 className='font-semibold text-lg'>Sunscribe to our newsletter</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="w-[400px] h-full flex flex-col justify-between">
            <div className="flex w-full justify-between">
              <input type="text" placeholder='Enter your email' className='p-3 border border-black h-12 w-[265px] rounded-[5px]' />
              <button className='border border-black h-12 w-[119px] rounded-[5px] py-3 px-6'>Subscribe</button>
            </div>
            <p className='text-xs'>By subscribing you agree to with our <span className='border-b border-black'>Privacy Policy</span></p>
          </div>
        </div>

        <div className="h-[225px] flex justify-between">
          <div className="w-[250px] h-[40px]">
            <Image src={"/logo.svg"} alt='no img found' height={40} width={130}></Image>
          </div>

          <div className="h-[225px] w-[250px] flex flex-col justify-between">
            <h2 className='text-base font-semibold'>Courses</h2>
            <ul className='w-full h-[185px] flex flex-col justify-between'>
              <li>Business</li>
              <li>Development</li>
              <li>Technology</li>
              <li>Design</li>
              <li>Programming</li>

            </ul>
          </div>

          <div className="h-[225px] w-[250px] flex flex-col justify-between">
            <h2 className='text-base font-semibold'>Resources</h2>
            <ul className='w-full h-[185px] flex flex-col justify-between'>
              <li>Career</li>
              <li>Resume</li>
              <li>Learning</li>
              <li>Interview Preparation</li>
              <li>Jobs</li>

            </ul>
          </div>

          <div className="h-[225px] w-[250px] flex flex-col justify-between">
            <h2 className='text-base font-semibold'>About Us</h2>
            <ul className='w-full h-[185px] flex flex-col justify-between'>
              <li>Contact</li>
              <li>Help/Support</li>
              <li>FAQ</li>
              <li>Terms and Conditions</li>
              <li>Partners</li>

            </ul>
          </div>

        </div>

        <div className="h-[57px] flex justify-between items-end border-t border-black">
          <ul className='flex w-[564px] justify-between text-sm'>
            <li>2023 Ddsgnr.All right reserved.</li>
            <li className='border-b border-black'>Privacy Policy</li>
            <li className='border-b border-black'>Terms opf Services</li>
            <li className='border-b border-black'>Cookies Settings</li>
          </ul>
          <div className="h-6 w-[132px] flex justify-evenly items-center">
            <Image src={"/fb.svg"} alt='no icon found' height={18} width={10}></Image>
            <Image src={"/insta.svg"} alt='no icon found' height={18} width={18}></Image>
            <Image src={"/x.svg"} alt='no icon found' height={15.3} width={18}></Image>
            <Image src={"/linkedin.svg"} alt='no icon found' height={18} width={18}></Image>
          </div>
        
        </div>

      </div>
    </div>
  )
}
