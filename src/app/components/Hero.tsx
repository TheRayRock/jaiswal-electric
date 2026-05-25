import Image from "next/image";

import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

import { AiOutlineThunderbolt, AiOutlineHeart } from "react-icons/ai";

import { MdEngineering, MdOutlineVerified } from "react-icons/md";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#031B4E] text-white">
      {/* MAIN GRID */}
      <div className="grid lg:grid-cols-2 min-h-[650px]">
        {/* LEFT SIDE */}
        <div className="relative z-20 flex items-center bg-[#031B4E]/90">
          <div className="w-full">
            {/* EXPERIENCE TAG */}
            <div className="h-20">
              <div className="inline-flex items-center justify-center border-2 border-yellow-400 rounded-full w-60 h-8">
                <span className="text-yellow-400 text-sm font-bold tracking-wider">
                  20+ YEARS OF EXPERIENCE
                </span>
              </div>
            </div>

            {/* HEADING */}
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Expert Electrical Repair
                <br />
                <span className="text-yellow-400 text-4xl leading-tight">
                  & Motor Services in Munger
                </span>
              </h1>
            </div>

            {/* DESCRIPTION */}
            <div className="h-10">
              <p className="text-gray-300 text-lg leading-8 max-w-2xl">
                We repair ceiling fans, table fans, all types of motors, coolers
                and provide all electrical works with quality and trust.
              </p>
            </div>

            {/* FEATURES */}
            <div className="flex flex-row gap-4 h-30 text-sm font-medium hover">
              <div className="flex items-center gap-2">
                <AiOutlineThunderbolt className="text-yellow-400 text-lg" />
                <span>Fast Service</span>
              </div>

              <div className="flex items-center gap-2">
                <MdEngineering className="text-yellow-400 text-lg" />
                <span>Expert Technicians</span>
              </div>

              <div className="flex items-center gap-2">
                <MdOutlineVerified className="text-yellow-400 text-lg" />
                <span>Genuine Parts</span>
              </div>

              <div className="flex items-center gap-2">
                <AiOutlineHeart className="text-yellow-400 text-lg" />
                <span>Customer Satisfaction</span>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-6">
              {/* CALL BUTTON */}
              <a
                href="tel:9006461326"
                className="bg-[#FFC107] hover:bg-yellow-400 transition-all duration-300 min-w-[280px] h-14 px-8 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg"
              >
                <FaPhoneAlt className="text-lg" />

                <span className="text-xl text-black">Call Now: 9006461326</span>
              </a>

              {/* WHATSAPP BUTTON */}
              <a
                href="https://wa.me/919006461326"
                target="_blank"
                className="bg-[#22C55E] hover:bg-green-500 transition-all duration-300 min-w-[250px] h-14 px-8 rounded-2xl font-bold text-black flex items-center justify-center gap-3 shadow-lg"
              >
                <FaWhatsapp className="text-2xl" />

                <span className="text-xl">WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative min-h-[650px]">
          <Image
            src="/wallpaperflare.com_wallpaper (3).jpg"
            alt="Jaiswal Electric Shop"
            fill
            priority
            className="object-cover"
          />

          {/* IMAGE OVERLAY */}
          <div className="absolute inset-0 bg-[#031B4E]/35"></div>
        </div>
      </div>
    </section>
  );
}
