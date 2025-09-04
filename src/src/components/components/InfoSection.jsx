import { jsx } from "react/jsx-runtime";

jsx
import React from 'react';

export default function InfoSection() {
  return (
    <section id="info" className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      <article className="card p-6 bg-white border border-green-100 rounded-2xl">
        <h3 className="font-serif text-2xl">Ceremonia</h3>
        <p className="text-muted mt-1">13:00 · Ermita San Miguel</p>
        <ul className="mt-3 space-y-1 text-sm text-muted">
          <li>Llegada recomendada: 12:30</li>
          <li>Parking gratuito frente a la ermita</li>
        </ul>
        <div className="mt-4">
          <a className="text-sm underline" href="https://maps.app.goo.gl/w6E2bE7yJNYVzNY49?g_st=ipc" target="_blank" rel="noreferrer">Ver en Google Maps</a>
        </div>
      </article>

      <article className="card p-6 bg-white border border-green-100 rounded-2xl">
        <h3 className="font-serif text-2xl">Celebración</h3>
        <p className="text-muted mt-1">14:30 · Finca Los Olivos</p>
        <ul className="mt-3 space-y-1 text-sm text-muted">
          <li>Cóctel al aire libre</li>
          <li>Cena y barra libre</li>
        </ul>
      </article>

      <article id="dress" className="card p-6 bg-white border border-green-100 rounded-2xl">
        <h3 className="font-serif text-2xl">Código de vestimenta</h3>
        <p className="text-muted mt-1">Etiqueta cóctel — tonos neutros o pastel. Evitar blanco total.</p>
      </article>

      <article id="regalos" className="card p-6 bg-white border border-green-100 rounded-2xl">
        <h3 className="font-serif text-2xl">Regalos</h3>
        <p className="text-muted mt-1">Tu presencia es nuestro mejor regalo. Si deseas contribuir:</p>
        <div className="mt-3 p-4 bg-[var(--champagne)] rounded-md border border-green-100">
          <strong>ES35 1583 0001 1790 3811 3594</strong>
        </div>
      </article>
    </section>
  );
}