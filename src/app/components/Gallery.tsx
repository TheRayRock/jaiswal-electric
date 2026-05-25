// export default function Gallery() {
//   return (
//     <section className="p-10">
//       <h2 className="text-4xl font-bold mb-4">Gallery</h2>

//       <p>Shop and repair work photos will come here.</p>
//     </section>
//   );
// }

"use client";

const galleryImages = [
  "https://images.unsplash.com/photo-1581092919535-7146ff1a5905?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
];

export default function Gallery() {
  return (
    <section className="w-full bg-white py-16 px-5">
      <div className="max-w-8xl mx-auto text-center">
        {/* SMALL TITLE */}
        <p className="text-yellow-500 font-bold uppercase tracking-widest text-sm mb-2">
          Our Gallery
        </p>

        {/* MAIN TITLE */}
        <h2 className="text-4xl font-extrabold text-[#062B63] mb-10">
          Our Work & Store
        </h2>

        {/* GALLERY */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md group cursor-pointer"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-[130px] object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="mt-8">
          <button className="bg-[#062B63] hover:bg-[#041d45] text-white px-8 py-3 rounded-lg font-semibold transition duration-300">
            View More Photos 📸
          </button>
        </div>
      </div>
    </section>
  );
}
