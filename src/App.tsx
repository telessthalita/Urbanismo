import React, { useEffect, useState } from 'react';
import { Home } from './components/landing/Home';
import { ThankYou } from './components/landing/ThankYou';
import { THEME } from './components/landing/ContentConfig';
import { validateEnvDevelopment } from './utils/validateEnv';

export default function App() {
  // Validar variáveis de ambiente (apenas em desenvolvimento)
  useEffect(() => {
    validateEnvDevelopment();
  }, []);

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
        @import url('${THEME.fonts.googleFontsUrl}');

        :root {
          --font-sans: ${THEME.fonts.sans};
          --font-serif: ${THEME.fonts.serif};
          
          --primary: ${THEME.colors.primary};
          --primary-dark: ${THEME.colors.primaryDark};
          --secondary: ${THEME.colors.secondary};
          --bg-light: ${THEME.colors.background};
          --surface: ${THEME.colors.surface};
          --text-main: ${THEME.colors.text};
          --text-light: ${THEME.colors.textLight};
        }

        body {
          font-family: var(--font-sans);
          color: var(--text-main);
        }

        .font-serif {
          font-family: var(--font-serif);
        }
        
        .text-primary { color: var(--primary); }
        .bg-primary { background-color: var(--primary); }
        .border-primary { border-color: var(--primary); }
        
        .hover\\:text-primary:hover { color: var(--primary); }
        .hover\\:bg-primary:hover { background-color: var(--primary); }
        .hover\\:bg-primary-dark:hover { background-color: var(--primary-dark); }

        html {
          scroll-behavior: smooth;
        }
        
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
        
        ::selection {
          background: var(--primary);
          color: white;
        }
      `}</style>
      {content}
    </>
  );
}