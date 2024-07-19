import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Soft Eletrônica",
  description: "Generated by create next app",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width, shrink-to-fit=no',
  minimumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}