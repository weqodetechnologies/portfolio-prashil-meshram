import React from "react";
import AboutHero1 from "../../../assets/homepage/AboutHero1.png";
import AboutHeroo from "../../../assets/homepage/AboutHeroo.png";
import AboutHerooo from "../../../assets/homepage/AboutHerooo.png";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function AboutHero() {
  const navigate = useNavigate();
  const photos = [
    {
      src: AboutHero1,
      date: "",
      style: "z-[3]", // front image
    },
    {
      src: AboutHeroo,
      date: "2nd Nov 2022",
      style: "z-[2] group-hover:-translate-x-16 group-hover:-rotate-6",
    },
    {
      src: AboutHerooo,
      date: "14th Feb 2026",
      style: "z-[1] group-hover:translate-x-16 group-hover:rotate-6",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* subtle vignette/gradient */}
      <div className="pointer-events-none absolute ">
        <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-white/6 blur-[90px]" />
        <div className="absolute -right-40 -bottom-40 h-[520px] w-[520px] rounded-full bg-white/6 blur-[90px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] via-transparent to-white/[0.03]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
        {/* TOP AREA */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* LEFT TEXT */}
          <div className="min-w-0">
            <p className="text-[40px] font-extrabold uppercase tracking-[0.14em] text-white/18 sm:text-[46px] lg:text-[56px]">
              HELLO
            </p>

            <h1 className="mt-2 text-[34px] tracking-tight font-bold font-heading text-white sm:text-[46px] lg:text-[54px]">
              I’M PRASHIL
            </h1>

            <p className="mt-4 max-w-[520px] text-[13px] leading-6 font-regular text-white/70 sm:text-[12px] font-regular font-body sm:leading-7">
              A Passionated and Detail Oriented UI/UX Designer with Strong
              Knowledge of UI Fundamentals, Turning Ideas into a Visual Stunning
              ideas. I Have Hands on experience in Wireframing and Protofyping.
            </p>

            {/* CTA */}
            <div className="mt-7">
             <button
  type="button"
  onClick={() => navigate("/about")}
  className="
    group inline-flex items-center gap-3
    rounded-full border border-white/25 bg-white/5
    px-5 py-3 text-[13px] font-semibold text-white
    backdrop-blur
    transition hover:border-white/40 hover:bg-white/10 font-medium font-body
  "
>
  More About Me
  <span
    className="
      grid h-8 w-8 place-items-center rounded-full
      border border-white/20 bg-white/10
      transition group-hover:bg-white/15
    "
  >
    <ArrowUpRight className="h-4 w-4" />
  </span>
</button>
            </div>
          </div>

          {/* RIGHT PHOTOS */}
          <div className="relative w-[200px] h-[220px] group mx-auto hidden md:block">
            <div className="absolute top-0 left-0 flex justify-center lg:justify-end">
              {/* Slight base tilt like screenshot */}
              <div className="relative w-full max-w-[560px] lg:max-w-[640px]">
                <div className="pointer-events-none absolute inset-x-6 top-10 h-24 rounded-2xl bg-black/40 blur-2xl sm:inset-x-10" />
                <div className="relative w-[190px] h-[220px] group">
                  {photos.map((p, i) => (
                    <Polaroid


                    
                      key={p.date}
                      src={p.src}
                      date={p.date}
                      index={i}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* STATS BAR */}
        <div className="mt-10 sm:mt-12">
          <div
            className="
              w-full rounded-3xl border border-white/10
              bg-white/[0.06] px-6 py-7
              shadow-[0_20px_60px_rgba(0,0,0,0.45)]
              backdrop-blur
            "
          >
            <div className="grid gap-6 text-center sm:grid-cols-3 sm:gap-2 font-medium font-body">
              <Stat value="6+" label="Month Experience" />
              <Stat value="8+" label="Completed Projects" />
              <Stat value="100%" label="Happy Clients" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div className="min-w-0">
      <div className="text-[42px] font-extrabold text-white sm:text-[46px] lg:text-[52px]">
        {value}
      </div>
      <div className="mt-1 text-[15px] font-medium text-white/75 sm:text-[16px]">
        {label}
      </div>
    </div>
  );
}

function Polaroid({ src, date, index }) {
  return (
    <div
      className={`
        absolute top-0 left-0
        w-[90px] sm:w-[150px] lg:w-[200px] 
        bg-white
        p-2 pb-6
        shadow-[0_18px_45px_rgba(0,0,0,0.55)]

        transition-all duration-500 ease-in-out

        ${index === 0 ? "z-[3]" : ""}
        ${index === 1 ? "z-[2] group-hover:-translate-x-40 group-hover:-rotate-6" : ""}
        ${index === 2 ? "z-[1] group-hover:translate-x-40 group-hover:rotate-6" : ""}
      `}
    >
      <div className="overflow-hidden">
        <img
          src={src}
          alt={date}
          className="h-[120px] w-full sm:h-[160px] lg:h-[190px]"
        />
      </div>

      <div className="absolute bottom-1.5 left-0 right-0 text-center">
        
        <span className="text-[12px] text-black/80 italic">{date}</span>
      </div>
    </div>
  );
}
