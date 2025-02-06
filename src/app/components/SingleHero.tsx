"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

const SingleHero = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto h-auto bg-[#FFFFFF] py-8">
      {/* Main Container for Images */}
      <div className="flex flex-col sm:flex-row items-start gap-6 px-6">
        {/* Small Images Section */}
        <div className="flex flex-wrap sm:flex-col gap-4">
          {/* Image 1 */}
          <div className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px]">
            <div className="w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]">
              <Image
                src="/Outdoor sofa set 2.png"
                alt="Outdoor sofa set"
                width={300}
                height={200}
                layout="responsive"
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
          </div>

          {/* Image 2 */}
          <div className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px]">
            <div className="w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]">
              <Image
                src="/Outdoor sofa set_2 1.png"
                alt="Outdoor sofa set 2"
                width={300}
                height={200}
                layout="responsive"
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
          </div>

          {/* Image 3 */}
          <div className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px]">
            <div className="w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]">
              <Image
                src="/Stuart sofa 1.png"
                alt="Stuart sofa"
                width={300}
                height={200}
                layout="responsive"
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
          </div>

          {/* Image 4 */}
          <div className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px]">
            <div className="w-full h-full rounded-[10px] border-[#D9D9D9] bg-[#F9F1E7]">
              <Image
                src="/Maya sofa three seater (1) 1.png"
                alt="Maya sofa three seater"
                width={300}
                height={200}
                layout="responsive"
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
          </div>
        </div>

        {/* Large Image and Content Section */}
        <div className="flex flex-col md:flex-row gap-6 w-full">
          {/* Large Image Section */}
          <div className="w-full sm:w-[700px] md:w-[800px] h-auto rounded-[10px] bg-[#F9F1E7] p-2">
            <Image
              src="/Asgaard sofa 3.png"
              alt="Asgaard sofa"
              width={1000}
              height={800}
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-start gap-4 ml-20">
            {/* Heading */}
            <h1 className="font-[Poppins] font-[400] text-[42px] leading-[63px] text-[#000000]">
              Asgaard Sofa
            </h1>

            {/* Price */}
            <p className="font-[Poppins] font-[500] text-[24px] leading-[36px] text-[#9F9F9F]">
              Rs. 250,000.00
            </p>

            {/* Stars and Reviews Section */}
            <div className="flex items-center gap-2">
              {/* Stars */}
              <div className="flex gap-2">
                <FaStar className="w-[20px] h-[20px] text-[#FFC700]" />
                <FaStar className="w-[20px] h-[20px] text-[#FFC700]" />
                <FaStar className="w-[20px] h-[20px] text-[#FFC700]" />
                <FaStar className="w-[20px] h-[20px] text-[#FFC700]" />
                <FaStar className="w-[20px] h-[20px] text-[#FFC700]" />
              </div>
              <div className="w-[1px] h-full bg-[#9F9F9F] mt-2 self-end"></div>
              <p className="font-[Poppins] font-[400] text-[13px] leading-[19.5px] text-[#9F9F9F] pt-1">
                5 Customer Reviews
              </p>
            </div>

            {/* Product Description */}
            <p className="w-[424px] font-[Poppins] font-[400] text-[13px] leading-[19.5px] text-[#9F9F9F] mt-4">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>

            {/* Size Selection Section */}
            <div className="flex flex-col gap-2">
              <p className="font-[Poppins] font-[400] text-[14px] leading-[21px] text-[#9F9F9F]">
                Size
              </p>
              <div className="flex items-center gap-4">
                <button className="w-[40px] h-[40px] rounded-[5px] bg-[#B88E2F] text-[#ffffff] font-[Poppins] text-[13px] leading-[19.5px]">
                  L
                </button>
                <button className="w-[40px] h-[40px] rounded-[5px] bg-[#F9F1E7] text-[#000000] font-[Poppins] text-[13px] leading-[19.5px]">
                  XL
                </button>
                <button className="w-[40px] h-[40px] rounded-[5px] bg-[#F9F1E7] text-[#000000] font-[Poppins] text-[13px] leading-[19.5px]">
                  XS
                </button>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <div className="w-[123px] h-[64px] flex items-center justify-between rounded-[10px] border-[1px] border-[#9F9F9F] bg-[#ffffff] px-4">
                <button
                  onClick={decreaseQuantity}
                  className="font-[Poppins] font-[400] text-[20px] text-[#000000]"
                >
                  -
                </button>
                <p className="font-[Poppins] font-[500] text-[16px] text-[#000000]">
                  {quantity}
                </p>
                <button
                  onClick={increaseQuantity}
                  className="font-[Poppins] font-[400] text-[20px] text-[#000000]"
                >
                  +
                </button>
              </div>
            </div>

            {/* Buttons Section */}
            <div className="flex items-center gap-4 mt-4">
              {/* Add to Cart Button */}
              <button className="w-[215px] h-[64px] rounded-[15px] border-[1px] border-[#000000]">
                <p className="font-[Poppins] font-[400] text-[20px] text-[#000000]">
                  Add To Cart
                </p>
              </button>

              {/* Compare Button */}
              <button className="w-[215px] h-[64px] rounded-[15px] border-[1px] border-[#000000]">
                <p className="font-[Poppins] font-[400] text-[20px] text-[#000000]">
                  Compare
                </p>
              </button>
            </div>
            <hr className="mt-6 border-[#D9D9D9]" />
            <div className="mt-4 flex flex-col gap-2">
              {/* SKU */}
              <div className="flex justify-start items-center gap-2">
                <p className="text-[16px] font-[Poppins] text-[#000] w-[80px]">
                  SKU
                </p>
                <p className="text-[16px] font-[Poppins] text-[#000]">
                  : SS001
                </p>
              </div>
              {/* Category */}
              <div className="flex justify-start items-center gap-2">
                <p className="text-[16px] font-[Poppins] text-[#000] w-[80px]">
                  Category
                </p>
                <p className="text-[16px] font-[Poppins] text-[#000]">
                  : Sofas
                </p>
              </div>
              {/* Tags */}
              <div className="flex justify-start items-center gap-2">
                <p className="text-[16px] font-[Poppins] text-[#000] w-[80px]">
                  Tags
                </p>
                <p className="text-[16px] font-[Poppins] text-[#000]">
                  : Sofa, Chair, Home, Shop
                </p>
              </div>
              {/* Share */}
              <div className="flex justify-start items-center gap-2">
                <p className="text-[16px] font-[Poppins] text-[#000] w-[80px]">
                  Share
                </p>
                <p className="text-[16px] font-[Poppins] text-[#000] flex gap-2">
                  : <RiFacebookCircleFill className="text-[20px]" />
                  <FaLinkedin className="text-[20px]" />
                  <AiFillTwitterCircle className="text-[20px]" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Responsive Tab for Description, Additional Info, Reviews */}
      <div className="w-full flex flex-col items-center bg-white mt-7 border-t">
        {/* Tabs */}
        <div className="flex justify-center items-center gap-8 px-6 py-4">
          <h4 className="font-[Poppins] font-[500] text-[24px] text-black">
            Description
          </h4>
          <h4 className="font-[Poppins] font-[400] text-[24px] text-[#9F9F9F]">
            Additional Information
          </h4>
          <h4 className="font-[Poppins] font-[400] text-[24px] text-[#9F9F9F]">
            Reviews [5]
          </h4>
        </div>

        {/* Description Content */}
        <div className="w-[90%] max-w-[1026px] mt-4">
          <p className="font-[Poppins] font-[400] text-[16px] leading-[24px] text-justify text-[#9F9F9F]">
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p className="font-[Poppins] font-[400] text-[16px] leading-[24px] text-justify text-[#9F9F9F] mt-4">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage-styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine-tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </div>
      </div>

      {/* Cloud Sofa Section */}
      <div className="w-full flex flex-row justify-center items-center gap-6 mt-6">
        <div className="flex-shrink-0">
          <Image
            src="/cloudsofa.jpg"
            alt="Cloud Sofa"
            width={600}
            height={400}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/cloudsofa2.jpg"
            alt="Cloud Sofa 2"
            width={600}
            height={400}
            className="object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="w-full bg-white py-8 border-t">
        <h2 className="text-center font-[Poppins] font-[500] text-[36px] leading-[54px] text-black">
          Related Products
        </h2>

        {/* Grid layout for images */}
        <div className="w-full max-w-screen-xl mx-auto px-4 mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Image Cards */}
            <div className="flex justify-center">
              <Image
                src="/Featured Products.png"
                alt="Product 1"
                width={285}
                height={446}
                className="object-cover"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/Featured Products.jpg"
                alt="Product 2"
                width={285}
                height={446}
                className="object-cover"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/Featured Products (2).png"
                alt="Product 3"
                width={285}
                height={446}
                className="object-cover"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/Featured Products (3).png"
                alt="Product 4"
                width={285}
                height={446}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-8">
          <button className="px-8 py-2 border-[1px] border-[#B88E2F] bg-white font-[Poppins] font-[600] text-[16px] leading-[24px] text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white transition">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleHero;



