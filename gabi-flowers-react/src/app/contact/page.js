export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <main className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg text-slate-700 leading-relaxed mb-6">
          We are here to help with your order, delivery questions, or custom floral requests.
          Reach out and we will respond as soon as possible.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <section className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">Email</h2>
            <p className="text-slate-600"><a href="mailto:hello@gabiflowers.com" className="text-emerald-700 font-semibold">hello@gabiflowers.com</a></p>
          </section>
          <section className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">Customer care</h2>
            <p className="text-slate-600 leading-relaxed">For delivery windows, care guidance, or order updates, send us a message and we will get back to you within one business day.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
