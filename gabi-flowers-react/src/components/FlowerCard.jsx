import React from 'react';
import Link from 'next/link';

const FlowerCard = ({ id, name, image, shortDescription, category }) => {
  return (
    <Link
      href={`/shop/${id}`}
      aria-label={`View details for ${name}`}
      className="group product-card bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 section-animate block"
    >
      <div className="relative h-40 overflow-hidden card-image-wrapper">
        <img
          src={image}
          alt={`${name} — ${category} bouquet`}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
          {category}
        </span>
      </div>
      <div className="p-5 text-center">
        <h3 className="text-xl font-semibold text-slate-900 mb-2">{name}</h3>
        <p className="text-sm text-slate-600">{shortDescription}</p>
      </div>
    </Link>
  );
};

export default FlowerCard;
