
import Header from "@/components/header";
import Image from "next/image";
import {Libre_Bodoni} from "next/font/google";

const mainFont = Libre_Bodoni({
  weight: "400",
  subsets:["latin"]
});
export default function Home() {
  return (
    <div className="main w-full">
      <Header />
      <div className="hero flex justify-evenly items-center w-full h-[825.56px]">
        <div className={`hero-left flex flex-col justify-evenly w-1/2 h-[573.59] ${mainFont.className}`}>
          <h1 className={`font-bold text-[37.84px] w-[472.97] `}>IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
          <p className="w-[789.9px] font-medium text-[29.24px] text-primary">An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>
          <button className="w-[247.67px] h-[49.2px] rounded-[8.6px] p-[8.6px] bg-primary font-medium text-[25.8px] leading-[32.25px] text-white">Explore Now</button>

        </div>
        <div className="hero-right overflow-hidden relative flex items-center justify-center w-[421.38px] h-[573.59] bg-primary rounded-tl-[128.99px] rounded-br-[128.99px]">
          <Image className="absolute top-0 left-0" src="/slider.png" alt="no img found" width={421.38} height={573.59} />
          <div className="layer w-[380.1px] h-[525.43px] rounded-tl-[128.99px] rounded-br-[128.99px] border-[0.86px] border-white z-10"></div>


        </div>
      </div>
    </div>
  );
}
