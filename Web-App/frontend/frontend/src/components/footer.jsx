import React from "react";

export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <footer className="flex flex-col items-center justify-around w-full py-16 text-sm bg-slate-50 text-gray-800/70">
        {/* Logo */}
        <svg width="157" height="40" viewBox="0 0 157 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Your SVG content here */}
        </svg>

        {/* Copyright Text */}
        <p className="mt-4 text-center text-gray-600">
          © 2025 <a href="http://localhost:5173/#" className="underline hover:text-black">Kisaanbot</a>. All rights reserved.
        </p>

        {/* Links */}
        <div className="flex items-center gap-4 mt-6">
          <a href="#" className="font-medium text-gray-800 hover:text-black transition-all">
            Brand Guidelines
          </a>
          <div className="h-4 w-px bg-black/20" />
          <a href="#" className="font-medium text-gray-800 hover:text-black transition-all">
            Trademark Policy
          </a>
        </div>
      </footer>
    </>
  );
}
