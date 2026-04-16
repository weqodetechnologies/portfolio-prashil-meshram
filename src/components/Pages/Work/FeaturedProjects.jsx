import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AboutHero2 from "../../../assets/homepage/AboutHero2.png";
import AboutHero3 from "../../../assets/homepage/AboutHero3.png";

export default function FeaturedProjects() {
  const navigate = useNavigate();
  const projects = [
  {
    title: "Appaleon Consulting",
    subtitle: "IT Firm Website",
    image: AboutHero2,
    path: "/appaleon",
  },
  {
    title: "Abhidnya Exim Pvt...",
    subtitle: "Import Export Website",
    image: AboutHero3,
    path: "/abhidnya",
  },
];

  return (
    <section className="bg-[#0b0b0b] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
  <h2 className="text-white text-[28px] sm:text-[36px] font-bold font-heading">
    My Work
  </h2>

  <p className="text-white/70 mt-4 text-lg max-w-2xl mx-auto font-regular font-body">
    Check Out My latest projects which helps me and <br /> improve my design skills day by day
  </p>
</div>
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
                  <h3 className="text-[16px] text-black font-extrabold font-heading">
                    {project.title}
                  </h3>
                  <p className="text-[13px] text-black/60 font-regular font-body">
                    {project.subtitle}
                  </p>
                </div>

                {/* Arrow Button */}
           <button
           onClick={() => navigate(project.path)}
           className="
           group
           w-10 h-10
           flex items-center justify-center
           rounded-full border border-black/20
           transition
           hover:bg-black hover:text-white
           "
>
  <span
    className="
      transition-transform duration-300
      group-hover:rotate-45
    "
  >
    <ArrowUpRight size={16} />
  </span>
</button>
              </div>
            </div>
          ))}

          {/* Coming Soon Card */}
                  <a
  href="https://www.behance.net/prashilmeshram1/moodboards"
  target="_blank"
  rel="noopener noreferrer"
>
  <div
    className="
      flex items-center justify-center
      h-[300px]
      rounded-2xl
      bg-gradient-to-br from-white/10 to-white/5
      border border-white/10
      text-white/70 text-lg font-bold font-body
      cursor-pointer hover:scale-[1.02] transition
    "
  >
    Click For More Case Studies
  </div>
</a>
        </div>
      </div>
    </section>
  );
}
