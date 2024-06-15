// src/components/Navbar.js
import React, { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [state, setState] = useState(false);

  const menus = [
    { title: "Home", path: "/" },
    {
      title: "LinkedIn",
      path: "https://www.linkedin.com/in/praveen-chandra-patro-1a6a5a257/",
    },
    { title: "GitHub", path: "https://github.com/praveen-p09" },
  ];

  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              onClick={() => setState(!state)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" />
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link className="text-2xl font-bold text-white" href="/">
                Code Commenter
              </Link>
            </div>
            {/* Desktop navigation */}
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {menus.map((item, idx) =>
                  item.path.startsWith("http") ? (
                    <a
                      key={idx}
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <Link
                      className="text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      key={idx}
                      href={item.path}
                    >
                      {item.title}
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${state ? "" : "hidden"} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {menus.map((item, idx) =>
            item.path.startsWith("http") ? (
              <a
                key={idx}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.title}
              </a>
            ) : (
              <Link
                key={idx}
                href={item.path}
                className="text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.title}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
