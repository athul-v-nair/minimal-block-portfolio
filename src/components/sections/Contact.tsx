import { ContactData, Social } from "@/types/portfolio";
import { Icon } from "@/components/ui/Icon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";

export function Contact({ data, socials }: { data: ContactData; socials: Social[] }) {
  return (
    <section id="contact" className="w-full py-12 bg-white text-black border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left: Contact Info */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-8">
            <ScrollReveal>
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                Let&apos;s talk for<br />
                <span className="font-black">Something special</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                {data.description}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="space-y-4 font-bold text-2xl md:text-3xl">
                <h3>{data.email}</h3>
                <h3>{data.phone}</h3>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Form */}
          <div className="w-full lg:w-1/2">
            <ScrollReveal direction="right">
              <form action="https://formsubmit.co/athulvinod.dev@gmail.com" method="POST" className="flex flex-col gap-6">
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full px-6 py-4 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black selection:bg-black selection:text-white"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-6 py-4 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black selection:bg-black selection:text-white"
                  required
                />
                <input
                  type="text"
                  name="website"
                  placeholder="Your Website (If exists)"
                  className="w-full px-6 py-4 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black selection:bg-black selection:text-white"
                />
                <textarea
                  name="message"
                  placeholder="How can I help?"
                  rows={4}
                  className="w-full px-6 py-4 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black selection:bg-black selection:text-white resize-none"
                  required
                />
                <button
                  type="submit"
                  className="w-fit self-start bg-black text-white px-8 py-4 font-bold text-lg hover:bg-gray-900 transition-colors"
                >
                  Get In Touch
                </button>
              </form>
            </ScrollReveal>
          </div>

        </div>
      </div>

      {/* Basic Footer embedded closely */}
      <footer className="w-full border-t border-gray-200 mt-12 pt-8 pb-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-bold text-gray-500">
          <div className="flex items-center gap-2">
            <div className="relative w-32 h-24 opacity-80 pointer-events-none">
              <Image src="/assets/athul_v_nair.png" alt="Athul V Nair Logo" fill className="object-contain object-left pointer-events-none" />
            </div>
          </div>
          <p>© {new Date().getFullYear()} Athul V Nair. All Rights Reserved.</p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                className="hover:text-black transition-colors"
                aria-label={social.platform}
              >
                <Icon name={social.icon} size={30} strokeWidth={2.5} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
}
