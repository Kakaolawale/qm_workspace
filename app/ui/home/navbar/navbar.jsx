"use client"

import { useState } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa'; // Importing a hamburger menu icon from React Icons

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
                <img src="/logo.png" alt="Company Logo" className="w-10 h-10" />
                <span className="ml-4 font-bold">Company Name</span>
            </div>
            <ul className={`md:flex gap-6 ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
                <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
                <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
                <li><Link href="/services" className="hover:text-gray-300">Services</Link></li>
                <li><Link href="/products" className="hover:text-gray-300">Products</Link></li>
                <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
                <li><Link href="/blog" className="hover:text-gray-300">Blog</Link></li>
            </ul>
            <button
                className="md:hidden text-2xl"
                onClick={toggleMobileMenu}
                aria-label="Toggle Menu"
            >
                <FaBars />
            </button>
        </nav>
    );
};

export default Navbar;
