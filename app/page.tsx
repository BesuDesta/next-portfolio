import Header from "@/components/Header/Header";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full max-w-5xl flex flex-col items-center pt-14 p-4 ">
      <Header />
    </div>
  );
}
