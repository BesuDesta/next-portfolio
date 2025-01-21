import { Linkedin, Github, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header>
      <div className="flex items-start gap-4 ">
        <div className="relative rounded-full bg-neutral-400 overflow-hidden aspect-square w-24">
          <Image
            src="/profile.png"
            alt="My headshot/profile image"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full">
          <p className="text-lg main-color">Nana Kofi Okae</p>
          <p className="text-muted-foreground ">
            Frontend and Design Engineer / designing for fun.
          </p>
          {/* You can update and add your links here */}
          <div className="flex flex-wrap  gap-4 mt-2">
            <Link
              href="https://www.inkedin.com/in/nana-kofi-okae"
              target="_blank"
              className="icons"
            >
              <Linkedin size={18} />
              <p className="icon-text"> inkedin.com/in/nana-kofi-okae</p>
            </Link>
            <Link href="paste-github-url" target="_blank" className="icons">
              <Github size={18} />
              <p className="icon-text"> github.com/Nan3rOkae</p>
            </Link>
            <Link
              href="/Nana_s_Resume_2025.pdf"
              target="_blank"
              className="icons"
            >
              <FileText size={18} />
              <p className="icon-text">Resume</p>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
