import React from "react";

import BooksIcon from "../../../assets/aboutus/booksicon.png";

import HowToTalk from "../../../assets/aboutus/howtotalk.png";
import AtomicHabits from "../../../assets/aboutus/atomichabits.png";
import Ikigai from "../../../assets/aboutus/ikigai.png";
import PsychologyMoney from "../../../assets/aboutus/psychologymoney.png";

const books = [
  { title: "How to Talk to Anyone", image: HowToTalk },
  { title: "Atomic Habits", image: AtomicHabits },
  { title: "Ikigai", image: Ikigai },
  { title: "The Psychology of Money", image: PsychologyMoney },
];

export default function FevBooks() {
  return (
    <section className="bg-black px-5 sm:px-10 lg:px-16 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 text-center sm:text-left">
          <img
            src={BooksIcon}
            alt="Books Icon"
            className="w-14 h-14 object-contain"
          />

          <h2 className="text-white text-2xl sm:text-4xl font-bold leading-tight">
            Books I’ve read to stay inspired
          </h2>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 md:gap-14 justify-items-center">
          {books.map((book, index) => (
            <div
              key={index}
              className="w-[120px] sm:w-[160px] md:w-[200px] overflow-hidden"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
