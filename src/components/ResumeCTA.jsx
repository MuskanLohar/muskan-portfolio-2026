import React from 'react';
import { Download, FileText, ArrowUpRight, Sparkles, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const ResumeCTA = ({ onDownloadResume }) => {
  return (
    <section className="py-16 relative bg-slate-950/90 border-t border-slate-900 overflow-hidden">
      
      {/* Background glow orbs */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[250px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-950 border border-cyan-500/30 shadow-2xl relative overflow-hidden">
          
          {/* Subtle line background */}
          <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-40"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Copy (8 Cols) */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
                <FileText className="w-3.5 h-3.5" />
                <span>RECRUITER & HIRING QUICK CTA</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Interested in working together?
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                I am actively seeking <strong className="text-cyan-400 font-semibold">MERN Stack Developer</strong> and <strong className="text-cyan-400 font-semibold">Full Stack Developer</strong> opportunities. Review my complete qualifications, skills, and academic background in my resume.
              </p>

              <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1 text-slate-300">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Open to Remote & Onsite
                </span>
                <span className="flex items-center gap-1 text-slate-300">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Immediate Joiner
                </span>
              </div>
            </div>

            {/* Right Action Button (4 Cols) */}
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <a
                href={personalInfo.resumePath}
                download="muskanlohar-mern-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onDownloadResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] cursor-pointer shadow-lg"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </a>
              <span className="text-[11px] font-mono text-slate-400 mt-3.5">
                PDF File • Verified Fresher Candidate
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeCTA;
