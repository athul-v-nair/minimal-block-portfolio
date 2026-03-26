"use client";

import Image from "next/image";
import { HeroData } from "@/types/portfolio";
import { Icon } from "@/components/ui/Icon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useCursor } from "@/contexts/CursorContext";

export function Hero({ data }: { data: HeroData }) {
  const { changeSize } = useCursor();
  return (
    <section id="hero" className="w-full pt-32 pb-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-between gap-12 lg:gap-[10%]">

          {/* Text Content */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <ScrollReveal delay={0.1}>
              <h1
                className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] cursor-none"
                onMouseEnter={() => changeSize(100)}
                onMouseLeave={() => changeSize(20)}
              >
                Hello I am <span className="font-bold">{data.name}.</span>
                <br />
                <span className="font-extrabold">
                  {data.role}
                  <br />
                  <span className="text-transparent" style={{ WebkitTextStroke: "2px black" }}>
                    {data.location}
                  </span>
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p
                className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0"
                onMouseEnter={() => changeSize(50)}
                onMouseLeave={() => changeSize(20)}
              >
                {data.description}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex items-center justify-center lg:justify-start gap-4">
                {data.socials.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-18 h-18 flex items-center justify-center rounded-lg border-2 border-black hover:bg-black hover:text-white transition-colors duration-300 cursor-none"
                    aria-label={social.platform}
                    onMouseEnter={() => changeSize(70)}
                    onMouseLeave={() => changeSize(20)}
                  >
                    <Icon
                      name={social.icon}
                      size={40}
                      className="transition-all duration-300 hover:scale-110 hover:brightness-0 hover:invert"
                      // className="transition-all duration-300 group-hover:scale-110 group-hover:text-white"
                      strokeWidth={1.5}
                    />
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Image */}
          <div className="flex-1 w-full max-w-md lg:max-w-xl">
            <ScrollReveal delay={0.2} direction="left">
              <div className="relative aspect-square w-full">
                <Image
                  src={data.image}
                  alt={`${data.name} illustration`}
                  fill
                  priority
                  className="object-contain sm:scale-100 md:scale-110"
                />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
