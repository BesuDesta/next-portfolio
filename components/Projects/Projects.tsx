"use client";
import React from "react";
import { projects } from "./data";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <div className="section mb-24">
      <p className="section-header">Projects</p>
      <div className="flex flex-col gap-8">
        {projects.map((project, idx) => (
          <Link
            href={project.href}
            key={idx}
            className="flex flex-col gap-2 w-full group bg-neutral-50 hover:border-neutral-200 border-2 border-white rounded-xl p-6 "
          >
            <div className="flex items-center gap-2">
              <p className="text-title group-hover:underline">{project.name}</p>
              <div className="text-neutral-600  group-hover:pl-2 transition-all duration-200">
                <ArrowUpRight size={15} />
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-2">
              <div className=" text-xs md:text-sm  flex flex-wrap gap-2 items-center text-muted-foreground">
                {project.stack.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="px-2 py-1 bg-neutral-100 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-neutral-600 max-sm:text-sm">{project.date}</p>
            </div>

            <p className="main-color">{project.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
