import React from 'react';
import { 
  UserCheck, 
  GraduationCap, 
  Code, 
  CheckCircle2, 
  Briefcase,
  Download
} from 'lucide-react';
import { aboutData, personalInfo } from '../data/portfolioData';

const About = ({ onDownloadResume }) => {
  return (
    <section id="about" className="py-20 relative bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient">Muskan</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Natural Bio & Story (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Code className="w-5 h-5 text-cyan-400" />
                <span>Passionate Full Stack Developer</span>
              </h3>
              
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {aboutData.paragraph1}
              </p>
              
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {aboutData.paragraph2}
              </p>

              {/* Core capabilities list */}
              <div className="pt-4 border-t border-slate-800/80">
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-mono mb-4">
                  Core Development Competencies:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {aboutData.coreCapabilities.map((capability, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-200">{capability}</span>
                    </div>
                  ))}
                </div>

                {/* About Section Resume CTA */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs text-slate-400 font-mono">
                    Official Resume Document
                  </span>
                  <a
                    href={personalInfo.resumePath}
                    download="muskanlohar-mern-resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onDownloadResume}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-indigo-300 rounded-xl hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-200 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Resume</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Currently Looking For & Education Highlights (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Currently Looking For Box */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-cyan-500/30 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm">
                  <Briefcase className="w-4 h-4" />
                  <span>CURRENTLY LOOKING FOR</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Fresher Roles
                </span>
              </div>

              <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                Actively seeking full-time employment and software development opportunities where I can apply my MERN stack skills to real-world products.
              </p>

              <div className="flex flex-wrap gap-2.5">
                {personalInfo.targetRoles.map((role, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 text-xs font-medium text-slate-200 shadow-sm transition-all"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    <span>{role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Overview Summary Card */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-2.5 text-white font-bold text-base">
                <GraduationCap className="w-5 h-5 text-indigo-400" />
                <span>Academic Overview</span>
              </div>
              
              <div className="space-y-3 font-mono text-xs">
                {/* MCA */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between gap-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-white font-sans font-semibold">Master of Computer Applications (MCA)</div>
                    <span className="px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-mono text-[10px] shrink-0">
                      Currently Pursuing • 2025–2027
                    </span>
                  </div>
                  <div className="text-slate-400 font-sans text-xs">
                    Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Indore
                  </div>
                </div>

                {/* BCA */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between gap-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-white font-sans font-semibold">Bachelor of Computer Applications (BCA)</div>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-mono text-[10px] shrink-0">
                      Completed • 2022–2025
                    </span>
                  </div>
                  <div className="text-slate-400 font-sans text-xs">
                    Mandsaur University, Mandsaur
                  </div>
                </div>

                {/* Professional Training */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-indigo-500/30 flex flex-col justify-between gap-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-white font-sans font-semibold">MERN Stack Development Training</div>
                    <span className="px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 font-mono text-[10px] shrink-0">
                      eSkill, Indore • 6 Months
                    </span>
                  </div>
                  <div className="text-slate-400 font-sans text-xs">
                    Hands-on training in React.js, Node.js, Express.js, MongoDB, REST APIs, authentication, and CRUD operations.
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
