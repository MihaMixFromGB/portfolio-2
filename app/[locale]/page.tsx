import SummaryExperience from "@/components/SummaryExperience";
import Intro from "@/components/Intro";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <NavBar />
        <Hero />
        <Intro />
        <SummaryExperience />
      </div>
    </main>
  );
}
