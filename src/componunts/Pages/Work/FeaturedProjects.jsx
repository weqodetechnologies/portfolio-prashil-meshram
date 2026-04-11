import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AboutHero2 from "../../../assets/homepage/AboutHero2.png";
import AboutHero3 from "../../../assets/homepage/AboutHero3.png";

export default function FeaturedProjects() {
  const navigate = useNavigate();
  const [activeArrow, setActiveArrow] = useState(null);
  const projects = [
  {
    title: "Appaleon Consulting",
    subtitle: "IT Firm Website",
    image: AboutHero2,
    path: "/appaleon",   // ✅ add this
  },
  {
    title: "Abhidnya Exim Pvt...",
    subtitle: "Import Export Website",
    image: AboutHero3,
    path: "/abhidnya",   // ✅ add this
  },
];
  return (
    <section className="bg-[#0b0b0b] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-white text-[28px] sm:text-[36px] font-semibold mb-16">
          My Work
          <p className="text-white text-4xl md:text-4xl font-extrabold text-center mt-20 mb-14">
            Check Out My latest projects which helps me and <br /> improve my
            design skills day by day
          </p>
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
              onClick={() => {
              setActiveArrow(index);        // animation
              navigate(project.path);       // navigation ✅
              }}
              className="
              w-10 h-10
              flex items-center justify-center
              rounded-full border border-black/20
              transition hover:bg-black hover:text-white
              "
              >
             <ArrowUpRight
             size={16}
             className={`transition-transform duration-300 ${
             activeArrow === index ? "-rotate-45" : "rotate-0"
            }`}
            />
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
