import React from "react";

import WeQodeLogo from "../../../assets/aboutus/weqode.png";
import Grin from "../../../assets/aboutus/grin.png";
import GHRaisoniLogo from "../../../assets/aboutus/ghraisoni.png";

const experiences = [
  {
    logo: WeQodeLogo,
    company: "WeQode Technologies",
    duration: "Oct 2025 - Present",
    role: "UI/UX Designer",
  },
  {
    logo: Grin,
    company: "Grin Technologies",
    duration: "Dec 2024 - Mar 2025",
    role: "Social Media Intern",
  },
];

const education = [
  {
    logo: GHRaisoniLogo,
    institution: "G.H.Raisoni College of Engineering",
    duration: "Nov 2020 - July 2024",
    degree: "B.Tech, CSE",
  },
];

export default function ExperienceEducation() {
  return (
    <section className="bg-black px-6 md:px-16 lg:px-24 py-20">
      <div className="max-w-6xl mx-auto">
        {/* EXPERIENCE */}
        <h2 className="text-white text-4xl md:text-4xl font-bold font-heading text-center mb-14">
          My Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((item, index) => (
            <div key={index}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
                {/* LEFT */}
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shrink-0 overflow-hidden">
                    <img
                      src={item.logo}
                      alt={item.company}
                      className={`object-contain ${
                        item.company === "WeQode Technologies"
                          ? "w-[100px] h-[100px] mt-10"
                          : item.company === "Grin Technologies"
                            ? "w-[82%] h-[82%]"
                            : "w-[75%] h-[75%]"
                      }`}
                    />
                  </div>

                  <div>
                    <h3 className="text-white text-xl md:text-2xl font-bold font-heading">
                      {item.company}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base mt-1 font-regular font-body">
                      {item.duration}
                    </p>
                  </div>
                </div>

                {/* RIGHT */}
                <p className="text-white text-base sm:text-lg md:text-xl sm:shrink-0 ml-[72px] sm:ml-0  font-bold font-heading">
                  {item.role}
                </p>
              </div>

              {index < experiences.length - 1 && (
                <div className="w-full h-px bg-white/30 mt-8 font-regular font-body" />
              )}
            </div>
          ))}
        </div>

        {/* EDUCATION */}
        <h2 className="text-white text-4xl md:text-4xl text-center mt-20 mb-14 font-bold font-heading">
          My Education
        </h2>

        {education.map((item, index) => (
          <div key={index} className="flex items-center justify-between gap-6">
            {/* LEFT */}
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-white overflow-hidden flex items-center justify-center shrink-0">
                <img
                  src={item.logo}
                  alt={item.institution}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-white text-xl md:text-2xl font-bold">
                  {item.institution}
                </h3>
                <p className="text-gray-400 text-sm md:text-base mt-1">
                  {item.duration}
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <p className="text-white text-lg md:text-xl font-bold shrink-0">
              {item.degree}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
