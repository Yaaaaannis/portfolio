const HeroMorlaix = () => {
  return (
    <div className="relative min-h-screen flex items-start pt-32 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 animate-fade-in">
          Création Site Internet Morlaix
        </h1>
        <h2 className="text-2xl md:text-4xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Yannis Febvre Studio <br /> Développement Web dans le Finistère
        </h2>
        <p className="text-xs md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          <strong>Création de sites internet à Morlaix</strong> - Développeur web freelance, j'accompagne les 
          entreprises 
          du Finistère dans leur <strong>présence digitale</strong>, de la conception à la mise en ligne.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto bg-black/20 p-8 rounded-xl border border-gray-800/50">
          <div className="text-gray-300 flex items-center gap-3 justify-center">
            <span className="text-blue-400 text-xl">✓</span> 
            <span>Sites web professionnels à Morlaix</span>
          </div>
          <div className="text-gray-300 flex items-center gap-3 justify-center">
            <span className="text-blue-400 text-xl">✓</span> 
            <span>Référencement local optimisé</span>
          </div>
          <div className="text-gray-300 flex items-center gap-3 justify-center">
            <span className="text-blue-400 text-xl">✓</span> 
            <span>Support technique dans le Finistère</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-8">
          <a 
            href="https://cal.com/yannis-febvre-studio" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block relative group px-8 py-4 rounded-lg overflow-hidden bg-black transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 border border-gray-800/50"
          >
            <span className="relative z-10 text-white text-lg font-bold flex items-center gap-3">
              Créer mon site à Morlaix
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
          <a 
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              const servicesSection = document.getElementById('services');
              if (servicesSection) {
                servicesSection.scrollIntoView({behavior: 'smooth'});
              }
            }}
            className="text-lg text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-3 group"
          >
            Découvrir mes services web à Morlaix
            <svg 
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
    </div>
  );
};

export default HeroMorlaix; 