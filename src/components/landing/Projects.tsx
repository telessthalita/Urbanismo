import React, { useState } from 'react';
import Slider from "react-slick";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, X, MapPin, Ruler, Calendar, CheckCircle2 } from 'lucide-react';
import { CONTENT } from './ContentConfig';

// Custom Arrow Components
function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/80 hover:bg-[#B38B59] text-[#1A1A1A] hover:text-white transition-all duration-300 rounded-l-lg shadow-lg focus:outline-none backdrop-blur-sm translate-x-1/2 hover:translate-x-0 md:translate-x-0 md:-right-4 group"
      aria-label="Próximo projeto"
    >
      <ChevronRight className="w-6 h-6" />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/80 hover:bg-[#B38B59] text-[#1A1A1A] hover:text-white transition-all duration-300 rounded-r-lg shadow-lg focus:outline-none backdrop-blur-sm -translate-x-1/2 hover:translate-x-0 md:translate-x-0 md:-left-4 group"
      aria-label="Projeto anterior"
    >
      <ChevronLeft className="w-6 h-6" />
    </button>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const projects = CONTENT.projects.items;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ],
    customPaging: (i: number) => (
      <div className="w-3 h-3 mt-8 mx-1 rounded-full bg-gray-300 hover:bg-[#B38B59]/50 transition-colors data-[slick-active=true]:bg-[#B38B59]"></div>
    ),
    appendDots: (dots: any) => (
      <div>
        <ul className="flex justify-center items-center gap-2"> {dots} </ul>
      </div>
    )
  };

  return (
    <section id="projects" className="py-20 bg-[#F5F5F5] overflow-hidden relative">
      <link
        rel="stylesheet"
        type="text/css"
        crossOrigin="anonymous"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        crossOrigin="anonymous"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
      />
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            {/* PROJECTS_TITLE */}
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1A1A1A] mb-4">
              {CONTENT.projects.title}
            </h2>
            <div className="w-24 h-1 bg-[#B38B59] mb-4"></div>
            {/* PROJECTS_SUBTITLE */}
            <p className="text-gray-600 max-w-xl text-center">{CONTENT.projects.subtitle}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="px-4 -mx-4"
        >
          <style>{`
            .slick-dots li.slick-active div {
              background-color: #B38B59;
              transform: scale(1.2);
            }
            .slick-track {
              display: flex !important;
              gap: 0;
            }
            .slick-slide {
              height: inherit !important;
              padding: 0 12px;
            }
            .slick-list {
              margin: 0 -12px;
              padding-bottom: 30px; 
            }
          `}</style>
          
          <Slider {...settings}>
            {projects.map((project) => (
              <div key={project.id} className="h-full">
                <div 
                  onClick={() => setSelectedProject(project)}
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col cursor-pointer"
                >
                  <div className="relative h-64 md:h-72 overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#B38B59] rounded-sm shadow-sm">
                      {project.status}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-serif font-semibold text-[#1A1A1A] mb-2 group-hover:text-[#B38B59] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-2">
                      {project.description}
                    </p>
                    <span 
                      className="inline-flex items-center text-[#B38B59] text-xs font-bold uppercase tracking-widest hover:text-[#9a764a] transition-colors group/link"
                    >
                      Ver Detalhes
                      <ChevronRight className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-xl overflow-hidden shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row relative"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white text-gray-600 hover:text-[#B38B59] rounded-full transition-colors backdrop-blur-sm"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Image */}
                <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                  <ImageWithFallback
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 md:hidden">
                    <h3 className="text-2xl font-serif font-bold text-white">{selectedProject.title}</h3>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="w-full md:w-1/2 p-8 overflow-y-auto bg-white">
                  <div className="hidden md:block mb-6">
                    <h3 className="text-3xl font-serif font-bold text-[#1A1A1A] mb-2">{selectedProject.title}</h3>
                    <div className="w-16 h-1 bg-[#B38B59]"></div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-8">
                    {selectedProject.longDescription}
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#B38B59] shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Localização</span>
                        <span className="text-gray-800 font-medium">{selectedProject.location}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Ruler className="w-5 h-5 text-[#B38B59] shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Área</span>
                        <span className="text-gray-800 font-medium">{selectedProject.size}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-[#B38B59] shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Status</span>
                        <span className="text-gray-800 font-medium">{selectedProject.status}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">Diferenciais</h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {selectedProject.features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-[#B38B59]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a 
                    href="#contact" 
                    onClick={() => {
                      window.dispatchEvent(new CustomEvent('projectInterest', { detail: selectedProject }));
                      setSelectedProject(null);
                    }}
                    className="block w-full text-center bg-[#1A1A1A] hover:bg-[#B38B59] text-white font-bold uppercase tracking-widest py-4 rounded transition-colors"
                  >
                    Tenho Interesse
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
