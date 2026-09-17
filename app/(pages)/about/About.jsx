import React from "react";
import Image from "next/image";
import { aboutOurVision, OurCoreValue } from "@/data";

const About = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 py-10 md:mt-10">
      <section className="max-w-6xl mx-auto">
        <p className="text-center font-bold text-4xl md:text-4xl lg:text-5xl font-teko mb-8">
          Committed to Safe Biomedical Waste Solutions Since 1988
        </p>

        <div className="space-y-6 text-lg text-gray-700 text-justify ">
          <p>
            Established in 1988, <strong>Sangam Plastic Industries</strong> has
            grown into a trusted manufacturer, exporter, and supplier of
            biomedical waste management solutions across India. With decades of
            industry experience, we specialize in manufacturing sharp
            containers, needle destroyers, puncture-proof boxes, and biomedical
            waste disposal products that meet stringent safety and regulatory
            standards. Our commitment to quality and reliability has earned us
            recognition as a dependable Sharp Container Manufacturer and Needle
            Destroyer Manufacturer serving the healthcare sector.
          </p>

          <p>
            Based in Delhi, India, our modern manufacturing facility is equipped
            with advanced machinery and supported by a skilled workforce,
            enabling us to handle bulk production while maintaining consistent
            quality. As an experienced Puncture Proof Box Manufacturer, we
            follow strict quality control processes to ensure every product
            delivers durability, hygiene, and safe performance in hospitals,
            clinics, laboratories, and medical institutions.
          </p>

          <p>
            Driven by innovation and guided by experienced leadership, we focus
            on delivering long-lasting, compliant, and customer-centric
            solutions. At Sangam Plastic Industries, we are committed to
            supporting safer healthcare environments by providing reliable
            biomedical waste management products that healthcare professionals
            across India trust.
          </p>
        </div>
      </section>

      {/* Our Vision */}
      <section className="max-w-6xl mx-auto mt-15 md:mt-10 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <p className="text-3xl md:text-4xl font-bold font-teko text-[#0971CE] mb-5">
            Our Vision
          </p>
          <div className="space-y-6 text-lg text-gray-700 text-justify leading-relaxed">
            <p>
              At <strong>Sangam Plastic Industries</strong>, our vision is to be
              recognized as one of India’s most trusted and innovative Sharp
              Container Manufacturer and Needle Destroyer Manufacturer,
              delivering safe, reliable, and compliant biomedical waste
              management solutions. We aim to support healthcare facilities with
              products that enhance safety, hygiene, and environmental
              responsibility.
            </p>
            <p>
              We aspire to lead the biomedical waste management industry by
              combining quality, innovation, and sustainability, setting higher
              standards for sharps disposal and medical safety. Our goal is to
              make durable, puncture-proof, and regulation-compliant products
              accessible to hospitals, laboratories, and healthcare institutions
              nationwide—contributing to a safer, cleaner, and healthier
              healthcare environment.
            </p>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image
            src="https://i.pinimg.com/736x/5d/6e/36/5d6e36039777312c6ad3482fe81a1fe3.jpg"
            alt="Sharp Container"
            width={1000}
            height={1000}
            className="rounded-xl w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Our mission */}
      <section className="max-w-6xl mx-auto my-10 md:my-12">
        <p className="text-center font-bold text-3xl md:text-4xl lg:text-5xl font-teko mb-2">
          Committed to Safe Biomedical Waste Solutions Since 1988
        </p>

        <div className="space-y-6 text-lg text-gray-700 text-justify ">
          <p className="leading-5 md:leading-7 mt-2 lg:text-center">
            Our mission guides every decision at{" "}
            <strong>Sangam Plastic Industries Pvt. Ltd.</strong> We are
            committed to
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {aboutOurVision.map(({ title, desc, icon: Icon }) => {
              return (
                <div
                  key={title}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
                >
                  <div className="md:mb-4 mb-3  inline-block p-3 bg-[#0971CE]/10 rounded-lg text-[#0971CE] w-fit">
                    <Icon size={32} />
                  </div>

                  <p className="text-xl font-bold text-[#0971CE] mb-3 text-start  uppercase min-h-[60px]">
                    {title}
                  </p>

                  <p className="text-gray-600 text-base leading-relaxed text-left flex-1">
                    {desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Core value */}
      <section className="max-w-6xl mx-auto my-8 md:my-12">
        <p className="text-center font-bold text-4xl md:text-4xl lg:text-5xl font-teko mb-2">
          Our Core Values
        </p>

        <div className="space-y-6 text-lg  text-gray-700  leading-6">
          <p className="lg:text-center text-center">
            Our core values define who we are at{" "}
            <strong>Sangam Plastic Industries Pvt. Ltd.</strong> and guide our
            actions every day
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:mt-6">
            {OurCoreValue.map(({ title, desc, icon: Icon }) => {
              return (
                <div
                  key={title}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mb-3 md:mb-4 inline-block p-3 bg-[#0971CE]/10 rounded-lg text-[#0971CE]">
                    <Icon size={32} />
                  </div>
                  <p className="text-xl font-bold text-[#0971CE] mb-3 font-teko uppercase text-left">
                    {title}
                  </p>
                  <p className="text-gray-600 text-base leading-relaxed text-left">
                    {desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* get in touch  */}
      <section className=" md:mt-16 bg-gradient-to-r from-[#0971CE] to-[#2e86f9] text-white rounded-2xl p-6 md:p-12 text-center shadow-xl">
        <h2 className="text-3xl md:text-5xl font-bold font-teko mb-6">
          Get in Touch
        </h2>
        <p className="text-lg md:text-xl max-w-4xl mx-auto mb-8 leading-relaxed opacity-95">
          Partner with <strong>Sangam Plastic Industries</strong>, your trusted
          Sharp Container Manufacturer, Needle Destroyer Manufacturer, and
          Puncture Proof Box Manufacturer. Whether you require bulk orders,
          customized biomedical waste solutions, or expert product guidance, our
          team is ready to support your healthcare safety needs.
        </p>

        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold font-teko mb-6 tracking-wide">
            Take Action Today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <a
              href="/product"
              className="px-8 py-3 border-2 bg-white text-black font-bold rounded-xl hover:bg-white hover:text-[#0971CE] transition-all hover:-translate-y-1"
            >
              Explore Products
            </a>
            <a
              href="/contact"
              className="px-8 py-3 bg-black/20 backdrop-blur-sm border-2 border-transparent hover:border-white text-white font-bold rounded-xl transition-all hover:-translate-y-1"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
