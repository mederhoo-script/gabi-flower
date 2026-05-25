import React from 'react';
import ever_red from '../assets/ever_red.png';

const Hero = () => {
  return (
    <div className="relative isolate overflow-hidden bg-emerald-950 py-32 sm:py-48">
      {/* Background Image: Fiorella */}
      <img
        src={ever_red}
        alt="Fiorella Flowers Background"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center brightness-[0.9] scale-110"
      />

      {/* Decorative Blobs */}
      <div className="absolute inset-0 -z-10 opacity-30 blur-3xl" aria-hidden="true">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-emerald-400 uppercase bg-emerald-400/10 rounded-full border border-emerald-400/20 backdrop-blur-sm">
          Premium Floral Collection
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight">
          Cultivating <span className="text-emerald-400 italic">Excellence</span> <br />
          one bloom at a time.
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-emerald-100/80 leading-relaxed mb-10">
          From the heart of the garden to your doorstep. We bring you the finest roses and blossoms,
          carefully nurtured for beauty and longevity.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-500/25 hover:-translate-y-1">
            Shop Collection
          </button>
          <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all border border-white/20 backdrop-blur-sm">
            Our Mission
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
