import Contact from "../components/organisms/Contact";
import Experience from "../components/organisms/Experience";
import Header from "../components/organisms/Header";
import Home from "../components/organisms/Home";
import Projects from "../components/organisms/Projects";

export default function Main() {
  return (
    <>
      <Header />
      <div className="flex min-h-screen w-full flex-col">
        <Home />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
