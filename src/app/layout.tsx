import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Davidson de Faria",
  description: "Fullstack developer",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/favicon-linear.svg",
        href: "/images/favicon-linear.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/favicon-linear.svg",
        href: "/images/favicon-linear.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
