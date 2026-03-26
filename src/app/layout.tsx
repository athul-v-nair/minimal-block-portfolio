import type { Metadata } from "next";
import { Inter, Caveat, Sora } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { CursorProvider } from "@/contexts/CursorProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
  title: "Athul V Nair - Portfolio",
  description: "Portfolio of Athul V Nair, a Frontend Developer based in India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${sora.variable} ${inter.variable} ${caveat.variable}`}>
      <body className={`${sora.className} min-h-screen bg-white text-black antialiased selection:bg-black selection:text-white cursor-none`}>
        <CursorProvider>
          <CustomCursor />
          {children}
        </CursorProvider>
      </body>
    </html>
  );
}
