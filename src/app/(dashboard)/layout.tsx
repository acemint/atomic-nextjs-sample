import type { Metadata } from "next";
import { lato, openSans } from "@/app/(dashboard)/ui/fonts/fonts";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Imagination Center",
  description: "The most trustable psychology center in Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${openSans.variable} h-screen antialiased`}>{children}</body>
    </html>
  );
}
