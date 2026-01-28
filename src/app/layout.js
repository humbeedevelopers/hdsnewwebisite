import { Instrument_Serif, Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Utils/Navbar";
import SmoothScroll from "@/components/Utils/SmoothScroll";
import AppShell from "@/components/AppShell";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-open-sans",
});

export const metadata = {
  title: "Humbee Design Studio",
  description: "Digital Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.variable} ${montserrat.variable} ${openSans.variable} antialiased bg-bg-light relative`}
      >
        <div
          className="fixed inset-0 -z-10 opacity-[0.15] bg-noise pointer-events-none"
          aria-hidden="true"
        />

        <Navbar />
        <AppShell>
          <SmoothScroll>
            <div className="relative z-10">
              {children}
            </div>
          </SmoothScroll>
        </AppShell>
      </body>
    </html>
  );
}
