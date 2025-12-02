import React from 'react';
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Check } from 'lucide-react';
import { motion } from "motion/react";
import { CONTENT } from './ContentConfig';

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white overflow-hidden">
      {/* SECTION: ABOUT START */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden rounded-sm shadow-2xl">
              {/* ABOUT_IMAGE */}
              <ImageWithFallback
                src={CONTENT.about.image}
                alt={CONTENT.about.imageAlt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative Box */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#F5F5F5] -z-10 hidden md:block"></div>
            <div className="absolute -top-8 -left-8 w-48 h-48 border-2 border-[#B38B59]/30 -z-10 hidden md:block"></div>
          </motion.div>

          {/* Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            {/* ABOUT_TAGLINE */}
            <span className="text-[#B38B59] font-bold text-sm tracking-widest uppercase mb-4">
              {CONTENT.about.tagline}
            </span>
            {/* ABOUT_TITLE */}
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1A1A1A] mb-8 leading-tight">
              {CONTENT.about.titlePrefix}<span className="italic text-[#B38B59]">{CONTENT.about.titleHighlight}</span>{CONTENT.about.titleSuffix}
            </h2>
            {/* ABOUT_DESCRIPTION */}
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              {CONTENT.about.description1}
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {CONTENT.about.description2}
            </p>
            
            {/* ABOUT_HIGHLIGHTS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {CONTENT.about.highlights.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#B38B59]/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-[#B38B59]" />
                  </div>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* REMOVED BUTTON AS PER USER REQUEST */}
          </motion.div>
        </div>
      </div>
      {/* SECTION: ABOUT END */}
    </section>
  );
}
