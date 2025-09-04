import { jsx } from "react/jsx-runtime";

jsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import MusicSection from './components/MusicSection';
import RSVPSection from './components/RSVPSection';
import Footer from './components/Footer';

export default function App() {
  const eventDate = new Date('2027-04-22T13:00:00');
  const [count, setCount] = useState({ d: 0, h: '00', m: '00', s: '00' });

  useEffect(() => {
    const pad = (n) => String(n).padStart(2, '0');
    const tick = () => {
      const diff = Math.max(0, eventDate - new Date());
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = pad(Math.floor((diff / (1000 * 60 * 60)) % 24));
      const m = pad(Math.floor((diff / (1000 * 60)) % 60));
      const s = pad(Math.floor((diff / 1000) % 60));
      setCount({ d, h, m, s });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--champagne)] to-[var(--green-50)]">
      <Header />
      <main className="max-w-5xl mx-auto p-6">
        <Hero count={count} />
        <InfoSection />
        <MusicSection />
        <RSVPSection />
        <Footer />
      </main>
    </div>
  );
}