// import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";
// import Services from "@/components/Services";
// import About from "@/components/About";
// import Gallery from "@/components/Gallery";
// import Reviews from "@/components/Reviews";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";

// export default function Home() {
//   return (
//     <main>
//       <Navbar />
//       <Hero />
//       <Services />
//       <About />
//       <Gallery />
//       <Reviews />
//       <Contact />
//       <Footer />
//     </main>
//   );
// }

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    // <main>
    //   <Navbar />
    //   <Hero />
    //   <Services />
    //   <About />
    //   <Gallery />
    //   <Reviews />
    //   {/* <Contact /> */}
    //   <Footer />
    // </main>
    <main className="w-full overflow-hidden">
      <Navbar />

      <section className="min-h-screen">
        <Hero />
      </section>

      <section className="py-20">
        <Services />
      </section>

      <section className="py-20">
        <About />
      </section>

      <section className="py-20">
        <Gallery />
      </section>

      <section className="py-20">
        <Reviews />
      </section>

      {/* <section className="py-20">
    <Contact />
  </section> */}

      <Footer />
    </main>
  );
}
