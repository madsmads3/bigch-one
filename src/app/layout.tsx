import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ChatterHaven Speech Solutions | Pediatric Speech Therapy in Houston, TX",
  description:
    "ChatterHaven Speech Solutions, PLLC provides compassionate pediatric speech therapy in Houston, Texas. Specializing in early intervention, language delays, articulation, and AAC. Speech Therapy Houston | Pediatric SLP Texas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${inter.variable} font-body bg-chatter-parchment text-chatter-brown antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

