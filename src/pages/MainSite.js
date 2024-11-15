import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Timeline from '../components/Timeline';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const MainSite = () => {
  return (
    <>
      <Helmet>
        <title>Yannis Febvre | Développeur Web Freelance - Création de Sites Web</title>
        <meta 
          name="description" 
          content="Développeur web freelance spécialisé dans la création de sites web et d'applications sur mesure. Expertise en React, Node.js et solutions web modernes."
        />
        <meta 
          name="keywords" 
          content="développeur web freelance, création site web, développement web, react, javascript, applications web"
        />
        <link rel="canonical" href="https://yannisfebvre.com" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Yannis Febvre | Développeur Web Freelance" />
        <meta property="og:description" content="Création de sites web et d'applications sur mesure" />
        <meta property="og:url" content="https://yannisfebvre.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://yannisfebvre.com/og-image.jpg" />
        
        {/* Schema.org pour Freelance */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Yannis Febvre - Développeur Web Freelance",
              "image": "https://yannisfebvre.com/logo.png",
              "description": "Création de sites web et d'applications sur mesure",
              "url": "https://yannisfebvre.com",
              "telephone": "0606434948",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "FR"
              },
              "priceRange": "€€",
              "sameAs": [
                "https://www.linkedin.com/in/yannis-febvre/",
                "https://twitter.com/YannisFebvre"
              ],
              "knowsAbout": [
                "Développement Web",
                "React",
                "JavaScript",
                "Node.js",
                "Applications Web"
              ]
            }
          `}
        </script>
      </Helmet>

      <div className="bg-black min-h-screen">
        <Header />
        <main>
          <Hero />
          <Services />
          <Projects />
          <Timeline />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MainSite; 