import React from "react";
import { Search } from "lucide-react";
import { Lightbulb } from "lucide-react";
import { Layers } from "lucide-react";
import { Rocket } from "lucide-react";

export default function DesignProcess() {
  const steps = [
    {
       title: (
      <>
        Understand & <br /> Research
      </>
       ),
      desc: "Deep dive into user needs, market trends and technical feasibility",
      icon: <Search size={48} />,
      step: "Step 01",
    },
    {
      title: (
        <>"Define & <br /> Ideate"
        </>
        ),
      desc: "Brainstorming innovative solutions and defining the core product features.",
      icon: <Lightbulb size={48} />,
      step: "Step 02",
    },
    {
       title: (
        <>"Designing & <br /> Prototyping"
        </>
        ),
      desc: "Crafting pixel perfect visuals and high fidelity interactive mockups.",
      icon: <Layers size={48} />,
      step: "Step 03",
    },
    {
       title: (
        <>"Test & <br /> Launch"
        </>
        ),
      desc: "Validating with real users, refining, and deploying to production.",
      icon: <Rocket size={48} />,
      step: "Step 04",
    },
  ];

  return (
    <section className="bg-[#0f0f0f] py-20 px-4 ">
      <div className="max-w-6xl mx-auto ">
        
        {/* Heading */}
        <h2 className="text-center text-white text-[28px] sm:text-[36px] font-semibold font-heading mb-20">
          My Design Process
          
        </h2>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          
          {steps.map((item, index) => (
         <div
          key={index}
          className={`
         relative w-[260px] p-6 rounded-2xl
         border border-white bg-black
        text-white
         transition hover:bg-white hover:text-black

         ${index % 2 === 0 ? "md:-translate-y-8" : "md:translate-y-8"}
         `}
            >
              {/* Step Badge */}
              <div className="absolute top-4 right-4 text-[12px] px-3 py-1 rounded-full bg-white/10 border border-black ">
                {item.step}
              </div>

             <div className="mb-6 mt-10  flex justify-center items-center ">
             {item.icon}
             </div>

              {/* Title */}
              <h3 className="text-[24px] font-semibold mb-2 font-semibold font-heading ">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[16px] leading-6 font-regular font-body">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}