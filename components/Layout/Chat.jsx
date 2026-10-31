'use client'
import { handleCallClick, handleWhatsappClick } from "@/lib/track";
import { PhoneCall } from "lucide-react";
import React from "react";

const Whatsapp = () => {
  return (
    <>
      {/* WhatsApp Floating Button (Right side) */}
      <a onClick={() => handleWhatsappClick({ source: "Website home page", obj: "N/A" })}
        href="https://wa.me/+918810422935"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp "
        className="fixed bottom-5 right-4 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition animate-bounce"
      >
        <img src="/whatsapp.png" className="h-8 w-8" alt="loading" />
      </a>

      {/* Call Floating Button (Left side) */}
      <a onClick={() => handleCallClick({ source: "Website home page", obj: "N/A" })}
        href="tel:+918810422935"
        aria-label="Call us"
        className="fixed bottom-21 right-4 z-50 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition animate-bounce"
      >
        <PhoneCall size={30} />
      </a>
    </>
  );
};

export default Whatsapp;