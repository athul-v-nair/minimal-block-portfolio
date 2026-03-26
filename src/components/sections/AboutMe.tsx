"use client";

import Image from "next/image";
import { AboutData } from "@/types/portfolio";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useCursor } from "@/contexts/CursorContext";

export function AboutMe({ data }: { data: AboutData }) {
  const { changeSize } = useCursor();
  return (
    <section id="about" className="w-full py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Image */}
          <div className="w-full lg:w-1/2">
            <ScrollReveal direction="right">
              <div className="relative aspect-square w-full max-w-lg mx-auto overflow-hidden border-4 border-black border-b-[12px] border-r-[12px] rounded-xl bg-gray-100">
                <Image
                  src={data.image}
                  alt="About Me illustration"
                  fill
                  className="object-cover rounded-xl p-8"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                About <span className="font-bold">Me</span>
              </h2>
            </ScrollReveal>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              {data.content.map((paragraph, index) => (
                <ScrollReveal key={index} delay={0.1 + index * 0.1}>
                  <p
                    className="cursor-none"
                    onMouseEnter={() => changeSize(100)}
                    onMouseLeave={() => changeSize(20)}
                  >
                    {paragraph}
                  </p>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.4}>
              <a
                href="#contact"
                className="inline-block mt-4 text-black border-b-2 border-black font-bold pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors"
              >
                Let&apos;s talk &rarr;
              </a>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
