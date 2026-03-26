import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import SmoothScrolling from "@/components/SmoothScrolling";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Sovereign Ledger",
  description: "Setting the global standard for AML intelligence, institutional compliance, and sovereign financial security.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full`}
    >
      <body className={`min-h-full flex flex-col font-sans bg-sl-light text-sl-navy antialiased`}>
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
