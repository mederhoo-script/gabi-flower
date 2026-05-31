import { useEffect, useRef, useState } from 'react';
import everRed from '../assets/ever-red.jpg';
import fiorella from '../assets/fiorella.jpg';
import goldMums from '../assets/gold-mums.jpg';
import pinkRose from '../assets/pink-rose.jpg';
import whiteRose from '../assets/white-rose.jpg';
import yellowRose from '../assets/yellow-rose.jpg';

const heroImages = [everRed, fiorella, goldMums, pinkRose, whiteRose, yellowRose];
const heroImageCount = heroImages.length;

const Hero = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const slideRefs = useRef([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % heroImageCount);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    slideRefs.current[activeImageIndex]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'start',
      block: 'nearest',
    });
  }, [activeImageIndex]);

  return (
    <div className="relative isolate overflow-hidden bg-emerald-950 py-16 sm:py-24">
      <div className="absolute inset-0 -z-10 overflow-x-auto snap-x snap-mandatory scroll-smooth">
        <div className="flex h-full w-full">
          {heroImages.map((image, index) => (
            <div
              key={image}
              ref={(element) => {
                slideRefs.current[index] = element;
              }}
              className="h-full min-w-full snap-start"
            >
              <img
                src={image}
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover object-center brightness-[0.55]"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 -z-10 bg-black/20" aria-hidden="true"></div>

      <div className="absolute inset-0 -z-10 opacity-30 blur-3xl" aria-hidden="true">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">
          Cultivating <span className="text-emerald-400 italic">Excellence</span> <br />
          one bloom at a time.
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-emerald-100/80 leading-relaxed mb-10">
          From the heart of the garden to your doorstep. We bring you the finest roses and blossoms,
          carefully nurtured for beauty and longevity.
        </p>
      </div>
    </div>
  );
};

export default Hero;
