import { jsx } from "react/jsx-runtime";

jsx
import React from 'react';

export default function RSVPSection() {
  return (
    <section id="contacto" className="mt-8">
      <div className="card p-6 bg-white border border-green-100 rounded-2xl">
        <h3 className="font-serif text-2xl">Confirmación (RSVP)</h3>
        <p className="text-muted mt-1">Por favor confirma antes del 22 de marzo de 2027.</p>
        <form action="https://formspree.io/f/your-id" method="POST" className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
          <input name="Nombre" placeholder="Nombre completo" className="px-3 py-2 border rounded-md" required />
          <input name="Email" type="email" placeholder="Email" className="px-3 py-2 border rounded-md" required />
          <select name="Asistencia" className="px-3 py-2 border rounded-md" required>
            <option value="">Selecciona…</option>
            <option>Sí</option>
            <option>No</option>
          </select>
          <input name="Acompañantes" type="number" min="0" max="6" defaultValue={0} className="px-3 py-2 border rounded-md" />
          <textarea name="Notas" className="md:col-span-2 px-3 py-2 border rounded-md" placeholder="Alergias o notas"></textarea>
          <button className="md:col-span-2 px-4 py-2 rounded-md bg-green-100 border">Enviar confirmación</button>
        </form>
      </div>
    </section>
  );
}