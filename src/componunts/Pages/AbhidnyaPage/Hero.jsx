import React from "react";
import HeroImg from "../../../assets/abhidnyapage/heroimage.png";
import Icon from "../../ui/Icon/icon";

export default function Hero() {
  return (
    <>
      <section className="bg-[#0f0f0f] text-white px-5 sm:px-10 lg:px-20 py-16">
        <div className="max-w-6xl mx-auto text-center">
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-10 font-semibold">
            Abhidnya Exim Pvt. Ltd <br className="hidden sm:block" />
            Import Export Website
          </h1>

          {/* Tags */}
          <div className="flex justify-center gap-3 mt-4 flex-wrap">
            {["UX/UI", "Case Study", "2026"].map((tag, i) => (
              <span
                key={i}
                className="px-4 py-1 text-sm rounded-full bg-white/10 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Image Card */}
          <div className="mt-10">
            <img
              src={HeroImg}
              alt="project"
              className="w-full rounded-xl object-cover"
            />
          </div>

          {/* Info Section */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 text-left">
            <div className="py-4 sm:py-0 sm:pr-6 sm:border-r border-white/60">
              <p className="text-white font-bold text-lg sm:text-xl">Role:</p>
              <p className="font-medium text-gray-300 mt-1">UI/UX Designer</p>
            </div>

            <div className="py-4 sm:py-0 sm:px-6 sm:border-r border-white/60">
              <p className="text-white font-bold text-lg sm:text-xl">
                Platform:
              </p>
              <p className="font-medium text-gray-300 mt-1">Website Design</p>
            </div>

            <div className="py-4 sm:py-0 sm:px-6 sm:border-r border-white/60">
              <p className="text-white font-bold text-lg sm:text-xl">
                Timeline:
              </p>
              <p className="font-medium text-gray-300 mt-1">3 Weeks</p>
            </div>

            <div className="py-4 sm:py-0 sm:pl-6">
              <p className="text-white font-bold text-lg sm:text-xl">Tools:</p>
              <p className="font-medium text-gray-300 mt-1">Figma</p>
            </div>
          </div>
        </div>
      </section>

       <section className="bg-[#0f0f0f] text-white sm:px-10 lg:px-20 py-16 pt-[10px]">
      <div className="max-w-6xl mx-auto">
    
       <div className="mt-16 rounded-[28px] border text-start bg-white/10 border-white/10 p-8">
      
      <h3 className="text-[40px] font-bold text-white">
        Project Overview
      </h3>

      <p className="mt-4 text-[16px] leading-relaxed text-white">
        Abhidnya Exim Pvt. Ltd. is an agriculture-focused import-export company that supplies fresh fruits, vegetables, grains, and pulses to domestic and international markets. The goal of this website project was to create a clean, professional, and trustworthy digital presence that clearly communicates the company’s product range, export capabilities, and commitment to quality. The website was designed to help buyers explore products easily, understand specifications, and quickly connect with the company for inquiries.
      </p>

      </div>

     </div>
    </section>




      {/* Problem & Solution Section */}
      <section className="bg-white px-5 sm:px-10 lg:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl text-gray-900 mb-10 text-[40px] font-bold">
            Problem & Solution
          </h2>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Problem Card */}
            <div className="bg-white border border-black rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Problem" className="w-5 h-5 text-black" />

                <h3 className="text-lg font-semibold">Problem</h3>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">
                Abhidnya Exim Pvt. Ltd. needed a professional agro import-export website that clearly communicates their product range, export capabilities, and quality standards. However, the absence of a structured digital presence made it difficult for international buyers to understand what products they offer, how the export process works, and how to connect with the company confidently.
              </p>
            </div>

            {/* Solution Card */}
            <div className="bg-white border border-black rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Solution" className="w-5 h-5 text-black" />
                <h3 className="text-lg font-semibold">Solution</h3>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">
               To solve this, a clean and modern agro import-export website was designed for Abhidnya Exim Pvt. Ltd. with a clear product showcase.The website also includes strong inquiry-focused CTAs and a smooth navigation structure, making it easier for global buyers to explore products and send inquiries quickly helping the brand generate more leads and build credibility in the international market.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}