import { jsx } from "react/jsx-runtime";

jsx
import React from 'react';
import FlipUnit from './FlipUnit';

export default function Hero({ count }) {
  const timeUnits = [
    { key: 'd', label: 'Días' },
    { key: 'h', label: 'Horas' },
    { key: 'm', label: 'Min' },
    { key: 's', label: 'Seg' },
  ];

  return (
    <section id="home" className="card bg-white/80 border border-green-100 rounded-2xl shadow-md p-8 text-center">
      <div className="uppercase text-sm text-muted tracking-widest">Nos casamos</div>
      <h1 className="font-serif text-4xl md:text-6xl mt-2">Nayeli <span className="mx-2">&</span> Estiben</h1>
      <p className="text-muted mt-2">22 de abril de 2027 · 13:00 · Ermita San Miguel</p>

      <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4">
        <a className="rounded-full px-5 py-2.5 border border-green-300 bg-gradient-to-b from-green-100 to-[var(--champagne)] font-semibold" href="#regalos">Lista de regalos</a>
        <a className="rounded-full px-5 py-2.5 border border-green-300 bg-white font-semibold" href="#info">Ver detalles</a>
      </div>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 justify-center text-center">
        {timeUnits.map(({ key, label }) => (
          <div key={key} className="flex flex-col items-center">
            <FlipUnit value={count[key]} />
            <div className="text-xs text-muted uppercase mt-1">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}