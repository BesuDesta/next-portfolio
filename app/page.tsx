import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <div className="min-h-screen w-full max-w-4xl flex flex-col pt-14 p-4 gap-12 ">
      <Header />
      <About />
      <Experience />
    </div>
  );
}
