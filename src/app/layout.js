import { Instrument_Serif } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${instrumentSerif.variable} antialiased relative`}>
        <div 
          className="fixed inset-0 opacity-[0.20]"
          style={{ 
            backgroundImage: `url('/grains.svg')`,
          }}
        ></div>
        {children}
      </body>
    </html>
  );
}