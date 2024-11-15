import React, { useEffect, useRef } from 'react';

const TimelineItem = ({ title, description, icon, position, delay }) => {
  const itemRef = useRef(null);

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

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  const isLeft = position === 'left';

  return (
    <div 
      ref={itemRef}
      className={`flex w-full items-center justify-between gap-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'} slide-in-hidden`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Contenu */}
      <div className={`w-5/12 ${isLeft ? 'text-right' : 'text-left'}`}>
        <div className={`p-6 bg-black/20 rounded-lg border border-gray-800 shadow-lg transition-all duration-300 hover:shadow-blue-500/20 transform hover:scale-[1.02] ${isLeft ? 'hover:translate-x-2' : 'hover:-translate-x-2'}`}>
          <div className="flex items-center gap-4 mb-2 justify-start">
            {!isLeft && icon && <span className="text-3xl">{icon}</span>}
            <h3 className="text-xl font-bold text-white">{title}</h3>
            {isLeft && icon && <span className="text-3xl">{icon}</span>}
          </div>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>

      {/* Point central */}
      <div className="w-4 h-4 bg-blue-500 rounded-full z-10 shadow-lg shadow-blue-500/50"></div>

      {/* Espace vide pour l'autre côté */}
      <div className="w-5/12"></div>
    </div>
  );
};

const Timeline = () => {
  const stacks = [
    {
      title: "Front-End",
      description: "React.js, Next.js, TailwindCSS, JavaScript ES6+",
      icon: "🎨"
    },
    {
      title: "Mobile & Desktop",
      description: "Applications responsive et performantes",
      icon: "📱"
    },
    {
      title: "Outils",
      description: "VS Code, Figma, Google Analytics",
      icon: "🛠️"
    }
    ,
    {
      title: "SEO",
      description: "Optimisation pour les moteurs de recherche, Meta tags, Performance web",
      icon: "🔍"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-20 text-white">Mes compétences</h2>
        
        {/* Ligne centrale verticale */}
        <div className="absolute left-1/2 top-32 bottom-20 w-px bg-white/20 -translate-x-1/2"></div>
        
        {/* Items */}
        <div className="relative space-y-16">
          {stacks.map((stack, index) => (
            <TimelineItem 
              key={index}
              {...stack}
              position={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
