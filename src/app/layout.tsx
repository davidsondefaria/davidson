import type { Metadata } from "next";
import { Inria_Sans } from "next/font/google";
import "./globals.css";
import Providers from "../providers";
import { cn } from "@/lib/utils";

const inriaSans = Inria_Sans({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
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
      <body
        className={cn(
          "h-full bg-background-base antialiased",
          inriaSans.className,
        )}
      >
        <main className="static m-auto max-w-[1440px] px-[180px]">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
