"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"

interface Products {
  id: number,
  title: string,
  price: number,
  description: string,
  image: string,
  rating: { rate: number, count: number }
  category: string,
}

const ProductGrid = () => {
  const [products, setProducts] = useState<Products[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://fakestoreapi.com/products")
      const data = await response.json()
      setProducts(data)
      setIsLoading(false)
    }
    getData()
  }, [])

  return (
    <div className="xl:w-[80%] w-full">


      {isLoading ? 
      (<div className="flex flex-col items-center grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 p-4 md:grid">
        {Array.from({length:9}).map((_ , index) => (
          <Card key={index} className="overflow-hidden w-[350px] h-[500px] mt-10 bg-gray-400 animate-pulse duration-1000">
         
          </Card>
        ))}
      </div>) : 
      (<div className="flex flex-col items-center grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 p-4 md:grid">
        {products.map((product, index) => (
          <Card key={index} className="overflow-hidden w-[350px] mt-10">
            <CardHeader className="w-full h-[350px] bg-myGray flex justify-center items-center relative">
              <Button className="absolute top-2 right-2 max-sm:right-4 rounded-full" variant={"secondary"} size={"sm"}>
                <Image src={"/icons/WishList.svg"} alt="no icon found" width={24} height={24}></Image>
              </Button>
              <Button className="absolute top-14 right-2 max-sm:right-4 rounded-full" variant={"secondary"} size={"sm"}>
                <Image src={"/icons/eye.svg"} alt="no icon found" width={24} height={24}></Image>
              </Button>
              <Button className="absolute bottom-0 left-0 w-full h-[41px] rounded-none font-medium ">
                Add to cart
              </Button>

              <Image src={product.image} alt="no img found" width={200} height={150}></Image>
            </CardHeader>
            <CardContent>
              <h2 className="font-medium pt-3">{product.title}</h2>
              <p className="pt-2 pb-2">{(product.description).slice(0, 55)}...</p>
              <div className="flex w-[90%] justify-between">
                <p className="text-myPrimary font-medium">{product.price} </p>
                <p className="text-gray-600">{product.category}</p>
              </div>
              <div className="stars w-[140px] flex mt-4">
                {Array.from({ length: (Number((product.rating.rate).toString()[0])) }).map((star, index) => (
                  <Image key={index} src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                ))}


                <p className="text-gray-600">{product.rating.count}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>)}




      <div className="flex justify-center mt-6">
        <button className="px-3 py-1 mx-1 text-gray-500 bg-gray-100 rounded hover:bg-primary_color hover:text-white">
          &lt;&lt;
        </button>
        <button className="px-3 py-1 mx-1 text-gray-500 bg-gray-100 rounded hover:bg-primary_color hover:text-white">
          1
        </button>
        <button className="px-3 py-1 mx-1 text-white bg-primary_color rounded">2</button>
        <button className="px-3 py-1 mx-1 text-gray-500 bg-gray-100 rounded hover:bg-primary_color hover:text-white">
          3
        </button>
        <button className="px-3 py-1 mx-1 text-gray-500 bg-gray-100 rounded hover:bg-primary_color hover:text-white">
          &gt;&gt;
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;
