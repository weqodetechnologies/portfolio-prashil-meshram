import React from "react";
import userpersona1 from "../../../assets/appaleon/userpersona1.png";
import userpersona2 from "../../../assets/appaleon/userpersona2.png";
import Icon from "../../ui/Icon/icon";

export default function UserPersona() {
  return (
    <section className="bg-black text-white px-5 sm:px-10 lg:px-20 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-12">
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
                <h3 className="font-semibold">Ananya Sharma, 33</h3>
                <p className="text-white text-sm">CEO</p>
              </div>
            </div>

            <p className="mt-4 text-sm text-white leading-relaxed">
              “I need a team that understands my vision and <br /> delivers without
              making it complicated.”
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
                <h3 className="font-semibold">Rajesh Mehta, 27</h3>
                <p className="text-white text-sm">Director</p>
              </div>
            </div>

            <p className="mt-4 text-sm text-white leading-relaxed">
              “I don’t want technical jargon. I want a partner <br />who understands
              my business and delivers on time.”
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
                <h4 className="font-semibold">Goals and Motivations</h4>
              </div>
              <ul className="text-sm text-white space-y-2 pt-2 list-disc pl-7">
                <li>
                  Find a trusted IT consulting firm for long-term collaboration</li>
                <li>Build a professional website / software solution for her business</li>
                <li>Ensure the product is scalable and secure</li>
                <li>Work with a team that communicates clearly and respects timelines</li>
              </ul>
            </div>

            {/* Needs */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Needs" className="w-5 h-5" />
                <h4 className="font-semibold ">Needs</h4>
              </div>
              <ul className="text-sm text-white space-y-2 pt-2 list-disc pl-7">
                <li> A website that explains services in a clear and non-technical way</li>
                <li>Strong portfolio + case studies that show real outcomes</li>
                <li>Quick access to pricing clarity / project scope</li>
                <li>Easy contact options like call, WhatsApp, consultation form</li>
              </ul>
            </div>

            {/* Challenges */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Challenges" className="w-5 h-5" />
                <h4 className="font-semibold">Challenges</h4>
              </div>
              <ul className="text-sm text-white space-y-2 pt-2 list-disc pl-7">
                <li> Difficulty trusting agencies due to overpromising</li>
                <li>Fear of poor post-launch support</li>
                <li>Limited time to review proposals and technical details</li>
                <li>Wants transparency in process, deliverables, and cost</li>
              </ul>
            </div>
          </div>

          {/* RIGHT DETAILS */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-6">
            {/* Goals */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Goals" className="w-5 h-5" />
                <h4 className="font-semibold">Goals and Motivations</h4>
              </div>
              <ul className="text-sm text-white space-y-2 pt-2 list-disc pl-7">
                <li>Find a reliable IT partner to build and scale digital products</li>
                <li>Improve operational efficiency using technology</li>
                <li>Get clear cost estimates and realistic timelines</li>
                <li>Work with a team that understands business problems, not just code</li>
              </ul>
            </div>

            {/* Needs */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Needs" className="w-5 h-5" />
                <h4 className="font-semibold">Needs</h4>
              </div>
              <ul className="text-sm text-white space-y-2 pt-2 list-disc pl-7">
                <li> A website that clearly explains services in simple language</li>
                <li>Real case studies showing business impact</li>
                <li>Easy ways to contact or book a consultation</li>
                <li>Trust signals like client testimonials and expertise highlights</li>
              </ul>
            </div>

            {/* Challenges */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Challenges" className="w-5 h-5" />
                <h4 className="font-semibold">Challenges</h4>
              </div>
              <ul className="text-sm text-white space-y-2 pt-2 list-disc pl-7">
                <li>Hard to judge which IT firm is genuinely experienced</li>
                <li>Past experiences with missed deadlines and unclear communication</li>
                <li>Limited time to compare multiple vendors</li>
                <li>Concerned about hidden costs and post-launch support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
