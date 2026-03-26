import { Experience as ExperienceType } from "@/types/portfolio";
import { Icon } from "@/components/ui/Icon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Experience({ data }: { data: ExperienceType[] }) {
  return (
    <section id="experience" className="w-full py-24 bg-black text-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-16 tracking-tight text-center">
            My <span className="font-bold">Experience</span>
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-8">
          {data.map((item, index) => (
            <ScrollReveal key={item.duration} delay={0.1 + index * 0.1}>
              <div className="group relative w-full rounded-2xl border border-gray-800 bg-[#121212] p-6 lg:p-8 transition-colors duration-300 hover:bg-[#1a1a1a]">

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  {/* Left: Logo & Role */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-gray-900 border border-gray-700">
                      <Icon name={item.logo} size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold">{item.role}</h3>
                      <p className="text-gray-400 font-medium">at {item.company}</p>
                    </div>
                  </div>

                  {/* Right: Duration */}
                  <span className="text-sm font-medium text-gray-400 border border-gray-800 rounded-full px-4 py-1.5 w-fit">
                    {item.duration}
                  </span>
                </div>

                <p className="text-gray-400 leading-relaxed max-w-3xl">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
