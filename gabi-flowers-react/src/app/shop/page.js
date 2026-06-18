import FlowerGrid from '../../components/FlowerGrid';

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans">
      <main className="max-w-7xl mx-auto px-4 py-12">
        <header className="mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-700 font-semibold">Shop our collection</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3">Flower arrangements for every occasion</h1>
          <p className="mt-4 max-w-2xl text-slate-600">Explore premium roses, cheerful mums, and expertly wrapped bouquets designed for freshness and lasting beauty.</p>
        </header>
        <FlowerGrid />
      </main>
    </div>
  );
}
