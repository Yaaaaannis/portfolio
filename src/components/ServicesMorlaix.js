import React, { useEffect, useRef } from 'react';

// Ajout du composant ServiceCard
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
      className="p-6 bg-black/20 rounded-lg border border-gray-800 slide-in-hidden transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const ServicesMorlaix = () => {
  const services = [
    {
      title: "Site Vitrine Local",
      description: "Un site web optimisé pour votre entreprise à Morlaix. Attirez plus de clients locaux grâce à un référencement optimisé pour le Finistère."
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
    <section id="services" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Mes Services à Morlaix</h2>
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
            Découvrez également mon{' '}
            <a 
              href="/" 
              className="text-blue-400 hover:text-blue-300 transition-colors"
              rel="nofollow"
            >
              portfolio complet de développeur web
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesMorlaix; 