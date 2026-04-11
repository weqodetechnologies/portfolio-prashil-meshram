import React from "react";
import {ArrowDownLeft, ArrowDownRight } from "lucide-react";


// Import your icons
import {
  Puzzle,
  Briefcase,
  Zap,
  Globe,
  Quote,
  MessageSquare,
  Target,
  ThumbsUp,
  BrainCircuit,
  Layers3,
  Handshake,

  Shield,
  Map,
  Lightbulb,
  PhoneCall,
  Mail,
  MapPin,
  Youtube,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

// Import your full components image
import IconImg from "../../../assets/appaleon/IconImg.png";
import Wireframes from "../../../assets/appaleon/Wireframes.png";
import design from "../../../assets/appaleon/design.png";

export default function IconographyComponents() {
  const icons = [
  Puzzle,
  Briefcase,
  Zap,
  Globe,
  Quote,
  MessageSquare,
  Target,
  ThumbsUp,
  BrainCircuit,
  Layers3,
  Handshake,

  Shield,
  Map,
  Lightbulb,
  PhoneCall,
  Mail,
  MapPin,
  Youtube,
  Instagram,
  Facebook,
  Twitter,
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
        <div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-9 lg:grid-cols-11 gap-8 justify-items-center mb-24">
          {icons.map((Icon, index) => (
            <div key={index}>
              <Icon className="w-11 h-11 text-white" />
            </div>
          ))}
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
           This project helped me understand that designing an IT firm website is not just about making it look modern, but about building trust quickly through clear messaging, structured content, and strong proof of work. While designing the Appaleon Consulting website, I learned how important it is to simplify services, highlight real value, and guide users with clear CTAs so they feel confident to contact the company. Overall, this case study improved my ability to balance clean UI with business goals like credibility, lead generation, and better user experience.
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
  onClick={() => window.open("https://www.appaleon.com/", "_blank")}
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