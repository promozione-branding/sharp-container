"use client";

import Image from "next/image";
import {
  cirtificate,
  faqs,
  homeProductData,
  solutionSector,
  testimonial,
  otherproduct,
} from "@/data";
import {
  Clock,
  ShieldCheck,
  Factory,
  Stethoscope,
  SlidersHorizontal,
  Truck,
  ChevronDown,
  LockKeyhole,
  Package,
  FlaskConical,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import PopForm from "@/components/PopForm";
import "swiper/css";
import axios from "axios";
import About from "@/components/components/About";
import PolywellTrustStatsSection from "@/components/components/Pointer";
import Loactions from "@/components/Loactions";

const Home = () => {
  const slides = [
    {
      image: "/image/home/banner3.webp",
      mobileImage: "/mobile2.webp",
      title: "Safe Sharps Disposal Starts Here",
      alt:"Sharp Container Manufacturer",
      subtitle: "High-quality sharp containers designed for healthcare safety.",
      ctaPrimary: { href: "/contact?bulk=true", label: "Bulk Pricing" },
      ctaSecondary: { href: "/contact", label: "Contact Sales" },
    },
    {
      image: "/image/home/banner2.webp",
      mobileImage: "/mobile1.webp",
      title: "Sharp Container Manufacturer",
      alt:"Sharp Container Manufacturer",
      subtitle:
        "Hygienic, puncture-resistant containers for safe sharps disposal.",
      ctaPrimary: { href: "/product", label: "See Solutions" },
      ctaSecondary: { href: "/contact", label: "Request Quote" },
    },

    {
      image: "/image/home/banner1.webp",
      mobileImage: "/mob3.webp",
      alt:"Sharp Container Manufacturer",
      title: "",
      subtitle: "",
      ctaPrimary: { href: "/product", label: "Our Products" },
      ctaSecondary: { href: "/contact", label: "Contact Us" },
    },

    // {
    //   image: "/image/home/banner4.jpg",
    //   title: "Designed for Safety. Built for Compliance.",
    //   subtitle: "Reliable sharp containers for medical and clinical use.",
    //   ctaPrimary: { href: "/contact?bulk=true", label: "Bulk Pricing" },
    //   ctaSecondary: { href: "/contact", label: "Contact Sales" },
    // },
  ];

  const [openFAQ, setOpenFAQ] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organizationName: "",
    productName: "",
    quantity: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [current, setCurrent] = useState(0);
  const autoplayRef = useRef(null);

  useEffect(() => {
    autoplayRef.current = () => setCurrent((c) => (c + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const play = () => autoplayRef.current();
    const id = setInterval(play, 5000);
    return () => clearInterval(id);
  }, []);

  const goPrev = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const goNext = () => setCurrent((c) => (c + 1) % slides.length);

  async function handleFormSubmit(e) {
    e.preventDefault();

    try {
      const res = await axios.post("/api/form/create", formData);

      if (res.status === 200 || res.status === 201) {
        setFormSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          organizationName: "",
          productName: "",
          quantity: "",
          message: "",
        });
        setTimeout(() => setFormSubmitted(false), 4000);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const [open, setOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="">
      {/* success message  */}
      <AnimatePresence>
        {formSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
          >
            ✓ Quote request submitted successfully!
          </motion.div>
        )}
      </AnimatePresence>

      {/* hero carousel */}
      <section className="relative w-full h-[430px] md:h-[70vh] lg:h-[100vh] overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <Image
              src={
                isMobile ? slides[current].mobileImage : slides[current].image
              }
              alt={slides[current].alt}
              fill
              priority
              className="max-w-full h-auto object-cover"
            />

            <div className="hidden md:block absolute top-20  md:left-10 lg:top-30 lg:flex flex-col justify-center px-6 ">
              <h2 className="text-black  font-extrabold text-2xl md:text-4xl  lg:text-7xl max-w-2xl md:w-90  lg:w-full font-teko lg:ml-14">
                {slides[current].title}
              </h2>
              <p className="hidden md:block mt-4 text-lg md:text-2xl text-black w-40 md:w-80 lg:w-[450px] lg:ml-14">
                {slides[current].subtitle}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* controls */}
        <button
          onClick={goPrev}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
        >
          ‹
        </button>

        <button
          onClick={goNext}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
        >
          ›
        </button>

        {/* indicators */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-6 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-3 h-2 rounded-full transition-all ${
                i === current ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </section>

      {/* new about section  */}
      <About />

      {/* pointer  */}
      <PolywellTrustStatsSection />

      {/* product section  */}
      <section className=" px-2 md:px-10 lg:px-20">
        <p className="font-bold text-3xl md:text-4xl text-center py-6">
          Reliable Biomedical Waste Management Solutions
        </p>
        <p className="text-center text-lg pb  -4">
          At{" "}
          <strong className="capitalize">
            Sangam plastic industries Pvt Ltd
          </strong>
          , we manufacture and supply a comprehensive range of high-quality
          biomedical waste management products designed to ensure safety,
          hygiene, and regulatory compliance in healthcare environments.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
          {homeProductData.map(({ id, image, title, desc, link }) => (
            <Link
              href={link}
              key={id}
              className="group flex flex-col h-full bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative md:h-95 w-full overflow-hidden flex-shrink-0">
                <Image
                  src={image}
                  alt={title}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl capitalize text-center font-bold text-gray-900">
                  {title}
                </h3>

                <p className="py-3 text-black text-center flex-1">{desc}</p>

                <button className="w-full py-3 px-4 bg-[#0971CE] text-white rounded-xl font-medium hover:bg-gray-800 transition-colors mt-auto">
                  View Details
                </button>
              </div>
            </Link>
          ))}
        </div>

        {/* CENTER BUTTON */}
        <div className="flex justify-center my-6">
          <Link
            href="/sharp-container"
            className="py-3 px-8 bg-[#0971CE] text-white rounded-xl font-medium hover:bg-gray-800 transition-colors text-xl"
          >
            All Products
          </Link>
        </div>
      </section>

      {/* second section  */}
      <section className="py-5 blueprint-bg bg-white px-2 md:px-20  md:py-6 lg:py-9">
        <h2 className="text-center font-bold text-2xl md:text-[45px]  font-teko text-black">
          Your Trusted Sharp Container & Needle Destroyer Manufacturer Since
          1988
        </h2>
        <p className="py-3 px-2 text-justify text-black text-lg">
          Established in 1988,{" "}
          <strong>Sangam Plastic Industries Pvt Ltd</strong> has been a trusted
          Sharp Container Manufacturer and Needle Destroyer Manufacturer,
          delivering high-quality biomedical waste management solutions for
          hospitals, clinics, laboratories, and healthcare institutions across
          India. With decades of manufacturing excellence, we specialize in
          producing durable, safe, and regulation-compliant products designed to
          ensure secure disposal of medical sharps and needles.
        </p>
        <p className="py-3 px-2 text-justify text-black text-lg">
          Based in Delhi, India, our advanced manufacturing facility is equipped
          with modern machinery and quality control systems that enable us to
          meet large-scale production requirements while maintaining strict
          safety and quality standards. Over the years, we have earned the
          confidence of healthcare providers, medical professionals, and
          institutional clients by consistently delivering products that are
          reliable, hygienic, cost-effective, and built for long-term use.
        </p>
        <p className="py-3 px-2 text-justify text-black text-lg">
          Driven by innovation and guided by strong leadership, our experienced
          team remains committed to enhancing healthcare safety through
          continuous improvement, product development, and customer-focused
          service.
        </p>
      </section>

      {/* counter   */}
      <section className="flex flex-col lg:flex-row">
        <div className="relative lg:w-1/2">
          <Image
            src={"/image/medication-disposal.jpeg"}
            width={1000}
            height={1000}
            alt="medication-disposal"
            className=" w-full h-auto"
          />
          <div className="bg-white absolute bottom-0 w-60 px-4 py-3 md:w-105 md:px-8 md:py-10">
            <p className="text-lg text-black md:text-2xl">
              Designed for Safety & Hygiene
            </p>
            <p className="text-sm font-medium pb-2 text-gray-500 md:text-lg">
              We prioritize infection control and workplace safety by designing
              products that help prevent needle-stick injuries.
            </p>
            <Link
              href="/about"
              className="bg-[#0971CE] text-white font-bold px-5 py-2 mt-2  text-sm rounded-lg"
            >
              Learn More About
            </Link>
          </div>
        </div>

        <div className="bg-[#0971CE] px-4 py-6 md:px-10 lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:gap-5">
          <div>
            <p className="font-bold text-white text-4xl md:text-5xl mb-3 font-teko">
              Pharmaceutical Companies
            </p>
            <p className="text-white text-xl font-medium pr-2 pl-2 md:p-0">
              Our waste management products help pharmaceutical companies
              maintain clean
            </p>
          </div>

          <div className="mt-5 flex flex-col gap-7 text-center md:text-start lg:flex-row">
            <div className="flex flex-col items-center md:items-start gap-3">
              <LockKeyhole color="white" size={45} />
              <span className="text-3xl text-white font-bold font-teko md:text-4xl">
                6.5K+
              </span>
              <p className="text-lg font-medium text-white">
                Polywell collection receptacles in Market
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start gap-3">
              <Package color="white" size={45} />
              <span className="text-3xl text-white font-bold font-teko md:text-4xl">
                100K+
              </span>
              <p className="text-lg font-medium text-white">
                Polywell patented inner liners return for destruction.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start gap-3">
              <FlaskConical color="white" size={45} />
              <span className="text-3xl text-white font-bold font-teko md:text-4xl">
                6.5K+
              </span>
              <p className="text-lg font-medium text-white">
                Pound of medication properly destroyed
              </p>
            </div>
          </div>

          <p className="mt-10 md:mt-4
             text-xl font-semibold text-white md:pb-5">
            Our sharp containers are suitable for hospitals, clinics,
            laboratories, and healthcare facilities, ensuring safe biomedical
            waste handling and reduced risk of needle-stick injuries.
          </p>
        </div>
      </section>

      {/* why health leader trust  */}
      <section className="py-7 md:py-12 blueprint-bg bg-gray-50 rounded-2xl px-2 md:px-10 lg:px-20">
        <h3 className="text-2xl md:text-5xl font-bold text-black text-center mb-10 font-teko ">
          Why Healthcare Leaders Trust Sangam Plastic Industries
        </h3>

        <div className="grid grid-cols-1 px-3 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="flex gap-4">
            <div className="p-3 bg-[#0971CE] h-fit text-white rounded-lg">
              <Clock size={24} />
            </div>
            <div>
              <p className="font-bold text-xl text-black">
                Decades of Proven Experience
              </p>
              <p className="text-md text-black">
                Since 1988, we have built a strong reputation supplying durable
                and compliant biomedical waste solutions to hospitals, clinics,
                and laboratories across India.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="p-3 bg-[#0971CE] h-fit text-white rounded-lg">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="font-bold text-xl text-black">
                Assured Quality Standards
              </p>
              <p className="text-md text-black">
                Products are made from premium-grade materials and undergo
                strict inspections to ensure performance, safety, and regulatory
                compliance.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="p-3 bg-[#0971CE] h-fit text-white rounded-lg">
              <Factory size={24} />
            </div>
            <div>
              <p className="font-bold text-xl text-black">
                Modern Manufacturing Capabilities
              </p>
              <p className="text-md text-black">
                Our state-of-the-art Delhi facility is equipped with advanced
                machinery to meet bulk production demands while maintaining
                consistent quality.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="p-3 bg-[#0971CE] h-fit text-white rounded-lg">
              <Stethoscope size={24} />
            </div>
            <div>
              <p className="font-bold text-xl text-black">
                Designed for Safety & Hygiene
              </p>
              <p className="text-md text-black">
                We design products to help prevent needle-stick injuries,
                minimize contamination risks, and support hygienic waste
                disposal.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="p-3 bg-[#0971CE] h-fit text-white rounded-lg">
              <SlidersHorizontal size={24} />
            </div>
            <div>
              <p className="font-bold text-xl text-black">
                Flexible & Custom Solutions
              </p>
              <p className="text-md text-black">
                Available in multiple sizes, capacities, and designs — we
                provide customized solutions tailored to healthcare
                requirements.
              </p>
            </div>
          </div>

          <div className="flex gap-4 ">
            <div className="p-3 bg-[#0971CE] h-fit text-white rounded-lg">
              <Truck size={24} />
            </div>
            <div className="">
              <p className="font-bold text-xl text-black">
                Nationwide Reach & Reliable Supply
              </p>
              <p className="text-md text-black">
                We serve clients across India with timely delivery, dependable
                support, and long-term service reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* cta  */}
      <section className=" md:py-12 mt-8 bg-gradient-to-r from-[#0971CE] to-[#2e86f9] text-white rounded-2xl mx-2 p-8 lg:mx-10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold">
            Need Bulk Supply for Hospitals or Healthcare Facilities?
          </h3>
          <p className="mt-4 text-lg">
            We offer large-scale production capacity, competitive pricing, and
            reliable nationwide delivery for bulk biomedical waste management
            requirements.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="px-6 py-3 bg-white text-gray-900 rounded-xl font-semibold shadow hover:scale-[.99] transition-transform"
              aria-label="Contact our sales team"
            >
              Contact Our Sales Team
            </a>
          </div>

          <p className="mt-6 text-md opacity-90">
            Supporting Multiple Sectors with Safe Waste Solutions
          </p>
        </div>
      </section>

      {/* supporting multiple  */}
      <section className="py-5 mt-3 md:mt-0 md:py-10 px-2 md:px-10 lg:px-20">
        <h3 className="text-2xl md:text-5xl font-bold text-center font-teko">
          Supporting Multiple Sectors with Safe Waste Solutions
        </h3>

        <p className=" py-2 text-center text-md max-w-6xl my-4 mx-auto">
          At{" "}
          <strong className="capitalize">
            Sangam plastic industries Pvt. Ltd.
          </strong>
          , we cater to a wide range of industries by providing high-quality
          sharp containers, and needle destroyers etc. designed to meet strict
          safety, hygiene, and regulatory standards. Our products are trusted by
          healthcare providers, institutions, and commercial organizations that
          require safe, reliable, and long-lasting solutions for medical and
          hazardous waste disposal.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 px-3 lg:grid-cols-2 gap-6 mt-8">
          {solutionSector.map(({ icon: IconComponent, title, description }) => (
            <div
              key={title}
              className="flex gap-4 p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="p-4 bg-[#0971CE] h-fit text-white rounded-lg shrink-0">
                <IconComponent size={24} />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-black mb-2">{title}</h4>
                <p className="text-md text-black leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* certificates  */}
      <section className="w-full relative bg-white py-8  px-4 sm:px-6 md:px-12">
        {/* Heading */}
        <h2 className="font-bold  relative text-3xl sm:text-4xl md:text-5xl mb-5 sm:mb-16 text-center text-gray-900">
          Our Certificates
          <span className="absolute mt-2 -bottom-2 left-1/2 -translate-x-1/2 w-16 sm:w-20 md:w-24 h-1 bg-blue-600 font-teko rounded-full"></span>
        </h2>

        <div className="grid md:grid-cols-5 grid-cols-2 gap-5">
          {cirtificate.map((src, index) => (
            // <SwiperSlide key={index}>
            // <div className="flex justify-center">
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 transition duration-300 hover:shadow-2xl hover:border-yellow-400 hover:scale-105 w-full max-w-xs sm:max-w-sm md:max-w-md"
            >
              <div className="relative w-full h-64">
                <Image
                  src={src}
                  alt={`Certificate ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
            // </div>
            // </SwiperSlide>
          ))}
        </div>
      </section>

      {/* A Trusted Manufacturer of Sharp  */}
      <section className="py-3 flex flex-col gap-5 md:gap-8 lg:flex-row lg:items-center px-2 md:px-10 lg:px-10 bg-[#37a2ff17] lg:py-10">
        <div className="lg:w-1/2">
          <Image
            src={
              "https://i.pinimg.com/1200x/ba/1c/50/ba1c50065886b2eb7edf3b4d8eaca677.jpg"
            }
            width={1000}
            height={1000}
            alt=" Sharp Container Manufacturer"
            className="rounded-lg"
          />
        </div>
        <div className="lg:w-1/2">
          <p className="text-base text-center">
            A Trusted Manufacturer of Sharp Containers & Needle Destroyers
          </p>
          <h1 className=" py-2 font-bold text-2xl md:text-4xl font-teko ">
            Sharp Container Manufacturer in India
          </h1>
          <p className=" lg:text-lg">
            As a trusted <strong>sharp container manufacturer</strong>, Sangam
            Industries produces a wide range of durable, puncture-resistant
            containers designed for the safe disposal of needles, syringes,
            blades, and other medical sharps. Our sharp containers are suitable
            for hospitals, clinics, laboratories, and healthcare facilities,
            ensuring safe biomedical waste handling and reduced risk of
            needle-stick injuries.
          </p>

          <div className="mt-4">
            <p className="font-semibold mb-2">We focus on:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Safety</strong>: Puncture-proof and leak-resistant for
                secure disposal
              </li>
              <li>
                <strong>Durability</strong>: Made from high-quality,
                impact-resistant materials
              </li>
              <li>
                <strong>Compliance</strong>: Designed to meet biomedical waste
                management regulations
              </li>
            </ul>

            <p className="mt-4">
              Whether it’s a hospital, laboratory, or medical center, our sharp
              containers provide reliable, safe, and hygienic solutions for
              medical waste disposal.
            </p>
          </div>
        </div>
      </section>

      {/* product section  */}
      <section className="py-2 px-2 md:px-10 lg:px-20 ">
        <p className="font-bold text-center  text-3xl md:text-5xl capitalize my-5 font-teko">
          Our other Products
        </p>
        {/* <p className="font-medium text-lg text-center pb-2">
          Reliable Biomedical Waste Management Solutions
        </p> */}
        {/* <p className="text-center">
          At{" "}
          <strong className="capitalize">
            Sangam plastic industries Pvt Ltd
          </strong>
          , we manufacture and supply a comprehensive range of high-quality
          biomedical waste management products designed to ensure safety,
          hygiene, and regulatory compliance in healthcare environments.
        </p> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8  mt-6">
          {otherproduct.map(({ id, image, title, desc, link }) => (
            <Link
              href={link}
              className="group flex flex-col bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden justify-center"
              key={id}
            >
              <div className="relative h-110  w-full  overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  width={1000}
                  height={1000}
                  className="object-cover group-hover:scale-105 transition-transform duration-500 "
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-center font-bold text-gray-900 capitalize">
                  {title}
                </h3>
                <p className="py-3 text-black text-center">{desc}</p>
                <button className="w-full py-3 px-4 bg-[#0971CE] text-white rounded-xl font-medium hover:bg-gray-800 transition-colors">
                  View Details
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* testimonial  */}
      <section className="py-10 md:mt-10 px-2 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl md:text-4xl font-bold text-center mb-2 font-teko">
            Trusted Solutions,   <br className="md:hidden" /> Satisfied Clients
          </h3>
          <p className="text-center px-5 md:px-0 text-gray-600 mb-5 md:mb-8">
            Hear from healthcare professionals and institutions using our
            products.
          </p>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {testimonial.map(({ review, author }, idx) => (
              <motion.div
                key={author + idx}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white p-4 md:p-6 rounded-xl shadow-sm hover:shadow-lg transition"
                role="article"
                aria-label={`Testimonial from ${author}`}
              >
                <blockquote className="text-gray-700 italic">
                  “{review}”
                </blockquote>
                <footer className="mt-4 text-sm font-semibold text-gray-900 ">
                  {author}
                </footer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* faq section  */}
      <section className="py-3  px-2 md:px-10 lg:px-20">
        <h3 className="text-3xl  md:text-4xl font-bold text-center mb-2 font-teko">
          Frequently Asked Questions (FAQs)
        </h3>
        <p className="text-center text-gray-600 mb-8">
          Find answers to common questions about our products and services
        </p>

        <div className="max-w-5xl mx-auto space-y-3">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                className="w-full px-6 py-4 flex items-start justify-between gap-4 text-left font-medium text-gray-900 hover:bg-gray-50 transition-colors"
              >
                <span>{faq.question}</span>
                <motion.div
                  animate={{ rotate: openFAQ === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0 mt-0.5"
                >
                  <ChevronDown size={20} className="text-gray-600" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openFAQ === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-gray-700 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* query form  */}
      <section className="py-8 mt-8 bg-gray-50">
        <h3 className="text-3xl px-4 md:text-4xl font-bold text-black mb-2 text-center font-teko">
          Request a Quote or Product Catalog Today!
        </h3>
        <p className="text-gray-900 px-4 md:px-0 mb-6 md:text-lg text-center">
          Fill out the form below and our team will get back to you shortly
        </p>
        <div className="flex flex-col md:flex-row gap-8 md:items-center px-2 md:px-10 lg:px-20">
          <div className="md:w-1/2">
            <form
              onSubmit={handleFormSubmit}
              className="space-y-4 bg-white p-8 rounded-2xl shadow-2xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                {/* Organization / Hospital Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    Organization / Hospital Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.organizationName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        organizationName: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition"
                    placeholder="Hospital or clinic name"
                  />
                </div>

                {/* Product Interest Dropdown */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    Product Interest
                  </label>
                  <select
                    required
                    value={formData.productName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        productName: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition"
                  >
                    <option value="">Select a product</option>
                    {homeProductData.map(({ id, title }) => (
                      <option key={id} value={title}>
                        {title}
                      </option>
                    ))}
                    <option value="all">All Products</option>
                  </select>
                </div>

                {/* Quantity / Requirement */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    Quantity / Requirement
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.quantity}
                    onChange={(e) =>
                      setFormData({ ...formData, quantity: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition"
                    placeholder="e.g., 100 units per month"
                  />
                </div>
              </div>

              {/* Message / Special Instructions */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Message / Special Instructions
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 px-4 bg-[#0971CE] text-white rounded-xl font-semibold hover:bg-[#145ec0] transition-colors shadow-md hover:shadow-lg"
              >
                Request a Quote
              </button>
            </form>
          </div>
          <div className="md:w-1/2 flex items-center justify-center">
            <Image
              width={500}
              height={500}
              alt="Sharp Container Manufacturer"
              src={"/image/sharp-container/IMG_9304-Photoroom.webp"}
              className=""
            />
          </div>
        </div>
      </section>

      <Loactions />

      <PopForm open={open} setOpen={setOpen} />
    </div>
  );
};

export default Home;
