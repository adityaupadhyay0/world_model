'use client';

import React from 'react';
import Hero from '@/components/Hero';
import EventBand from '@/components/EventBand';
import Marquee from '@/components/Marquee';
import Chapter1 from '@/components/Chapter1';
import Chapter2 from '@/components/Chapter2';
import Chapter3 from '@/components/Chapter3';
import Chapter4 from '@/components/Chapter4';
import Speakers from '@/components/Speakers';
import Register from '@/components/Register';
import Finale from '@/components/Finale';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import CustomCursor from '@/components/ui/CustomCursor';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <CustomCursor />
      <Navigation />

      <section id="hero">
        <Hero />
      </section>

      <EventBand />
      <Marquee />

      <section id="chapter1">
        <Chapter1 />
      </section>

      <section id="chapter2">
        <Chapter2 />
      </section>

      <section id="chapter3">
        <Chapter3 />
      </section>

      <section id="chapter4">
        <Chapter4 />
      </section>

      <Speakers />
      <Register />
      <Finale />
      <Footer />
    </main>
  );
}
