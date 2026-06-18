"use client";

import React from 'react';

export default function Checkout({ product }) {
  const whatsappMessage = `Hi! I'm interested in the ${product.name}. Could you provide more details and availability?`;
  const whatsappLink = `https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`;
  const emailSubject = `Inquiry about ${product.name}`;
  const emailBody = `Hello,\n\nI'm interested in your ${product.name} arrangement.\n\nCould you provide more details about availability and pricing?\n\nThank you!`;
  const emailLink = `mailto:hello@gabiflowers.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  return (
    <div className="space-y-4">
      <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-4">
        <p className="text-sm text-emerald-800 font-semibold">
          To place your order, contact us through your preferred method below.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-2xl bg-green-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-600"
        >
          💬 WhatsApp
        </a>

        <a
          href={emailLink}
          className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
        >
          ✉️ Email us
        </a>

        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-2xl bg-slate-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 sm:col-span-2"
        >
          💬 Chat with us
        </a>
      </div>
    </div>
  );
}
