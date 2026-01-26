import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vibe Jockey | Your Project. Your Pace. Your Vibe Jockey.",
  description: "Expert human help, delivered through conversation. Connect with skilled vibe jockeys or agencies who understand your field and can build what you need.",
  keywords: ["vibe jockey", "freelancer", "agency", "Jabrium", "AI tools", "expert help", "project help", "async communication"],
  openGraph: {
    title: "Vibe Jockey",
    description: "Your project. Your pace. Your vibe jockey. Expert human help, delivered through conversation.",
    type: "website",
    url: "https://vibejockey.ai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
