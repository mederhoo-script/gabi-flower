export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <main className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
        <p className="text-lg text-slate-700 leading-relaxed mb-6">
          These terms outline the use of Gabi Flowers’ website and services. By placing an order, you agree to our purchase and delivery conditions.
        </p>
        <section className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Order and delivery</h2>
          <p className="text-slate-600 leading-relaxed">
            Orders are subject to product availability and delivery windows. We strive to meet estimated delivery times but cannot guarantee them in all cases.
          </p>
        </section>
      </main>
    </div>
  );
}
