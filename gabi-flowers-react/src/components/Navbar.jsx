import React from 'react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-emerald-950/90 backdrop-blur-md border-b border-emerald-800/50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
            <span className="text-white font-bold text-xl">G</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white leading-none">Gabi Flowers</h1>
            <p className="text-[10px] text-emerald-400 font-medium uppercase tracking-widest mt-1">Cultivating Excellence</p>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-sm font-semibold text-emerald-100/70 hover:text-white transition-colors">Home</a>
          <a href="#" className="text-sm font-semibold text-emerald-100/70 hover:text-white transition-colors">About Us</a>
          <a href="#" className="text-sm font-semibold text-emerald-100/70 hover:text-white transition-colors">Products</a>
          <a href="#" className="text-sm font-semibold text-emerald-100/70 hover:text-white transition-colors">Mission</a>
          <a href="#" className="text-sm font-semibold text-emerald-100/70 hover:text-white transition-colors">Contact</a>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search flowers..."
              className="pl-10 pr-4 py-2 bg-emerald-900/50 border border-emerald-800 rounded-full text-sm text-white placeholder-emerald-300/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all w-64"
            />
            <svg className="w-4 h-4 text-emerald-300 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <button className="md:hidden p-2 text-emerald-100">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
