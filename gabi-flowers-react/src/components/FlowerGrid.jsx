import FlowerCard from './FlowerCard';
import everRed from '../assets/ever-red.jpg';
import fiorella from '../assets/fiorella.jpg';
import goldMums from '../assets/gold-mums.jpg';
import lollipop from '../assets/lollipop.jpg';
import pinkRose from '../assets/pink-rose.jpg';
import whiteMums from '../assets/white-mums.jpg';
import whiteRoseLeaves from '../assets/white-rose+leaves.jpg';
import whiteRose from '../assets/white-rose.jpg';
import yellowMums from '../assets/yellow-mums.jpg';
import yellowRose from '../assets/yellow-rose.jpg';

const flowers = [
  { id: 1, name: 'Ever Red', image: everRed },
  { id: 2, name: 'Yellow Rose', image: yellowRose },
  { id: 3, name: 'Fiorella', image: fiorella },
  { id: 4, name: 'Golden Mums', image: goldMums },
  { id: 5, name: 'Lollipop', image: lollipop },
  { id: 6, name: 'Pink Rose', image: pinkRose },
  { id: 7, name: 'White Mums', image: whiteMums },
  { id: 8, name: 'White Rose Leaves', image: whiteRoseLeaves },
  { id: 9, name: 'White Rose', image: whiteRose },
  { id: 10, name: 'Yellow Mums', image: yellowMums },
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

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
        {flowers.map(flower => (
          <FlowerCard key={flower.id} {...flower} />
        ))}
      </div>
    </section>
  );
};

export default FlowerGrid;
