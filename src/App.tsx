import React, { useEffect, useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  ExternalLink, 
  Code, 
  ChevronDown,
  Send,
  Sun,
  Moon
} from 'lucide-react';
import TypewriterComponent from './components/Typewriter';
import SkillBar from './components/SkillBar';
import ProjectCard from './components/ProjectCard';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const scrollToSection = (sectionId: string) => {
    setIsScrolling(true);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
    setTimeout(() => setIsScrolling(false), 1000);
  };

  const programmingSkills = [
    { name: 'Python', percentage: 90 },
    { name: 'Java', percentage: 85 },
    { name: 'C', percentage: 80 },
    { name: 'C++', percentage: 80 },
  ];

  const webDevSkills = [
    { name: 'HTML', percentage: 95 },
    { name: 'CSS', percentage: 90 },
    { name: 'JavaScript', percentage: 85 },
    { name: 'TypeScript', percentage: 80 },
    { name: 'React', percentage: 85 },
    { name: 'Node.js', percentage: 75 },
  ];

  const designSkills = [
    { name: 'Canva', percentage: 90 },
    { name: 'Figma', percentage: 60 },
  ];

  const projects = [
    {
      title: 'EcoNexus',
      description: 'AI‑powered, open‑source platform for real‑time energy monitoring, predictive analytics, and community‑driven sustainability built with React, TypeScript, Vite & TensorFlow.js.',
      technologies: ['React', 'TypeScript', 'Vite', 'TensorFlow.js'],
      github: 'https://github.com/rasika-gup/EcoNexus',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000',
      liveLink: 'https://econexus.netlify.app/'
    },
    {
      title: 'Veggie-Lite-Basket',
      description: 'An interactive grocery website with modern UI and seamless shopping experience.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      github: 'https://github.com/rasika-gup/Veggie-Lite-Basket',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1000',
    },
    {
      title: 'Basic Firewall Implementation',
      description: 'Network security project implementing firewall rules using Cisco Packet Tracer.',
      technologies: ['Cisco Packet Tracer', 'Networking'],
      github: 'https://github.com/rasika-gup/Computer-Network-Project',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000'
    },
  ];

  return (
    <div className={`relative min-h-screen transition-colors duration-500 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white'
        : 'bg-gradient-to-br from-gray-50 via-purple-50 to-indigo-50 text-gray-900'
    }`}>
      <ParticleBackground isDarkMode={isDarkMode} />
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md ${
        isDarkMode ? 'bg-black/30 border-purple-500/20' : 'bg-white/30 border-purple-200/20'
      } border-b`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${
              isDarkMode ? 'from-pink-500 via-purple-500 to-teal-500' : 'from-pink-600 via-purple-600 to-teal-600'
            }`}>
              Rasika Gupta
            </div>
            <div className="flex items-center space-x-8">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-full ${
                  isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'
                } transition-colors duration-300`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <div className="hidden md:flex space-x-8">
                {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-all duration-300 ${
                      activeSection === section
                        ? isDarkMode ? 'text-pink-400' : 'text-pink-600'
                        : isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex flex-col items-center md:items-start">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center md:text-left">
              <span className="block">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-teal-500">
                Rasika Gupta
              </span>
            </h1>
            <div className="h-12 mb-6">
              <TypewriterComponent 
                texts={[
                  'AI/ML Enthusiast',
                  'Full Stack Developer',
                  'Designer'
                ]} 
              />
            </div>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://github.com/rasika-gup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/rasika-gupta-9b8532293/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://www.instagram.com/rasika_gup?igsh=eW41eGlmcWZ4MnM2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="mailto:rasika.gupta001@gmail.com" 
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
            <button 
              onClick={() => scrollToSection('about')}
              className="mt-12 animate-bounce p-2 rounded-full bg-purple-600/30 hover:bg-purple-600/50 transition-all duration-300"
            >
              <ChevronDown size={24} />
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.5)] animate-pulse-slow">
                <img 
                  src="https://i.ibb.co/6c1gBY1B/Whats-App-Image-2025-04-06-at-06-47-53-0f2fce19.jpg" 
                  alt="Rasika Gupta" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500/20 via-purple-500/20 to-teal-500/20 animate-spin-slow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-teal-500">
              About Me
            </span>
          </h2>
          <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/10 hover:border-purple-500/30 transition-all duration-500">
            <p className="text-lg leading-relaxed mb-6">
              I'm a passionate AI/ML student from Agra, India, currently pursuing my degree at Vellore Institute of Technology (VIT). I specialize in Python, Java, C, C++, HTML, CSS, React, JavaScript, TypeScript, Node.js, Canva, and Figma. As a full-stack developer and designer, I love building innovative solutions and crafting beautiful designs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="backdrop-blur-md bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 border border-white/10 hover:border-pink-500/30">
                <h3 className="text-xl font-semibold mb-3 text-pink-400">Education</h3>
                <p>B.Tech in Artificial Intelligence and Machine Learning</p>
                <p className="text-gray-300">Vellore Institute of Technology (VIT)</p>
                <p className="text-gray-400">2023 - 2027</p>
              </div>
              <div className="backdrop-blur-md bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 border border-white/10 hover:border-purple-500/30">
                <h3 className="text-xl font-semibold mb-3 text-purple-400">Clubs & Activities</h3>
                <p>Active Member of Designers Club, VITC</p>
                <p>Active Member of Sangam Club, VITC</p>
                <p className="text-gray-300">Badminton Gold Medalist</p>
              </div>
              <div className="backdrop-blur-md bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 border border-white/10 hover:border-teal-500/30">
                <h3 className="text-xl font-semibold mb-3 text-teal-400">Interests</h3>
                <p>Artificial Intelligence</p>
                <p>Machine Learning</p>
                <p>Web Development</p>
                <p>UI/UX Design</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-b from-transparent to-black/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-teal-500">
              My Skills
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/10 hover:border-pink-500/30 transition-all duration-500">
              <h3 className="text-2xl font-semibold mb-6 text-pink-400">Programming Languages</h3>
              <div className="space-y-6">
                {programmingSkills.map((skill, index) => (
                  <SkillBar 
                    key={index} 
                    name={skill.name} 
                    percentage={skill.percentage} 
                    delay={index * 0.2}
                    color="from-pink-500 to-purple-500"
                  />
                ))}
              </div>
            </div>
            <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/10 hover:border-purple-500/30 transition-all duration-500">
              <h3 className="text-2xl font-semibold mb-6 text-purple-400">Web Development</h3>
              <div className="space-y-6">
                {webDevSkills.map((skill, index) => (
                  <SkillBar 
                    key={index} 
                    name={skill.name} 
                    percentage={skill.percentage} 
                    delay={index * 0.2}
                    color="from-purple-500 to-indigo-500"
                  />
                ))}
              </div>
            </div>
            <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/10 hover:border-teal-500/30 transition-all duration-500">
              <h3 className="text-2xl font-semibold mb-6 text-teal-400">Design Tools</h3>
              <div className="space-y-6">
                {designSkills.map((skill, index) => (
                  <SkillBar 
                    key={index} 
                    name={skill.name} 
                    percentage={skill.percentage} 
                    delay={index * 0.2}
                    color="from-teal-500 to-cyan-500"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-teal-500">
              My Projects
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="backdrop-blur-lg bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all duration-500 hover:scale-105 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span 
                            key={i}
                            className="px-2 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex space-x-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      <Github size={16} className="mr-1" />
                      GitHub
                    </a>
                    {project.liveLink && (
                      <a 
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-gray-300 hover:text-white transition-colors"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-teal-500">
              Get In Touch
            </span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/10 hover:border-purple-500/30 transition-all duration-500">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all duration-300"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-teal-500 text-white font-medium hover:opacity-90 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="https://github.com/rasika-gup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/rasika-gupta-9b8532293/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://www.instagram.com/rasika_gup?igsh=eW41eGlmcWZ4MnM2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Instagram size={20} />
                  <span>Instagram</span>
                </a>
                <a
                  href="mailto:rasika.gupta001@gmail.com"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Mail size={20} />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-purple-500/20 backdrop-blur-md bg-black/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-300">© 2025 Rasika Gupta. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/rasika-gup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/rasika-gupta-9b8532293/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://www.instagram.com/rasika_gup?igsh=eW41eGlmcWZ4MnM2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;