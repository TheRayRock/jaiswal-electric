import { FaPhoneAlt, FaClock } from "react-icons/fa";
import { MdElectricBolt } from "react-icons/md";

export default function Navbar() {
  return (
    <>
      {/* TOP BAR
      <div className="bg-[#062B63] text-white text-sm py-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="font-medium">
            Trusted Electrical Repair & Motor Services in Munger Since 20+ Years
          </p>

          <div className="flex items-center gap-2">
            <FaClock className="text-yellow-400" />

            <p>Mon - Sun: 8:00 AM - 8:00 PM</p>
          </div>
        </div>
      </div> */}

      {/* MAIN NAVBAR */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="w-full mx-auto px-6 py-3 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="text-yellow-400 text-5xl">
              <MdElectricBolt />
            </div>

            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-[#062B63] leading-none">
                Jaiswal Electric
              </h1>

              <p className="text-gray-500 text-xs lg:text-sm mt-1">
                Repairing with Trust Since 30+ Years
              </p>
            </div>
          </div>

          {/* MENU */}
          <nav className="hidden md:flex items-center gap-10 font-semibold text-[#062B63]">
            <a href="#" className="border-b-4 border-[#062B63] pb-1">
              Home
            </a>

            <a href="#services">Services</a>

            <a href="#about">About Us</a>

            <a href="#gallery">Gallery</a>

            <a href="#reviews">Reviews</a>

            <a href="#contact">Contact</a>
          </nav>
          {/* CALL SECTION */}
          <div className="flex items-center gap-3 ml-auto">
            <div className="bg-yellow-400 w-10 h-10 rounded-full flex items-center justify-center">
              <FaPhoneAlt className="text-[#062B63] text-sm" />
            </div>

            <div className="leading-tight">
              <p className="text-gray-500 text-sm">Call Us Now</p>

              <a
                href="tel:9006461326"
                className="text-2xl font-bold text-[#062B63]"
              >
                9006461326
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
