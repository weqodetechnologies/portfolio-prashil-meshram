import React from "react";
import userpersona1 from "../../../assets/abhidnyapage/userpersona1.png";
import userpersona2 from "../../../assets/abhidnyapage/userpersona2.png";
import Icon from "../../ui/Icon/icon";

export default function UserPersona() {
  return (
    <section className="bg-black text-white px-5 sm:px-10 lg:px-20 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl font-extrabold font-heading mb-12">
          User Persona
        </h2>

        {/* Top Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Persona 1 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="flex gap-4 items-center">
              <img
                src={userpersona1}
                alt="persona1"
                className="w-35 h-35 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-bold font-body">David Thompson, 38</h3>
                <p className="text-white text-sm font-bold font-body">Wholesale Agro Importer</p>
              </div>
            </div>

            <p className="mt-4 text-sm text-white leading-relaxed font-medium font-body">
              “I don’t want just a supplier I want an exporter <br />I can trust for long-term business.”
            </p>
          </div>

          {/* Persona 2 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="flex gap-4 items-center">
              <img
                src={userpersona2}
                alt="persona2"
                className="w-35 h-35 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-bold font-body">Aisha Khan, 29</h3>
                <p className="text-white text-sm font-bold font-body">Small Import Business Owner</p>
              </div>
            </div>

            <p className="mt-4 text-sm text-white leading-relaxed font-medium font-body">
              “I look for long-term partnerships, not just one-time <br /> deals, when sourcing agro products.”
            </p>
          </div>
        </div>

        {/* Bottom Details */}
        <div className="hidden md:grid md:grid-cols-2 gap-6">
          {/* LEFT DETAILS */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-6">
            {/* Goals */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Goals" className="w-5 h-5" />
                <h4 className="font-semibold font-heading">Goals and Motivations</h4>
              </div>
              <ul className="text-sm text-white space-y-2 pt-2 list-disc pl-7 font-medium font-body">
                <li>
                 Find a reliable exporter for fresh vegetables and fruits</li>
                <li>Check product quality, packaging, and export readiness</li>
                <li>Get pricing and MOQ details quickly</li>             
              </ul>
            </div>


            {/* Needs */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Needs" className="w-5 h-5" />
                <h4 className="font-semibold font-heading">Needs</h4>
              </div>
              <ul className="text-sm text-white space-y-2 pt-2 list-disc pl-7 font-medium font-body">
                <li>Product catalog with specifications</li>
                <li>MOQ, packaging, and shipping information</li>
                <li>Quick inquiry form / WhatsApp option</li>
              </ul>
            </div>

            {/* Challenges */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Challenges" className="w-5 h-5" />
                <h4 className="font-semibold font-heading">Challenges</h4>
              </div>
              <ul className="text-sm text-white space-y-2 pt-2 list-disc pl-7 font-medium font-body">
                <li>Many exporters don’t provide complete information</li>
                <li>Hard to trust suppliers without certifications and process clarity</li>
              </ul>
            </div>
          </div>


          {/* RIGHT DETAILS */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-6">
            {/* Goals */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Goals" className="w-5 h-5" />
                <h4 className="font-semibold font-heading">Goals and Motivations</h4>
              </div>
              <ul className="text-sm text-white space-y-2 pt-2 list-disc pl-7 font-medium font-body">
                <li> Find a trustworthy agro exporter to start importing</li>
                <li>Understand how the import-export process works</li>
                <li>Place her first order confidently</li>
      
              </ul>
            </div>

            {/* Needs */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Needs" className="w-5 h-5" />
                <h4 className="font-semibold font-heading">Needs</h4>
              </div>
              <ul className="text-sm text-white space-y-2 pt-2 list-disc pl-7 font-medium font-body">
                <li>Simple product info + pricing inquiry</li>
                <li>Explanation of process (ordering → packaging → shipping)</li>
                <li>Trust-building content (company story, certificates, testimonials)</li>
              </ul>
            </div>

            {/* Challenges */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Challenges" className="w-5 h-5" />
                <h4 className="font-semibold font-heading">Challenges</h4>
              </div>
              <ul className="text-sm text-white space-y-2 pt-2 list-disc pl-7 font-medium font-body">
                <li> Doesn’t know export terms like MOQ, FOB, CIF</li>
                <li>Afraid of scams and low-quality suppliers</li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}