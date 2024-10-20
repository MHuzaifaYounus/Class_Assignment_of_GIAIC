import { FaGithub, FaTwitter, FaFacebook, FaLinkedin, FaPhone, FaMailBulk } from 'react-icons/fa';
import Link from 'next/link'
import Image from 'next/image'
import EducationBar from "./components/educationBar"


export default function Home() {

  const skills = {
    "TypeScript": "75%",
    "JavaScript": "80%",
    "GitHub": "84%",
    "UI/UX": "86%",
    "React": "54%",
    "NextJS": "47%",
  }
  return (
    <div>
      {/* hero section  */}
      <div id='hero' className="h-[91vh]  w-full flex justify-evenly items-center relative overflow-x-hidden max-xl:flex-col-reverse max-xl:h-[1200px] max-md:h-[1000px]">
        <div className="h-[500px]  w-2/5 max-xl:w-[90%] max-[450px]:h-[40%] ">
          <h1 className='text-5xl max-[450px]:text-3xl'>Hi, I am <span>H</span>uzaifa <span>Y</span>ounus</h1>
          <h2 className='pt-3 text-3xl max-[450px]:text-xl'><span>Front End Developer</span></h2>
          <p className='pt-5 text-xl max-[450px]:text-lg'>Hi, I&apos;m Muhammad Huzaifa Younus  a creative web developer with a passion for building dynamic, user-friendly applications.Let&apos;s create something amazing together!</p>
          <div className="w-52 text-3xl flex cursor-pointer mt-8 justify-between max-[450px]:w-[90%]">
            <Link className='transition hover:scale-110 hover:text-primary' href={"https://github.com/MHuzaifaYounus"}> <FaGithub /></Link>
            <Link className='transition hover:scale-110 hover:text-primary' href={"#"}> <FaTwitter /></Link>
            <Link className='transition hover:scale-110 hover:text-primary' href={"https://www.facebook.com/profile.php?id=61556341636932"}> <FaFacebook /></Link>
            <Link className='transition hover:scale-110 hover:text-primary' href={"https://l.facebook.com/l.php?u=https%3A%2F%2Flinkedin.com%2Fin%2Fhuzaifayounus14%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR17fl5VkxFhFDBUOSSirbKx9sgeJOdkcGdT_WSFrWpAnz4_xHP1k7FgBIg_aem_fN6-DrklAlDSJkU38f4png&h=AT1bNTsSgSI7aH5L4jVb2e8efI-z_A1zwC1yeZOcc28yG5ijpIAPmub6TIQNkuYDGcQ80ZxFNKkm6CH0i_9Kj4BK4LBE0XHHz58-Ai3QDicoVvs2xmEmnS3U_m8TldSP4JqH"}>  <FaLinkedin /></Link>
          </div>
          <div className="h-20 w-[300px] flex justify-between items-center mt-8 max-[450px]:mt-3 max-[450px]:w-full">
            <button className='px-8 py-3 border border-primary rounded-xl text-white cursor-pointer transition-all bg-primary hover:bg-transparent'><Link href={"/contact"}>Let&apos;s Talk</Link></button>
            <button className='px-8 py-3 border border-primary rounded-xl text-white cursor-pointer transition-all bg-transparent hover:bg-primary'><Link href={"/static/huzaifacv.pdf"}>Resume</Link></button>
          </div>
        </div>
        <div className=" w-[40%]   mt-[-90px] flex justify-center items-start max-xl:w-[90%] max-xl:pb-10 max-[450px]:pt-10 ">
          <Image className='rounded-full border-4 border-primary 
        ' src={"/static/main.png"} alt='no found' width={500} height={500}></Image>
        </div>
      </div>

      {/* Projects -- */}
      <div id='projects' className="pt-10 pb-52 max-sm:pb-20">
        <div className="min-h-[700px] max-md:min-h-[1500px] border border-primary w-4/5 rounded-xl m-auto shadow-lg shadow-primary max-[450px]:w-full max-md:pb-10">
          <div className="title">
            <h1><span>MY</span> <span>P</span>ORTFOLIO</h1>
          </div>
          <div className="container pb-10 max-sm:pb-1">
            <div className="w-[300px] h-[400px] transition-all border border-primary rounded-xl max-[1110px]:mt-10">
              <div className="h-[50%] w-full overflow-hidden">
                <Image className="transition rounded-xl hue-rotate-[120deg] hover:scale-110" src={"/static/30days.png"} alt="no found" width={300} height={300}></Image>
              </div>
              <div className="text-left pt-5 h-[55%] m-auto w-[90%] relative">
                <h2 className="text-lg"><span>30 Projects</span></h2>
                <p className="mt-5 transition">30 days of 30 projects challenge given by Sir Asharib Ali</p>
                <button className="absolute bottom-8 left-0 px-5 py-2 border border-primary bg-primary rounded-xl text-white cursor-pointer transition mt-5 hover:bg-transparent"><Link href={"https://30-days-of-projects.vercel.app"}>Read More</Link></button>
              </div>

            </div>
            <div className="w-[300px] h-[400px] transition-all border border-primary rounded-xl max-[1110px]:mt-10">
              <div className="h-[50%] w-full overflow-hidden">
                <Image className="transition rounded-xl hue-rotate-[120deg] hover:scale-110" src={"/static/ts.webp"} alt="no found" width={300} height={300}></Image>
              </div>
              <div className="text-left pt-5 h-[55%] m-auto w-[90%] relative">
                <h2 className="text-lg"><span>100 Days</span></h2>
                <p className="mt-5 transition">100 Days of Typescript challenge given by Sir Asharib Ali</p>
                <button className="absolute bottom-8 left-0 px-5 py-2 border border-primary bg-primary rounded-xl text-white cursor-pointer transition mt-5 hover:bg-transparent"><Link href={"https://github.com/MHuzaifaYounus/100_Days_Coding"}>Read More</Link></button>
              </div>

            </div>
            <div className="w-[300px] h-[400px] transition-all border border-primary rounded-xl max-[1110px]:mt-10">
              <div className="h-[50%] w-full overflow-hidden">
                <Image className="transition rounded-xl hue-rotate-[120deg] hover:scale-110" src={"/static/hackathon.png"} alt="no found" width={300} height={300}></Image>
              </div>
              <div className="text-left pt-5 h-[55%] m-auto w-[90%] relative">
                <h2 className="text-lg"><span>Hackathon</span></h2>
                <p className="mt-5 transition">A Resume Builder Hackarhon given by Sir Ameen Alam</p>
                <button className="absolute bottom-8 left-0 px-5 py-2 border border-primary bg-primary rounded-xl text-white cursor-pointer transition mt-5 hover:bg-transparent"><Link href={"https://huza-resume-maker.vercel.app/Milestone-4-5/index.html"}>Read More</Link></button>
              </div>

            </div>


          </div>
        </div>
      </div>

      {/* About  */}
      <div id='about' className="pt-10 pb-52 max-sm:pb-20">
        <div className="max-md:min-h-[1350px] border border-primary w-4/5 min-h-[800px] rounded-xl m-auto shadow-lg shadow-primary max-[450px]:w-full max-md:pb-10">
          <div className="title">
            <h1>ABOUT <span>ME</span></h1>
          </div>
          <div className="container">
            <div className="h-[700px] w-[40%] max-[1400px]:w-full max-[450px]:w-[90%]">
              <h1 className="text-3xl text-center pt-5 border-b border-b-primary pb-2"><span>E</span>ducation</h1>
              <div className="flex w-full">
                <EducationBar></EducationBar>

                <div className="h-[600px] w-4/5 max-[450px]:pl-4">
                  <h1 className="pt-[45px] text-xl text-start max-[450px]:text-lg">Matric 2011 - 2023</h1>
                  <h1 className="pt-[97px] text-xl text-start max-[450px]:text-lg">Intermediate 2023 - 2025</h1>
                  <h1 className="pt-[97px] text-xl text-start max-[450px]:text-lg">SoftWare Engineering from NED 2025 - ..</h1>
                  <h1 className="pt-[97px] text-xl text-start max-[450px]:text-lg">Comming Soon..</h1>
                </div>
              </div>
            </div>

            <div className="h-[700px] max-sm:h-[600px] w-[40%] max-[1400px]:w-full">
              <h1 className="text-3xl text-center pt-5 border-b border-b-primary pb-2 mb-10"><span>S</span>kills</h1>
              {Object.entries(skills).map((skill, index) => {
                return <div key={index} className="h-[60px] w-full mt-5">
                  <div className="h-[30%] w-[90%] flex m-auto justify-between text-xl">
                    <h3>{skill[0]}</h3>
                    <h3>{skill[1]}</h3>

                  </div>
                  <div className="h-[20px] w-[90%] border border-primary rounded-[100px] m-auto mt-2">
                    <div className="h-full bg-primary rounded-[100px]"
                      style={{ width: skill[1] }}></div>
                  </div>

                </div>
              })}
            </div>
          </div>
        </div>
      </div>

      {/* contact */}
      <div id='contact' className="pt-10  pb-52 max-sm:pb-20">
        <div className="max-md:min-h-[1250px] border border-primary w-4/5 min-h-[800px] rounded-xl m-auto shadow-lg shadow-primary max-[450px]:w-full max-md:pb-10">
          <div className="title">
            <h1>Let<span>&apos;</span>s Discuss <span>Your</span> Project</h1>
          </div>
          <div className="container max-[1400px]:flex-col">

            <div className="h-[500px] w-[30%] max-[1400px]:pt-[50px] max-[1400px]:w-[90%]">
              <h1 className='text-3xl max-[450px]:text-3xl'>Contact <span>Me</span></h1>

              <div className="h[40px] mt-[50px] flex justify-between items-center w-[350px] max-[450px]:w-[90%]">
                <div className="h-[50px] w-[50px] border border-primary rounded-full text-2xl text-primary flex justify-center items-center">
                  <FaMailBulk></FaMailBulk>
                </div>
                <h2 className='text-xl'>huzaifabuz@gmail.com</h2>
              </div>
              <div className="h[40px] mt-[50px] flex justify-between items-center w-[350px] max-[450px]:w-[90%]">
                <div className="h-[50px] w-[50px] border border-primary rounded-full text-2xl text-primary flex justify-center items-center">
                  <FaPhone></FaPhone>
                </div>
                <h2 className='text-xl'>+923212875227</h2>

              </div>

              <div className="w-52 text-3xl flex cursor-pointer mt-[100px] ml-2 justify-between">
                <Link className='transition hover:text-primary hover:scale-110' href={"https://github.com/MHuzaifaYounus"}> <FaGithub /></Link>
                <Link className='transition hover:text-primary hover:scale-110' href={"#"}> <FaTwitter /></Link>
                <Link className='transition hover:text-primary hover:scale-110' href={"https://www.facebook.com/profile.php?id=61556341636932"}> <FaFacebook /></Link>
                <Link className='transition hover:text-primary hover:scale-110' href={"https://l.facebook.com/l.php?u=https%3A%2F%2Flinkedin.com%2Fin%2Fhuzaifayounus14%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR17fl5VkxFhFDBUOSSirbKx9sgeJOdkcGdT_WSFrWpAnz4_xHP1k7FgBIg_aem_fN6-DrklAlDSJkU38f4png&h=AT1bNTsSgSI7aH5L4jVb2e8efI-z_A1zwC1yeZOcc28yG5ijpIAPmub6TIQNkuYDGcQ80ZxFNKkm6CH0i_9Kj4BK4LBE0XHHz58-Ai3QDicoVvs2xmEmnS3U_m8TldSP4JqH"}>  <FaLinkedin /></Link>
              </div>
            </div>

            <div className="h-[650px] w-1/2 flex flex-col pt-2 max-[1400px]:w-[90%] [&_label]:text-white [&_label]:mt-[50px] [&_label]:block [&_input]:border [&_input]:border-primary [&_input]:h-[50px] [&_input]:w-[90%] [&_input]:m-auto [&_input]:mt-2 [&_input]:outline-none [&_input]:rounded-xl [&_input]:text-white [&_input]:pl-2 [&_input]:max-[450px]:w-full [&_input]:bg-primary/50">

              <label >Name:</label>
              <input type="text" id="name" name="name" required placeholder='Enter your name'></input>
              <label>Email:</label>
              <input type="email" id="email" name="email" required placeholder='Enter your email'></input>
              <label >Message:</label>
              <textarea className='max-[450px]:w-full border border-primary h-[140px] w-[90%] m-auto mt-2 outline-none rounded-xl text-white p-2 bg-primary/50' id="message" name="message" required placeholder='Enter your message'></textarea>
              <input className="w-[90%] py-2 px-0 outline-none text-xl text-white mt-2 rounded-2xl transition cursor-pointer bg-primary hover:bg-transparent " type="submit" value="Send Message"></input>



            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
