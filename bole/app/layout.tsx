import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Metabole",
  description: "Metabole — meta backend · bole frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}
