"use client"

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed flex items-center justify-between w-full p-4 xl:px-30 lg:px-20 md:px-15 bg-white z-50">
      {/* Logo */}
      <h1 className="text-2xl font-bold">NextTools</h1>

      {/* Desktop Navigation (hidden on mobile) */}
      <div className="hidden md:flex items-center space-x-10">
        <ul className="flex space-x-10">
          <li><Link href="/" className="hover:text-gray-600">Home</Link></li>
          <li><Link href="/blog" className="hover:text-gray-600">Blog</Link></li>
          {/* <li><Link href="#" className="hover:text-gray-600">Categories</Link></li> */}
          <li><Link href="/about" className="hover:text-gray-600">About</Link></li>
        </ul>
        <Link href="/blog">
        <button className="px-4 py-2 text-white bg-black hover:bg-gray-800 transition">
          Explore the blog
        </button>
        </Link>
      </div>

      {/* Mobile Burger Button (visible on small screens) */}
      <button 
        className="md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-6 flex flex-col space-y-1.5">
          <span className={`h-0.5 w-full bg-black transition ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`h-0.5 w-full bg-black transition ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`h-0.5 w-full bg-black transition ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </div>
      </button>

      {/* Mobile Menu (appears when burger is clicked) */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
          <ul className="flex flex-col space-y-4 p-4">
            <li><Link href="/" className="block py-2 hover:bg-gray-100">Home</Link></li>
            <li><Link href="/blog" className="block py-2 hover:bg-gray-100">Blog</Link></li>
            {/* <li><Link href="#" className="block py-2 hover:bg-gray-100">Categories</Link></li> */}
            <li><Link href="/about" className="block py-2 hover:bg-gray-100">About</Link></li>
            <li>
              <Link href="/blog">
              <button className="w-full px-4 py-2 text-white bg-black hover:bg-gray-800">
                Explore the blog
              </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
