import React from "react";
import { ArrowUpRight } from "lucide-react";
import AboutHero2 from "../../../assets/homepage/AboutHero2.png";
import AboutHero3 from "../../../assets/homepage/AboutHero3.png";

export default function FeaturedProjects() {
  const projects = [
    {
      title: "Appaleon Consulting",
      subtitle: "IT Firm Website",
      image: AboutHero2,
    },
    {
      title: "Abhidnya Exim Pvt...",
      subtitle: "Import Export Website",
      image: AboutHero3,
    },
  ];

  return (
    <section className="bg-[#0b0b0b] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-white text-[28px] sm:text-[36px] font-semibold mb-16">
          My Featured Projects
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                group rounded-2xl bg-white p-4
                transition duration-300 hover:scale-[1.02]
              "
            >
              {/* Image */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[300px] object-cover rounded-xl"
                />
              </div>

              {/* Content */}
              <div className="flex items-center justify-between mt-4">
                <div>
                  <h3 className="text-[16px] font-semibold text-black">
                    {project.title}
                  </h3>
                  <p className="text-[13px] text-black/60">
                    {project.subtitle}
                  </p>
                </div>

                {/* Arrow Button */}
                <button
                  className="
                    w-10 h-10 flex items-center justify-center
                    rounded-full border border-black/20
                    transition group-hover:bg-black group-hover:text-white
                  "
                >
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          ))}

          {/* Coming Soon Card */}
          <div
            className="
              flex items-center justify-center
              h-[300px]
              rounded-2xl
              bg-gradient-to-br from-white/10 to-white/5
              border border-white/10
              text-white/70 text-lg font-medium
            "
          >
            Click For More Case Studies
          </div>
        </div>
      </div>
    </section>
  );
}
