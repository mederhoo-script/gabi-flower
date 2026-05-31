import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img
                src={logo}
                alt="Gabi Flowers logo"
                className="w-8 h-8 rounded-full object-cover ring-2 ring-emerald-500/60"
              />
              <h2 className="text-xl font-bold text-gray-900">Gabi Flowers</h2>
            </div>
            <p className="text-gray-500 max-w-sm leading-relaxed">
              We specialize in the cultivation and delivery of premium floral arrangements. 
              Our passion is excellence, and our mission is to bring beauty into every home.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-emerald-600 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-500 hover:text-emerald-600 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-emerald-600 transition-colors">Products</a></li>
              <li><a href="#" className="text-gray-500 hover:text-emerald-600 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Connect</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-emerald-600 transition-colors">Instagram</a></li>
              <li><a href="#" className="text-gray-500 hover:text-emerald-600 transition-colors">Facebook</a></li>
              <li><a href="#" className="text-gray-500 hover:text-emerald-600 transition-colors">Twitter</a></li>
              <li><a href="#" className="text-gray-500 hover:text-emerald-600 transition-colors">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-400 text-sm">
            &copy; 2026 Gabi Flowers Ltd. All Rights Reserved.
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            <span>Back to Top</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
