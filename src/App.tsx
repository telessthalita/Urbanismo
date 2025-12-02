
import React, { useEffect, useState } from 'react';
import { Home } from './components/landing/Home';
import { ThankYou } from './components/landing/ThankYou';
import { SEO } from './components/landing/SEO';

export default function App() {
  // Simple client-side routing
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Define routes
  const content = (path === '/obrigado' || path === '/thank-you') ? <ThankYou /> : <Home />;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');

        :root {
          --font-sans: 'Lato', sans-serif;
          --font-serif: 'Playfair Display', serif;
        }

        body {
          font-family: var(--font-sans);
        }

        .font-serif {
          font-family: var(--font-serif);
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        ::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 5px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 40px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }
        
        /* Selection Color */
        ::selection {
          background: #B38B59;
          color: white;
        }
      `}</style>
      {content}
    </>
  );
}
