import React from 'react';
import FlowerCard from './FlowerCard';
import pinkRose from '../assets/pink-rose.jpg';
import everRed from '../assets/ever-red.jpg';
import fiorella from '../assets/fiorella.jpg';
import whiteRose from '../assets/white-rose.jpg';
import yellowRose from '../assets/yellow-rose.jpg';
import goldMums from '../assets/gold-mums.jpg';

const flowers = [
  { id: 1, name: 'Pink Rose', image: pinkRose, price: 12, description: 'Delicate pink petals, long-lasting stem.' },
  { id: 2, name: 'Ever Red', image: everRed, price: 15, description: 'Vibrant crimson roses for lasting impressions.' },
  { id: 3, name: 'Fiorella', image: fiorella, price: 18, description: 'A premium bouquet with mixed seasonal blooms.' },
  { id: 4, name: 'White Rose', image: whiteRose, price: 14, description: 'Classic white roses, elegant and pure.' },
  { id: 5, name: 'Yellow Rose', image: yellowRose, price: 13, description: 'Sunny yellow roses to brighten any room.' },
  { id: 6, name: 'Gold Mums', image: goldMums, price: 11, description: 'Full-bodied chrysanthemums with rich color.' },
  { id: 7, name: 'Fiorella Duo', image: fiorella, price: 20, description: 'Gift-ready arrangement with luxury wrapping.' },
  { id: 8, name: 'Rose Mix', image: pinkRose, price: 16, description: 'Mixed roses in complementary shades.' },
  { id: 9, name: 'Mums Collection', image: goldMums, price: 10, description: 'Assorted mums, cheerful and affordable.' },
];

const FlowerGrid = () => {
  const today = flowers;
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <header className="flex flex-col md:flex-row items-end justify-between mb-8 gap-6">

        <div className="flex items-center space-x-4 bg-gray-100 p-1 rounded-lg">
          <button className="px-4 py-2 bg-white text-gray-900 font-bold rounded-md shadow-sm text-sm transition-all">All</button>
          <button className="px-4 py-2 text-gray-500 font-bold text-sm hover:text-gray-900 transition-all">Roses</button>
          <button className="px-4 py-2 text-gray-500 font-bold text-sm hover:text-gray-900 transition-all">Exotics</button>
        </div>
      </header>

        {/* Centered subtitle to match example */}
        <div className="w-full text-center mb-6">
          <h3 className="text-lg text-green-700 font-semibold">Fresh Flowers</h3>
        </div>

      <section id="today" className="mb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {today.map(f => (
            <FlowerCard key={f.id} {...f} />
          ))}
        </div>
      </section>

    </div>
  );
};

export default FlowerGrid;
