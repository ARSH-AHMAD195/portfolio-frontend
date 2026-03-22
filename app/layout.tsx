import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-JetBrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arsh.dev",
  description: "This Arsh portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={jetBrainsMono.className}
      >
        {children}
      </body>
    </html>
  );
}
