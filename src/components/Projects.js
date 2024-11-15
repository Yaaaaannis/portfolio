import React, { useEffect, useRef } from 'react';

const ProjectCard = ({ title, image, description, link, delay }) => {
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
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      ref={cardRef}
      className="relative group overflow-hidden rounded-2xl h-[500px] slide-in-hidden transform transition-all duration-500 hover:scale-[1.02] bg-black/20 border border-gray-800/50"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
      />
      
      {/* Overlay au hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-all duration-500">
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h3 className="text-2xl font-bold text-white mb-4 transform transition-all duration-500 group-hover:translate-y-0 translate-y-4">{title}</h3>
          <p className="text-gray-300 text-lg transform transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4">{description}</p>
        </div>
      </div>
    </a>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Finistère en Scène",
      image: "/finistere.png",
      description: "Découvrez toutes les meilleures programmations du Finistère sur une seule plateforme. Une expérience immersive pour explorer les événements culturels de la région.",
      link: "https://finistereenscene.com/"
    },
    {
      title: "Audio Atlas",
      image: "/audioatlas.png",
      description: "Plongez dans vos statistiques Spotify avec une interface élégante. Visualisez et partagez vos artistes et musiques les plus écoutés.",
      link: "https://audioatlas.netlify.app/"
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Mes Projets</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              {...project} 
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
