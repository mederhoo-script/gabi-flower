export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <main className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-lg text-slate-700 leading-relaxed mb-6">
          Gabi Flowers respects your privacy and is committed to protecting your personal information.
          We only collect the data needed to process your order and provide support.
        </p>
        <section className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">How we use information</h2>
          <p className="text-slate-600 leading-relaxed">
            We use your contact details to confirm orders, provide delivery updates, and respond to requests. We never sell your information to third parties.
          </p>
        </section>
      </main>
    </div>
  );
}
