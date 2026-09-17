"use client";
import { BadgeCheck, ChevronDown, Hospital } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Factory,
  Store,
  Hotel,
  Home,
  Leaf,
  Warehouse,
  Truck,
  Tags,
  Handshake,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Location = () => {
  const params = useParams();

  const city = params?.location?.includes("-in-")
    ? params.location
        .split("-in-")[1]
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "India";

  const data = [
    {
      title: "High-Quality Biomedical Waste Containers",
      desc: "Our Sharp Containers are manufactured using medical-grade plastic that prevents leakage, punctures, and contamination during disposal and transportation.",
      icon: Warehouse,
      img: "/image/sharp-container/1.5 Ltr (1)-Photoroom.webp",
    },
    {
      title: "Multiple Size Options",
      desc: "We provide Sharp Containers in various capacities and designs to meet the requirements of hospitals, laboratories, blood banks, and healthcare facilities.",
      icon: Leaf,
      img: "/image/sharp-container/3 Ltr.webp",
    },
    {
      title: "Manufacturer Direct Supply",
      desc: `As a direct Sharp Container Manufacturer in ${city}, Sangam Plastic Industries offers competitive pricing and consistent supply for bulk healthcare requirements.`,
      icon: Truck,
      img: "/image/sharp-container/10 Ltr (1)-Photoroom.webp",
    },
    {
      title: "Safe & Hygienic Disposal",
      desc: "Our containers are specially designed with secure lids, clear labeling areas, and tamper-proof locking systems to prevent accidental exposure to hazardous medical waste.",
      icon: Tags,
      img: "/image/sharp-container/25 Ltr-Photoroom.webp",
    },
    {
      title: "Trusted by Healthcare Facilities",
      desc: `Our products are widely used by hospitals, diagnostic labs, pathology centers, vaccination clinics, and biomedical waste management companies across ${city}.`,
      icon: Handshake,
      img: "/image/sharp-container/IMG_9304-Photoroom.webp",
    },
  ];
  const products = [
    {
      title: "Disposable Sharp Container",
      img: "/image/sharp-container/1.5 Ltr (1)-Photoroom.webp",
      desc: "Designed for single-use safe disposal of medical sharps.",
    },
    {
      title: "Wall-Mounted Sharp Containers",
      img: "/image/sharp-container/IMG_9304-Photoroom.webp",
      desc: "Ideal for hospitals and clinics to ensure convenient disposal near patient care areas.",
    },
    {
      title: "Portable Sharp Containers",
      img: "/image/sharp-container/3 Ltr.webp",
      desc: "Lightweight and easy to carry for mobile healthcare units and vaccination drives.",
    },
    {
      title: "Large Capacity Sharp Containers",
      img: "/image/sharp-container/10 Ltr (1)-Photoroom.webp",
      desc: "Suitable for high-volume waste generation in hospitals and diagnostic laboratories.",
    },
    {
      title: "Lockable Sharp Containers",
      img: "/image/sharp-container/IMG_9305 (1)-Photoroom.webp",
      desc: "Tamper-proof containers designed for maximum safety during waste storage and transport.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <div className="">
        <section
          style={{
            backgroundImage: "url('/image/home/banner3.webp')",
            backgroundSize: "cover",
            backgroundPosition: "50% 60%",
          }}
          className="py-20 relative z-10"
        >
          <div className="absolute inset-0 bg-gray-900/60" />

          <h1 className="text-center font-serif leading-snug relative font-bold text-white text-2xl px-5 md:py-25 capitalize md:text-6xl">
            Sharp Container Manufacturer in {city}
          </h1>
        </section>
      </div>

      <section className="lg:px-16 px-5 mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
              Sharp Container Manufacturer in {city}
            </h2>

            <p className="text-black mb-4 text-base">
              <strong>Sangam Plastic Industries</strong> is a leading{" "}
              <Link
                href={"/"}
                className="font-bold text-green-600 hover:underline"
              >
                Sharp Container Manufacturer in {city}
              </Link>
              , providing high-quality biomedical waste disposal containers
              designed for hospitals, laboratories, clinics, and healthcare
              facilities across {city}.
            </p>

            <p className="text-black mb-4 text-base">
              We specialize in manufacturing{" "}
              <strong>
                durable, leak-proof, and puncture-resistant Sharp Containers
              </strong>{" "}
              that ensure the safe disposal of needles, syringes, blades, and
              other sharp medical waste. Our containers are produced using
              high-grade plastic materials and are designed to meet biomedical
              waste management guidelines and healthcare safety standards.
            </p>

            <p className="text-black text-base">
              From small clinics to large hospitals and diagnostic laboratories,
              our Sharp Containers are engineered to ensure{" "}
              <strong>
                maximum safety, infection control, and easy disposal,
              </strong>{" "}
              making them an essential component in modern healthcare waste
              management systems.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative overflow-hidden"
          >
            <Image
              src={"/image/sharp-container/3.5 Ltr.webp"}
              alt="Sharp Container"
              width={500}
              height={200}
              className="object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* product  */}
      <section className="mx-auto lg:px-15 px-5 py-8 bg-gray-100">
        <h2 className="text-center text-2xl md:text-4xl font-bold mb-2">
          Sharp Container Types We Offer
        </h2>

        <p className="text-center text-black mb-4 text-lg">
          Sharp Container Product Range
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition group flex flex-col h-full"
            >
              {/* Image */}
              <div className="w-full h-40 flex items-center justify-center mb-3 overflow-hidden rounded-lg">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                <h3 className="font-semibold text-lg  text-center">
                  {item.title}
                </h3>

                <p className="text-black mb-2 text-sm leading-relaxed text-center">
                  {item.desc}
                </p>

                {/* WhatsApp Button (BOTTOM FIXED) */}
                <a
                  href={`https://wa.me/918810422935?text=${encodeURIComponent(
                    `I want to enquire about ${item.title}`,
                  )}`}
                  target="_blank"
                  className="mt-auto flex gap-2 justify-center items-center bg-[#00c950] text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-green-600 transition"
                >
                  WhatsApp Now <FaWhatsapp size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* why us */}
      <section className="mx-auto lg:px-16 px-5 py-8 bg-gray-100">
        <h2 className="text-center text-2xl md:text-4xl font-extrabold mb-6">
          Why Choose{" "}
          <span className="text-green-600">Sangam Plastic Industries</span>{" "}
          Sharp Containers in {city}?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {data.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 p-5 relative overflow-hidden cursor-pointer hover:-translate-y-3"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div className="relative z-10">
                  <Icon
                    size={36}
                    className="text-amber-500 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="w-full h-32 flex items-center justify-center relative z-10">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <h3 className="font-semibold text-lg mb-2 relative z-10">
                  {item.title}
                </h3>
                <p className="text-black text-sm relative z-10 leading-relaxed">
                  {item.desc}
                </p>

                <span className="absolute bottom-0 left-0 h-1 w-0 bg-amber-500 group-hover:w-full transition-all duration-500"></span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Detail */}
      <section className="mx-auto lg:px-16 px-5 py-8 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-extrabold mb-6 leading-tight">
              Sharp Container Supplier in {city}, India
            </h2>

            <p className="text-black mb-5 leading-relaxed text-lg">
              Sangam Plastic Industries is among the trusted{" "}
              <Link
                href={"/"}
                className="font-bold text-green-600 hover:underline"
              >
                Sharp Container manufacturer{" "}
              </Link>
              and supplier in {city}, delivering reliable biomedical waste
              management solutions for healthcare facilities.
            </p>

            <p className="text-black mb-6 leading-relaxed text-lg">
              Our Sharp Containers are manufactured using{" "}
              <strong>high-density plastic materials</strong> and advanced
              molding technology to ensure durability and safety.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                Puncture-resistant design
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                Leak-proof construction
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                Secure locking lid system
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                Easy handling and disposal
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                Compliance with biomedical waste safety practices
              </span>
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl p-6 border border-gray-100 relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-amber-100 rounded-full blur-3xl opacity-20"></div>
              <h3 className="text-2xl font-bold mb-4 text-black relative z-10">
                Our Sharp Containers are ideal for:
              </h3>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-black relative z-10">
                <li className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300 group">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-100 group-hover:scale-110 transition">
                    <Store className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="font-semibold text-lg">
                    Pathology laboratories
                  </span>
                </li>
                <li className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300 group">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 group-hover:scale-110 transition">
                    <Hospital className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="font-semibold text-lg">
                    Hospitals and healthcare centers
                  </span>
                </li>
                <li className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300 group">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-100 group-hover:scale-110 transition">
                    <Factory className="w-6 h-6 text-orange-600" />
                  </div>
                  <span className="font-semibold text-lg">
                    Clinics and vaccination centers
                  </span>
                </li>
                <li className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300 group">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-100 group-hover:scale-110 transition">
                    <Hotel className="w-6 h-6 text-purple-600" />
                  </div>
                  <span className="font-semibold text-lg">
                    Blood banks and diagnostic facilities
                  </span>
                </li>
                <li className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300 group sm:col-span-2">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-pink-100 group-hover:scale-110 transition">
                    <Home className="w-6 h-6 text-pink-600" />
                  </div>
                  <span className="font-semibold text-lg">
                    Biomedical waste management companies
                  </span>
                </li>
              </ul>
              <p className="text-black leading-relaxed text-base mt-2 relative z-10">
                Each container undergoes strict quality checks to ensure
                structural strength, hygiene standards, and safe waste
                containment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key features  */}
      <section className="mx-auto lg:px-15 px-5 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="w-full">
            <img
              src="/image/sharp-container/IMG_9305 (1)-Photoroom.webp"
              alt="Sharp Container Manufacturer"
              className="w-full h-[28rem] object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ objectPosition: "50% 70%" }}
            />
          </div>

          <div>
            <h3 className="text-2xl md:text-4xl font-bold mb-6">
              Key Features of{" "}
              <span className="text-green-600">
                Sangam Plastic Sharp Containers
              </span>
            </h3>

            <ul className="space-y-4 text-black text-base">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                <span>High-quality puncture-resistant plastic</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                <span>Leak-proof and spill-proof design</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                <span>Secure snap-lock lid system</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                <span>Lightweight yet durable construction</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                <span>Clearly marked fill lines for safety</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                <span>Easy to handle and transport</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                <span>Designed for safe biomedical waste disposal</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="mx-auto lg:px-15 px-5 py-8 bg-gray-100">
        <h2 className="text-center text-2xl md:text-4xl font-bold mb-5">
          Industries & Applications We Serve
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 text-center group">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-600 transition">
                <Hospital className="w-7 h-7 text-blue-600 group-hover:text-white transition" />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-black">Hospitals</h3>
            <p className="text-black text-sm leading-relaxed">
              Safe disposal of needles, syringes, and surgical sharps.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 text-center group">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-100 group-hover:bg-green-600 transition">
                <Hotel className="w-7 h-7 text-green-600 group-hover:text-white transition" />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-black">
              Diagnostic Laboratories
            </h3>
            <p className="text-black text-sm leading-relaxed">
              Collection and containment of laboratory sharps waste.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 text-center group">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-orange-100 group-hover:bg-orange-600 transition">
                <Factory className="w-7 h-7 text-orange-600 group-hover:text-white transition" />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-black">
              Clinics & Healthcare Centers
            </h3>
            <p className="text-black text-sm leading-relaxed">
              Routine medical waste management for daily healthcare operations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 text-center group">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-purple-100 group-hover:bg-purple-600 transition">
                <Hospital className="w-7 h-7 text-purple-600 group-hover:text-white transition" />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-black">
              Vaccination Centers
            </h3>
            <p className="text-black text-sm leading-relaxed">
              Safe disposal of syringes and needles during immunization
              programs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 text-center group">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-indigo-100 group-hover:bg-indigo-600 transition">
                <Home className="w-7 h-7 text-indigo-600 group-hover:text-white transition" />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-black">
              Biomedical Waste Management Companies
            </h3>
            <p className="text-black text-sm leading-relaxed">
              Reliable containment solutions for safe waste collection and
              disposal.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study Card */}
      <section className="mx-auto lg:px-15 px-5 py-8">
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold">
            Case Study: Sharp Container Supply for Healthcare Facility in {city}
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-3">
              <div>
                <span className="text-sm uppercase tracking-wide text-gray-500">
                  Client
                </span>
                <p className="text-lg font-semibold">
                  Multi-Specialty Hospital
                </p>
              </div>
              <div>
                <span className="text-sm uppercase tracking-wide text-gray-500">
                  Location
                </span>
                <p className="text-lg font-semibold">{city}</p>
              </div>
              <div>
                <span className="text-sm uppercase tracking-wide text-gray-500">
                  Project
                </span>
                <p className="text-lg font-semibold">
                  Biomedical Waste Disposal System
                </p>
              </div>
              <div className="">
                <p className="text-black leading-relaxed">
                  This project highlights{" "}
                  <strong>
                    Sangam Plastic Industries’ reliability as a Sharp Container
                    manufacturer in {city}.
                  </strong>
                  .
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <span className="text-sm uppercase tracking-wide text-gray-500">
                  Scope
                </span>
                <ul className="list-disc list-inside text-black space-y-1">
                  <li>Bulk supply of medical Sharp Containers</li>
                  <li>Safe waste segregation solution</li>
                  <li>
                    Support for hospital biomedical waste management protocol
                  </li>
                </ul>
              </div>
              <div>
                <span className="text-sm uppercase tracking-wide text-gray-500">
                  Results
                </span>
                <ul className="list-disc list-inside text-black space-y-1">
                  <li>Improved safety for healthcare workers</li>
                  <li>Reduced risk of needle-stick injuries</li>
                  <li>Efficient biomedical waste handling system</li>
                  <li>Compliance with hospital safety standards</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-green-600 text-white py-5">
        <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="md:text-left text-center">
            <Link href={"/"} className="text-2xl font-semibold">
              Sharp Containers Manufacturer in {city}
            </Link>
            <p className="text-2xl md:text-[42px] font-semibold">
              +91 8810422935
            </p>
            <p className="text-lg text-white">
              For More Details Contact Us Now!
            </p>
          </div>

          <div>
            <a
              href="tel:+918810422935"
              className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Connect Now
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto lg:px-15 px-5 py-8 bg-gray-100">
        <h2 className="text-center text-2xl md:text-[42px] font-bold mb-5">
          Sharp Containers in {city} – FAQs
        </h2>

        <div className="space-y-4">
          <details className="group bg-gray-50 rounded-xl p-5 cursor-pointer">
            <summary className="flex justify-between items-center font-semibold text-lg">
              What is a Sharp Container?
              <span className="transition-transform group-open:rotate-180">
                ⌄
              </span>
            </summary>
            <p className="mt-3 text-gray-600 leading-relaxed">
              A Sharp Container is a specially designed container used for the
              safe disposal of medical sharps such as needles, syringes, blades,
              and lancets to prevent injuries and contamination.
            </p>
          </details>

          <details className="group bg-gray-50 rounded-xl p-5 cursor-pointer">
            <summary className="flex justify-between items-center font-semibold text-lg">
              Are your containers suitable for hospital use?
              <span className="transition-transform group-open:rotate-180">
                ⌄
              </span>
            </summary>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Yes, our Sharp Containers are designed specifically for hospitals,
              laboratories, clinics, and healthcare facilities.
            </p>
          </details>

          <details className="group bg-gray-50 rounded-xl p-5 cursor-pointer">
            <summary className="flex justify-between items-center font-semibold text-lg">
              Do you supply Sharp Containers in bulk?
              <span className="transition-transform group-open:rotate-180">
                ⌄
              </span>
            </summary>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Yes, Sangam Plastic Industries provides bulk supply for hospitals,
              distributors, and biomedical waste management companies.
            </p>
          </details>

          <details className="group bg-gray-50 rounded-xl p-5 cursor-pointer">
            <summary className="flex justify-between items-center font-semibold text-lg">
              Are the containers puncture resistant?
              <span className="transition-transform group-open:rotate-180">
                ⌄
              </span>
            </summary>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Yes, our containers are manufactured using high-strength plastic
              materials to prevent punctures and leakage.
            </p>
          </details>

          <details className="group bg-gray-50 rounded-xl p-5 cursor-pointer">
            <summary className="flex justify-between items-center font-semibold text-lg">
              Do you supply across Delhi NCR?
              <span className="transition-transform group-open:rotate-180">
                ⌄
              </span>
            </summary>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Yes, we supply Sharp Containers across Delhi, Noida, Gurgaon,
              Faridabad, and other NCR regions.
            </p>
          </details>
        </div>
      </section>

      {/* about */}
      <section className="mx-auto lg:px-15 px-5 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="w-full">
            <img
              src="/image/sharp-container/IMG_9304-Photoroom.webp"
              alt={"Sharp Container Manufacturer in " +city}
              className="w-full h-102 object-cover rounded-2xl shadow-xl"
            />
          </div>

          <div>
            <h2 className="text-2xl md:text-[42px] font-bold mb-5">
              Looking for the Best Sharp Container Manufacturer in {city}?
            </h2>

            <p className="text-black mb-6 leading-relaxed text-lg">
              Contact <strong>Sangam Plastic Industries</strong> today for
              pricing, product details, or bulk supply inquiries. Our team will
              help you choose the right Sharp Containers for hospitals,
              laboratories, and healthcare facilities, ensuring safe and
              reliable biomedical waste disposal solutions across {city}.
            </p>

            <Link
              href={"/contact"}
              className="mx-auto px-4 py-3 text-lg text-white rounded-md bg-green-500 hover:bg-green-600"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
