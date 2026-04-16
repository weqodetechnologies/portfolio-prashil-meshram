import React from "react";

import figma from "/src/assets/homepage/Figma.png";
import canva from "/src/assets/homepage/Canva.png";
import affinity from "/src/assets/homepage/Affinity.png";
import chatgpt from "/src/assets/homepage/Chatgpt.png";
import protopie from "/src/assets/homepage/protopie.png";
import perplexity from "/src/assets/homepage/Perplexity.png";
import motiff from "/src/assets/homepage/Motiff.png";
import banani from "/src/assets/homepage/Banani.png";

const tools = [
  { name: "Figma", logo: figma },
  { name: "Canva", logo: canva },
  { name: "Affinity", logo: affinity },
  { name: "Chatgpt", logo: chatgpt },                 
  { name: "protopie", logo: protopie },
  { name: "Perplexity", logo: perplexity },
  { name: "Motiff", logo: motiff },
  { name: "Banani", logo: banani },
];
export default function ToolsSection() {
  return (
    <section className="bg-black text-white py-16 px-4">
      {/* Title */}
      <h2 className="text-center text-white text-[28px] sm:text-[36px] font-semibold font-heading mb-16">
        Tools I Play with Everyday
      </h2>

      {/* Grid */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-14 max-w-6xl mx-auto">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-5 py-3 
                       bg-white/5 border border-white/10 
                       rounded-xl backdrop-blur-md
                       hover:bg-white/10 transition"
          >
            <img
              src={tool.logo}
              alt={tool.name}
              className="w-16 h-16 object-contain"
            />
            <span className="text-sm sm:text-base font-regular font-body">
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
