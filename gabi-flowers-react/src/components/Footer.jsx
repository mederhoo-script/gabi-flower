import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-4">
              <img src={logo} alt="Gabi Flowers" className="h-12 w-auto" />
              
            </div>

            <p className="text-gray-400 max-w-lg leading-relaxed">Quality is at the heart of everything we do. Our growers hand-select every stem to ensure freshness and longevity, and our delivery partners bring your order with care.</p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 uppercase text-xs tracking-widest">Explore</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 uppercase text-xs tracking-widest">Contact</h4>
            <p className="text-gray-300 text-sm">Email: <a href="mailto:hello@gabiflowers.com" className="text-emerald-400">hello@gabiflowers.com</a></p>
            </div>
          </div>

        <div className="pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Gabi Flowers Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-400 text-sm hover:text-white">Privacy</a>
            <a href="#" className="text-gray-400 text-sm hover:text-white">Terms</a>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-sm font-semibold text-emerald-400">Back to top</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
