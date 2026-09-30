import React from 'react';
import { ExternalLink, Eye, CheckCircle2, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

const ProjectCard = ({ project, onViewDetails, onDemoClick }) => {
  // Theme gradients for screenshot mockups
  const themeGradients = {
    emerald: 'from-emerald-500/20 via-teal-500/10 to-slate-950 border-emerald-500/30',
    indigo: 'from-indigo-500/20 via-purple-500/10 to-slate-950 border-indigo-500/30',
    cyan: 'from-cyan-500/20 via-blue-500/10 to-slate-950 border-cyan-500/30',
    purple: 'from-purple-500/20 via-pink-500/10 to-slate-950 border-purple-500/30'
  };

  const currentTheme = themeGradients[project.imageTheme] || themeGradients.cyan;
  const githubTargetUrl = project.githubUrl || personalInfo.githubUrl;
  const displayTechStack = project.cardTechStack || project.techStack;

  return (
    <div className={`glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 ${
      project.isPrimary
        ? 'border-2 border-cyan-500/50 shadow-xl shadow-cyan-500/10 relative'
        : 'border border-slate-800'
    }`}>
      <div>
        {/* Visual Screenshot / Mockup Banner */}
        <div className={`relative h-48 sm:h-56 bg-gradient-to-br ${currentTheme} p-4 border-b border-slate-800 flex flex-col justify-between overflow-hidden`}>
          
          {/* Top Browser Bar Graphic */}
          <div className="flex items-center justify-between z-10 gap-2">
            <div className="flex items-center gap-1.5 bg-slate-950/80 px-3 py-1 rounded-full border border-slate-800 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-rose-500"></span>
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="ml-2 text-[10px] font-mono text-slate-400">
                {project.id}.app
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              {project.isPrimary && (
                <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold shadow-sm animate-pulse">
                  ★ PRIMARY PROJECT
                </span>
              )}
              <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-slate-950/90 text-slate-300 border border-slate-800">
                {project.category}
              </span>
            </div>
          </div>

          {/* Center Visual Content Graphic */}
          <div className="my-auto z-10 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-slate-950/90 border border-slate-700 flex items-center justify-center mb-2 shadow-xl group-hover:scale-110 transition-transform duration-300">
              <Layers className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold text-white tracking-wide">
              {project.name}
            </h3>
            <p className="text-xs text-slate-300 font-mono line-clamp-1 max-w-xs mt-0.5">
              {project.tagline}
            </p>
          </div>

          {/* Bottom Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none"></div>
        </div>

        {/* Card Content Area */}
        <div className="p-6">
          
          {/* Description */}
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Key Features Summary (Top 3) */}
          <div className="mb-5 space-y-2">
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
              Key Highlights:
            </h4>
            <ul className="space-y-1.5">
              {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Pills */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-1.5">
              {displayTechStack.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Card Footer Action Buttons */}
      <div className="p-6 pt-0 border-t border-slate-900 mt-auto">
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
          
          {/* View Case Study Button */}
          <button
            onClick={() => onViewDetails(project)}
            aria-label={`View case study for ${project.name}`}
            className="col-span-1 inline-flex items-center justify-center gap-1 sm:gap-1.5 py-2.5 px-2 sm:px-3 text-[11px] sm:text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="truncate">View Case Study</span>
          </button>

          {/* Live Demo Button */}
          {project.liveDemoUrl ? (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live Demo for ${project.name}`}
              className="col-span-1 inline-flex items-center justify-center gap-1 sm:gap-1.5 py-2.5 px-2 sm:px-3 text-[11px] sm:text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 rounded-xl shadow-sm transition-all cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              <span>{project.liveDemoText || 'Live Demo'}</span>
            </a>
          ) : (
            <button
              disabled
              aria-label={`Live Demo for ${project.name} (Coming Soon)`}
              title="Live Demo link coming soon"
              className="col-span-1 inline-flex items-center justify-center gap-1 sm:gap-1.5 py-2.5 px-2 sm:px-3 text-[10px] sm:text-[11px] font-semibold text-slate-500 bg-slate-900 border border-slate-800 rounded-xl opacity-60 cursor-not-allowed"
            >
              <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">{project.liveDemoText || 'Live Demo — Coming Soon'}</span>
            </button>
          )}

          {/* GitHub Button */}
          <a
            href={githubTargetUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub Repository for ${project.name}`}
            className="col-span-1 inline-flex items-center justify-center gap-1 sm:gap-1.5 py-2.5 px-2 sm:px-3 text-[11px] sm:text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl transition-all cursor-pointer"
          >
            <GithubIcon className="w-3.5 h-3.5 shrink-0" />
            <span>GitHub</span>
          </a>

        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
