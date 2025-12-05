import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { CONTENT, THEME } from './ContentConfig';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

// URL base da aplicação (usa variável de ambiente ou fallback)
const APP_URL = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_APP_URL) || 
  (typeof window !== 'undefined' ? window.location.origin : 'https://urbanismo.figma.site');

export const SEO: React.FC<SEOProps> = ({
  title = `${CONTENT.companyName} | ${CONTENT.hero.title} ${CONTENT.hero.titleHighlight}`,
  description = CONTENT.hero.subtitle,
  canonicalUrl = APP_URL,
  ogImage = CONTENT.hero.backgroundImage,
}) => {
  const siteName = CONTENT.companyName;
  
  // Schema.org Structured Data (Organization / RealEstateAgent)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": siteName,
    "image": ogImage,
    "description": description,
    "url": canonicalUrl,
    "telephone": CONTENT.contact.info.phone.value,
    "email": CONTENT.contact.info.email.value,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": CONTENT.contact.info.address.value[0],
      "addressLocality": "São Paulo",
      "addressRegion": "SP",
      "postalCode": "01310-100",
      "addressCountry": "BR"
    },
    "priceRange": "$$$",
    "areaServed": {
      "@type": "City",
      "name": "São Paulo"
    },
    "sameAs": CONTENT.footer.socials.map(social => social.href)
  };

  return (
    <HelmetProvider>
      <Helmet>
        {/* Basic Meta Tags */}
        <html lang="pt-BR" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="theme-color" content={THEME.colors.primary} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content="pt_BR" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
    </HelmetProvider>
  );
};