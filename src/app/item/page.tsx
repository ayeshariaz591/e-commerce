"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { createClient } from "@sanity/client";
import Link from "next/link";
import Swal from "sweetalert2";
import SearchFilter from "../components/SearchAndFilter"; // Import the SearchFilter component

const sanity = createClient({
  projectId: "4d6ygodw",
  dataset: "production",
  token:
    "skQC8xHpi3bvaauMIUf8GL7TokgCfq4BBc6pLHJMXFQCTyDiLrDZlW7mMP938NQAYnGVAd810zkFBqaku527ms1Yi5jwft3QkVtERJuEbHQOJRPImaPW1R3ZbhwbDe4okYtmMPzOZzkF0QUIjZzxcBbR1eSFsnT8lFLfHWZbVKPfbIq4Yo92",
});

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const fetchData = async () => {
    try {
      const query = `*[_type == "product"]{
        _id,
        title,
        price,
        description,
        tags,
        discountPercentage,
        isNew,
        slug,
        "imageUrl": productImage.asset->url,
        productImage
      }`;
      const data: Product[] = await sanity.fetch(query);
      setProducts(data);
      setFilteredProducts(data); // Initialize filtered products with all products
    } catch (error) {
      console.error(error);
    }
  };

  // Initialize cart items from localStorage on mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems") || "[]");
    setCartItems(storedCart);
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();

    // Get current cart items from state (not localStorage)
    const updatedCart = [...cartItems];

    // Check if the product already exists in the cart
    const existingProductIndex = updatedCart.findIndex(
      (item: Product) => item._id === product._id
    );

    if (existingProductIndex !== -1) {
      // Product already exists, increase quantity
      updatedCart[existingProductIndex].quantity += 1;
    } else {
      // New product, add it to the cart
      product.quantity = 1;
      updatedCart.push(product);
    }

    // Update state
    setCartItems(updatedCart);

    // Save updated cart to localStorage
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));

    // Optionally, update the cart state immediately
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.title} added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-8 bg-gradient-to-r from-purple-200 via-pink-200 to-red-100">
      <h1 className="text-5xl font-bold mb-12 text-center text-gray-900">
        Discover Our Exclusive Products
      </h1>

      <SearchFilter
        products={products} // Pass products to the SearchFilter component
        onFilter={setFilteredProducts} // Pass the handler to update filtered products
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="bg-gradient-to-r from-white via-gray-50 to-gray-100 p-6 rounded-lg shadow-2xl hover:shadow-2xl transition-all flex flex-col justify-between h-full border-4 border-transparent hover:border-pink-500"
          >
            <Link href={`/Product/${product.slug.current}`}>
              <div className="w-full h-48 md:h-56 lg:h-64 relative overflow-hidden rounded-lg">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  fill
                  className="object-cover rounded-lg transform hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
            </Link>
            <div className="mt-4 flex-1">
              <h2 className="text-2xl font-semibold text-gray-800 hover:text-pink-600 transition-all">
                {product.title}
              </h2>
              <p className="mt-2 text-sm text-gray-600 line-clamp-2">{product.description}</p>
              <div className="mt-3 text-gray-800">
                <p className="font-bold text-xl">${product.price.toFixed(2)}</p>
                {product.discountPercentage && product.discountPercentage > 0 && (
                  <p className="text-sm text-green-500 font-medium">
                    {product.discountPercentage}% off
                  </p>
                )}
              </div>
              {product.isNew && (
                <p className="mt-2 text-sm text-blue-500 font-semibold">New Arrival!</p>
              )}
            </div>
            <button
              className="mt-4 w-full bg-gradient-to-r from-pink-500 to-red-600 text-white font-semibold py-3 px-5 rounded-lg shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out hover:from-pink-600 hover:to-red-700"
              onClick={(e) => handleAddToCart(e, product)}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;


























