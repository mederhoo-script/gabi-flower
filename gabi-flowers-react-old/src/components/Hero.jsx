import React, { useEffect, useRef, useState } from 'react';
import yellowmum from '../assets/yellow-mums.jpg';
import goldMums from '../assets/gold-mums.jpg';
import yellowRose from '../assets/yellow-rose.jpg';
import whitemum from '../assets/white-mums.jpg';

const images = [whitemum, yellowmum, goldMums, whitemum, yellowRose, goldMums];
const Hero = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const touchStartX = useRef(null);

  useEffect(() => {
    // auto-advance every 4 seconds
    timeoutRef.current = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timeoutRef.current);
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    // pause auto-scroll while touching
    clearInterval(timeoutRef.current);
  };

  const handleTouchEnd = (e) => {
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) {
      if (delta < 0) setIndex(i => (i + 1) % images.length);
      else setIndex(i => (i - 1 + images.length) % images.length);
    }
    // resume auto-scroll
    timeoutRef.current = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 4000);
  };

  return (
    <section className="relative isolate overflow-hidden bg-emerald-950">
      <div
        className="relative h-[80vh] md:h-[94vh] w-full"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`slide-${i}`}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Cultivating <span className="text-emerald-400 italic">Excellence</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-emerald-100/80 leading-relaxed mb-6">
            From the heart of the garden to your doorstep. We bring you the finest roses and blossoms,
            carefully nurtured for beauty and longevity.
          </p>

          <div className="flex items-center justify-center space-x-3 mt-80">
            {images.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setIndex(dotIdx)}
                className={`h-2 w-8 rounded-full transition-all ${dotIdx === index ? 'bg-emerald-400' : 'bg-white/40'}`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
