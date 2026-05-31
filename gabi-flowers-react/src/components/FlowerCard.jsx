import React from 'react';

const FlowerCard = ({ name, image, description }) => {
  return (
    <div className="group product-card bg-white rounded-2xl overflow-hidden border border-gray-200 shadow transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 section-animate ">
      <div className="relative h-40 overflow-hidden card-image-wrapper">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 rounded-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="w-full p-4 text-left text-white">
            <h3 className="text-lg font-semibold leading-tight">{name}</h3>
            <p className="text-sm opacity-90 mt-1">{description}</p>
          </div>
        </div>
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-1 transition-colors">{name}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default FlowerCard;
