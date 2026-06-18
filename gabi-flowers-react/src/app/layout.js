import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gabi Flowers - Cultivating Excellence",
  description: "From the heart of the garden to your doorstep. We bring you the finest roses and blossoms, carefully nurtured for beauty and longevity.",
  icons: {
    icon: [
      { url: "/assets/pink-rose.jpg", type: "image/jpeg", sizes: "any" },
    ],
    shortcut: "/assets/pink-rose.jpg",
    apple: "/assets/pink-rose.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
