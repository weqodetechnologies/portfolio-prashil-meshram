import React from "react";
import heroImg from "../../../assets/homepage/HeroImage.png";
import albumImg from "../../../assets/homepage/HeroImage1.png";
import Icon from "../../ui/Icon/icon";

export default function Hero() {
  return (
    <section className="w-full  sm:pb-16 lg:pb-20 bg-white">
      {/* OUTER rounded container */}
      <div
        className="
          w-full border border-[#f3f3f3]
          rounded-b-[36px] sm:rounded-b-[70px] lg:rounded-b-[90px]
          px-4 sm:px-10 lg:px-24
          pt-8 sm:pt-1 pb-0
          overflow-hidden 
        "
      >
        <div
          className="
            grid gap-8 sm:gap-10 lg:gap-12
            items-start lg:items-end
            lg:grid-cols-[1.1fr_1.4fr_1fr] 
          "
        >
          {/* LEFT */}
          <div className="min-w-0 order-1 lg:order-none pb-4 sm:pb-8 lg:pb-20">
            <p className="text-[22px] sm:text-[34px] font-semibold text-black/60">
              Hey, I’m a
            </p>

            <h1
              className="
                mt-2 font-extrabold leading-[0.95] text-[#1b1b1b]
                text-[44px] sm:text-[70px] lg:text-[82px]
              "
            >
              UI/UX
              <br />
              Designer
            </h1>

            {/* ✅ Scroll circle ONLY on desktop */}
            <div className="mt-10 hidden lg:block">
              <ScrollCircle />
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="relative order-2 lg:order-none flex justify-center items-end">
            <img
              src={heroImg}
              alt="profile"
              className="
                block object-contain
                w-[220px] sm:w-[360px] lg:w-[520px]
                drop-shadow-[0_30px_40px_rgba(0,0,0,0.25)]
                lg:-translate-x-10
                -mb-[2px]
              "
            />
          </div>

          {/* RIGHT */}
          <div className="min-w-0 order-3 lg:order-none pb-10 lg:pb-10">
            <div className="text-center lg:text-left">
              <p className="text-[18px] sm:text-[26px] font-extrabold text-[#1b1b1b]">
                “Design is how it works,
                <br />
                not how it looks.”
              </p>

              <p className="mt-3 text-[13px] sm:text-[18px] text-black/50">
                Transform ideas into intuitive designs
              </p>
            </div>

            <div className="mt-6 lg:mt-8">
              <MusicCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScrollCircle() {
  return (
    <div className="relative h-[200px] w-[200px]">
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon name="DownArrow" classname="h-9 w-9 text-black" />
      </div>

      <svg
        className="absolute inset-0 animate-[spin_18s_linear_infinite]"
        viewBox="0 0 200 200"
      >
        <defs>
          <path
            id="circlePath"
            d="M100,100 m-82,0 a82,82 0 1,1 164,0 a82,82 0 1,1 -164,0"
          />
        </defs>

        <text fill="black" fontSize="18" fontWeight="600" letterSpacing="6">
          <textPath href="#circlePath" startOffset="0%">
            DOWN • SCROLL -- DOWN • SCROLL --
          </textPath>
        </text>
      </svg>
    </div>
  );
}

function MusicCard() {
  const tracks = [
    "Papercut - Linkin Park",
    "One Step Closer - Linkin Park",
    "Crawling - Linkin Park",
    "Runaway - Linkin Park",
    "In the End - Linkin Park",

    "Lying From You - Linkin Park",
    "Easier to Run - Linkin Park",
    "Faint - Linkin Park",
    "Figure.09 - Linkin Park",
    "From the Inside - Linkin Park",

    "Numb - Linkin Park",
    "Somewhere I Belong - Linkin Park",
    "Breaking the Habit - Linkin Park",
    "What I've Done - Linkin Park",
    "New Divide - Linkin Park",

    "Rest of Me - Neffex",
    "Unstoppable - Neffex",
    "Watch Me - Neffex",
    "As You Fade Away - Neffex",
    "Best of Me - Neffex",

    "Torn Apart - Neffex",
  ];

  return (
    <div className="w-full max-w-[600px] mx-auto lg:mx-0 rounded-2xl bg-white p-4 shadow-[0_22px_45px_rgba(0,0,0,0.14)]">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* LEFT */}
        <div className="sm:w-[155px] shrink-0">
          <img
            src={albumImg}
            alt="album"
            className="h-[190px] sm:h-[170px] w-full rounded-xl object-cover"
          />

          <div className="mt-3">
            <div className="relative h-[4px] w-full rounded-full bg-black/10">
              <span className="absolute left-0 top-0 h-[4px] w-[40%] rounded-full bg-black/70" />
              <span className="absolute left-[40%] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-black" />
            </div>

            <div className="mt-2 flex items-center justify-between text-[11px] text-black/40">
              <span>0:00</span>
              <span>0:00</span>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-3 justify-center sm:justify-start">
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full border bg-black cursor-pointer"
            >
              <Icon name="LeftArrow" classname="h-5 w-5 text-white" />
            </button>

            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full border bg-black cursor-pointer"
            >
              <Icon name="middel" classname="h-5 w-5 text-white" />
            </button>

            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full border bg-black cursor-pointer"
            >
              <Icon name="RightArrow" classname="h-5 w-5 text-white" />
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="min-w-0 flex-1">
          <div className="flex items-end gap-[6px] pt-1 justify-center sm:justify-start">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="w-[5px] rounded-full bg-black/15"
                style={{ height: 10 + ((i * 11) % 34) }}
              />
            ))}
          </div>

          {/* ✅ same look, only inside list scroll + scrollbar hidden */}
          <ol
            className="
        mt-3 text-[12px] text-black/60
        h-[200px] overflow-y-auto pr-2
        [scrollbar-width:none] [-ms-overflow-style:none]
       [&::-webkit-scrollbar]:hidden
       "
          >
            {tracks.map((t, idx) => (
              <li key={t} className="py-2">
                <div className="flex gap-2">
                  <span className="w-5 text-black/45">{idx + 1}.</span>
                  <span className="min-w-0 truncate">{t}</span>
                </div>
                {idx !== tracks.length - 1 && (
                  <div className="mt-2 h-px w-full bg-black/10" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
