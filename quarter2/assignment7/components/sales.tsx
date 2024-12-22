import React from 'react'
import Image from "next/image";
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import Link from 'next/link';


interface Book {
    id: number,
    name: string,
    type: "non-fiction" | "fiction",
    available: boolean
}


const Sales = async () => {

    const response = await fetch("https://simple-books-api.glitch.me/books/")
    const booksData: Book[] = await response.json()

    return (
        <div className="section2 sm:w-[79%] min-h-[600px] border-b-[0.5px] border-gray-500 m-auto w-[90%] mt-32 mb-20">
            <div className="top text-secondary font-semibold w-[100px] flex justify-between items-center">
                <div className="w-5 h-10 bg-myPrimary rounded-md"></div>
                <h1 className="text-myPrimary">Todays</h1>
            </div>
            <div className="title w-full flex justify-between mt-3">
                <h1 className="text-4xl font-semibold max-sm:text-3xl">Winter Sales On Books</h1>


            </div>
            <div className="items-box w-full flex justify-between mt-4 flex-wrap max-sm:justify-center">
                {booksData?.map((book, index) => (
                    <Card key={index} className="overflow-hidden w-[270px] mt-10 relative">
                        {!book.available && <div className="layer h-full w-full bg-black absolute top-0 left-0  z-20 opacity-20"></div>}

                        <CardHeader className="w-[270px] h-[250px] bg-myGray flex justify-center items-center relative">
                            <Button className="absolute top-2 left-2 bg-myPrimary" size={"sm"}>{Math.floor(Math.random()*100)}%</Button>
                            <Button className="absolute top-2 right-2 max-sm:right-4 rounded-full" variant={"secondary"} size={"sm"}>
                                <Image src={"/icons/WishList.svg"} alt="no icon found" width={24} height={24}></Image>
                            </Button>
                            <Button className="absolute top-14 right-2 max-sm:right-4 rounded-full" variant={"secondary"} size={"sm"}>
                                <Image src={"/icons/eye.svg"} alt="no icon found" width={24} height={24}></Image>
                            </Button>
                            <Button className={`${book.available ? "bg-black" : "bg-gray-500"} absolute bottom-0 left-0 w-full h-[41px] rounded-none font-medium`}>
                                {book.available ? "Add to cart" : "Out Of Stock"}
                            </Button>

                            <Image src={"/img/book.svg"} alt="no img found" width={190} height={180}></Image>
                        </CardHeader>
                        <CardContent>
                            <h2 className="font-medium pt-3">{book.name}</h2>
                            <p className="text-myPrimary font-medium">{book.type}</p>
                            <div className="stars w-[140px] flex">
                                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>

                                <p className="text-gray-600">({Math.floor(Math.random()*100)})</p>
                            </div>
                        </CardContent>
                    </Card>

                ))}


            </div>
            <div className="w-full flex justify-center">
                <Button className="font-medium bg-myPrimary mt-10 mb-10 h-[56px] w-[234px]"><Link href={"/products"}>View All Products</Link></Button>

            </div>

        </div>
    )
}

export default Sales