"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="mt-20 p-5 bg-gray-900 text-center text-white">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} | All rights reserved.
      </p>
      <p className="text-sm">
        Made with ❤️ by{" "}
        <a
          className="text-blue-300 hover:text-blue-400"
          href="https://github.com/praveen-p09"
          target="_blank"
          rel="noopener noreferrer"
        >
          Praveen Patro
        </a>
      </p>
    </footer>
  );
}
