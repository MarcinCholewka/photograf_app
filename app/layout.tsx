import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import FontAwesomeConfig from "@/app/fontawesome";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Fotografia ślubna",
  description: "Fotografia ślubna Śląsk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title as string}</title>
        <FontAwesomeConfig />
      </head>
      <body className={`${playfairDisplay.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
