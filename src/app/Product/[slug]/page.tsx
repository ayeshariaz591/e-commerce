import Services from "@/app/components/Services";
import client from "@/sanity/lib/client";



import { urlFor } from "@/sanity/lib/image";

import Image from "next/image";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    `*[_type == "product" && slug.current == $slug][0]{
      _id,
      title,
      price,
      description,
      tags,
      discountPercentage,
      isNew,
      "imageUrl": productImage.asset->url,
      productImage
    }`,
    { slug }
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);

  return (
    <div>
      <div className="bg-gray-50 min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200 flex flex-col lg:flex-row">
            {/* Product Image */}
            <div className="relative w-full lg:w-1/2 h-96 lg:h-auto mb-6 lg:mb-0">
              <Image
                src={urlFor(product.imageUrl).url()}
                alt={product.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              {product.isNew && (
                <span className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  New
                </span>
              )}
            </div>

            {/* Product Details */}
            <div className="w-full lg:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                  {product.title}
                </h1>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-semibold text-green-600">
                    ${product.price}
                  </span>
                  {product.discountPercentage &&
                    product.discountPercentage > 0 && (
                      <span className="text-sm text-red-500 font-medium">
                        {product.discountPercentage}% off
                      </span>
                    )}
                </div>

                <p className="text-gray-600 text-base mb-6">
                  {product.description}
                </p>

                {product.tags?.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-gray-700">Tags:</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {product.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <button
                className="mt-4 w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg
              hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <Services />
    </div>
  );
}

