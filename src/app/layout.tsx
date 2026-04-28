import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { InitialLoader } from "@/components/InitialLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shreyas Uday | Backend Engineer",
  description:
    "Backend Engineer focused on platform/deployment workflows — Node.js, Docker, PostgreSQL, AWS EC2.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background text-foreground" suppressHydrationWarning>
        <div className="pointer-events-none fixed inset-0 -z-10 bg-grid opacity-[0.35]" />
        <InitialLoader minDurationMs={5500}>{children}</InitialLoader>
      </body>
    </html>
  );
}
