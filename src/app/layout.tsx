import type { Metadata } from "next";
import localFont from "next/font/local";
import { Courier_Prime } from "next/font/google";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const courierPrime = Courier_Prime({
  weight: "400", // Add other weights if needed
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DE-Scholars",
  description: "Created by the DE-Scholars Committee (with love)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
