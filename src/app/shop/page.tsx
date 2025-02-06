"use client";

import Image from "next/image";
import Link from "next/link";
import Services from "../components/Services";
import ProductCards from "../item/page";

const Shop = () => {
  return (
    <div className="w-full relative">
      {/* Background Image with Navigation */}
      <div className="relative w-full h-[316px]">
        <Image
          src="/Rectangle 1.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-8">
          <h2 className="font-[Poppins] font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#000000]">
            Shop
          </h2>
          <div className="flex justify-center items-center gap-4 mt-2">
            <Link
              href="/"
              className="font-[Poppins] font-medium text-sm sm:text-base md:text-lg lg:text-xl text-[#000000]"
            >
              Home
            </Link>
            <span className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-[#000000]">
              &#8594;
            </span>
            <Link
              href="/"
              className="font-[Poppins] font-light text-sm sm:text-base md:text-lg lg:text-xl text-[#000000]"
            >
              Shop
            </Link>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full bg-white py-8">
        <div className="w-full max-w-screen-xl mx-auto px-4">
          <div className="w-full flex justify-center items-center">
            <p className="font-[Poppins] font-[400] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[28px] text-[#000000]">
              Explore our wide range of products that suit every need and style.
              Shop now!
            </p>
          </div>
        </div>
      </div>

      {/* Products */}
      <ProductCards />

      <Services />
    </div>
  );
};

export default Shop;
