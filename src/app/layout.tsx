import type { Metadata } from "next";
import { Tinos } from "next/font/google";
import "./globals.css";

const tinos = Tinos({
  variable: "--font-tinos",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: process.env.WEBSITE_NAME,
  description: process.env.WEBSITE_DESC,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={tinos.className}>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
