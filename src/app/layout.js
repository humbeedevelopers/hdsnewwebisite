import { Instrument_Serif, Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Utils/Navbar";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  weight: "400",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400'], 
  variable: '--font-montserrat',     
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-open-sans',
});

export const metadata = {
  title: {
    default: "Humbee Design Studio",
    template: "%s | Humbee Design Studio",
  },
  description:
    "Short, keyword-rich description of your product or website for SEO.",
  metadataBase: new URL("https://yourdomain.com"),
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${instrumentSerif.variable} ${montserrat.variable} ${openSans.variable} antialiased relative`}>
        <div 
          className="fixed inset-0 opacity-[0.20] pointer-events-none"
          style={{ backgroundImage: `url('/grains.svg')` }}
        ></div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}