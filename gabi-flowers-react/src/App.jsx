import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FlowerGrid from './components/FlowerGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <FlowerGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
