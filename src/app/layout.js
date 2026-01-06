import { Instrument_Serif, Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${instrumentSerif.variable} ${montserrat.variable} ${openSans.variable} antialiased relative`}>
        <div 
          className="fixed inset-0 opacity-[0.20] pointer-events-none"
          style={{ backgroundImage: `url('/grains.svg')` }}
        ></div>
        {children}
      </body>
    </html>
  );
}