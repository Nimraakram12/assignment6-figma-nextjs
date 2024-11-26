"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      
      <div className="w-full bg-[#F7F7F7]">
        <div className="py-3 max-w-[1280px] mx-auto flex items-center justify-between px-4 md:px-8">
          
          <div className=" items-center gap-4 hidden md:flex">
            <h3 className="text-sm text-black font-roboto">
              Phone: <span className="font-medium">956 742 455 678</span>
            </h3>
            <span className="hidden md:block h-5 w-[1px] bg-gray-400"></span>
            <h3 className="text-sm text-black font-roboto">
              Email: <span className="font-medium">info@ddsgnr.com</span>
            </h3>
          </div>

        
          <div className="hidden md:flex gap-3 text-lg text-[#000000]">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
      </div>

      <header className="w-full bg-[#f7f7f7] flex items-center justify-between px-4 md:px-8 py-3">
        {/* Logo */}
        <div>
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={130}
            height={41}
            className="w-[130px]"
          />
        </div>

      
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-black"
          >
            {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/">Home</Link>
          <Link href="/">Courses</Link>
          <Link href="/">Services</Link>
          <Link href="/">Achievement</Link>
          <Link href="/">About Us</Link>
          <Link href="/">Testimonial</Link>
        </nav>

        
        <div className="hidden md:flex gap-4">
          <Link
            href="/"
            className="w-[80px] text-center border-2 p-2 rounded-lg border-slate-900 hover:bg-slate-900 hover:text-white"
          >
            Login
          </Link>
          <Link
            href="/"
            className="w-[80px] text-center border-2 p-2 bg-slate-900 text-white rounded-lg border-slate-900 hover:bg-white hover:text-black"
          >
            Sign Up
          </Link>
        </div>
      </header>

  
      {menuOpen && (
        <div className="md:hidden bg-white fixed top-0 left-0 w-full h-screen z-50 flex flex-col items-center justify-center gap-8">
          <nav className="flex flex-col items-center gap-8 text-lg">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Courses
            </Link>
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Services
            </Link>
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Achievement
            </Link>
            <Link href="/" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Testimonial
            </Link>
          </nav>
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="w-[100px] text-center border-2 p-2 rounded-lg border-slate-900 hover:bg-slate-900 hover:text-white"
            >
              Login
            </Link>
            <Link
              href="/"
              className="w-[100px] text-center border-2 p-2 bg-slate-900 text-white rounded-lg border-slate-900 hover:bg-white hover:text-black"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
