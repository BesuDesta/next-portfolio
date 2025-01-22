import React from "react";

export default function Education() {
  return (
    <div className="section">
      <p className="section-header">Education</p>
      <div className="flex flex-col">
        <p className="text-title">Virginia Commonwealth University</p>
        <div className="flex flex-col gap-2 md:flex-row justify-between">
          <p className="italic date-text">
            Bachelor of Science in Computer Science
          </p>
          <p className="date-text">Fall 2020 - Fall 2024</p>
        </div>
      </div>
    </div>
  );
}
