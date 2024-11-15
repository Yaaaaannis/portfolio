import React from 'react';
import Header from '../components/Header';
import HeroMorlaix from '../components/HeroMorlaix';
import ServicesMorlaix from '../components/ServicesMorlaix';
import Projects from '../components/Projects';
import Timeline from '../components/Timeline';
import CallToActionMorlaix from '../components/CallToActionMorlaix';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const MorlaixSite = () => {
  return (
    <>
      <Helmet>
        <title>Création de Sites Internet à Morlaix | Développeur Web Freelance Finistère</title>
        <meta name="description" content="Création de site internet a Morlaix, je crée des sites internet professionnels pour les entreprises du Finistère. Devis gratuit et accompagnement personnalisé." />
        <meta name="keywords" content="création site web Morlaix, développeur web Morlaix, création site internet Finistère, développeur freelance Morlaix" />
        <link rel="canonical" href="https://yannisfebvre.com/creation-site-morlaix" />
        {/* Schema.org pour les entreprises locales */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Yannis Febvre - Développeur Web Freelance",
              "image": "https://yannisfebvre.com/logo.png",
              "description": "Création de sites web professionnels à Morlaix et dans le Finistère",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "15 voie d'accès au port",
                "addressLocality": "Morlaix",
                "postalCode": "29600",
                "addressRegion": "Finistère",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "48.5784",
                "longitude": "-3.8276"
              },
              "url": "https://yannisfebvre.com/creation-site-morlaix",
              "telephone": "0606434948",
              "priceRange": "€€"
            }
          `}
        </script>
      </Helmet>
      <div className="bg-black min-h-screen">
        <Header />
        <HeroMorlaix />
        <ServicesMorlaix />
        <Projects />
        <Timeline />
        <CallToActionMorlaix />
        <Footer />
      </div>
    </>
  );
};

export default MorlaixSite; 