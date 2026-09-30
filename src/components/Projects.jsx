import React, { useState } from 'react';
import { Rocket } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const Projects = ({ onDemoClick }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Full Stack', 'Enterprise Web App', 'AI Integration', 'Creative Web App'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative bg-slate-950/80 border-t border-slate-900">
      
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[300px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Rocket className="w-3.5 h-3.5" />
            <span>FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Portfolio <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mt-3">
            Hands-on web applications built using the MERN stack. Click <strong className="text-cyan-400 font-normal">View Details</strong> to read complete case studies including architecture, problems solved, and technical roles.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4"></div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 text-xs font-medium rounded-xl transition-all cursor-pointer ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={(proj) => setSelectedProject(proj)}
              onDemoClick={onDemoClick}
            />
          ))}
        </div>

      </div>

      {/* Project Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onDemoClick={onDemoClick}
        />
      )}
    </section>
  );
};

export default Projects;
