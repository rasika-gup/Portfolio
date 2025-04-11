import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
}

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, delay = 0 }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div 
      ref={ref}
      className={`backdrop-blur-lg bg-white/5 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/10 hover:border-purple-500/30 transition-all duration-500 hover:scale-105 ${
        inView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ 
        transitionDelay: `${delay}s`,
        transitionProperty: 'all',
        transitionDuration: '0.8s',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-purple-400">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-3 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-gray-300 hover:text-pink-400 transition-colors"
          >
            <Github size={16} />
            <span>Code</span>
          </a>
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-gray-300 hover:text-teal-400 transition-colors"
          >
            <ExternalLink size={16} />
            <span>Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;