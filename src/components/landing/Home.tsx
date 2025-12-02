import React from 'react';
import { Header } from './Header';
import { Hero } from './Hero';
import { Features } from './Features';
import { Projects } from './Projects';
import { About } from './About';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { SEO } from './SEO';

export function Home() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      <SEO />
      <Header />
      
      <main>
        <Hero />
        <Features />
        <Projects />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
