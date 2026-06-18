export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <main className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">About Gabi Flowers</h1>
        <p className="text-lg text-slate-700 leading-relaxed mb-6">
          Gabi Flowers is a boutique floral studio dedicated to bringing premium blooms to every celebration and everyday moment.
          We work directly with experienced growers to source fresh roses, mums, and seasonal stems, then hand-assemble each arrangement for delivery.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <section className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">Our promise</h2>
            <p className="text-slate-600 leading-relaxed">
              Every order is prepared with care, from stem selection to wrapping and delivery. We stand behind freshness, beauty, and thoughtful presentation.
            </p>
          </section>
          <section className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">Why choose us</h2>
            <ul className="list-disc pl-5 space-y-3 text-slate-600">
              <li>Premium, hand-picked blooms from trusted growers.</li>
              <li>Gift-ready arrangements crafted by floral designers.</li>
              <li>Safe, secure checkout and reliable delivery.</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
