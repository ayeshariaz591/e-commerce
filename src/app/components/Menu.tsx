
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsPersonExclamation } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { GoHeart } from "react-icons/go";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex items-center justify-between p-4">
      {/* Logo/Menu Icon */}
      <Image
        src="/menu.png"
        alt="logo"
        width={28}
        height={28}
        className="cursor-pointer lg:hidden"
        onClick={() => setOpen((prev) => !prev)}
      />

      {/* Menu Links (Mobile View) */}
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10 lg:hidden">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
      )}

      {/* Desktop Menu Links */}
      <div className="hidden lg:flex gap-8 items-center">
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* Icons (Cart, Heart, Profile, Search) */}
      <div className="flex items-center gap-4">
        <BsPersonExclamation className="text-2xl text-black cursor-pointer hover:text-gray-600" />
        <FiSearch className="text-2xl text-black cursor-pointer hover:text-gray-600" />
        <GoHeart className="text-2xl text-black cursor-pointer hover:text-gray-600" />
        <Link href="/cart">
          <AiOutlineShoppingCart className="text-2xl text-black cursor-pointer hover:text-gray-600" />
        </Link>
      </div>
    </div>
  );
};

export default Menu;















// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { BsPersonExclamation } from "react-icons/bs";
// import { FiSearch } from "react-icons/fi";
// import { GoHeart } from "react-icons/go";

// const Menu = () => {
//   const [open, setOpen] = useState(false);
//   return (
//     <div>
//       <Image
//         src="/menu.png"
//         alt="logo"
//         width={28}
//         height={28}
//         className="cursor-pointer"
//         onClick={() => setOpen((prev) => !prev)}
//       />
//       {open && (
//         <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
//           <Link href="/">Home</Link>
//           <Link href="/shop">Shop</Link>
//           <Link href="/blog">Blog</Link>
//           <Link href="/contact">Contact</Link>
//         </div>
        
//       )}
//        <div className="flex items-center gap-4">
//             <BsPersonExclamation className="text-2xl text-black cursor-pointer hover:text-gray-600" />
//             <FiSearch className="text-2xl text-black cursor-pointer hover:text-gray-600" />
//             <GoHeart className="text-2xl text-black cursor-pointer hover:text-gray-600" />
//             <Link href="/cart">
//               <AiOutlineShoppingCart className="text-2xl text-black cursor-pointer hover:text-gray-600" />
//             </Link>
            
//           </div>
//     </div>
//   );
// };

// export default Menu;
