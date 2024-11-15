import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Gradient de fond */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent"></div>
      
      {/* Contenu */}
      <div className="max-w-4xl mx-auto text-center relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Prêt à donner vie à votre projet ?
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Prenez rendez-vous dès maintenant pour discuter de votre projet et explorer ensemble les meilleures solutions pour le concrétiser.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="https://cal.com/yannis-febvre-studio" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block relative group px-8 py-4 rounded-lg overflow-hidden bg-black transform transition-all duration-300 hover:scale-105 hover:-translate-y-1"
          >
            <span className="relative z-10 text-white text-lg font-bold flex items-center gap-2">
              Réserver un rendez-vous
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
            <div className="absolute -bottom-2 left-0 right-0 h-8 bg-blue-500/20 blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
          </a>

          <span className="text-gray-400">ou</span>

          <a 
            href="mailto:yannisfebvre@gmail.com"
            className="text-lg text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"
          >
            Envoyez-moi un email
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Effet de particules ou de lumière (optionnel) */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
    </section>
  );
};

export default CallToAction;
