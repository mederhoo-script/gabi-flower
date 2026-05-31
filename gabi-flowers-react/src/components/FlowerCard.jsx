const FlowerCard = ({ name, image }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div className="relative h-72 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <button className="w-full py-3 bg-white text-emerald-900 font-bold rounded-lg shadow-lg hover:bg-emerald-50 transition-colors">
            Quick View
          </button>
        </div>
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
          {name}
        </h3>
        <p className="text-sm text-gray-500 font-medium tracking-wide uppercase">
          Fresh Bloom
        </p>
      </div>
    </div>
  );
};

export default FlowerCard;
