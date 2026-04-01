"use client";

import { SkillCategory } from "@/types/portfolio";
import { Icon } from "@/components/ui/Icon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useCursor } from "@/contexts/CursorContext";

export function Skills({ data }: { data: SkillCategory[] }) {
  const { changeSize } = useCursor();

  return (
    <section id="skills" className="w-full py-24 bg-white border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left Side: Title & Description */}
          <div className="w-full lg:w-1/3">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-center lg:text-left">
                <span className="font-bold">Skills</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-md mx-auto text-center lg:text-left">
                A technical overview of technologies and methodologies I specialize in for modern architectural solutions.
              </p>
            </ScrollReveal>
          </div>

          {/* Right Side: Categorized Skills */}
          <div className="w-full lg:w-2/3 space-y-12">
            {data.map((category, catIndex) => (
              <div key={category.category} className="space-y-6">
                <ScrollReveal delay={catIndex * 0.1}>
                  <h3 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-3 mt-4">
                    {category.items.map((skill) => (
                      <div
                        key={skill.name}
                        className="group flex items-center gap-3 bg-white border border-gray-200 px-4 py-2 rounded-full hover:border-black transition-all duration-300 cursor-none"
                        onMouseEnter={() => changeSize(60)}
                        onMouseLeave={() => changeSize(20)}
                      >
                        <Icon
                          name={skill.icon}
                          size={18}
                          className="grayscale group-hover:grayscale-100 group-hover:text-white transition-all"
                        />
                        <span className="text-sm font-bold text-gray-800 group-hover:text-black transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
