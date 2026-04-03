import type { Metadata } from "next";
import "./globals.css";
import { Menu } from "@/lib/components/menu";

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
      <body>
        <div id="main-app" className="w-dvw h-dvh">
          <Menu />
          {children}
        </div>
      </body>
    </html>
  );
}
