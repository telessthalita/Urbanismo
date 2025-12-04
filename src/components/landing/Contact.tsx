import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { ContactForm } from "../ContactForm";
import { motion } from "motion/react";
import { CONTENT } from './ContentConfig';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#B38B59] font-bold text-sm tracking-widest uppercase mb-2 block">
            {CONTENT.contact.tagline}
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1A1A1A] mb-4">
            {CONTENT.contact.title}
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            {CONTENT.contact.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1 space-y-8 bg-[#F5F5F5] p-10 rounded-lg h-fit"
          >
            <h3 className="text-xl font-serif font-bold text-[#1A1A1A] mb-6">
              Informações
            </h3>
            
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-white rounded-full text-[#B38B59] shadow-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-[#1A1A1A]">{CONTENT.contact.info.address.label}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {CONTENT.contact.info.address.value[0]}<br />
                  {CONTENT.contact.info.address.value[1]}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-white rounded-full text-[#B38B59] shadow-sm">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-[#1A1A1A]">{CONTENT.contact.info.email.label}</p>
                <p className="text-gray-600 text-sm">
                  {CONTENT.contact.info.email.value}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-white rounded-full text-[#B38B59] shadow-sm">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-[#1A1A1A]">{CONTENT.contact.info.phone.label}</p>
                <p className="text-gray-600 text-sm">
                  {CONTENT.contact.info.phone.value}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2" 
            id="rd-station-form-container"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
