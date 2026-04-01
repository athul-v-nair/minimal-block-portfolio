"use client";

import { Education as EducationType } from "@/types/portfolio";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GraduationCap } from "lucide-react";
import { useCursor } from "@/contexts/CursorContext";

export function Education({ data }: { data: EducationType[] }) {
  const { changeSize } = useCursor();

  return (
    <section id="education" className="w-full py-24 bg-white border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left Side: Title */}
          <div className="w-full lg:w-1/3">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-center lg:text-left">
                <span className="font-bold">Education</span>
              </h2>
            </ScrollReveal>
          </div>

          {/* Right Side: Education Cards */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.map((edu, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div
                  className="group relative p-8 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-gray-200 transition-all duration-300 cursor-none flex flex-col h-full"
                  onMouseEnter={() => changeSize(100)}
                  onMouseLeave={() => changeSize(20)}
                >
                  <div className="flex flex-col space-y-4 flex-1">
                    <div>
                      <h4 className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-2">
                        {edu.degree.split('in')[0] || "DEGREE"}
                      </h4>
                      <h3 className="text-xl font-bold text-black leading-tight">
                        {edu.degree.includes('in') ? edu.degree.split('in')[1].trim() : edu.degree}
                      </h3>
                      <p className="text-gray-600 font-medium mt-1">
                        {edu.school}
                      </p>
                    </div>

                    <div className="pt-8 flex items-center justify-between mt-auto">
                      <span className="text-sm font-bold text-gray-400 tracking-wider">
                        {edu.duration}
                      </span>
                      <GraduationCap className="w-5 h-5 text-gray-300 group-hover:text-black transition-colors" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
