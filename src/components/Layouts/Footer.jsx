import React from "react";
import Icon from "../../componunts/ui/Icon/icon";

export default function Footer() {
  return (
    <footer className="w-full bg-black overflow-hidden">
      <div
        className="
      w-full bg-[#f3f3f3]
      rounded-t-[48px] sm:rounded-t-[70px] lg:rounded-t-[90px]
      px-5 sm:px-10 lg:px-30
      sm:pt-16
    "
      >
        {/* TOP */}
        <div className="flex items-start justify-between gap-6">
          {/* LEFT */}
          <div className="min-w-0 mt-8 sm:mt-4 lg:mt-0">
            <h2 className="text-[34px] font-extrabold font-heading leading-[1.05] text-black sm:text-[44px] lg:text-[56px]">
              Let’s Make something
              <br />
              Creative
            </h2>

            {/* Contact */}
            <div className="mt-7 text-neutral-600 text-[12px] sm:text-[10px] lg:text-[30px]">
              {/* MOBILE LAYOUT */}
              <div className="flex flex-col gap-1 lg:hidden font-regular font-body">
                <span>+91 9370327361</span>
                <span>prashilmeshram8923@gmail.com</span>
              </div>

              {/* LAPTOP LAYOUT */}
              <div className="hidden lg:flex items-center gap-3 font-regular font-body">
                <span className="whitespace-nowrap">+91 9370327361</span>

                <Icon name="dot" className="h-2.5 w-2.5 text-neutral-400" />

                <span>prashilmeshram8923@gmail.com</span>
              </div>
            </div>
          </div>

          {/* RIGHT (always beside heading, even on mobile) */}
          <div className="shrink-0 flex flex-col gap-3 items-end text-right pt-2 mt-6 lg:mt-0 font-regular font-body">
            <SocialLink
              label="LinkedIn"
              url="https://www.linkedin.com/in/prashil-meshram"
            />
            <SocialLink
              label="Behance"
              url="https://www.behance.net/prashilmeshram1/moodboards"
            />
            <SocialLink
              label="Instagram"
              url="https://www.instagram.com/m.prashil/"
            />
          </div>
        </div>

        {/* BIG TEXT */}
        <div className="w-full flex justify-center overflow-hidden">
          <h1 className="text-center font-extrabold text-black/5 text-[46px] sm:text-[120px] pt-[30px] lg:text-[145px] leading-[0.7]">
            GET IN TOUCH
          </h1>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ label, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group inline-flex items-center gap-2
        text-[16px] sm:text-[18px]
        font-medium text-neutral-700
        hover:text-black transition
      "
    >
      <span>{label}</span>

      {/* Arrow will stay close now */}
      <span className="transition-transform duration-200 group-hover:translate-x-1">
        <Icon
          name="FooterIcon"
          className="h-5 w-5 text-neutral-700 group-hover:text-black"
        />
      </span>
    </a>
  );
}
