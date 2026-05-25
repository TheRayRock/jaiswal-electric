// export default function Services() {
//   return (
//     <section className="p-10">
//       <h2 className="text-4xl font-bold mb-6">Our Services</h2>

//       <ul className="space-y-3">
//         <li>Ceiling Fan Repair</li>
//         <li>Table Fan Repair</li>
//         <li>Motor Repair</li>
//         <li>Cooler Repair</li>
//         <li>Electrical Work</li>
//       </ul>
//     </section>
//   );
// }

import Image from "next/image";

import { FaFan, FaTools, FaBolt } from "react-icons/fa";

import { GiWaterTank } from "react-icons/gi";

const services = [
  {
    title: "Ceiling Fan Repair",
    description: "All types of ceiling fan repair & bearing replacement.",
    image:
      "/moHAgz86jT-bpl-bfcb-1206br-ceiling-fan-491902869-i-1-1200wx1200h.avif",
    icon: <FaFan />,
  },

  {
    title: "Table Fan Repair",
    description: "Table fan wiring, bearing, bush & all types of repairing.",
    image: "/shopping.webp",
    icon: <FaFan />,
  },

  {
    title: "Cooler Repair",
    description: "All types of cooler repair, motor replacement & water pump.",
    image: "/shopping (1).webp",
    icon: <FaTools />,
  },

  {
    title: "All Types Motor Repair",
    description: "Single phase, three phase motor repair & rewinding service.",
    image: "/download.jpeg",
    icon: <FaBolt />,
  },

  {
    title: "Submersible Motor",
    description: "Submersible motor repair, rewinding & maintenance.",
    image: "/shopping (2).webp",
    icon: <GiWaterTank />,
  },

  {
    title: "Electrical Work",
    description:
      "All types of house wiring, fitting, repair & electrical installation.",
    image: "/electrical.jpg",
    icon: <FaTools />,
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-8xl px-6">
        {/* TOP TITLE */}
        <div className="text-center mb-16">
          <p className="text-yellow-500 font-bold uppercase tracking-widest mb-3">
            Our Services
          </p>

          <h2 className="text-5xl font-extrabold text-[#062B63]">What We Do</h2>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* IMAGE */}
              <div className="relative h-44">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* ICON */}
              <div className="flex justify-center -mt-7 relative z-20">
                <div className="w-14 h-14 rounded-full bg-[#062B63] text-white flex items-center justify-center text-xl shadow-lg border-4 border-white">
                  {service.icon}
                </div>
              </div>

              {/* CONTENT */}
              <div className="px-5 pt-5 pb-8 text-center">
                <h3 className="text-xl font-bold text-[#062B63] mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-8 text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
