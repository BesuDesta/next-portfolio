import React from "react";

export default function Projects() {
  return (
    <div className="section">
      <p className="section-header">Projects</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="w-full h-52 aspect-square border rounded-xl"></div>
        <div className="w-full h-52 aspect-square border rounded-xl"></div>
        <div className="w-full h-52 aspect-square border rounded-xl"></div>
        <div className="w-full h-52 aspect-square border rounded-xl"></div>
      </div>
    </div>
  );
}
