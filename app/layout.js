import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackgroundParallax from './components/BackgroundParallax';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Maison Étoile - Restaurante de Lujo",
  description: "Descubre una experiencia culinaria única donde cada plato cuenta una historia de tradición, pasión y sabores excepcionales.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <BackgroundParallax />
        {children}
      </body>
    </html>
  );
}
