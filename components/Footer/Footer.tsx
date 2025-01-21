import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center ">
      <div className="footer-container">
        <div className="flex items-center gap-2">
          <p className="text-sm text-muted-foreground">Last updated on</p>
          <span className="current-date text-xs">
            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
            January 21st 2025
          </span>
        </div>
        <p className=" flex gap-1 text-muted-foreground text-sm">
          Made by
          <Link
            href="https://www.linkedin.com/in/nana-kofi-okae"
            className="main-color hover:underline "
          >
            Nana
          </Link>
        </p>
      </div>
    </footer>
  );
}
