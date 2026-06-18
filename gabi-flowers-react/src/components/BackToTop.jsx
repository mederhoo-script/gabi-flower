"use client";

import React from 'react';

export default function BackToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="text-sm font-semibold text-emerald-400"
      aria-label="Back to top"
    >
      Back to top
    </button>
  );
}
