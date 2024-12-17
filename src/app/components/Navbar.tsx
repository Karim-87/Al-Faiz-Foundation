"use client"

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-950 px-4 md:px-8 py-2">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div>
          <Link href="/">
            <img
              className="w-[70px] h-[60px] hover:scale-110 hover:border-2 transition-transform duration-200"
              src="/Al Faiz Logo.png"
              alt="my logo"
            />
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        {/* Navbar Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-6 text-white`}
        >
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <li className="hover:scale-110 hover:border-2 transition-transform duration-200">
              <Link href="/">
                <b>Home</b>
              </Link>
            </li>
            <li className="hover:scale-110 hover:border-2 transition-transform duration-200">
              <Link href="/about">
                <b>About us</b>
              </Link>
            </li>
            <li className="hover:scale-110 hover:border-2 transition-transform duration-200">
              <a href="/contact">
                <b>Contact</b>
              </a>
            </li>
            <li className="hover:scale-110 hover:border-2 transition-transform duration-200">
              <a href="/services">
                <b>Services</b>
              </a>
            </li>
            <li className="hover:scale-110 hover:border-2 transition-transform duration-200">
              <a href="/courses">
                <b>Courses</b>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
