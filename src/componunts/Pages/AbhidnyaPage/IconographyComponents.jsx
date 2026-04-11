import React from "react";
import {ArrowDownLeft, ArrowDownRight } from "lucide-react";


// Import your icons
import {
  Trophy,
  Globe,
  History,
  Box,
  PlusCircle,
  Quote,

} from "lucide-react";

// Import your full components image
import IconImg from "../../../assets/abhidnyapage/IconImg.png";
import Wireframes from "../../../assets/abhidnyapage/Wireframes.png";
import design from "../../../assets/appaleon/design.png";

export default function IconographyComponents() {
  const icons = [
  Trophy,
  Globe,
  History,
  Box,
  PlusCircle,
  Quote,
  ];

  return (
    <>
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Heading */}
        <h2 className="text-[42px] font-bold text-center mb-12">
          Iconography
        </h2>

        {/* ICON GRID */}
        <div className="flex justify-center mb-24">
  <div className="grid grid-cols-6 gap-10">
    {icons.map((Icon, index) => (
      <div key={index}>
        <Icon className="w-11 h-11 text-white" />
      </div>
    ))}
  </div>
</div>

        {/* Components Heading */}
        <h2 className="text-[42px] font-bold text-center mb-10">
          Components
        </h2>

        {/* White Box */}
       
          <img
            src={IconImg}
            alt="Components Preview"
            className="w-full h-auto object-contain rounded-2xl"
          />
        </div>
      
    </section>
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-[1100px] mx-auto">
       <h2 className="text-[42px] font-bold text-center mb-10">
         Low Fidelity Wireframes
        </h2>

        {/* White Box */}
        
          <img
            src={Wireframes}
            alt="Components Preview"
            className="w-full h-auto object-contain rounded-2xl"
          />
        </div>
        
    </section>
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-[1100px] mx-auto">
       <h2 className="text-[42px] font-bold text-center mb-10">
         High Fidelity design
        </h2>

        {/* White Box */}
        
          <img
            src={design}
            alt="Components Preview"
            className="w-full h-auto object-contain rounded-2xl"
          />
        </div>        
    </section>


        <section className="bg-black py-20 px-4 text-white ">
      <div className=" max-w-[1100px] mx-auto">
        
        {/* Card */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-3xl p-10 md:p-14 shadow-lg">
          
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Takeaway
          </h2>

          {/* Paragraph */}
          <p className="text-gray-300 text-lg leading-relaxed max-w-6xl">
            This project takeaway is that a well-structured and professional
            website can strongly improve trust and clarity for an import-export
            business. By presenting Abhidnya Exim Pvt. Ltd.’s product range,
            export capabilities, and quality standards in a clean and
            easy-to-navigate format, the website makes it simpler for buyers to
            explore specifications, understand services, and connect quickly for
            inquiries supporting both credibility and lead generation.
          </p>

          {/* Arrow Line */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <ArrowDownRight className="w-6 h-6 text-gray-300" />
            
            <p className="text-xl md:text-2xl font-semibold text-center">
              Don’t Forget to visit the Website
            </p>

         
             <ArrowDownLeft className="w-6 h-6 text-gray-300" />
          </div>

          {/* Button */}
          <div className="flex justify-center mt-8">
             <button
  onClick={() => window.open("https://www.abhidnyaexim.com/products", "_blank")}
  className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition"
>
  Visit Website
</button>
          </div>

        </div>

      </div>
    </section>
    </>
  );
}