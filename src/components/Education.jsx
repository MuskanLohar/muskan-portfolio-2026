import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { educationData } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="py-20 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC QUALIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education <span className="text-gradient">Timeline</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-3">
            Academic degrees in Computer Applications from recognized universities.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4"></div>
        </div>

        {/* Vertical Cards Layout */}
        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((edu) => {
            const isCurrent = edu.statusType === 'current';

            return (
              <div
                key={edu.id}
                className="glass-card glass-card-hover p-6 sm:p-8 rounded-2xl border border-slate-800 relative overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/80 mb-4">
                  
                  {/* Left Title & Institution */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center shrink-0 text-cyan-400 mt-1 sm:mt-0">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="text-lg sm:text-xl font-bold text-white">
                          {edu.degree}
                        </h3>
                      </div>
                      
                      {/* University Name */}
                      <p className="text-sm font-semibold text-cyan-400 mt-1">
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  {/* Right Status Badge */}
                  <div className="flex flex-wrap items-center sm:justify-end">
                    <span
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium border shadow-sm ${
                        isCurrent
                          ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                          : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                      }`}
                    >
                      {edu.displayBadge}
                    </span>
                  </div>

                </div>

                {/* Course Details Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {edu.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Education;
