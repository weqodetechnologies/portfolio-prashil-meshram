import React from "react";
import HeroImg from "../../../assets/appaleon/heroimg.png";
import Icon from "../../ui/Icon/icon";

export default function Hero() {
  return (
    <>
      <section className="bg-[#0f0f0f] text-white px-5 sm:px-10 lg:px-20 py-16">
        <div className="max-w-6xl mx-auto text-center">
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            Appaleon Consulting IT <br className="hidden sm:block" />
            Firm Website
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
        Appaleon Consulting is an IT consulting firm specializing in custom software development, digital transformation, and technology-driven business solutions. The goal of this project was to design a modern, scalable, and user-centric website that clearly communicates the company’s expertise, services, and value proposition while building trust with potential clients.
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
                Appaleon Consulting lacked a strong digital presence that
                clearly communicated its IT expertise, service offerings, and
                consulting value. The existing website structure did not
                effectively guide users, making it difficult for potential
                clients to quickly understand what the company does, and how to
                get in touch.
              </p>
            </div>

            {/* Solution Card */}
            <div className="bg-white border border-black rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Solution" className="w-5 h-5 text-black" />
                <h3 className="text-lg font-semibold">Solution</h3>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">
                The solution was to design a modern, user-centric IT consulting
                website focused on clarity, credibility, and conversion. A
                research-driven UI/UX approach was used to restructure content,
                simplify navigation, and present services in a clear,
                outcome-focused manner.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
