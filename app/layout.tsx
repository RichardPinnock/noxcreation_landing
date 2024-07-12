import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrolltoTop from "@/components/ScrolltoTop";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  applicationName: "Nox Creations",
  alternates: {
    canonical: "./",
  },
  title: {
    default: "Desarrollo de software personalizado para tu negocio",
    template: "%s | Nox Creation",
  },
  description:
    "En NOX Creation, transformamos tu visión empresarial en realidad digital. Especialistas en automatización de negocios y desarrollo de software personalizado, ofrecemos soluciones innovadoras como páginas web atractivas, tiendas online eficientes y aplicaciones móviles interactivas.",
  keywords: [
    "desarrollo de software",
    "desarrollo web",
    "aplicaciones móviles",
    "tiendas online",
    "páginas web",
    "diseño web",
    "diseño gráfico",
    "marketing digital",
  ],
  appleWebApp: {
    title: "Nox Creations",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        {children}
        <ScrolltoTop />
        <Footer />
      </body>
    </html>
  );
}
