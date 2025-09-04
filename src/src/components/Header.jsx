import { jsx } from "react/jsx-runtime";

jsx
import React, { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 backdrop-blur bg-white/60 border-b border-green-100 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full grid place-items-center bg-gradient-to-br from-green-300 to-green-100 text-ink font-serif">N·E</div>
          <div className="font-medium">Nayeli & Estiben</div>
        </div>
        <nav className="hidden md:flex gap-4 text-sm text-muted">
          {['home','info','dress','regalos','musica'].map(link => (
            <a key={link} href={`#${link}`} className="hover:text-ink">{link.charAt(0).toUpperCase() + link.slice(1)}</a>
          ))}
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(v => !v)} aria-label="Menú">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#20332a"><path d="M3 6h18M3 12h18M3 18h18" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white/80 border-t border-green-100">
          <div className="flex flex-col p-4 gap-2">
            {['home','info','dress','regalos','musica'].map(link => (
              <a key={link} href={`#${link}`} onClick={() => setOpen(false)}>{link.charAt(0).toUpperCase() + link.slice(1)}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}