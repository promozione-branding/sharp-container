"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import TranslateButton from "../GoogleTranslate";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const translateToHindi = () => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = "hi";
      select.dispatchEvent(new Event("change"));
    }
  };

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Product",
      
      submenu: [
        { label: "Needle Cutter", href: "/needle-cutter" },
        { label: "Sharp Containers", href: "/sharp-container" },

        {
          label: "Plastic Dustbin",
          href: "https://plasticdustbinmanufacturer.com",
        },
        {
          label: "Wringer Trolley",
          href: "https://wringertrolleymanufacturer.com",
        },
        { label: "Garbage Bag", href: "https://garbagebagmanufacturer.in" },
      ],
    },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/contact" },
  ];

  const pathname = usePathname();
  const adminLayout = pathname.startsWith("/admin");
  if (adminLayout) return null;

  return (
    <>
      <nav className="sticky top-0 z-50 py-2 bg-[#0971CE] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-25">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                width={1000}
                height={1000}
                alt="Sangam Plastic Industries"
                src={"/image/nav/logo.webp"}
                className="h-20 w-auto"
              />
              <p className="text-white md:text-[12px] font-semibold">
                Sangam Plastic Industries Pvt. Ltd.
              </p>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() =>
                    item.submenu && setOpenDropdown(item.label)
                  }
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <motion.a
                    href={item.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-white font-bold text-xl  transform  transition-duration-200 hover:font-light flex items-center gap-1"
                  >
                    {item.label}
                    {item.submenu && (
                      <motion.span
                        animate={{
                          rotate: openDropdown === item.label ? 180 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      ></motion.span>
                    )}
                  </motion.a>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.submenu && openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-[#0e79d7] rounded-lg shadow-2xl z-50 "
                      >
                        {item.submenu.map((subitem, subindex) => (
                          <motion.a
                            key={subitem.label}
                            href={subitem.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: subindex * 0.05 }}
                            className="block px-4 py-2 text-gray-100 hover:bg-[#1c8ff3] hover:font-bold rounded-lg transition-colors first:rounded-t-lg last:rounded-b-lg"
                          >
                            {subitem.label}
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="hidden lg:flex lg:gap-4 ">
              <Image
                src={"/image/nav/gem-Photoroom.png"}
                width={1000}
                height={1000}
                alt="gem"
                className="w-auto h-18 rounded-xl p-1"
              />
              <Image
                src={"/image/nav/share-Photoroom.png"}
                width={1000}
                height={1000}
                alt="gem"
                className="w-auto h-18 rounded-xl p-1"
              />
              <button
              onClick={translateToHindi}
              className=" text-white text-sm font-semibold top-27 right-5 bg-red-500 hover:bg-red-600 px-2 h-10 my-auto rounded-md"
            >
              हिंदी में देखें
            </button>
            </div>
            

            {/* Mobile menu button */}
            <div className="flex flex-col">
              <button
              onClick={translateToHindi}
              className=" text-white md:hidden whitespace-nowrap font-semibold top-27 right-5 bg-red-500 hover:bg-red-600 px-3 py-2 rounded-md"
            >
              हिंदी में देखें
            </button>
            <motion.button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg flex  flex-col justify-center items-end gap-3 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              
              {isOpen ? (
                <X size={28} className="text-white" />
              ) : (
                <Menu size={28} className="text-white" />
              )}
            </motion.button>
          </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden"
              >
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {menuItems.map((item, index) => (
                    <div key={item.label}>
                      <motion.a
                        href={item.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => !item.submenu && setIsOpen(false)}
                        className="block px-4 py-2 rounded-lg text-white hover:bg-[#2d3642] font-medium transition-colors cursor-pointer"
                      >
                        <div className="flex justify-between items-center">
                          <span>{item.label}</span>
                          {item.submenu && (
                            <motion.span
                              animate={{
                                rotate: openDropdown === item.label ? 180 : 0,
                              }}
                              transition={{ duration: 0.2 }}
                              onClick={(e) => {
                                e.preventDefault();
                                setOpenDropdown(
                                  openDropdown === item.label
                                    ? null
                                    : item.label,
                                );
                              }}
                            >
                              ▼
                            </motion.span>
                          )}
                        </div>
                      </motion.a>

                      {/* Mobile Dropdown */}
                      <AnimatePresence>
                        {item.submenu && openDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            {item.submenu.map((subitem, subindex) => (
                              <motion.a
                                key={subitem.label}
                                href={subitem.href}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: subindex * 0.05 }}
                                onClick={() => setIsOpen(false)}
                                className="block px-8 py-2 text-gray-200 hover:bg-[#2d3642] rounded-lg transition-colors text-sm"
                              >
                                {subitem.label}
                              </motion.a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <TranslateButton />
      </nav>
    </>
  );
};

export default Navbar;
