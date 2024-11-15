import React, { useEffect, useRef } from 'react';

const ServiceCard = ({ title, description, delay }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in-visible');
        }
      },
      {
        threshold: 0.1
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`relative group bg-black/20 p-6 rounded-lg border border-gray-800 shadow-lg transition-all duration-300 hover:shadow-blue-500/20 slide-in-hidden`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Bordure animée */}
      <div className="absolute inset-0 rounded-lg">
        <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-transparent transition-all duration-300 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100"></div>
      </div>
      
      {/* Contenu */}
      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Site vitrine sur mesure",
      description: "Un site web personnalisé pour présenter votre entreprise, vos produits ou services. Optimisé pour tous les appareils et les moteurs de recherche, il assure une visibilité maximale et engage vos clients en ligne."
    },
    {
      title: "Applications web sur mesure",
      description: "Développez une application web puissante et intuitive, parfaitement adaptée aux besoins de votre entreprise. Conçue pour offrir une expérience utilisateur fluide et performante sur tous les navigateurs."
    },
    {
      title: "Projets personnalisés",
      description: "Besoin d'un projet unique ? Que ce soit un site interactif, un outil spécifique ou une idée innovante, je réalise des solutions sur mesure, entièrement adaptées à vos exigences."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Mes Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              {...service} 
              delay={index * 200}
            />
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-gray-300">
            Vous êtes dans le Finistère ? Découvrez mes{' '}
            <a 
              href="/creation-site-morlaix" 
              className="text-blue-400 hover:text-blue-300 transition-colors"
              rel="nofollow"
            >
              services de création de sites web à Morlaix
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
