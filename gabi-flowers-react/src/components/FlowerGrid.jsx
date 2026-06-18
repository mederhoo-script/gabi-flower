'use client';

import React, { useMemo, useState } from 'react';
import FlowerCard from './FlowerCard';
import flowers from '../data/flowers';

const categories = ['All', 'Roses', 'Bouquets', 'Mums', 'Seasonal'];

const FlowerGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredFlowers = useMemo(() => {
    if (selectedCategory === 'All') return flowers;
    return flowers.filter((flower) => flower.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-8">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-700 font-semibold">Shop our collection</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">Fresh flower arrangements, made to order</h2>
        </div>

        <div className="flex flex-wrap gap-3 bg-slate-100 p-3 rounded-3xl">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                selectedCategory === category
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-emerald-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </header>

      <div className="text-sm text-slate-600 mb-6">Showing {filteredFlowers.length} arrangements in “{selectedCategory}”</div>

      <section id="today" className="mb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredFlowers.map((flower) => (
            <FlowerCard key={flower.id} {...flower} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default FlowerGrid;
