import React from "react";

const skills = {
  design: [
    "User Experience (UX)",
    "User Interface (UI)",
    "Prototyping",
    "Wireframing",
    "User Research",
    "Color Psychology",
    "Typography",
    "Information Architecture",
  ],
  soft: [
    "Team Collaboration",
    "Critical Thinking",
    "Effective Communication",
    "Active Listening",
    "Problem Solving",
    "Creativity",
  ],
};

const SkillTag = ({ text }) => {
  return (
    <span
      className="
        w-[48%] sm:w-auto
        text-center
        px-4 sm:px-8 py-3 sm:py-4
        bg-[#0f0f0f] border border-white/10 text-gray-300 
        rounded-full text-[14px] sm:text-[20px]
        shadow-md hover:bg-[#2a2a2a] transition 
        font-medium font-body
      "
    >
      {text}
    </span>
  );
};

export default function SkillsSection() {
  return (
    <div className="bg-black text-white py-16 px-6">
      <h2 className="text-3xl md:text-4xl text-center font-semibold font-heading mb-12">
        My skills
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Design Skills */}
        <div>
          <h3 className="text-lg font-semibold font-heading mb-6 text-[28px] text-gray-300">
            Design Skills
          </h3>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {skills.design.map((skill, index) => (
              <SkillTag key={index} text={skill} />
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-lg font-semibold font-heading mb-6 text-[28px] text-gray-300">
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {skills.soft.map((skill, index) => (
              <SkillTag key={index} text={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
