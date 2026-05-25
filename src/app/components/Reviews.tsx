"use client";

import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Rakesh Kumar",
    city: "Munger",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Best fan repair service in Munger. Quick, reliable and affordable.",
  },
  {
    name: "Sunil Yadav",
    city: "Munger",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    review: "Very good experience. They repaired my motor perfectly.",
  },
  {
    name: "Pooja Kumari",
    city: "Munger",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review: "Honest work and genuine spare parts. Highly recommended!",
  },
];

export default function Reviews() {
  return (
    <section className="w-full bg-white py-16 px-5">
      <div className="max-w-8xl mx-auto text-center">
        {/* TITLE */}
        <h2 className="text-4xl font-extrabold text-[#062B63] mb-12">
          What Our Customers Say
        </h2>

        {/* REVIEW CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition duration-300 text-left"
            >
              {/* STARS */}
              <div className="flex items-center gap-1 text-yellow-400 mb-5">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* REVIEW TEXT */}
              <p className="text-gray-700 leading-7 text-lg mb-6">
                "{item.review}"
              </p>

              {/* USER */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-bold text-[#062B63] text-lg">
                    {item.name}
                  </h4>

                  <p className="text-gray-500 text-sm">{item.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DOTS */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <div className="w-3 h-3 rounded-full bg-[#062B63]"></div>

          <div className="w-3 h-3 rounded-full bg-gray-300"></div>

          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
}
