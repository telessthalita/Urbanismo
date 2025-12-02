import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { SEO } from './SEO';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { CONTENT } from './ContentConfig';

export function ThankYou() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white min-h-screen flex flex-col">
      <SEO title={`Obrigado | ${CONTENT.companyName}`} />
      {/* Force dark text style for header on this page if needed, or rely on scroll behavior. 
          Since the background is light, we might want to ensure the header is visible. 
          However, the requested design is 'header de vidro', which usually implies transparency over a background.
          Let's use a hero-like background for the top section to make the glass header work beautifully.
      */}
      <Header />
      
      <main className="flex-grow flex items-center justify-center bg-[#F5F5F5] relative overflow-hidden">
        {/* Background Pattern/Gradient for Glass Effect context */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5F5F5] to-[#E0E0E0] z-0"></div>
        <div className="absolute top-0 left-0 right-0 h-96 bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop')] bg-cover bg-center opacity-10 z-0"></div>

        <div className="max-w-2xl w-full bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-12 text-center relative z-10 border border-white/40 animate-fade-in-up">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center text-green-600 animate-[bounce_1s_infinite]">
              <CheckCircle className="w-12 h-12" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A1A] mb-6">
            Obrigado!
          </h1>
          
          <div className="w-24 h-1 bg-[#B38B59] mx-auto mb-8 rounded-full"></div>
          
          <p className="text-xl text-gray-700 mb-4 font-light">
            Recebemos suas informações com sucesso.
          </p>
          
          <p className="text-gray-600 mb-10 leading-relaxed max-w-lg mx-auto">
            Nossa equipe de especialistas analisará seu perfil e entrará em contato em breve para apresentar as melhores oportunidades da {CONTENT.companyName}.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#B38B59] hover:bg-[#9A764A] text-white font-bold uppercase tracking-widest rounded shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto transform hover:-translate-y-1"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para o Início
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
