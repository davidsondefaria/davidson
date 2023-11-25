import type { Metadata } from "next";
import { Inria_Sans } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";

const inriaSans = Inria_Sans({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

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
      <body className={inriaSans.className}>
        <Providers>
          {/* header */}
          {children}
          {/* Footer */}
        </Providers>
      </body>
    </html>
  );
}
