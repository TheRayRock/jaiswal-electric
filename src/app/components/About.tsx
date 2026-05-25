import Image from "next/image";

import { FaCheckCircle, FaUsers, FaAward } from "react-icons/fa";

import { MdWorkspacePremium } from "react-icons/md";
import { HiUsers } from "react-icons/hi2";
import { RiVerifiedBadgeLine } from "react-icons/ri";

export default function About() {
  return (
    <section className=" bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* MAIN GRID */}
        {/* <div className="grid lg:grid-cols-[1fr_1.2fr_0.9fr] gap-14 items-start pt-24"> */}
        {/* <div className="grid lg:grid-cols-[1fr_1fr_0.8fr] gap-10 items-center"> */}
        <div className="grid lg:grid-cols-3 gap-10 items-center">
          {/* LEFT IMAGE */}
          <div>
            <div className="relative h-[380px] lg:h-[500px] w-full max-w-[650px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/motor-repairing-service-testing-visit-500x500.webp"
                alt="Motor Repair"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            {/* SMALL TITLE */}
            <p className="text-yellow-500 font-bold uppercase tracking-wider text-sm mb-2 text-center lg:text-left">
              About Us
            </p>

            {/* MAIN HEADING */}
            {/* <h2 className="text-4xl font-extrabold text-[#062B63] leading-tight mb-5"> */}
            <h2 className="text-3xl lg:text-5xl font-extrabold text-[#062B63] leading-tight mb-5">
              Trusted Service Since 20+ Years
            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-600 leading-8 text-[17px] mb-8 max-w-xl">
              Jaiswal Electric is a trusted name in Munger for electrical
              repairs and motor services. For more than two decades, we have
              been providing quality service, honest work and customer
              satisfaction.
            </p>

            {/* POINTS */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-yellow-500 text-lg" />

                <span className="text-gray-700 text-[17px] font-medium">
                  20+ Years of Experience
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-yellow-500 text-lg" />

                <span className="text-gray-700 text-[17px] font-medium">
                  Skilled & Experienced Technicians
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-yellow-500 text-lg" />

                <span className="text-gray-700 text-[17px] font-medium">
                  Genuine Spare Parts
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-yellow-500 text-lg" />

                <span className="text-gray-700 text-[17px] font-medium">
                  Quick & Reliable Service
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-yellow-500 text-lg" />

                <span className="text-gray-700 text-[17px] font-medium">
                  Affordable Pricing
                </span>
              </div>
            </div>
          </div>

          {/* <div className="bg-[#032B6B] rounded-2xl p-8 w-full max-w-[320px] text-white shadow-xl lg:ml-auto"> */}
          <div className="bg-[#032B6B] rounded-2xl p-6 w-full max-w-[340px] text-white shadow-xl mx-auto lg:mx-0">
            {/* ITEM */}
            <div className="flex items-center gap-5 pb-6 border-b border-white/20">
              {/* ICON */}
              <div className="text-yellow-400 text-5xl">
                <MdWorkspacePremium />
              </div>

              {/* TEXT */}
              <div>
                <h3 className="text-4xl font-bold leading-none">20+</h3>

                <p className="text-gray-200 text-lg mt-2">Years Experience</p>
              </div>
            </div>

            {/* ITEM */}
            <div className="flex items-center gap-5 py-6 border-b border-white/20">
              {/* ICON */}
              <div className="text-yellow-400 text-5xl">
                <HiUsers />
              </div>

              {/* TEXT */}
              <div>
                <h3 className="text-4xl font-bold leading-none">5000+</h3>

                <p className="text-gray-200 text-lg mt-2">Happy Customers</p>
              </div>
            </div>

            {/* ITEM */}
            <div className="flex items-center gap-5 pt-6">
              {/* ICON */}
              <div className="text-yellow-400 text-5xl">
                <RiVerifiedBadgeLine />
              </div>

              {/* TEXT */}
              <div>
                <h3 className="text-4xl font-bold leading-none">100%</h3>

                <p className="text-gray-200 text-lg mt-2">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
