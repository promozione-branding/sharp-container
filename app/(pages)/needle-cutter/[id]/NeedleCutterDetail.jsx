"use client";

import PopForm from "@/components/PopForm";
import { handleCallClick, handleWhatsappClick } from "@/lib/track";
import { category } from "@/productData";
import React, { useState } from "react";

const NeedleCutterDetail = ({ productId }) => {
  const [open, setOpen] = useState(false);

  // Find product across all categories
  const product = category
    .flatMap((cat) => cat.products)
    .find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Product not found</h1>
        <p className="text-gray-500 mt-2">
          Sorry, we couldn't find the product you're looking for.
        </p>
      </div>
    );
  }

  const { productName, description, specs, image } = product;

  const renderDescription = (desc) => {
    return desc.map((part, index) => {
      switch (part.type) {
        case "h2":
          return (
            <h2
              key={index}
              className="text-2xl md:text-3xl font-bold text-blue-700  md:mb-4 border-b pb-2"
            >
              {part.text}
            </h2>
          );

        case "ul":
          return (
            <ul
              key={index}
              className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed"
            >
              {part.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          );

        default:
          return null;
      }
    });
  };

  return (
    <div className="bg-gray-50 py-8 px-3 sm:px-4 md:py-12 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 bg-white p-4 sm:p-6 md:p-10 rounded-2xl shadow-lg">
          {/* Product Image */}
          <div className="flex justify-center items-center">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full max-w-sm sm:max-w-md object-contain rounded-xl"
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              {productName}
            </h1>

            {/* Specs */}
            <div className="mt-8 mb-8 overflow-x-auto">
              <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
                <tbody className="bg-white divide-y divide-gray-200">
                  {specs.map((spec, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-3 sm:px-6 py-2 text-sm font-medium text-gray-600 w-2/5 sm:w-1/3 align-top">
                        {spec.label}
                      </td>
                      <td className="px-3 sm:px-6 py-2 text-sm text-gray-800 font-semibold border-l border-gray-200 break-words">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* CTA Buttons */}
            <div className="grid grid-cols-1 sm:flex sm:flex-wrap gap-3 sm:gap-4">
              <a onClick={() => handleCallClick({ source: "Website product page", obj: productName })}
                href="tel:8810422935"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-blue-600 text-center hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                Call Now
              </a>

              <a onClick={() => handleWhatsappClick({ source: "Website product page", obj: productName })}
                href="https://wa.me/+918810422935"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                WhatsApp Us
              </a>

              <button
                onClick={() => setOpen((prev) => !prev)}
                className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-4 md:mt-14 bg-white p-4 sm:p-6 md:p-10 rounded-2xl shadow-md">
          {renderDescription(description)}
        </div>
      </div>

      {/* popupform  */}

      <PopForm open={open} setOpen={setOpen} />
    </div>
  );
};

export default NeedleCutterDetail;
