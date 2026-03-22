'use client'; 
import { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import { Icons } from '../utils/images';
import { usePathname } from 'next/navigation';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "BLOGS", href: "/blogs" },
    { name: "PROJECTS", href: "/projects" },
    { name: "CONTACT", href: "/contact" },
    { name: "ABOUT", href: "/about" }
  ];

  const getClass = (href: string) =>
    `px-3 py-2 rounded-xl transition-all ${
      pathname === href
        ? "bg-[#0a0a0a] text-[#dcfd00] outline-3 font-bold"
        : "text-gray-600 transition-all ease-in-out hover:font-bold hover:text-black hover:bg-[#dcfd00]"
    }`;

  return (
    <nav className="sticky top-0 w-full flex justify-start md:justify-center items-center md:py-2 px-5 md:px-0 border-b-3 border-white/50 text-white bg-[#0a0a0a] z-999">
      <div className="w-full sm:w-2xl md:w-4xl flex flex-col md:flex-row md:justify-start md:items-center gap-6 md:px-30">

        {/* LOGO */}
        <div className="flex justify-between items-center px-5 py-2">
          <div className="flex items-baseline">
            <h1 className="font-extrabold text-2xl">Arsh</h1>
            <span className="font-extrabold text-sm text-[#dcfd00]">.dev</span>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 cursor-pointer md:hidden"
          >
            {isOpen ? <Image className="invert" src={Icons.CloseMenu} height={30} alt='Menu'/> : <Image className="invert" src={Icons.HambergerMenu} height={30} alt='Menu'/>}
          </button>
        </div>
        <span className="md:mr-5 md:text-lg md:opacity-50 hidden md:block">/</span>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-2 text-md">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={getClass(link.href)}>
              {link.name}
            </Link>
          ))}
        </div>

        {/* MOBILE NAV */}
        {isOpen && (
          <div className="flex flex-col md:hidden items-center text-gray-600 bg-[#0a0a0a] py-5 w-full">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`w-full text-center ${getClass(link.href)}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}