import React, { useEffect, useState } from "react";
import heroImg from "../../../assets/homepage/HeroImage.png";
import albumImg from "../../../assets/homepage/HeroImage1.png";
import Img3 from "../../../assets/homepage/song3.png";
import Img6 from "../../../assets/homepage/song6.png";
import Icon from "../../ui/Icon/icon";
import place from "../../../assets/audio/A Place for My Head.mp3";
import crawling from "../../../assets/audio/Crawling.mp3";
import figure from "../../../assets/audio/Figure- Linkin Park.mp3";
import papercut from "../../../assets/audio/Linkin Park-Papercut.mp3";
import runaway from "../../../assets/audio/Linkin Park-Runaway.mp3";
import away from "../../../assets/audio/As You Fade Away.mp3";

import { useRef } from "react";
import { Pause, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full  bg-white">
      {/* OUTER rounded container */}
     <div
  className="
    mx-auto max-w-7xl
    border border-[#f3f3f3]
    rounded-b-[36px] sm:rounded-b-[70px] lg:rounded-b-[90px]
    px-4 sm:px-6
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
            <p className="text-[22px] sm:text-[34px] font-bold font-heading text-black/60">
              Hey, I’m a
            </p>

            <h1
              className="
                mt-2  leading-[0.95] text-[#1b1b1b]
                text-[40px] sm:text-[60px] lg:text-[78px]
                font-extrabold font-heading
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
          <div className="min-w-0 order-3 lg:order-none pb-10 lg:pb-10 lg:-translate-x-6">
            <div className="text-center lg:text-left">
             <p className="text-[18px] sm:text-[26px] font-bold font-heading  text-[#1b1b1b] max-w-[320px]">
             “Design is how it works,  <br /> 
              not how it looks.”
              </p>

              <p className="mt-3 text-[13px] sm:text-[18px] font-regular font-body text-black/50">
                Transform ideas into intuitive designs
              </p>
            </div>

            <div className="mt-4 lg:mt-4">
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
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

 const tracks = [
  { title: "A Place for My Head", file: place, img: albumImg },
  { title: "Crawling", file: crawling, img: albumImg },
  { title: "Figure- Linkin Park", file: figure, img: Img3 },
  { title: "Linkin Park-Papercut", file: papercut, img: albumImg },
  { title: "Linkin Park-Runaway", file: runaway, img: albumImg },
  { title: "As You Fade Away", file: away, img: Img6 },
];

  const audioRef = useRef(null);
  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    const nextTrack = (currentTrack + 1) % tracks.length;
    setCurrentTrack(nextTrack);
    setIsPlaying(true);
  };

  const prevTrack = () => {
    const prevTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    setCurrentTrack(prevTrack);
    setIsPlaying(true);
  };

  // const autoplayNext = () => {
  //   const nextTrack = (currentTrack + 1) % tracks.length;
  //   setCurrentTrack(nextTrack);
  //   setIsPlaying(true);
  // }

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play();
    }
  }, [currentTrack]);

  return (
    <div className="w-full max-w-[660px] mx-auto lg:mx-0 rounded-2xl bg-white p-4 
border border-black/15
shadow-[0_22px_45px_rgba(0,0,0,0.14)]">
      <audio
        ref={audioRef}
        src={tracks[currentTrack].file}
        onEnded={nextTrack}
      />
      <div className="flex flex-col sm:flex-row gap-4">
        {/* LEFT */}
        <div className="sm:w-[155px] shrink-0">
          <img
           src={tracks[currentTrack].img}
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
              onClick={prevTrack}
              className="grid h-10 w-10 place-items-center rounded-full border bg-black cursor-pointer"
            >
              <Icon name="LeftArrow" classname="h-5 w-5 text-white" />
            </button>

            <button
              type="button"
              onClick={togglePlay}
              className="grid h-10 w-10 place-items-center rounded-full border bg-black cursor-pointer"
            >
              {isPlaying ? (
                <Pause className="h-5 w-5 text-white" />
              ) : (
                <Play className="h-5 w-5 text-white" />
              )}
            </button>

            <button
              type="button"
              onClick={nextTrack}
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
       [&::-webkit-scrollbar]:hidden font-medium font-body
       "
          >
            {tracks.map((track, idx) => (
              <li
  key={idx}
  onClick={() => {
    setCurrentTrack(idx);
    setIsPlaying(true);
  }}
  className={`py-2 cursor-pointer transition ${
    idx === currentTrack ? "text-black font-semibold" : "text-black/60"
  }`}
>
  <div className="flex items-center gap-3">
    <span className="w-4 text-right text-black/40">
      {idx + 1}.
    </span>

    <span className="truncate">
      {track.title}
    </span>
  </div>

  {idx !== tracks.length - 1 && (
    <div className="mt-2 h-[1px] w-full bg-black/10" />
  )}
</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
