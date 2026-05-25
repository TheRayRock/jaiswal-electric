import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-blue-950 text-white py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
        <div>
          <p className="text-yellow-400 font-semibold mb-4">
            20+ Years Experience
          </p>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Expert Electrical Repair & Motor Services
          </h1>

          <p className="text-lg text-gray-300 mb-6">
            Ceiling fan, cooler, motor, submersible and all electrical repair
            services in Munger.
          </p>

          <div className="flex gap-4">
            <a
              href="tel:9006461326"
              className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919006461326"
              className="bg-green-500 px-6 py-3 rounded-xl font-semibold"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div>
          <Image
            src="/wallpaperflare.com_wallpaper (3).jpg"
            alt="Jaiswal Electric"
            width={700}
            height={500}
            className="rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
