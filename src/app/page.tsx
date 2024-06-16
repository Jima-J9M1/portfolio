import Hero from "@Portfolio/components/Hero";
import ProjectShowCase from "@Portfolio/components/projects/projects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <ProjectShowCase />
    </main>
  );
}
