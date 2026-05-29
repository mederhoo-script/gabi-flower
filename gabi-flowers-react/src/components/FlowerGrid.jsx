import React from 'react';
import FlowerCard from './FlowerCard';
import madamRed from '../assets/madam_red.png';
import everRed from '../assets/ever_red.png';
import fiorella from '../assets/fiorella.png';
import athena from '../assets/athena.png';
import taccazi from '../assets/taccazi.png';

const flowers = [
  { id: 1, name: 'Madam Red', image: madamRed },
  { id: 2, name: 'Ever Red', image: everRed },
  { id: 3, name: 'Fiorella', image: fiorella },
  { id: 4, name: 'Taccazi', image: taccazi },
  { id: 5, name: 'Athena', image: athena },
  { id: 6, name: 'Adalonia', image: fiorella },
  { id: 7, name: 'Yellow Basanti', image: taccazi },
  { id: 8, name: 'Jumilia', image: madamRed },
  { id: 9, name: 'Lilac', image: athena },
];

const FlowerGrid = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Our Products</h2>
          <p className="text-gray-500 max-w-lg">
            Each flower is hand-selected and nurtured to ensure you receive only the most breath-taking blooms.
          </p>
        </div>
        <div className="flex items-center space-x-4 bg-gray-100 p-1 rounded-lg">
          <button className="px-4 py-2 bg-white text-gray-900 font-bold rounded-md shadow-sm text-sm transition-all">All</button>
          <button className="px-4 py-2 text-gray-500 font-bold text-sm hover:text-gray-900 transition-all">Roses</button>
          <button className="px-4 py-2 text-gray-500 font-bold text-sm hover:text-gray-900 transition-all">Exotics</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {flowers.map(flower => (
          <FlowerCard key={flower.id} {...flower} />
        ))}
      </div>
    </section>
  );
};

export default FlowerGrid;
