import Sales from "@/components/sales";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
   <div>
    <div className="hero w-full md:w-[80%] bg-green-500 h-[500px] m-auto flex flex-col justify-evenly items-center hero_bg">
      <Button className="w-40 h-7 border border-black" variant={"secondary"}>Quality Products</Button>
      <h1 className="md:text-6xl text-4xl font-bold sm:w-[500px] w-[80%] text-center text-black ">The Products That You Want!</h1>
      <Button className="w-40 h-12 bg-myPrimary text-white" variant={"destructive"}> <Link href={"/products"}>See Products</Link> </Button>

    </div>
   <Sales />

   </div>
  );
}
