import React from "react";

const colors = [
  {
    hex: "#111129",
    name: "Midnight Blue",
    bg: "bg-[#111129]",
    text: "text-white",
  },
  {
    hex: "#272D2B",
    name: "Charcoal Green",
    bg: "bg-[#272D2B]",
    text: "text-white",
  },
  {
    hex: "#C9A86A",
    name: "Sand Gold",
    bg: "bg-[#C9A86A]",
    text: "text-white",
  },
  {
    hex: "#F4F3EC",
    name: "Warm Ivory",
    bg: "bg-[#F4F3EC]",
    text: "text-black",
  },
];

export default function ColorTypographySection() {
  return (
    <section className="bg-black min-h-screen py-16 px-4 text-white">
      <div className="max-w-5xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-10">
          Color and Typography
        </h2>

        {/* Color Grid */}
        <div className="border-4 border-white rounded-3xl p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 ">
          {colors.map((color, index) => (
            <div
              key={index}
              className={`${color.bg} ${color.text} rounded-2xl p-6 h-58 flex flex-col justify-between`}
            >
              <p className=" text-2xl">{color.hex}</p>
              <h3 className="text-3xl font-semibold">{color.name}</h3>
            </div>
          ))}
        </div>

        {/* Typography Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-12 ">
          <div className="bg-[#111111] rounded-2xl p-6 shadow-lg">
            <h3 className="text-3xl font-semibold mb-3">Commissioner</h3>
            <div className="border-t border-gray-300 my-4"></div>

            <p className="text-xl font-medium">Heading</p>
            <p className="text-sm text-gray-300 mt-2">Size: 60, 48</p>
            <p className="text-sm text-gray-300">Weight: Bold, Semibold</p>
          </div>

          <div className="bg-[#111111] rounded-2xl   p-6 shadow-lg">
            <h3 className="text-3xl font-semibold mb-3">Reddit Sans</h3>
            <div className="border-t border-gray-300 my-4"></div>

            <p className="text-xl font-medium">Body</p>
            <p className="text-sm text-gray-300 mt-2">
              Size: 22,18,28,20,32,16,14
            </p>
            <p className="text-sm text-gray-300">Weight: Medium, Regular</p>
          </div>
        </div>
      </div>
    </section>
  );
}