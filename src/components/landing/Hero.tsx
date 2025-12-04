import React from 'react';
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { motion } from "motion/react";
import { CONTENT } from './ContentConfig';

export function Hero() {
  return (
    <section id="hero" className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden" aria-label="Introdução">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={CONTENT.hero.backgroundImage}
          alt={CONTENT.hero.imageAlt}
          className="w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#F2F2F2] font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight drop-shadow-lg"
        >
          {CONTENT.hero.title} <br />
          <span className="italic font-light text-[var(--primary)] drop-shadow-md">{CONTENT.hero.titleHighlight}</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light tracking-wide drop-shadow-md"
        >
          {CONTENT.hero.subtitle}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href={CONTENT.hero.ctaPrimaryLink}>
            <Button 
              className="bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white rounded-none px-8 py-6 text-sm uppercase tracking-widest min-w-[200px] shadow-lg"
            >
              {CONTENT.hero.ctaPrimaryLabel}
            </Button>
          </a>
          <a href={CONTENT.hero.ctaSecondaryLink}>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-black rounded-none px-8 py-6 text-sm uppercase tracking-widest min-w-[200px] bg-white/10 backdrop-blur-sm"
            >
              {CONTENT.hero.ctaSecondaryLabel}
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
