"use client";

import { Experience as ExperienceType } from "@/types/portfolio";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useCursor } from "@/contexts/CursorContext";

export function Experience({ data }: { data: ExperienceType[] }) {
  const { changeSize } = useCursor();

  return (
    <section id="experience" className="w-full py-24 bg-black border-y border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left Side: Title */}
          <div className="w-full lg:w-1/3">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-white text-center lg:text-left">
                <span className="font-bold">Professional Experience</span>
              </h2>
            </ScrollReveal>
          </div>

          {/* Right Side: Timeline */}
          <div className="w-full lg:w-2/3 relative">
            {/* Vertical Line */}
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/10 ml-2" />

            <div className="space-y-12 ml-10">
              {data.map((item, index) => (
                <div key={index} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[40px] top-1.5 w-4 h-4 rounded-[4px] border-2 border-white bg-black group-hover:bg-white transition-colors duration-300" />

                  <ScrollReveal delay={index * 0.1}>
                    <div
                      className="p-6 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300 cursor-none"
                      onMouseEnter={() => changeSize(100)}
                      onMouseLeave={() => changeSize(20)}
                    >
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-4">
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                            {item.role}
                          </h3>
                          <p className="text-white/60 font-bold uppercase tracking-wider text-sm">
                            {item.company}
                          </p>
                        </div>
                        <span className="text-xs font-bold tracking-widest text-white/30 uppercase md:pt-2">
                          {item.duration}
                        </span>
                      </div>

                      <div className="text-gray-400 text-lg leading-relaxed whitespace-pre-line">
                        {item.description}
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
