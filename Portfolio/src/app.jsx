import React from 'react';
import { Github, Mail, Linkedin, ExternalLink, Code2, Terminal, Database, Cpu } from 'lucide-react';

const Portfolio = () => {
  
  // Datos de los proyectos 
  const projects = [
    {
      title: "Smart Greenhouse",
      category: "Full Stack & IoT",
      description: "Sistema distribuido de monitoreo en tiempo real. Arquitectura de microservicios basada en eventos para gestionar condiciones ambientales.",
      tech: ["Java Spring Boot", "React", "RabbitMQ", "Docker"],
      link: "https://github.com/AngelHA357/Invernaderos-Amigochas.git" 
    },
    {
      title: "Transwatch",
      category: "IoT & Edge Computing",
      description: "Sistema de 5 capas para monitoreo de tráfico y estacionamientos. Integra Edge Computing con sincronización en la nube.",
      tech: ["Python", "Azure IoT", "Node.js", "Arduino"],
      link: "https://github.com/Victoro2304/Transwatch.git"
    },
    {
      title: "AppAvaluos",
      category: "Mobile Development",
      description: "Aplicación nativa Android para la gestión de avalúos inmobiliarios y citas, optimizando el flujo de trabajo entre peritos y clientes.",
      tech: ["Kotlin", "Firebase", "Android SDK", "XML"],
      link: "https://github.com/lumm20/AppAvaluos.git"
    },
    {
      title: "BattleShip Game",
      category: "Desktop Game",
      description: "Juego multijugador en tiempo real utilizando Sockets TCP. Arquitectura Cliente-Servidor personalizada con patrones de diseño avanzados.",
      tech: ["Java SE", "Sockets", "Swing", "Multithreading"],
      link: "https://github.com/AngelHA357/BattleShip.git"
    }
  ];

  const skills = [
    { name: "Frontend", icon: <Code2 size={20} />, tools: "React, Tailwind CSS, Vite, JavaScript (ES6+)" },
    { name: "Backend", icon: <Terminal size={20} />, tools: "Node.js, Express, Java (Spring Boot), Python" },
    { name: "Data & DevOps", icon: <Database size={20} />, tools: "MySQL, MongoDB, Docker, Git" },
    { name: "IoT & Protocols", icon: <Cpu size={20} />, tools: "MQTT, RabbitMQ, WebSockets, Arduino" },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <header className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <div className="space-y-6">
          <p className="text-indigo-400 font-medium tracking-widest text-sm uppercase">
            Hola, soy José Ángel Huerta Amparán
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-white">
            Desarrollador web.<br />
            <span className="text-slate-400">De sistemas distribuidos a apps móviles.</span>
          </h1>
          <p className="max-w-2xl text-xl text-slate-200 leading-relaxed">
            Desarrollador enfocado en crear sitios web dinámicos y responsivos.    
            Con bases sólidas en sistemas distribuidos y diseño de software.
          </p>
          
          <div className="space-y-4 pt-6">
            <div className="flex flex-col gap-2 text-slate-200">
              <p className="flex items-center gap-2">
                <span>Correo: <a href="mailto:jhuertaamparan@gmail.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">jhuertaamparan@gmail.com</a></span>
              </p>
              <p className="flex items-center gap-2">
                <span>Teléfono: 6442232775</span>
              </p>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/AngelHA357" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-800 border border-slate-700 rounded-lg font-medium hover:border-indigo-500 hover:bg-slate-700 transition-colors duration-300">
                <Github size={18} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/jos%C3%A9-%C3%A1ngel-huerta-ampar%C3%A1n/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-800 border border-slate-700 rounded-lg font-medium hover:border-indigo-500 hover:bg-slate-700 transition-colors duration-300">
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* --- SKILLS SECTION --- */}
      <section className="bg-slate-800 border-y border-slate-700">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-10">Stack Tecnológico</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-700 transition-colors duration-200">
                <div className="p-3 bg-indigo-950 text-indigo-400 rounded-lg">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-100">{skill.name}</h3>
                  <p className="text-slate-400 mt-1">{skill.tools}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white">Proyectos Destacados</h2>
          <span className="hidden md:inline text-slate-500 text-sm">Selección de trabajos recientes</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <a 
              key={index} 
              href={project.link}
              className="group block p-8 bg-slate-800 border border-slate-700 rounded-2xl hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>

              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold text-indigo-400 bg-indigo-950 px-3 py-1 rounded-full uppercase tracking-wide">
                  {project.category}
                </span>
                <ExternalLink size={20} className="text-slate-600 group-hover:text-indigo-400 transition-colors" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-sm font-medium text-slate-300 bg-slate-700 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-slate-800 bg-slate-950 mt-12">
        <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-500 text-sm">
            © 2025 José Ángel Huerta Amparán. Construido con React & Tailwind.
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/AngelHA357" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-400 transition-colors"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/jos%C3%A9-%C3%A1ngel-huerta-ampar%C3%A1n/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-400 transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Portfolio;