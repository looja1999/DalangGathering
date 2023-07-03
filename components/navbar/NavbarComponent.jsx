"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  { id: 2, title: "Explore", url: "/explore" },
  { id: 3, title: "Dictionary", url: "/dictionary" },
  { id: 4, title: "About Us", url: "/about-us" },
];

const NavbarComponent = () => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <nav className="w-full h-[60px] bg-gray-900 ">
      <div className="h-full max-w-[1240px] mx-auto flex justify-between items-center">
        <Link href="/" className="text-lg font-bold text-white">
          Dalang Gathering
        </Link>
        <div className="text-sm">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className={`p-2 ${
                pathName === link.url
                  ? "border-b-2 text-white border-b-red-500"
                  : "text-gray-200"
              }`}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
