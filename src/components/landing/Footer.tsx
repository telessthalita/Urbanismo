import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { CONTENT } from './ContentConfig';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { footer, companyName, companyNameHighlight } = CONTENT;

  return (
    <footer className="bg-[var(--secondary)] text-white pt-16 pb-8 border-t border-gray-800">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="text-2xl font-serif font-bold tracking-tight text-white mb-6 block">
              {companyName}<span className="text-[var(--primary)]">{companyNameHighlight}</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {footer.description}
            </p>
            <div className="flex space-x-4">
              {footer.socials.map((social, index) => (
                 <a key={index} href={social.href} className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[var(--primary)] hover:text-white transition-all">
                   {social.icon}
                 </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-6 text-white border-l-2 border-[var(--primary)] pl-3">{footer.menuTitle}</h4>
            <ul className="space-y-3">
              {footer.menuItems.map((item, index) => (
                <li key={index}><a href={item.href} className="text-gray-400 hover:text-[var(--primary)] text-sm transition-colors">{item.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-6 text-white border-l-2 border-[var(--primary)] pl-3">{footer.contactTitle}</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--primary)] shrink-0 mt-0.5" />
                <span>{CONTENT.contact.info.address.value[0]}<br />{CONTENT.contact.info.address.value[1]}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[var(--primary)] shrink-0" />
                <span>{CONTENT.contact.info.phone.value}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[var(--primary)] shrink-0" />
                <span>{CONTENT.contact.info.email.value}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            &copy; {currentYear} {footer.copyright}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
             <div className="flex items-center gap-2">
                <span className="text-gray-600 text-xs">Desenvolvido por:</span>
                <a 
                  href={footer.developer.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`Visitar site da ${footer.developer.name}`}
                >
                  <ImageWithFallback 
                    src={footer.developer.logo} 
                    alt={`Logo da ${footer.developer.name}`}
                    className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity" 
                  />
                </a>
             </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
