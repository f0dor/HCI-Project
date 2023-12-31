import type { Metadata } from "next";
import clsx from "clsx";
import {
  Inter,
  Roboto,
  Roboto_Condensed,
  Playfair_Display,
  Montserrat,
} from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
const roboto_condensed = Roboto_Condensed({
  weight: ["300", "700"],
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
});
const playfairDisplay = Playfair_Display({
  weight: ["400", "800"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    template: "Lab project | %s",
    default: "Lab project",
  },
  description: "Next.js lab project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        roboto.variable,
        roboto_condensed.variable,
        playfairDisplay.variable,
        montserrat.variable,
      )}
    >
      <body className={`${inter.className} bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-800 to-indigo-900`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}