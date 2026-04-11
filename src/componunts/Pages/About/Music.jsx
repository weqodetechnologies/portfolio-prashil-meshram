import React from "react";

// 👇 Replace these with your actual image imports
import LinkinParkImg from "../../../assets/aboutus/linkinpark.png";
import RammsteinImg from "../../../assets/aboutus/rammstein.png";
import ImagineDragonsImg from "../../../assets/aboutus/imaginedragons.png";
import ColdplayImg from "../../../assets/aboutus/coldplay.png";

// 👇 Replace with your actual headphone icon import
import HeadphoneIcon from "../../../assets/aboutus/headphone.png";

const artists = [
  { name: "Linkin Park", image: LinkinParkImg },
  { name: "Rammstein", image: RammsteinImg },
  { name: "Imagine Dragons", image: ImagineDragonsImg },
  { name: "Coldplay", image: ColdplayImg },
];

export default function Music() {
  return (
    <section className="bg-black px-4 sm:px-8 lg:px-16 py-10">
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-10 text-center sm:text-left">
          <img
            src={HeadphoneIcon}
            alt="Headphones"
            className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
          />
          <h1 className="text-white text-xl sm:text-4xl font-bold leading-tight">
            Music Artists when I Always Hear Them
          </h1>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-26 sm:gap-18">
          {artists.map((artist, index) => (
            <div
              key={index}
              className="rounded-3xl overflow-hidden bg-[#1e1e1e] border border-white/10"
            >
              <div className="w-full h-[220px] sm:h-[260px] overflow-hidden">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover p-3 rounded-3xl"
                />
              </div>

              <p className="text-white text-base sm:text-lg font-semibold text-center py-4 px-2">
                {artist.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
