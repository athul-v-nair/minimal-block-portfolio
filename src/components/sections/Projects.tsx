"use client";

import Image from "next/image";
import { Project } from "@/types/portfolio";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ExternalLink } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { useCursor } from "@/contexts/CursorContext";

export function Projects({ data }: { data: Project[] }) {
  const { changeSize } = useCursor();
  return (
    <section id="projects" className="w-full py-24 bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-20 tracking-tight text-center">
            My <span className="font-bold">Projects</span>
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-24">
          {data.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={project.title}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${isEven ? "" : "lg:flex-row-reverse"
                  }`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <ScrollReveal
                    direction={isEven ? "left" : "right"}
                    className="w-full"
                  >
                    <div
                      className="relative aspect-[4/3] w-full max-w-2xl mx-auto rounded-2xl overflow-hidden group cursor-none"
                      onMouseEnter={() => changeSize(100)}
                      onMouseLeave={() => changeSize(20)}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </ScrollReveal>
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <ScrollReveal delay={0.2} direction={isEven ? "right" : "left"}>
                    <div className="text-6xl md:text-8xl font-black text-white/20 tracking-tighter mb-4">
                      {project.number}
                    </div>
                    <h3
                      className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4"
                      onMouseEnter={() => changeSize(60)}
                      onMouseLeave={() => changeSize(20)}
                    >
                      {project.title}
                    </h3>

                    <p
                      className="text-xl md:text-md tracking-tight mb-4"
                      onMouseEnter={() => changeSize(60)}
                      onMouseLeave={() => changeSize(20)}
                    >
                      {project.description}
                    </p>

                    <div className="space-y-6">
                      <h4 className="text-xl font-bold">Technologies:</h4>
                      {project.technologies && project.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-3 mb-8">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-6 py-2 bg-white text-black text-sm font-bold rounded-full shadow-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-6 mt-8">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-black hover:scale-110 transition-transform shadow-lg"
                          aria-label="External Link"
                        >
                          <ExternalLink size={24} />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-black hover:scale-110 transition-transform shadow-lg"
                          aria-label="GitHub Repository"
                        >
                          <Icon name="/assets/socials/github-142-svgrepo-com.svg" size={28} className="brightness-0" />
                        </a>
                      )}
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
