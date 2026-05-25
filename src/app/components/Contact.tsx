// "use client";

// import {
//   FaPhoneAlt,
//   FaWhatsapp,
//   FaMapMarkerAlt,
//   FaEnvelope,
// } from "react-icons/fa";

// import { IoSend } from "react-icons/io5";

// export default function Contact() {
//   return (
//     <section className="w-full bg-white py-20 px-5">
//       <div className="max-w-7xl mx-auto">
//         {/* TOP DOTS */}
//         <div className="flex justify-center gap-2 mb-10">
//           <div className="w-3 h-3 rounded-full bg-[#062B63]"></div>
//           <div className="w-3 h-3 rounded-full bg-gray-300"></div>
//           <div className="w-3 h-3 rounded-full bg-gray-300"></div>
//         </div>

//         {/* MAIN GRID */}
//         <div className="grid lg:grid-cols-[0.8fr_1.4fr_1fr] gap-8 items-start">
//           {/* LEFT SIDE */}
//           <div>
//             <p className="text-yellow-500 font-bold uppercase tracking-widest text-sm mb-2">
//               Contact Us
//             </p>

//             <h2 className="text-5xl font-extrabold text-[#062B63] mb-10">
//               Get In Touch
//             </h2>

//             {/* CONTACT ITEMS */}
//             <div className="space-y-7">
//               {/* PHONE */}
//               <div className="flex gap-4">
//                 <div className="w-12 h-12 rounded-full bg-[#062B63] text-white flex items-center justify-center">
//                   <FaPhoneAlt />
//                 </div>

//                 <div>
//                   <h4 className="font-bold text-[#062B63]">Phone</h4>

//                   <p className="text-gray-600">9006461326</p>
//                 </div>
//               </div>

//               {/* WHATSAPP */}
//               <div className="flex gap-4">
//                 <div className="w-12 h-12 rounded-full bg-[#062B63] text-white flex items-center justify-center">
//                   <FaWhatsapp />
//                 </div>

//                 <div>
//                   <h4 className="font-bold text-[#062B63]">WhatsApp</h4>

//                   <p className="text-gray-600">9006461326</p>
//                 </div>
//               </div>

//               {/* ADDRESS */}
//               <div className="flex gap-4">
//                 <div className="w-12 h-12 rounded-full bg-[#062B63] text-white flex items-center justify-center">
//                   <FaMapMarkerAlt />
//                 </div>

//                 <div>
//                   <h4 className="font-bold text-[#062B63]">Address</h4>

//                   <p className="text-gray-600 leading-7">
//                     In Front of Neelam Cinema,
//                     <br />
//                     Munger, Bihar 811201
//                   </p>
//                 </div>
//               </div>

//               {/* EMAIL */}
//               <div className="flex gap-4">
//                 <div className="w-12 h-12 rounded-full bg-[#062B63] text-white flex items-center justify-center">
//                   <FaEnvelope />
//                 </div>

//                 <div>
//                   <h4 className="font-bold text-[#062B63]">Email</h4>

//                   <p className="text-gray-600 break-all">
//                     jaiswalelectric.munger@gmail.com
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* CENTER FORM */}
//           <div>
//             <form className="space-y-5">
//               {/* INPUT ROW */}
//               <div className="grid md:grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   className="w-full border border-gray-300 rounded-lg px-5 py-4 outline-none focus:border-[#062B63]"
//                 />

//                 <input
//                   type="text"
//                   placeholder="Phone Number"
//                   className="w-full border border-gray-300 rounded-lg px-5 py-4 outline-none focus:border-[#062B63]"
//                 />
//               </div>

//               {/* INPUT ROW */}
//               <div className="grid md:grid-cols-2 gap-4">
//                 <input
//                   type="email"
//                   placeholder="Your Email"
//                   className="w-full border border-gray-300 rounded-lg px-5 py-4 outline-none focus:border-[#062B63]"
//                 />

//                 <select className="w-full border border-gray-300 rounded-lg px-5 py-4 outline-none focus:border-[#062B63] text-gray-500">
//                   <option>Service Required</option>
//                   <option>Fan Repair</option>
//                   <option>Motor Repair</option>
//                   <option>Electrical Service</option>
//                 </select>
//               </div>

//               {/* TEXTAREA */}
//               <textarea
//                 rows={5}
//                 placeholder="Your Message"
//                 className="w-full border border-gray-300 rounded-lg px-5 py-4 outline-none focus:border-[#062B63]"
//               ></textarea>

//               {/* BUTTON */}
//               <button className="w-full bg-[#062B63] hover:bg-[#041d45] text-white py-4 rounded-lg font-semibold text-lg transition duration-300 flex items-center justify-center gap-3">
//                 Send Message
//                 <IoSend />
//               </button>
//             </form>
//           </div>

//           {/* RIGHT MAP */}
//           <div>
//             <div className="overflow-hidden rounded-2xl shadow-lg h-full">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.447197663533!2d86.473375!3d25.376274!2m3!1f0!2f0!3f0!"
//                 width="100%"
//                 height="420"
//                 loading="lazy"
//                 className="border-0 w-full"
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
