export default function MissionPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <main className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Our Mission</h1>
        <p className="text-lg text-slate-700 leading-relaxed mb-6">
          At Gabi Flowers, our mission is to deliver joyful, beautifully styled floral arrangements that elevate every moment.
          We believe fresh flowers should be accessible, dependable, and delivered with the care of a local florist.
        </p>
        <div className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-3">What we stand for</h2>
          <ul className="list-disc pl-5 space-y-3 text-slate-600">
            <li>Freshness first: flowers sourced daily from trusted growers.</li>
            <li>Thoughtful design: curated arrangements with premium materials.</li>
            <li>Reliable delivery: secure packaging and punctual handoff.</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
