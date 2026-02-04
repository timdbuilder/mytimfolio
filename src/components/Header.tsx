'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              {/* Hexagon shape for industrial look */}
              <svg width="50" height="50" viewBox="0 0 50 50" className="drop-shadow-lg">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#1D4ED8', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                {/* Hexagon */}
                <path 
                  d="M25 2 L45 14 L45 36 L25 48 L5 36 L5 14 Z" 
                  fill="url(#logoGradient)"
                  className="group-hover:opacity-90 transition-opacity"
                />
                {/* Letter T */}
                <text 
                  x="25" 
                  y="33" 
                  fontSize="24" 
                  fontWeight="bold" 
                  fill="white" 
                  textAnchor="middle"
                  fontFamily="system-ui, -apple-system, sans-serif"
                >
                  T
                </text>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg leading-tight transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Timothy Ezeani
              </span>
              <span className={`text-xs font-medium transition-colors ${
                isScrolled ? 'text-blue-600' : 'text-blue-300'
              }`}>
                Engineer & Developer
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#about" 
              className={`font-medium transition-colors hover:text-blue-500 ${
                isScrolled ? 'text-gray-700' : 'text-gray-200'
              }`}
            >
              About
            </a>
            <a 
              href="#projects" 
              className={`font-medium transition-colors hover:text-blue-500 ${
                isScrolled ? 'text-gray-700' : 'text-gray-200'
              }`}
            >
              Projects
            </a>
            <a 
              href="#experience" 
              className={`font-medium transition-colors hover:text-blue-500 ${
                isScrolled ? 'text-gray-700' : 'text-gray-200'
              }`}
            >
              Experience
            </a>
            <a 
              href="#skills" 
              className={`font-medium transition-colors hover:text-blue-500 ${
                isScrolled ? 'text-gray-700' : 'text-gray-200'
              }`}
            >
              Skills
            </a>
            <a 
              href="#contact" 
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
