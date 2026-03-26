"use client";

import { Skill } from "@/types/portfolio";
import { Icon } from "@/components/ui/Icon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useCursor } from "@/contexts/CursorContext";

export function Skills({ data }: { data: Skill[] }) {
  const { changeSize } = useCursor();
  return (
    <section id="skills" className="w-full py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-16 tracking-tight">
            My <span className="font-bold">Skills</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {data.map((skill, index) => (
            <ScrollReveal
              key={skill.name}
              delay={0.1 + index * 0.05}
              className="w-full"
            >
              <div
                className="group relative w-full aspect-square border-2 border-black rounded-lg flex flex-col items-center justify-center p-4 md:p-6 bg-white text-black hover:bg-black hover:text-white transition-all duration-300 overflow-hidden cursor-none"
                onMouseEnter={() => changeSize(80)}
                onMouseLeave={() => changeSize(20)}
              >
                <div className="flex-1 flex items-center justify-center">
                  <Icon
                    name={skill.icon}
                    size={48}
                    className="transition-all duration-300 group-hover:scale-110 group-hover:brightness-0 group-hover:invert"
                    strokeWidth={1.5}
                  />
                </div>
                <span className="font-bold text-center text-sm md:text-base mt-2 line-clamp-2 leading-tight h-10 flex items-center justify-center">
                  {skill.name}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
