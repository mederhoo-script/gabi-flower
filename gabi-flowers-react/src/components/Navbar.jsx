import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-emerald-950/90 backdrop-blur-md border-b border-emerald-800/50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Gabi Flowers logo"
            className="w-10 h-10 rounded-full object-cover ring-2 ring-emerald-400/60"
          />
          <div>
            <h1 className="text-xl font-bold text-white leading-none">Gabi Flowers</h1>
         </div>
        </div>

        <div className="hidden md:flex items-center space-x-8 ml-auto">
          <a href="#" className="text-sm font-semibold text-emerald-100/70 hover:text-white transition-colors">Home</a>
          <a href="#" className="text-sm font-semibold text-emerald-100/70 hover:text-white transition-colors">About Us</a>
          <a href="#" className="text-sm font-semibold text-emerald-100/70 hover:text-white transition-colors">Products</a>
          <a href="#" className="text-sm font-semibold text-emerald-100/70 hover:text-white transition-colors">Contact</a>
          <a href="#" className="text-sm font-semibold text-emerald-100/70 hover:text-white transition-colors">Mission</a>
        </div>

        <div className="flex items-center md:hidden">
          <button className="md:hidden p-2 text-emerald-100">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
