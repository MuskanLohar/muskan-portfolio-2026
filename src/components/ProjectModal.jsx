import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  AlertCircle, 
  Lightbulb, 
  UserCheck, 
  Wrench, 
  Sparkles 
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

const ProjectModal = ({ project, onClose, onDemoClick }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  const githubTargetUrl = project.githubUrl || personalInfo.githubUrl;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      
      {/* Backdrop overlay */}
      <div 
        onClick={onClose} 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-slate-950 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden z-10 my-8 animate-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="relative p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border-b border-slate-800">
          
          <button
            onClick={onClose}
            aria-label="Close detail modal"
            className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
            <Sparkles className="w-4 h-4" />
            <span>PROJECT CASE STUDY DETAILS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {project.name}
          </h2>
          <p className="text-slate-400 text-sm font-mono mt-1">
            {project.tagline}
          </p>

          {/* Top Quick Links Bar */}
          <div className="flex flex-wrap items-center gap-3 mt-6 pt-4 border-t border-slate-800/80">
            
            {/* Live Demo Link */}
            {project.liveDemoUrl ? (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live Demo for ${project.name}`}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-indigo-300 rounded-xl hover:shadow-lg hover:shadow-cyan-500/20 transition-all cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{project.liveDemoText || 'Live Demo'}</span>
              </a>
            ) : (
              <button
                disabled
                aria-label={`Live Demo for ${project.name} (Coming Soon)`}
                title="Live Demo link coming soon"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-500 bg-slate-900 border border-slate-800 rounded-xl opacity-60 cursor-not-allowed"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{project.liveDemoText || 'Live Demo — Coming Soon'}</span>
              </button>
            )}

            {/* GitHub Repo Link */}
            <a
              href={githubTargetUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub Repository for ${project.name}`}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl transition-all cursor-pointer"
            >
              <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
              <span>{project.githubText || 'GitHub Repository'}</span>
            </a>

          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[70vh] overflow-y-auto">
          
          {/* 1. Project Overview */}
          <div className="space-y-2">
            <h3 className="text-sm font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>1. Project Overview</span>
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800/80">
              {project.overview}
            </p>
          </div>

          {/* 2. Problem & 3. Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* 2. Problem */}
            <div className="space-y-2">
              <h3 className="text-sm font-mono uppercase tracking-wider text-rose-400 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                <span>2. Problem Statement</span>
              </h3>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 text-xs sm:text-sm leading-relaxed min-h-[100px]">
                {project.problem}
              </div>
            </div>

            {/* 3. Solution */}
            <div className="space-y-2">
              <h3 className="text-sm font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                <Lightbulb className="w-4 h-4" />
                <span>3. Engineered Solution</span>
              </h3>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 text-xs sm:text-sm leading-relaxed min-h-[100px]">
                {project.solution}
              </div>
            </div>

          </div>

          {/* 4. My Role */}
          <div className="space-y-2">
            <h3 className="text-sm font-mono uppercase tracking-wider text-indigo-400 flex items-center gap-2">
              <UserCheck className="w-4 h-4" />
              <span>4. My Role & Contributions</span>
            </h3>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 text-xs sm:text-sm leading-relaxed">
              {project.myRoleTitle && (
                <div className="font-semibold text-cyan-300 text-xs font-mono uppercase tracking-wider mb-1.5">
                  Role: {project.myRoleTitle}
                </div>
              )}
              <p>{project.myRole}</p>
            </div>
          </div>

          {/* 5. Key Features */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>5. Key Features</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((feature, idx) => (
                <div 
                  key={idx} 
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-2.5 text-xs text-slate-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5"></span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Technology Stack */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-2">
              <Wrench className="w-4 h-4" />
              <span>6. Technology Stack</span>
            </h3>
            {project.techStackCategorized ? (
              <div className="space-y-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                {project.techStackCategorized.map((group, gIdx) => (
                  <div key={gIdx} className="flex flex-col sm:flex-row sm:items-center gap-2 text-xs">
                    <span className="font-mono text-slate-400 sm:w-32 shrink-0 text-[11px] uppercase tracking-wider">
                      {group.category}:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item, iIdx) => (
                        <span
                          key={iIdx}
                          className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 font-mono text-cyan-300 text-[11px]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* 7. Challenges Solved */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-purple-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>7. Key Challenges Solved</span>
            </h3>
            <div className="space-y-2">
              {project.challengesSolved.map((challenge, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm text-slate-300 flex items-start gap-3"
                >
                  <span className="text-purple-400 font-mono font-bold text-xs shrink-0">0{idx + 1}.</span>
                  <span>{challenge}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-mono">
            Muskan • MERN Developer Portfolio
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-all cursor-pointer"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProjectModal;
