import React from "react";

const colors = [
  {
    hex: "#121212",
    name: "Dark Gray",
    bg: "bg-[#121212]",
  },
  {
    hex: "#6CA651",
    name: "Leaf Green",
    bg: "bg-[#6CA651]",
  },
  {
    hex: "#003161",
    name: "Deep Navy Blue",
    bg: "bg-[#003161]",
    full: true, // 👈 important
  },
];

export default function ColorTypographySection() {
  return (
    <section className="bg-black min-h-screen py-20 px-4 text-white">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl text-center mb-12 font-extrabold font-heading">
          Color and Typography
        </h2>

        {/* Color Grid */}
        <div className="border-[6px] border-white rounded-3xl p-5 grid grid-cols-1 sm:grid-cols-2 gap-5">

          {colors.map((color, index) => (
            <div
              key={index}
              className={`
                ${color.bg}
                rounded-2xl
                p-6
                flex flex-col justify-between
                h-[160px]
                ${color.full ? "sm:col-span-2 h-[180px]" : ""}
              `}
            >
              <p className="text-lg font-medium font-body">{color.hex}</p>
              <h3 className="text-2xl font-bold font-body">{color.name}</h3>
            </div>
          ))}

        </div>

        {/* Typography Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-14">
          
          {/* Card 1 */}
          <div className="bg-[#111111] rounded-2xl p-6 shadow-lg">
            <h3 className="text-3xl font-semibold mb-3">Bebas Neue</h3>
            <div className="border-t border-gray-500 my-4"></div>

            <p className="text-lg font-medium">HEADING</p>
            <p className="text-sm text-gray-400 mt-2">
              Size: 69, 60, 32, 28, 70, 24, 44, 36, 80
            </p>
            <p className="text-sm text-gray-400">Weight: Regular</p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#111111] rounded-2xl p-6 shadow-lg">
            <h3 className="text-3xl font-semibold mb-3">Reddit Sans</h3>
            <div className="border-t border-gray-500 my-4"></div>

            <p className="text-lg font-medium">Body</p>
            <p className="text-sm text-gray-400 mt-2">
              Size: 24, 20, 36, 22, 18, 16, 28
            </p>
            <p className="text-sm text-gray-400">
              Weight: Medium, Regular
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}