import React from 'react';
import flowers from '../../../data/flowers';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Checkout from '../../../components/Checkout';

export default async function ProductPage({ params }) {
  const { id } = await params;
  const productId = Number(id);
  const product = flowers.find((f) => f.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#f8fafc] font-sans">
        <Navbar />
        <main className="max-w-4xl mx-auto p-8">
          <h1 className="text-2xl font-semibold text-slate-900">Product not found</h1>
          <p className="mt-4 text-slate-600">We couldn't find the product you're looking for. Please return to the shop and select another arrangement.</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans">
      <Navbar />
      <main className="max-w-6xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src={product.image} alt={`${product.name} image`} className="w-full rounded-[28px] object-cover shadow-lg border border-slate-200" />
          </div>
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
              <span>{product.category}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-700" />
              <span className="text-slate-600">SKU {product.sku}</span>
            </div>

            <div>
              <h1 className="text-4xl font-bold text-slate-900">{product.name}</h1>
              <p className="mt-3 text-lg text-slate-700">{product.shortDescription}</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <Checkout product={product} />
            </div>

            <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900 mb-2">Availability</h2>
                  <p className="text-slate-600">{product.availability}</p>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-slate-900 mb-2">Delivery</h2>
                  <p className="text-slate-600">{product.delivery}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-12 grid gap-10 lg:grid-cols-3">
          <article className="lg:col-span-2 rounded-3xl bg-white border border-slate-200 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Product details</h2>
            <p className="text-slate-700 leading-8">{product.fullDescription}</p>
          </article>

          <article className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">What’s included</h2>
            <ul className="space-y-3 text-slate-600 list-disc list-inside">
              {product.included.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Care instructions</h2>
            <p className="text-slate-700 leading-7">{product.careInstructions}</p>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
}
