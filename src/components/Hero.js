import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-start justify-center px-4 pt-32">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-8xl font-bold mb-36 animate-fade-in">
            Yannis Febvre Studio
        </h1>
        <h2 className="text-xl mb-8 text-gray-400 max-w-2xl mx-auto">
            Sites vitrines sur mesure, Applications webs sécurisées et performantes, votre projet web selon vos besoins
        </h2>
        <a 
          href="https://cal.com/yannis-febvre-studio" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block relative group px-16 py-8 rounded-lg overflow-hidden bg-black transform transition-all duration-300 ease-out hover:-translate-y-1"
        >
          <span className="relative z-10 text-white text-xl font-bold">
            Réservez un rendez-vous pour parler de votre projet
          </span>
          <div className="absolute inset-0 transition-colors duration-300 bg-gradient-to-r from-white to-white bg-clip-text group-hover:from-blue-400 group-hover:to-blue-600"></div>
          <div className="absolute -bottom-2 left-0 right-0 h-8 bg-blue-500/20 blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
