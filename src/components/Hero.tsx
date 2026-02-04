'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'Civil Engineering Student',
    'Software Developer',
    'Graphic Designer',
    'Full-Stack Developer'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute w-96 h-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-8">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative group">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-blue-500/50 shadow-2xl shadow-blue-500/30 group-hover:ring-blue-400 transition-all duration-300">
                <img 
                  src="/passport.png" 
                  alt="Timothy Ezeani" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-blue-500/20 group-hover:bg-blue-500/0 transition-all duration-300"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium backdrop-blur-sm border border-blue-500/30">
                Available for hire
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Timothy Ezeani</span>
                </h1>

            <div className="h-20 mb-6">
              <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
                <span className="inline-block min-w-[280px]">
                  {roles[currentRole]}
                </span>
                <span className="animate-pulse">_</span>
              </h2>
            </div>
          </div>
        </div>

        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed text-center">
          Final year Civil Engineering student who codes. I build mobile and web applications 
          with Next.js and Flutter, while bringing creative design skills to every project.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20"
          >
            Let's Talk
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
