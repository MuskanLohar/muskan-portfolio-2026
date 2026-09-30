import React from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Wrench, 
  Cloud, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';
import { skillsCategorized } from '../data/portfolioData';

const iconMap = {
  Layout: Layout,
  Server: Server,
  Database: Database,
  Wrench: Wrench,
  Cloud: Cloud,
  ShieldCheck: ShieldCheck
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-3">
            A categorized overview of the languages, frameworks, databases, and developer tools I utilize to build modern full-stack web applications.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4"></div>
        </div>

        {/* Skills Categorized Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCategorized.map((categoryItem, idx) => {
            const IconComponent = iconMap[categoryItem.icon] || Code2;

            return (
              <div
                key={idx}
                className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  {/* Category Title Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800/80">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/60 flex items-center justify-center text-cyan-400">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">
                        {categoryItem.category}
                      </h3>
                      <span className="text-[11px] text-slate-400 font-mono">
                        {categoryItem.skills.length} Technologies
                      </span>
                    </div>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2.5">
                    {categoryItem.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className={`px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all ${
                          skill.isCore
                            ? 'bg-slate-900 text-cyan-300 border border-cyan-500/30 shadow-sm shadow-cyan-500/5'
                            : 'bg-slate-900/60 text-slate-300 border border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        {skill.isCore && (
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                        )}
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer indicator */}
                <div className="mt-6 pt-3 border-t border-slate-900 flex justify-between items-center text-[10px] font-mono text-slate-400">
                  <span>Category #{idx + 1}</span>
                  <span className="text-slate-400">Hands-on experience</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
