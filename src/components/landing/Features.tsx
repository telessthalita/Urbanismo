import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { motion } from "motion/react";
import { CONTENT } from './ContentConfig';

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--text-main)] mb-4">
              {CONTENT.features.title}
            </h2>
            <div className="w-24 h-1 bg-[var(--primary)] mx-auto"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CONTENT.features.items.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white rounded-lg overflow-hidden group h-full">
                <CardHeader className="flex flex-col items-center pt-10 pb-4">
                  <div className="p-4 bg-[var(--bg-light)] rounded-full mb-4 group-hover:bg-[var(--primary)]/10 transition-colors">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-serif font-semibold text-[var(--text-main)] text-center">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center pb-10 px-8">
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
