import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import ThemeButton from "./components/atoms/ThemeButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-6xl font-bold">Davidson de Faria</h1>
        <h2 className="text-3xl font-bold">Fullstack Developer</h2>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/davidson-de-faria/"
            target="_blank"
            className="text-3xl"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/davidsondefaria"
            target="_blank"
            className="text-3xl"
          >
            <FaGithub />
          </a>
        </div>
        <ThemeButton />
      </div>

      <div className="flex flex-col items-center">
        <Image
          src="/under-construction.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
        <h1 className="mt-4 text-2xl font-bold">Under development</h1>
        <a href="/experimental">Click here to see what is in progress</a>
      </div>
    </main>
  );
}
