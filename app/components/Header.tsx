'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const date = new Date();
    try {
      setCurrentDate(date.toLocaleDateString('bn-BD', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }));
    } catch (error) {
      // Fallback for locales that might not be supported
      setCurrentDate(date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }));
    }
  }, []);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <div className="w-[150px] h-[50px] bg-blue-600 flex items-center justify-center text-white font-bold rounded">
                টাউনশিপ অনলাইন সেবা
              </div>
            </Link>
            {isMounted && (
              <div className="hidden md:block text-gray-600">{currentDate}</div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              হোম
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              আমাদের সম্পর্কে
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600">
              সেবাসমূহ
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">
              যোগাযোগ
            </Link>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-3">
            <Link
              href="/"
              className="block text-gray-700 hover:text-blue-600 py-2"
            >
              হোম
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-blue-600 py-2"
            >
              আমাদের সম্পর্কে
            </Link>
            <Link
              href="/services"
              className="block text-gray-700 hover:text-blue-600 py-2"
            >
              সেবাসমূহ
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-blue-600 py-2"
            >
              যোগাযোগ
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header; 