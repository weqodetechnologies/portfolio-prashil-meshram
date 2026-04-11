import React from "react";
import HeroImg from "../../../assets/aboutus/Heroimg.png";

export default function Hero() {
  return (
    <section className="bg-black px-5 sm:px-10 lg:px-20 py-14">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-10 lg:gap-22">
        {/* LEFT — Text Content */}
        <div className="flex-1">
          <h2 className="text-white text-[30px] sm:text-[34px] font-extrabold mt-10 mb-6">
            About Me
          </h2>

          <p className="text-white sm:text-[20px] leading-relaxed mb-5">
            I'm a passionate UI/UX Designer who loves turning complex ideas into
            simple, intuitive, and visually engaging digital experiences. I
            believe great design is not just about how things look, but how
            smoothly they work for real users.
          </p>

          <p className="text-white sm:text-[20px] leading-relaxed">
            With a strong foundation in user research, wireframing, prototyping,
            and visual design, I focus on creating user-centered solutions that
            align business goals with user needs. I enjoy understanding user
            behavior, solving usability problems, and crafting interfaces that
            feel effortless and meaningful.
          </p>
        </div>

        {/* RIGHT — Photo */}
        <div className="w-full lg:w-[280px] xl:w-[320px] shrink-0">
          <div className="rounded-2xl overflow-hidden aspect-[3/4]">
            <img
              src={HeroImg}
              alt="Prashil Meshram"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
