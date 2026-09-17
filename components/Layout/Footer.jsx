"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  X,
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
const Footer = () => {
  const [imageShow, setImageShow] = useState(false);
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Useful Links",
      links: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Product", href: "/sharp-container" },
        { label: "Needle Cutter", href: "/needle-cutter" },
        { label: "Sharp Container", href: "/sharp-container" },
        { label: "Contact Us", href: "/contact" },
        { label: "Sitemap", href: "/sitemap" },
      ],
    },
  ];

  if (imageShow) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
        onClick={() => setImageShow(false)}
      >
        <div
          className="relative max-w-3xl max-h-[90vh]  p-2 rounded-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setImageShow(false)}
            className="absolute -top-3 -right-3 z-10 bg-white text-black rounded-full p-1 shadow-lg"
          >
            <X size={24} />
          </button>
          <Image
            src={"/image/cert.webp"}
            width={800}
            height={1100}
            alt="TRUST-ELITE Certificate"
            className="object-contain w-full h-full max-h-[85vh]"
          />
        </div>
      </div>
    );
  }

  const pathname = usePathname();
  const adminLayout = pathname.startsWith("/admin")
  if (adminLayout) return null;

  return (
    <footer className="bg-[#0971CE] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-3xl md:text-2xl font-teko font-semibold">About Us</h3>
            <p className="text-gray-100 text-lg">
             Established in 1988, Sangam Plastic Industries Private Limited has been a leading <Link className="font-bold" href="https://sharpcontainermanufacturer.com/sharp-container"> Sharp Container Manufacturer</Link>, specializing in the production of high-quality cleaning and housekeeping equipment for commercial, industrial, and institutional use.
            </p>
          </motion.div>

          {/* contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-3xl md:text-2xl font-teko font-semibold">Contact Us</h3>
            <p className="text-gray-100 text-lg">
              Office Address - 110, Satya Bhawan, 36 Community Center, Wazirpur
              Industrial Area, New Delhi-110052
            </p>
            <p className="text-gray-100 text-lg font-semibold">
              Manufacturing Address Spread Across Delhi NCR
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-blue-200" />
                <a
                  href="tel:+918810422935"
                  className="hover:text-blue-200 transition"
                >
                  +91 8810422935
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-blue-200" />
                <a
                  href="tel:+919810057441"
                  className="hover:text-blue-200 transition"
                >
                  +91 9810057441
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-blue-200" />
                <a
                  href="mailto:info@polywell.co.in"
                  className="hover:text-blue-200 transition"
                >
                  info@polywell.co.in
                </a>
              </div>
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
              className="space-y-4"
            >
              <h4 className="font-teko text-3xl md:text-2xl font-semibold text-2xl">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-100 hover:text-blue-200 transition duration-200 text-lg"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 "
          >
            <h3 className="text-3xl md:text-2xl font-teko font-semibold">
              Trust Elite Certificate
            </h3>
            <p className="text-gray-100 text-lg">
              We are proud to present the TrustElite Certificate of Excellence
              to Sangam Plastic Industries Pvt. Ltd., recognizing their
              commitment to exceptional customer service, outstanding business
              practices, and a dedication to building trust with their
              customers.
            </p>

            <Image
              onClick={() => setImageShow((prev) => !prev)}
              src={"/image/TRUST-ELITE.webp"}
              width={1000}
              height={1000}
              alt="TRUST-ELITE"
              className="h-30 lg:h-30 w-auto cursor-pointer"
            />
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-400 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-5 md:flex-row md:justify-between">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-right text-sm text-gray-200"
          >
            <p>
              &copy; {currentYear} Sangam Plastic Industries Pvt. Ltd. All
              rights reserved.
            </p>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-right text-sm text-gray-200 flex gap-2"
          >
            <p>
              Website Designed By Inquiry Bazaar Pvt. Ltd. {" "}
              <a
                href="https://inquirybazaar.com/"
                className="hover:text-blue-200 transition font-bold"
                target="_blank"
              >
                Website Designing Company.
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
