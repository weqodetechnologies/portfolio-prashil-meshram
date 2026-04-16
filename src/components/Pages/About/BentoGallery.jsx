import React from "react";

import CameraIcon from "../../../assets/aboutus/camera.png";

import Img1 from "../../../assets/aboutus/gallery1.png";
import Img2 from "../../../assets/aboutus/gallery2.png";
import Img3 from "../../../assets/aboutus/gallery3.png";
import Img4 from "../../../assets/aboutus/gallery4.png";
import Img5 from "../../../assets/aboutus/gallery5.png";
import Img6 from "../../../assets/aboutus/gallery6.png";
import Img7 from "../../../assets/aboutus/gallery7.png";
import Img8 from "../../../assets/aboutus/gallery8.png";

export default function BentoGallery() {
  return (
    <section className="hidden md:block bg-black px-4 sm:px-8 lg:px-16 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 text-center sm:text-left">
          <img
            src={CameraIcon}
            alt="Camera Icon"
            className="w-14 h-14 object-contain"
          />

          <h2 className="text-white text-2xl sm:text-4xl font-bold font-heading">
            My Bento Gallery That I’ve Captured
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] w-full max-w-[1800px]">
            <img
              src={Img1}
              className="w-full h-full object-cover rounded-2xl row-span-2"
            />
            <img
              src={Img2}
              className="w-full h-full object-cover rounded-2xl"
            />
            <img
              src={Img3}
              className="w-full h-full object-cover rounded-2xl"
            />
            <img
              src={Img4}
              className="w-full h-full object-cover rounded-2xl row-span-3"
            />

            <img
              src={Img5}
              className="w-full h-full object-cover rounded-2xl col-span-2 row-span-2"
            />

            <img
              src={Img6}
              className="w-full h-full object-cover rounded-2xl row-span-2"
            />
            <img
              src={Img7}
              className="w-full h-full object-cover rounded-2xl"
            />

            <img
              src={Img8}
              className="w-full h-full object-cover rounded-2xl col-span-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
