import { jsx } from "react/jsx-runtime";

jsx
import React from 'react';

export default function MusicSection() {
  return (
    <section id="musica" className="mt-8">
      <div className="card p-6 bg-white border border-green-100 rounded-2xl">
        <h3 className="font-serif text-2xl">Música</h3>
        <p className="text-muted mt-1">¡Ayúdanos a crear la playlist de la boda!</p>
        <div className="mt-4 flex flex-col md:flex-row gap-4 items-start">
          <a
            className="px-4 py-2 border rounded-md bg-white"
            href="#"
            onClick={(e) => { e.preventDefault(); window.open('https://open.spotify.com/playlist/', '_blank'); }}
          >
            Abrir playlist en Spotify
          </a>
          <form
            className="flex gap-2"
            onSubmit={(e) => { e.preventDefault(); alert('Gracias — la canción ha sido enviada (simulado)'); }}
          >
            <input
              aria-label="cancion"
              className="px-3 py-2 border rounded-md"
              placeholder="Añade una canción para la playlist"
            />
            <button className="px-4 py-2 rounded-md bg-green-100 border">Agregar</button>
          </form>
        </div>
      </div>
    </section>
  );
}