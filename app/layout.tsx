import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Round Shop",
  description: "Hardware shop, performance every frame",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
