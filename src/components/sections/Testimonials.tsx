import Image from "next/image";
import { Testimonial } from "@/types/portfolio";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Testimonials({ data }: { data: Testimonial[] }) {
  return (
    <section id="testimonials" className="w-full py-24 bg-white text-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-16 tracking-tight text-center">
            <span className="font-bold">Testimonials</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((testimonial, index) => (
            <ScrollReveal
              key={testimonial.name}
              delay={0.1 + index * 0.1}
              className="w-full"
            >
              <div className="flex flex-col items-center text-center space-y-6 p-8 rounded-2xl border-2 border-transparent transition-colors duration-300 hover:border-black hover:bg-gray-50 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] h-full">

                {/* Avatar with Quotes visual wrapper (if needed, an absolute pseudo could go here) */}
                <div className="relative w-24 h-24">
                  <div className="absolute inset-0 rounded-full border border-black p-1">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/4 bg-black text-white w-8 h-8 rounded-full flex items-center justify-center border-4 border-white text-lg font-bold">
                    &quot;
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed italic flex-1 flex items-center">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="w-8 h-1 bg-black rounded-full" />
                <div>
                  <h4 className="font-extrabold text-xl">{testimonial.name}</h4>
                  <span className="text-gray-500 font-medium text-sm">
                    {testimonial.role}
                  </span>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
