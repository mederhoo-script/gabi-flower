"use client";

import React, { useEffect, useState } from 'react';

export default function AddToCart({ product }) {
  const [qty, setQty] = useState(1);
  const [status, setStatus] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const add = () => {
    if (!mounted) return;
    const existingCart = JSON.parse(localStorage.getItem('gabi-cart') || '[]');
    const itemIndex = existingCart.findIndex((item) => item.id === product.id);
    if (itemIndex >= 0) {
      existingCart[itemIndex].quantity += qty;
    } else {
      existingCart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: qty,
      });
    }

    localStorage.setItem('gabi-cart', JSON.stringify(existingCart));
    setStatus(`${qty} ${product.name} added to cart.`);
    setQty(1);

    window.setTimeout(() => {
      setStatus('');
    }, 3000);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <label className="flex items-center gap-3">
          <span className="text-sm font-semibold text-slate-700">Quantity</span>
          <input
            type="number"
            min="1"
            value={qty}
            onChange={(e) => setQty(Math.max(1, Number(e.target.value || 1)))}
            className="w-20 rounded-2xl border border-slate-300 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-label="Quantity"
          />
        </label>

        <button
          onClick={add}
          className="inline-flex items-center justify-center rounded-2xl bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800"
          aria-label="Add to cart"
        >
          Add to cart
        </button>
      </div>

      {status ? (
        <p className="text-sm text-emerald-700" aria-live="polite">
          {status}
        </p>
      ) : null}
    </div>
  );
}
